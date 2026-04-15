import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Package, Clock, CheckCircle, XCircle } from 'lucide-react'
import { orderService } from '../services/orderService'
import Footer from '../components/Footer'

const Badge = ({ status }) => {
  const styles = {
    placed: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    confirmed: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    processing: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    shipped: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    delivered: 'bg-green-500/10 text-green-400 border-green-500/20',
    cancelled: 'bg-red-500/10 text-red-400 border-red-500/20',
  }
  
  const icons = {
    placed: <Clock size={14} />,
    confirmed: <CheckCircle size={14} />,
    processing: <Package size={14} />,
    shipped: <Truck size={14} />,
    delivered: <CheckCircle size={14} />,
    cancelled: <XCircle size={14} />,
  }
  
  return (
    <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border uppercase tracking-wider ${styles[status]}`}>
      {icons[status] || <Clock size={14} />} {status}
    </span>
  )
}

export default function OrdersPage() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await orderService.getMyOrders()
        setOrders(data.orders)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchOrders()
  }, [])

  return (
    <div className="min-h-screen pt-20 flex flex-col">
      <div className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <h1 className="text-3xl font-bold text-white mb-8">My Orders</h1>

        {loading ? (
          <div className="space-y-4">
             {[1,2].map(i => <div key={i} className="h-48 bg-white/5 animate-pulse rounded-2xl" />)}
          </div>
        ) : orders.length === 0 ? (
          <div className="bg-dark-800 rounded-2xl p-10 text-center border border-white/5">
            <Package size={48} className="mx-auto text-white/20 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No orders yet</h3>
            <p className="text-white/50 mb-6">Looks like you haven't made any purchases.</p>
            <Link to="/products" className="btn-primary">Start Shopping</Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map(order => (
              <div key={order._id} className="bg-dark-800 rounded-2xl p-6 border border-white/5">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-white/10 pb-4 mb-4">
                  <div>
                    <p className="text-white/50 text-xs mb-1">Order #{order._id}</p>
                    <p className="text-white/80 text-sm">Placed on {new Date(order.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xl font-bold text-brand-gold">₹{order.total.toLocaleString('en-IN')}</span>
                    <Badge status={order.orderStatus} />
                  </div>
                </div>

                <div className="space-y-4">
                  {order.items.map(item => (
                    <div key={item._id} className="flex items-center gap-4">
                      {item.image && <img src={item.image} alt={item.name} className="w-16 h-16 object-contain bg-white rounded-xl p-1" />}
                      <div className="flex-1">
                        <Link to={item.product ? `/products/${item.product}` : '#'} className="text-white font-medium hover:text-brand-sky">{item.name}</Link>
                        <p className="text-white/50 text-sm mt-1">Qty: {item.quantity} • {item.variant?.ram} {item.variant?.storage} {item.variant?.color}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}
