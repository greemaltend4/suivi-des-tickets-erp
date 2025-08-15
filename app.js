const express = require('express');
const ticketRoutes = require('./routes/ticketRoutes');

const app = express();

// Middleware pour analyser les corps JSON
app.use(express.json());

// Définir les routes de tickets
app.use('/api/tickets', ticketRoutes);

module.exports = app;