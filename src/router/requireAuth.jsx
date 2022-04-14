import { useContext, useEffect } from "react"
import { AuthContext } from '../router/authProvider'
import { useNavigate } from "react-router-dom"

function RequireAuth({ children }) {
    const { token } = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (!token) {
            navigate('/Login')
            return
        }
    })
    return children
}

export default RequireAuth