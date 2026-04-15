import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Star, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react'

const trustBadges = [
  { icon: Star, label: '4.8 Google Rating', color: 'text-brand-gold', bg: 'bg-brand-gold/10' },
  { icon: MapPin, label: 'Opp Bus Stand, Koppal', color: 'text-brand-sky', bg: 'bg-brand-sky/10' },
  { icon: Clock, label: 'Open till 9 PM', color: 'text-green-400', bg: 'bg-green-400/10' },
  { icon: ShieldCheck, label: '25+ Years Trusted', color: 'text-brand-red', bg: 'bg-brand-red/10' },
]

const floatVariants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
  }
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-slate-50 dark:bg-dark-950">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 dark:opacity-50"
        style={{ backgroundImage: 'url(/hero.png)' }} 
      />
      {/* Light mode: subtle white wash, Dark mode: dark overlay */}
      <div className="absolute inset-0 bg-white/60 dark:bg-dark-950/80" />
      
      {/* Glow Effects — softer in light mode */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/10 dark:bg-brand-red/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-sky/10 dark:bg-brand-sky/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.2) 1px, transparent 1px)', backgroundSize: '50px 50px' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 relative z-10"
            >
              <span className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-slate-700 dark:text-white/70 font-medium">Open Now • Koppal, Karnataka</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-slate-900 dark:text-white leading-tight relative z-10 drop-shadow-md"
            >
              Best Mobile{' '}
              <span className="text-gradient-red">Deals</span> &{' '}
              <span className="text-gradient-sky">Repair</span>{' '}
              <br className="hidden sm:block"/>
              Services in{' '}
              <span className="text-gradient-gold">Koppal</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-slate-700 dark:text-white/60 leading-relaxed font-medium relative z-10"
            >
              25+ Years Trusted Service | Best Prices Guaranteed
              <br />
              <span className="text-brand-sky-dark dark:text-brand-sky font-bold">All brands available</span> — Samsung, OnePlus, Vivo, Oppo, Realme, Xiaomi
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4 relative z-10"
            >
              <Link to="/products" className="btn-primary flex items-center gap-2 text-base px-8 py-4">
                Shop Now <ArrowRight size={18} />
              </Link>
              <Link to="/login" className="btn-secondary flex items-center gap-2 text-base px-8 py-4">
                <Star size={18} /> My Account
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 grid grid-cols-2 gap-3 relative z-10"
            >
              {trustBadges.map(({ icon: Icon, label, color, bg }) => (
                <div key={label} className={`flex items-center gap-3 ${bg} px-4 py-3 rounded-xl border border-white/40 dark:border-white/5 bg-white/70 backdrop-blur-sm dark:bg-transparent`}>
                  <Icon size={18} className={color} />
                  <span className="text-sm text-slate-800 dark:text-white/80 font-bold">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Floating Phone Card */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full bg-brand-red/20 blur-3xl scale-150" />

              <motion.div variants={floatVariants} animate="animate" className="relative">
                {/* Main phone mockup */}
                <div className="w-72 h-[580px] bg-white dark:bg-dark-700 rounded-[3rem] border-4 border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden relative">
                  <img
                    src="https://forumstatic.oneplusmobile.com/opforum-gl/upload/image/app/thread/20240107/3448145838346449901/1503044512899923974/1503044512899923974.jpg?x-ocs-process=image/format,webp/resize,w_1440"
                    alt="Latest smartphone"
                    className="w-full h-full object-cover opacity-100 dark:opacity-80"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 dark:from-dark-900 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-4 right-4">
                    <div className="bg-white/90 dark:bg-dark-800/90 backdrop-blur rounded-2xl p-4 border border-white/40 dark:border-white/10 shadow-lg">
                      <p className="text-xs text-brand-sky-dark dark:text-brand-sky font-bold uppercase tracking-wider">Hot Deal 🔥</p>
                      <p className="text-slate-900 dark:text-white font-black mt-1">OnePlus 12R 5G</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-brand-gold-dark dark:text-brand-gold font-black text-lg">₹39,999</span>
                        <span className="text-slate-500 dark:text-white/40 line-through text-sm">₹44,999</span>
                        <span className="bg-brand-red text-white text-xs px-2 py-0.5 rounded-lg font-bold">11% OFF</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating cards */}
                <motion.div
                  animate={{ x: [0, 5, 0], transition: { duration: 2, repeat: Infinity, delay: 0.5 } }}
                  className="absolute -right-16 top-20 bg-white dark:bg-dark-700 border border-slate-200 dark:border-white/10 rounded-2xl p-3 shadow-lg dark:shadow-card"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-brand-gold/20 rounded-lg flex items-center justify-center">
                      <Star size={16} className="text-brand-gold-dark dark:text-brand-gold fill-brand-gold" />
                    </div>
                    <div>
                      <p className="text-slate-900 dark:text-white text-xs font-bold">4.8★ Rated</p>
                      <p className="text-slate-500 dark:text-white/50 text-[10px] font-medium">117+ Reviews</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ x: [0, -5, 0], transition: { duration: 2, repeat: Infinity, delay: 1 } }}
                  className="absolute -left-14 bottom-32 bg-white dark:bg-dark-700 border border-slate-200 dark:border-white/10 rounded-2xl p-3 shadow-lg dark:shadow-card"
                >
                  <p className="text-brand-sky-dark dark:text-brand-sky text-xs font-bold">✓ Since 2000</p>
                  <p className="text-slate-500 dark:text-white/50 text-[10px] font-medium">Serving Koppal</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 dark:from-dark-950 to-transparent" />
    </section>
  )
}
