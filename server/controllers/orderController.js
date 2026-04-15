const Order = require('../models/Order');
const Cart = require('../models/Cart');

// @desc  Create order
// @route POST /api/orders/create
exports.createOrder = async (req, res, next) => {
  try {
    const { items, shippingAddress, paymentMethod, subtotal, shippingCharge, total } = req.body;
    const order = await Order.create({
      user: req.user._id, items, shippingAddress, paymentMethod,
      subtotal, shippingCharge, total
    });
    // Clear cart after order
    await Cart.findOneAndUpdate({ user: req.user._id }, { items: [] });
    res.status(201).json({ success: true, order });
  } catch (err) { next(err); }
};

// @desc  Get my orders
// @route GET /api/orders
exports.getMyOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json({ success: true, orders });
  } catch (err) { next(err); }
};

// @desc  Get single order
// @route GET /api/orders/:id
exports.getOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id).populate('user', 'name email');
    if (!order) return res.status(404).json({ success: false, message: 'Order not found' });
    if (order.user._id.toString() !== req.user._id.toString() && req.user.role !== 'admin')
      return res.status(403).json({ success: false, message: 'Not authorized' });
    res.json({ success: true, order });
  } catch (err) { next(err); }
};

// @desc  Get all orders (admin)
// @route GET /api/orders/all
exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find().populate('user', 'name email').sort({ createdAt: -1 });
    res.json({ success: true, orders });
  } catch (err) { next(err); }
};
