import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Navigation } from 'lucide-react'
import StarRating from './StarRating'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative bg-dark-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 border border-brand-red/20 rounded-full text-brand-red text-sm font-semibold mb-6">
              Serving since 2000
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-display font-black text-white mb-6">
              GANAPATHI <br/> 
              <span className="text-brand-sky">MOBILE WORLD</span>
            </h2>
            
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              All brand mobile accessories, sales & service are available. We pride ourselves on offering 
              the best value, genuine products, and expert repairs right here in Koppal.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-sky" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-white/60 text-sm mt-1">NEELAM LODGE COMPLEX, opp. BUSTAND, Sadashiva Nagar, Koppal, Karnataka 583231</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Contact</h4>
                  <p className="text-white/60 text-sm mt-1">063633 33807</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="text-green-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Hours</h4>
                  <p className="text-white/60 text-sm mt-1">Mon - Sun: 9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <a href="tel:06363333807" className="btn-primary">Call Us Now</a>
              <div className="flex items-center gap-3">
                <div><h4 className="text-3xl font-black text-white">4.8</h4></div>
                <div>
                  <StarRating rating={4.8} />
                  <p className="text-white/60 text-xs mt-1">117+ Google Reviews</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl group"
          >
            <div className="absolute inset-0 bg-dark-900/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15383.08552309787!2d76.14371905!3d15.34005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb77ba66258aa5d%3A0xc3c9a3edfc430c00!2sGanapathi%20Mobile%20World!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.5] contrast-[1.2] opacity-80"
            />
            
            <a 
              href="https://maps.google.com/?q=Ganapathi+Mobile+World+Koppal" 
              target="_blank" 
              rel="noreferrer"
              className="absolute bottom-6 right-6 z-20 bg-white text-dark-900 font-bold px-6 py-3 rounded-xl flex items-center gap-2 shadow-xl hover:scale-105 transition-transform"
            >
              <Navigation size={18} /> Get Directions
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
