import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthProvider from './router/authProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Suspense fallback="loading...">
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='*' element={<App />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.Suspense>
)
