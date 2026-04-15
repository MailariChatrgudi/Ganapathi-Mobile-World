import { useState } from 'react'
import { Send } from 'lucide-react'
import toast from 'react-hot-toast'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!email) return
    toast.success('Subscribed successfully! 🎉')
    setEmail('')
  }

  return (
    <section className="py-20 relative overflow-hidden bg-white dark:bg-dark-900 border-y border-slate-200 dark:border-white/5">
      <div className="absolute inset-0 bg-red-gradient opacity-5 dark:opacity-10" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
          Get Exclusive Deals First!
        </h2>
        <p className="text-slate-600 dark:text-white/70 mb-8 max-w-xl mx-auto">
          Subscribe to our newsletter and never miss out on flash sales, new arrivals, and special discounts.
        </p>

        <form onSubmit={handleSubmit} className="flex max-w-md mx-auto relative group">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-100 dark:bg-dark-800 border border-slate-300 dark:border-white/10 rounded-full py-4 pl-6 pr-32 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/40 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/50 transition-all shadow-lg"
            required
          />
          <button
            type="submit"
            className="absolute right-1.5 top-1.5 bottom-1.5 bg-brand-red text-white font-semibold px-6 rounded-full hover:bg-brand-red-dark transition-colors flex items-center justify-center"
          >
            <Send size={18} className="mr-0 sm:mr-2" />
            <span className="hidden sm:inline">Subscribe</span>
          </button>
        </form>
      </div>
    </section>
  )
}
