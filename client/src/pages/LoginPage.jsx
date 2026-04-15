import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Smartphone } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await login(email, password)
      navigate(from, { replace: true })
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-sky/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-md card p-8 sm:p-10 relative z-10 border border-white/10">
        <div className="flex justify-center mb-8">
          <div className="w-14 h-14 bg-red-gradient rounded-2xl flex items-center justify-center shadow-glow-red">
            <Smartphone size={32} className="text-white" />
          </div>
        </div>

        <h1 className="text-3xl font-display font-bold text-center text-white mb-2">Welcome Back</h1>
        <p className="text-center text-white/50 text-sm mb-8">Sign in to Ganapathi Mobile World</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-1.5">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-1.5">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="••••••••"
            />
          </div>

          <button type="submit" disabled={loading} className="w-full btn-primary py-3.5 mt-2">
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-white/60">
          New to our store?{' '}
          <Link to="/register" className="text-brand-sky font-semibold hover:underline">Create an account</Link>
        </div>
      </div>
    </div>
  )
}
