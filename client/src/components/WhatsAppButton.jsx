import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const phoneNumber = "9106363333807"
  const message = encodeURIComponent("Hi, I want to enquire about mobile offers")
  const waUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="fill-current" />
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-dark-900 text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
        Chat with us!
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-white"></div>
      </span>
    </a>
  )
}
