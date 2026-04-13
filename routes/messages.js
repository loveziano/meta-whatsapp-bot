const express = require('express');
const router = express.Router();

// Endpoint to send a text message
router.post('/sendText', (req, res) => {
    // Code to send a text message
    res.send('Text message sent');
});

// Endpoint to send a template message
router.post('/sendTemplate', (req, res) => {
    // Code to send a template message
    res.send('Template message sent');
});

// Endpoint to send an interactive message
router.post('/sendInteractive', (req, res) => {
    // Code to send an interactive message
    res.send('Interactive message sent');
});

// Endpoint to send media messages
router.post('/sendMedia', (req, res) => {
    // Code to send media messages
    res.send('Media message sent');
});

module.exports = router;