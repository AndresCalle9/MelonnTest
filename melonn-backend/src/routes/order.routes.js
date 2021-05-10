const { Router } = require("express");
const router = Router();

const {
    getOrders,
    getOrder,
    createOrder
} = require('../controllers/order.controller');

// Get all orders
router.get('/api/orders',getOrders);
// Get 1 order
router.get('/api/order/:key',getOrder)
// Crete a order
router.post('/api/orders',createOrder);



module.exports = router;
