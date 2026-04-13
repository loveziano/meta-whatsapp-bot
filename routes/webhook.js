'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

// Webhook verification
router.get('/webhook', (req, res) => {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token) {
        if (mode === 'subscribe' && token === 'YOUR_VERIFY_TOKEN') {  // replace with your verify token
            console.log('Webhook verified');
            res.status(200).send(challenge);
        } else {
            res.sendStatus(403);
        }
    }
});

// Message handling
router.post('/webhook', (req, res) => {
    const body = req.body;

    // Check if this is a message
    if (body.object === 'whatsapp_business_account') {
        body.entry.forEach(entry => {
            const webhookEvent = entry.changes[0].value;
            console.log('Webhook event:', webhookEvent);
            // Handle the message here
        });
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;
