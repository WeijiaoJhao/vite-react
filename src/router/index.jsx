import React from 'react'
import RequireAuth from './requireAuth'

const Layout = React.lazy(() => import('../layout'))
const Home = React.lazy(() => import('../views/Home'))
const About = React.lazy(() => import('../views/About'))
const AboutIndex = React.lazy(() => import('../views/AboutIndex'))
const AboutItem = React.lazy(() => import('../views/AboutItem'))
const NotFound = React.lazy(() => import('../views/NotFound'))
const Login = React.lazy(() => import('../views/Login'))

const routes = [
    {
        path: '/',
        element: <RequireAuth><Layout /></RequireAuth>,
        children: [
            { path: '/Home', element: <Home /> },
            {
                path: '/About',
                element: <About />,
                children: [
                    { index: true, element: <AboutIndex /> },
                    { path: '/About/:id', element: <AboutItem /> }
                ]
            },
            { path: '*', element: <NotFound /> }
        ]
    },
    { path: '/Login', element: <Login /> }
]

export default routes