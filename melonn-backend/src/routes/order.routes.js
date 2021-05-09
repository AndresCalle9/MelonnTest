const { Router } = require("express");
const router = Router();

const {
    getOrders,
    createOrder
} = require('../controllers/order.controller');

// Consultar ordenes
router.get('/api/orders',getOrders);
router.post('/api/orders',createOrder);



module.exports = router;
