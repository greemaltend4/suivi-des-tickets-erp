const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  description: { type: String, required: true },
  statut: { type: String, enum: ['ouvert', 'en cours', 'résolu'], default: 'ouvert' },
  dateSoumission: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticket', ticketSchema);
