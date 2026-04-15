const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  brand: { type: String, required: true, enum: ['Samsung', 'OnePlus', 'Vivo', 'Oppo', 'Realme', 'Xiaomi'] },
  model: { type: String, required: true },
  description: { type: String },
  images: [{ type: String }],
  price: { type: Number, required: true },
  mrp: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  specs: {
    ram: { type: String },
    storage: { type: String },
    battery: { type: String },
    camera: { type: String },
    processor: { type: String },
    display: { type: String },
    os: { type: String }
  },
  variants: [{
    ram: String,
    storage: String,
    color: String,
    price: Number,
    stock: Number
  }],
  stock: { type: Number, default: 10 },
  rating: { type: Number, default: 4.0, min: 0, max: 5 },
  numReviews: { type: Number, default: 0 },
  tags: [{ type: String }],
  isHotDeal: { type: Boolean, default: false },
  isLimitedStock: { type: Boolean, default: false },
  isFeatured: { type: Boolean, default: false },
  category: { type: String, default: 'Smartphone' }
}, { timestamps: true });

productSchema.index({ brand: 1, price: 1, rating: -1 });
productSchema.index({ name: 'text', brand: 'text', description: 'text' });

module.exports = mongoose.model('Product', productSchema);
