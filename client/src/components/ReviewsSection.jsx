import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MessageSquareQuote } from 'lucide-react'
import StarRating from './StarRating'
import { reviewService } from '../services/reviewService'

export default function ReviewsSection() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await reviewService.getReviews()
        // Only get generic/store reviews or first 6
        setReviews(data.reviews.filter(r => !r.product).slice(0, 6))
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchReviews()
  }, [])

  if (loading || reviews.length === 0) return null

  return (
    <section className="py-20 bg-slate-100 dark:bg-dark-950 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-sky/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="section-title">What Our <span className="text-gradient-gold">Customers Say</span></h2>
            <p className="text-slate-500 dark:text-white/60 mt-2">Real Google reviews from our happy customers.</p>
          </div>
          <a href="https://g.page/r/YOUR_GOOGLE_ID/review" target="_blank" rel="noreferrer" className="btn-secondary whitespace-nowrap">
            Leave a Review
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              key={review._id} 
              className="card p-6 flex flex-col h-full relative"
            >
              <MessageSquareQuote size={40} className="absolute top-6 right-6 text-slate-300 dark:text-white/5" />
              
              <div className="mb-4">
                <StarRating rating={review.rating} />
              </div>
              
              <p className="text-slate-700 dark:text-white/80 leading-relaxed italic flex-grow mb-6">
                "{review.comment}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-sky to-brand-gold flex items-center justify-center font-bold text-white shadow-lg">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-semibold text-sm">{review.name}</h4>
                  <p className="text-slate-500 dark:text-white/40 text-xs">Verified Customer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
