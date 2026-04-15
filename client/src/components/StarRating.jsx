import { Star, StarHalf } from 'lucide-react'

export default function StarRating({ rating, reviews, size = 16 }) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <Star key={i} size={size} className="text-brand-gold fill-brand-gold" />
          }
          if (i === fullStars && hasHalfStar) {
            return (
              <div key={i} className="relative">
                <Star size={size} className="text-white/20" />
                <div className="absolute inset-0 overflow-hidden w-1/2">
                  <Star size={size} className="text-brand-gold fill-brand-gold" />
                </div>
              </div>
            )
          }
          return <Star key={i} size={size} className="text-white/20" />
        })}
      </div>
      {reviews !== undefined && (
        <span className="text-white/50 text-xs">({reviews})</span>
      )}
    </div>
  )
}
