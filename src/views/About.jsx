import { Outlet } from 'react-router-dom'

function About() {
    return (
        <div>
            <h3>About Page</h3>
            <Outlet />
        </div>
    )
}
    
export default About