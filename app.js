const express = require('express');
const ticketRoutes = require('./routes/ticketRoutes');

const app = express();

app.use('/api/tickets', ticketRoutes);

module.exports = app;
