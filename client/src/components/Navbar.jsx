import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, User, Menu, X, Phone, Sun, Moon } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import { useTheme } from '../context/ThemeContext'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const { user, logout, isAuthenticated } = useAuth()
  const { itemCount } = useCart()
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 dark:bg-dark-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="Ganapathi Mobile World Logo" className="w-12 h-12 rounded-full shadow-glow-sky group-hover:scale-110 transition-transform bg-white" />
            <div className="hidden sm:block">
              <p className="text-sm font-black text-slate-900 dark:text-white leading-none tracking-wide">GANAPATHI</p>
              <p className="text-xs text-brand-sky font-semibold leading-none">MOBILE WORLD</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.label}
                to={link.href}
                className={`nav-link px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-sm ${
                  location.pathname === link.href ? 'text-brand-sky dark:text-brand-sky' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Phone CTA */}
            <a
              href="tel:06363333807"
              className="hidden lg:flex items-center gap-2 text-xs text-brand-gold hover:text-brand-gold font-semibold bg-brand-gold/10 hover:bg-brand-gold/20 px-3 py-2 rounded-xl transition-all"
            >
              <Phone size={14} />
              063633 33807
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl transition-colors text-slate-700 dark:text-white"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Cart */}
            {isAuthenticated && (
              <Link to="/cart" className="relative p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl transition-colors">
                <ShoppingCart size={22} className="text-slate-700 dark:text-white" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-red text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </Link>
            )}

            {/* Account */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setDropOpen(!dropOpen)}
                  className="flex items-center gap-2 bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 px-3 py-2 rounded-xl transition-all"
                >
                  <div className="w-7 h-7 bg-sky-gradient rounded-full flex items-center justify-center text-xs font-bold text-white">
                    {user?.name?.[0]?.toUpperCase()}
                  </div>
                  <span className="hidden sm:block text-sm text-slate-900 dark:text-white font-medium">{user?.name?.split(' ')[0]}</span>
                </button>
                <AnimatePresence>
                  {dropOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      className="absolute right-0 top-12 w-44 bg-white dark:bg-dark-700 border border-slate-200 dark:border-white/10 rounded-2xl shadow-lg dark:shadow-card-hover overflow-hidden z-50 text-slate-900 dark:text-white"
                    >
                      <Link to="/orders" onClick={() => setDropOpen(false)} className="block px-4 py-3 text-sm hover:bg-slate-50 dark:hover:bg-white/10 transition-colors">My Orders</Link>
                      <button onClick={() => { logout(); setDropOpen(false) }} className="w-full text-left px-4 py-3 text-sm text-brand-red hover:bg-slate-50 dark:hover:bg-white/10 transition-colors">Logout</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link to="/login" className="flex items-center gap-2 btn-primary py-2 px-4 text-sm">
                <User size={16} /> Login
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl transition-colors text-slate-700 dark:text-white">
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-50/95 dark:bg-dark-800/95 backdrop-blur-xl border-t border-slate-200 dark:border-white/10"
          >
            <div className="px-4 py-3 space-y-1">
              {NAV_LINKS.map(link => (
                <Link key={link.label} to={link.href} className="block px-4 py-3 rounded-xl hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-white/80 hover:text-slate-900 dark:hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
              <a href="tel:06363333807" className="flex items-center gap-2 px-4 py-3 text-brand-gold font-semibold">
                <Phone size={16} /> 063633 33807
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
