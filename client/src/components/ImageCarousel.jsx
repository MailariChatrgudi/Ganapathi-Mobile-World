import { useState } from 'react'

export default function ImageCarousel({ images, altText }) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!images || images.length === 0) return null

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto no-scrollbar pb-2 md:pb-0 h-auto md:max-h-[500px]">
        {images.map((img, idx) => (
          <button 
            key={idx} 
            onClick={() => setActiveIndex(idx)}
            className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 transition-all p-1 bg-white
              ${activeIndex === idx ? 'border-brand-sky shadow-glow-sky' : 'border-transparent opacity-50 hover:opacity-100'}`}
          >
            <img src={img} alt={`${altText} thumbnail ${idx+1}`} className="w-full h-full object-contain" />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 bg-white rounded-3xl p-8 flex items-center justify-center min-h-[400px] border border-white/10 relative overflow-hidden group">
        <img 
          src={images[activeIndex]} 
          alt={altText} 
          className="max-h-[500px] w-full object-contain group-hover:scale-125 transition-transform duration-500 origin-center cursor-crosshair" 
        />
      </div>
    </div>
  )
}
