import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useRoutes } from 'react-router-dom'
import routes from './router'

function App() {
  const [count, setCount] = useState(0)

  let element = useRoutes(routes)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        {element}
      </header>
    </div>
  )
}

export default App
