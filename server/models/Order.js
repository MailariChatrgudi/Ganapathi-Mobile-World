const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    name: String, image: String,
    price: Number, quantity: Number,
    variant: { ram: String, storage: String, color: String }
  }],
  shippingAddress: {
    name: String, phone: String,
    addressLine: String, city: String,
    state: String, pincode: String
  },
  paymentMethod: { type: String, enum: ['COD', 'UPI', 'Card'], default: 'COD' },
  paymentStatus: { type: String, enum: ['pending', 'paid', 'failed'], default: 'pending' },
  orderStatus: {
    type: String,
    enum: ['placed', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'placed'
  },
  subtotal: Number,
  shippingCharge: { type: Number, default: 0 },
  total: Number,
  notes: String
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
