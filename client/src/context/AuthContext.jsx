import { createContext, useContext, useState, useEffect } from 'react'
import { authService } from '../services/authService'
import toast from 'react-hot-toast'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('gmw_user')
    const token = localStorage.getItem('gmw_token')
    if (stored && token) setUser(JSON.parse(stored))
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    const data = await authService.login(email, password)
    localStorage.setItem('gmw_token', data.token)
    localStorage.setItem('gmw_user', JSON.stringify(data.user))
    setUser(data.user)
    toast.success(`Welcome back, ${data.user.name}!`)
    return data
  }

  const register = async (name, email, password, phone) => {
    const data = await authService.register(name, email, password, phone)
    localStorage.setItem('gmw_token', data.token)
    localStorage.setItem('gmw_user', JSON.stringify(data.user))
    setUser(data.user)
    toast.success(`Welcome to Ganapathi Mobile World, ${data.user.name}!`)
    return data
  }

  const logout = () => {
    localStorage.removeItem('gmw_token')
    localStorage.removeItem('gmw_user')
    setUser(null)
    toast.success('Logged out successfully')
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
