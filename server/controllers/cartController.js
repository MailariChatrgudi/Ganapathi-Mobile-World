const Cart = require('../models/Cart');
const Product = require('../models/Product');

// @desc  Get cart
// @route GET /api/cart
exports.getCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate('items.product', 'name images price stock brand');
    if (!cart) return res.json({ success: true, cart: { items: [], total: 0 } });
    res.json({ success: true, cart });
  } catch (err) { next(err); }
};

// @desc  Add to cart
// @route POST /api/cart/add
exports.addToCart = async (req, res, next) => {
  try {
    const { productId, quantity = 1, variant } = req.body;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });

    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) cart = new Cart({ user: req.user._id, items: [] });

    const existIdx = cart.items.findIndex(i => i.product.toString() === productId);
    if (existIdx > -1) {
      cart.items[existIdx].quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity, variant, price: product.price });
    }

    await cart.save();
    await cart.populate('items.product', 'name images price stock brand');
    res.json({ success: true, cart });
  } catch (err) { next(err); }
};

// @desc  Update quantity
// @route PUT /api/cart/update/:productId
exports.updateCart = async (req, res, next) => {
  try {
    const { quantity } = req.body;
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) return res.status(404).json({ success: false, message: 'Cart not found' });

    const item = cart.items.find(i => i.product.toString() === req.params.productId);
    if (!item) return res.status(404).json({ success: false, message: 'Item not in cart' });

    if (quantity <= 0) {
      cart.items = cart.items.filter(i => i.product.toString() !== req.params.productId);
    } else {
      item.quantity = quantity;
    }

    await cart.save();
    await cart.populate('items.product', 'name images price stock brand');
    res.json({ success: true, cart });
  } catch (err) { next(err); }
};

// @desc  Remove from cart
// @route DELETE /api/cart/remove/:productId
exports.removeFromCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) return res.status(404).json({ success: false, message: 'Cart not found' });
    cart.items = cart.items.filter(i => i.product.toString() !== req.params.productId);
    await cart.save();
    res.json({ success: true, cart });
  } catch (err) { next(err); }
};

// @desc  Clear cart
// @route DELETE /api/cart/clear
exports.clearCart = async (req, res, next) => {
  try {
    await Cart.findOneAndUpdate({ user: req.user._id }, { items: [] });
    res.json({ success: true, message: 'Cart cleared' });
  } catch (err) { next(err); }
};
