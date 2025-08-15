const express = require('express');
const ticketRoutes = require('./routes/ticketRoutes');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/api/tickets', ticketRoutes);

module.exports = app;