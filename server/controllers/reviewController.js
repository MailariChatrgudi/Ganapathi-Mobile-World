const Review = require('../models/Review');
const Product = require('../models/Product');

// @desc  Get reviews (all or by product)
// @route GET /api/reviews
exports.getReviews = async (req, res, next) => {
  try {
    const filter = { approved: true };
    if (req.query.product) filter.product = req.query.product;
    const reviews = await Review.find(filter).sort({ createdAt: -1 }).populate('user', 'name avatar');
    res.json({ success: true, reviews });
  } catch (err) { next(err); }
};

// @desc  Create review
// @route POST /api/reviews
exports.createReview = async (req, res, next) => {
  try {
    const { product, rating, comment } = req.body;
    const existing = await Review.findOne({ product, user: req.user._id });
    if (existing) return res.status(400).json({ success: false, message: 'You already reviewed this product' });

    const review = await Review.create({ product, user: req.user._id, name: req.user.name, rating, comment });

    // Update product rating
    const reviews = await Review.find({ product, approved: true });
    const avg = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
    await Product.findByIdAndUpdate(product, { rating: avg.toFixed(1), numReviews: reviews.length });

    res.status(201).json({ success: true, review });
  } catch (err) { next(err); }
};
