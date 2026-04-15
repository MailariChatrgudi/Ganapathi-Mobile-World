import { Link } from 'react-router-dom'
import { Smartphone, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-dark-900 pt-20 pb-10 border-t border-slate-200 dark:border-white/5 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-brand-sky/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Col */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-red-gradient rounded-xl flex items-center justify-center">
                <Smartphone size={22} className="text-white" />
              </div>
              <div>
                <p className="text-base font-black text-slate-900 dark:text-white leading-none tracking-wide">GANAPATHI</p>
                <p className="text-xs text-brand-sky font-semibold leading-none">MOBILE WORLD</p>
              </div>
            </Link>
            <p className="text-slate-600 dark:text-white/60 text-sm leading-relaxed mb-6">
              Your trusted mobile destination in Koppal. Providing top-tier
              sales and repair services for over 25 years.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-white/60 hover:bg-brand-sky hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-white/60 hover:bg-brand-red hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-white/60 hover:bg-brand-sky hover:text-white transition-all"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/products" className="text-slate-600 dark:text-white/60 hover:text-brand-sky transition-colors">All Products</Link></li>
              <li><Link to="/#services" className="text-slate-600 dark:text-white/60 hover:text-brand-sky transition-colors">Our Services</Link></li>
              <li><Link to="/#about" className="text-slate-600 dark:text-white/60 hover:text-brand-sky transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-slate-600 dark:text-white/60 hover:text-brand-sky transition-colors">Customer Reviews</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Top Brands</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/products?brand=Samsung" className="text-slate-600 dark:text-white/60 hover:text-brand-sky transition-colors">Samsung</Link></li>
              <li><Link to="/products?brand=OnePlus" className="text-slate-600 dark:text-white/60 hover:text-brand-sky transition-colors">OnePlus</Link></li>
              <li><Link to="/products?brand=Vivo" className="text-slate-600 dark:text-white/60 hover:text-brand-sky transition-colors">Vivo & Oppo</Link></li>
              <li><Link to="/products?brand=Xiaomi" className="text-slate-600 dark:text-white/60 hover:text-brand-sky transition-colors">Xiaomi & Realme</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 text-slate-600 dark:text-white/60">
                <MapPin size={18} className="shrink-0 text-brand-sky" />
                <span>NEELAM LODGE COMPLEX, opp. BUSTAND, Sadashiva Nagar, Koppal</span>
              </li>
              <li className="flex gap-3 text-slate-600 dark:text-white/60">
                <Phone size={18} className="shrink-0 text-brand-sky" />
                <span>063633 33807</span>
              </li>
              <li className="flex gap-3 text-slate-600 dark:text-white/60">
                <Mail size={18} className="shrink-0 text-brand-sky" />
                <span>contact@ganapathimobileworld.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-white/40 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Ganapathi Mobile World. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 dark:text-white/40 hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 dark:text-white/40 hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
