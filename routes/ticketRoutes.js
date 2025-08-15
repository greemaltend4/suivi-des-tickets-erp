const express = require('express');
const Ticket = require('../models/Ticket');
const router = express.Router();

// Création d'un nouveau ticket
router.post('/', async (req, res) => {
  try {
    const ticket = new Ticket(req.body);
    await ticket.save();
    res.status(201).send(ticket);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Récupération de tous les tickets
router.get('/', async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).send(tickets);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
