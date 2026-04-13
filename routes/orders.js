const express = require('express');
const router = express.Router();

// Mock order data
let orders = [];

// Endpoint for creating a new order
router.post('/orders', (req, res) => {
    const { id, status } = req.body;
    const newOrder = { id, status };
    orders.push(newOrder);
    res.status(201).json(newOrder);
});

// Endpoint for updating order status
router.put('/orders/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const order = orders.find(o => o.id === id);

    if (!order) {
        return res.status(404).json({ message: 'Order not found' });
    }

    order.status = status;
    res.json(order);
});

module.exports = router;