import { useContext } from "react"
import { AuthContext } from '../router/authProvider'
import { useNavigate } from "react-router-dom"

function Login() {
    const { setToken } = useContext(AuthContext)
    const navigate = useNavigate()

    const login = (token) => {
        setToken(token)
        navigate('/Home')
    }

    return (
        <div>
            <h3>Login Page</h3>
            <button type="button" onClick={() => login('qweasd')}>login</button>
        </div>
    )
}

export default Login