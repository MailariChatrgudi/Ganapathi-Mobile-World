import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Smartphone } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'

export default function RegisterPage() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', phone: '' })
  const [loading, setLoading] = useState(false)
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await register(formData.name, formData.email, formData.password, formData.phone)
      navigate('/')
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-sky/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-md card p-8 sm:p-10 relative z-10 border border-white/10">
        <div className="flex justify-center mb-8">
          <div className="w-14 h-14 bg-red-gradient rounded-2xl flex items-center justify-center shadow-glow-red">
            <Smartphone size={32} className="text-white" />
          </div>
        </div>

        <h1 className="text-3xl font-display font-bold text-center text-white mb-2">Create Account</h1>
        <p className="text-center text-white/50 text-sm mb-8">Join Ganapathi Mobile World</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-1.5">Full Name</label>
            <input type="text" name="name" required value={formData.name} onChange={handleChange} className="input-field" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-1.5">Email Address</label>
            <input type="email" name="email" required value={formData.email} onChange={handleChange} className="input-field" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-1.5">Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="input-field" placeholder="10-digit number" />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-1.5">Password</label>
            <input type="password" name="password" required minLength="6" value={formData.password} onChange={handleChange} className="input-field" placeholder="Min. 6 characters" />
          </div>

          <button type="submit" disabled={loading} className="w-full btn-primary py-3.5 mt-2">
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-white/60">
          Already have an account?{' '}
          <Link to="/login" className="text-brand-sky font-semibold hover:underline">Sign in</Link>
        </div>
      </div>
    </div>
  )
}
