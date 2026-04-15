import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-transparent bg-clip-text bg-red-gradient mb-4">404</h1>
        <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center gap-2">
          <Home size={20} /> Back to Home
        </Link>
      </div>
    </div>
  )
}
