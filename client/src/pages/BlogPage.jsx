import Footer from '../components/Footer'

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20 flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
        <h1 className="text-4xl md:text-5xl font-display font-black text-white mb-6">
          Mobile <span className="text-brand-sky">Tech Blog</span>
        </h1>
        <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
          Coming soon! We're preparing exciting articles about the latest smartphone releases, tips and tricks, and tech news.
        </p>
        <div className="inline-flex items-center justify-center w-32 h-32 bg-dark-800 rounded-full border border-white/10 animate-bounce">
          <span className="text-4xl">✍️</span>
        </div>
      </div>
      <Footer />
    </div>
  )
}
