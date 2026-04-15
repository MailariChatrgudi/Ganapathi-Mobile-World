const express = require('express');
const router = express.Router();
const { createOrder, getMyOrders, getOrder, getAllOrders } = require('../controllers/orderController');
const { protect, admin } = require('../middleware/auth');

router.use(protect);
router.post('/create', createOrder);
router.get('/', getMyOrders);
router.get('/all', admin, getAllOrders);
router.get('/:id', getOrder);

module.exports = router;
