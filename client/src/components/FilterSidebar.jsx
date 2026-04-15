import { Filter, X } from 'lucide-react'

const BRANDS = ['Samsung', 'OnePlus', 'Vivo', 'Oppo', 'Realme', 'Xiaomi']
const RAM_OPTIONS = ['4GB', '6GB', '8GB', '12GB', '16GB']
const STORAGE_OPTIONS = ['64GB', '128GB', '256GB', '512GB']

export default function FilterSidebar({ filters, setFilters, isOpen, setIsOpen }) {
  
  const handleCheckboxChange = (type, value) => {
    setFilters(prev => {
      const current = prev[type] || []
      const updated = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value]
      return { ...prev, [type]: updated }
    })
  }

  const handlePriceChange = (e, type) => {
    setFilters(prev => ({
      ...prev,
      [type]: e.target.value
    }))
  }

  const clearFilters = () => {
    setFilters({ brands: [], ram: [], storage: [], minPrice: '', maxPrice: '' })
  }

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-72 bg-dark-800 lg:bg-transparent
        transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 transition-transform duration-300 ease-in-out
        border-r border-white/10 lg:border-none p-6 lg:p-0 overflow-y-auto max-h-screen lg:max-h-auto
      `}>
        <div className="flex items-center justify-between lg:hidden mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2"><Filter size={20}/> Filters</h2>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-lg">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-8">
          {/* Active Filters / Clear */}
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-white uppercase tracking-wider text-sm">Filters</h3>
            <button onClick={clearFilters} className="text-xs text-brand-sky hover:underline">Clear All</button>
          </div>

          {/* Price Range */}
          <div>
            <h4 className="font-semibold text-white/80 mb-3 text-sm">Price Range</h4>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Min"
                className="input-field py-2 text-sm"
                value={filters.minPrice || ''}
                onChange={(e) => handlePriceChange(e, 'minPrice')}
              />
              <span className="text-white/40">-</span>
              <input
                type="number"
                placeholder="Max"
                className="input-field py-2 text-sm"
                value={filters.maxPrice || ''}
                onChange={(e) => handlePriceChange(e, 'maxPrice')}
              />
            </div>
          </div>

          {/* Brands */}
          <div className="border-t border-white/10 pt-6">
            <h4 className="font-semibold text-white/80 mb-3 text-sm">Brands</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
              {BRANDS.map(brand => (
                <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      className="peer appearance-none w-5 h-5 border border-white/20 rounded bg-dark-700 checked:bg-brand-sky checked:border-brand-sky transition-colors cursor-pointer"
                      checked={filters.brands?.includes(brand) || false}
                      onChange={() => handleCheckboxChange('brands', brand)}
                    />
                    <svg className="absolute w-3 h-3 pointer-events-none opacity-0 peer-checked:opacity-100 text-white" viewBox="0 0 14 10" fill="none">
                      <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white/70 group-hover:text-white transition-colors text-sm">{brand}</span>
                </label>
              ))}
            </div>
          </div>

          {/* RAM */}
          <div className="border-t border-white/10 pt-6">
            <h4 className="font-semibold text-white/80 mb-3 text-sm">RAM</h4>
            <div className="flex flex-wrap gap-2">
              {RAM_OPTIONS.map(ram => (
                <button
                  key={ram}
                  onClick={() => handleCheckboxChange('ram', ram)}
                  className={`px-3 py-1.5 text-xs rounded-lg border transition-colors ${
                    filters.ram?.includes(ram) 
                      ? 'bg-brand-sky border-brand-sky text-white' 
                      : 'bg-dark-700 border-white/10 text-white/60 hover:text-white hover:border-white/30'
                  }`}
                >
                  {ram}
                </button>
              ))}
            </div>
          </div>

          {/* Storage */}
          <div className="border-t border-white/10 pt-6">
            <h4 className="font-semibold text-white/80 mb-3 text-sm">Storage</h4>
            <div className="flex flex-wrap gap-2">
              {STORAGE_OPTIONS.map(storage => (
                <button
                  key={storage}
                  onClick={() => handleCheckboxChange('storage', storage)}
                  className={`px-3 py-1.5 text-xs rounded-lg border transition-colors ${
                    filters.storage?.includes(storage) 
                      ? 'bg-brand-sky border-brand-sky text-white' 
                      : 'bg-dark-700 border-white/10 text-white/60 hover:text-white hover:border-white/30'
                  }`}
                >
                  {storage}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
