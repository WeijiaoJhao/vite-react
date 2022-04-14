import { createContext, useState } from 'react'

export const AuthContext = createContext(null)

function AuthProvider({ children }) {
    let [token, setToken] = useState(null)
    let value = { token, setToken }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider