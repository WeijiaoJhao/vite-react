import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <h3>Layout Page</h3>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/Home">Home</Link> | 
        <Link to="/About">About</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout
