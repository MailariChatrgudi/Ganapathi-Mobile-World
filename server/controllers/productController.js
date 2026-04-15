const Product = require('../models/Product');

// @desc  Get all products (with optional filters)
// @route GET /api/products
exports.getProducts = async (req, res, next) => {
  try {
    const { brand, minPrice, maxPrice, ram, storage, rating, search, featured, page = 1, limit = 12 } = req.query;
    const query = {};
    if (brand) query.brand = { $in: brand.split(',') };
    if (minPrice || maxPrice) query.price = { ...(minPrice && { $gte: Number(minPrice) }), ...(maxPrice && { $lte: Number(maxPrice) }) };
    if (ram) query['specs.ram'] = { $in: ram.split(',') };
    if (storage) query['specs.storage'] = { $in: storage.split(',') };
    if (rating) query.rating = { $gte: Number(rating) };
    if (featured === 'true') query.isFeatured = true;
    if (search) query.$text = { $search: search };

    const skip = (Number(page) - 1) * Number(limit);
    const total = await Product.countDocuments(query);
    const products = await Product.find(query).sort({ createdAt: -1 }).skip(skip).limit(Number(limit));

    res.json({ success: true, total, page: Number(page), pages: Math.ceil(total / Number(limit)), products });
  } catch (err) { next(err); }
};

// @desc  Get single product
// @route GET /api/products/:id
exports.getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, product });
  } catch (err) { next(err); }
};

// @desc  Filter products (alias)
// @route GET /api/products/filter
exports.filterProducts = async (req, res, next) => {
  return exports.getProducts(req, res, next);
};

// @desc  Create product (admin)
// @route POST /api/products
exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, product });
  } catch (err) { next(err); }
};

// @desc  Update product (admin)
// @route PUT /api/products/:id
exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, product });
  } catch (err) { next(err); }
};

// @desc  Delete product (admin)
// @route DELETE /api/products/:id
exports.deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Product removed' });
  } catch (err) { next(err); }
};
