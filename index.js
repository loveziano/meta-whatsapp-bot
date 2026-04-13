const express = require('express');
const bodyParser = require('body-parser');
const webhook = require('./routes/webhook');
const messages = require('./routes/messages');
const appointments = require('./routes/appointments');
const orders = require('./routes/orders');

const app = express();
app.use(bodyParser.json());

app.use('/webhook', webhook);
app.use('/messages', messages);
app.use('/appointments', appointments);
app.use('/orders', orders);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
