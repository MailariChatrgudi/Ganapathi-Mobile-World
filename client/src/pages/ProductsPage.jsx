import { useState, useEffect } from 'react'
import { Filter } from 'lucide-react'
import FilterSidebar from '../components/FilterSidebar'
import ProductGrid from '../components/ProductGrid'
import Footer from '../components/Footer'
import { productService } from '../services/productService'

export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [filters, setFilters] = useState({
    brands: [],
    ram: [],
    storage: [],
    minPrice: '',
    maxPrice: ''
  })

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const params = {
          ...(filters.brands.length && { brand: filters.brands.join(',') }),
          ...(filters.ram.length && { ram: filters.ram.join(',') }),
          ...(filters.storage.length && { storage: filters.storage.join(',') }),
          ...(filters.minPrice && { minPrice: filters.minPrice }),
          ...(filters.maxPrice && { maxPrice: filters.maxPrice }),
        }
        const data = await productService.filterProducts(params)
        setProducts(data.products)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    const debounce = setTimeout(fetchProducts, 500)
    return () => clearTimeout(debounce)
  }, [filters])

  return (
    <div className="min-h-screen pt-20 flex flex-col">
      <div className="bg-slate-100 dark:bg-dark-900 border-b border-slate-200 dark:border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">All Smartphones</h1>
            <p className="text-slate-600 dark:text-white/60 text-sm mt-2">{products.length} products found</p>
          </div>
          <button 
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden flex items-center gap-2 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 px-4 py-2 rounded-xl text-slate-900 dark:text-white shadow-sm"
          >
            <Filter size={18} /> Filters
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 flex gap-8 w-full">
        {/* Sidebar */}
        <FilterSidebar 
          filters={filters} 
          setFilters={setFilters} 
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
        />

        {/* Main Content */}
        <div className="flex-1 w-full">
          {loading ? (
             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
             {[...Array(6)].map((_, i) => (
               <div key={i} className="card h-[400px] animate-pulse bg-slate-200 dark:bg-white/5" />
             ))}
           </div>
          ) : (
            <ProductGrid products={products} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
