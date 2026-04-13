'use strict';

const axios = require('axios');

class MessageService {
    constructor(accessToken) {
        this.accessToken = accessToken;
        this.apiUrl = 'https://graph.facebook.com/v13.0/messages';
    }

    async sendMessage(to, message) {
        const payload = {
            messaging_product: 'whatsapp',
            to: to,
            text: { body: message }
        };

        return this._sendRequest(payload);
    }

    async sendTemplate(to, templateName, templateData) {
        const payload = {
            messaging_product: 'whatsapp',
            to: to,
            type: 'template',
            template: {
                name: templateName,
                language: { code: 'en' },
                components: templateData
            }
        };

        return this._sendRequest(payload);
    }

    async sendInteractive(to, interactivePayload) {
        const payload = {
            messaging_product: 'whatsapp',
            to: to,
            type: 'interactive',
            interactive: interactivePayload
        };

        return this._sendRequest(payload);
    }

    async sendMedia(to, mediaUrl, caption) {
        const payload = {
            messaging_product: 'whatsapp',
            to: to,
            type: 'image',
            image: { link: mediaUrl, caption: caption }
        };

        return this._sendRequest(payload);
    }

    async _sendRequest(payload) {
        try {
            const response = await axios.post(this.apiUrl, payload, {
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`,
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error sending message:', error.response?.data || error.message);
            throw error;
        }
    }
}

module.exports = MessageService;
