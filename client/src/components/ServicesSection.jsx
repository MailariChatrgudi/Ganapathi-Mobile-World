import { Smartphone, Wrench, Battery, CreditCard } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Smartphone,
    title: 'Mobile Sales',
    description: 'We offer the latest smartphones from top brands with the best discounts in Koppal.',
    color: 'text-brand-sky',
    gradient: 'from-brand-sky/20 to-brand-sky/5'
  },
  {
    icon: Wrench,
    title: 'Repair Services',
    description: 'Expert mobile repair, screen replacement, and hardware fixing. Quick and reliable.',
    color: 'text-brand-red',
    gradient: 'from-brand-red/20 to-brand-red/5'
  },
  {
    icon: Battery,
    title: 'Accessories',
    description: 'Original chargers, premium back covers, screen guards, earphones and more.',
    color: 'text-brand-gold',
    gradient: 'from-brand-gold/20 to-brand-gold/5'
  },
  {
    icon: CreditCard,
    title: 'SIM & Recharge',
    description: 'New SIM connections, instant recharges, and dish TV payments available.',
    color: 'text-green-400',
    gradient: 'from-green-400/20 to-green-400/5'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Our <span className="text-gradient-sky">Services</span></h2>
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">
            Your one-stop destination for everything mobile. From buying the latest flagship
            to quick screen repairs, we do it all.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div key={index} variants={itemVariants} className="card p-8 group">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} className={service.color} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-slate-600 dark:text-white/60 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <a href="tel:06363333807" className="text-brand-sky text-sm font-semibold hover:text-brand-sky/80 flex items-center gap-1">
                    Get Service Now <span className="text-lg leading-none transform group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
