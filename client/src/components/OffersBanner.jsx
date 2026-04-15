import { Tag } from 'lucide-react'

export default function OffersBanner() {
  const offers = [
    "🎉 Special Fest Offer: Flat 10% OFF on all Samsung galaxy phones!",
    "📱 Exchange your old phone and get up to ₹5000 extra bonus.",
    "🚀 Zero Downpayment EMI available on Bajaj Finserv.",
    "🛡️ Free Screen Guard & Back Cover with every new smartphone purchase.",
    "💳 5% Instant Discount on HDFC & ICICI Credit Cards."
  ]

  return (
    <div className="bg-brand-red text-white py-1.5 overflow-hidden z-40 relative flex items-center">
      <div className="absolute left-0 z-10 bg-brand-red px-2 md:px-4 shrink-0 flex items-center gap-2 shadow-2xl h-full border-r border-white/20">
        <Tag size={14} className="animate-pulse" />
        <span className="text-xs uppercase font-black tracking-widest hidden sm:inline">OFFERS</span>
      </div>
      
      <div className="flex whitespace-nowrap animate-marquee relative z-0 flex-1 ml-10 sm:ml-28">
        {[...offers, ...offers, ...offers].map((offer, i) => (
          <span key={i} className="mx-8 text-sm font-medium tracking-wide flex items-center">
             {offer}
          </span>
        ))}
      </div>
    </div>
  )
}
