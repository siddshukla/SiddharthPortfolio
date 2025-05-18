const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const kb = require('../data/knowledgeBase');

router.get('/restaurants/:city', (req, res) => {
  const city = req.params.city.toLowerCase();
  const data = kb.properties[city];
  data ? res.json(data) : res.status(404).json({ message: 'City not found' });
});

router.get('/faqs', (req, res) => {
  res.json(kb.faqs);
});

router.post('/bookings', (req, res) => {
  const booking = { id: uuidv4(), ...req.body };
  kb.bookings.push(booking);
  res.status(201).json({ message: 'Booking created', booking });
});

router.put('/bookings/:id', (req, res) => {
  const booking = kb.bookings.find(b => b.id === req.params.id);
  if (booking) {
    Object.assign(booking, req.body);
    res.json({ message: 'Booking updated', booking });
  } else {
    res.status(404).json({ message: 'Booking not found' });
  }
});

router.delete('/bookings/:id', (req, res) => {
  const index = kb.bookings.findIndex(b => b.id === req.params.id);
  if (index !== -1) {
    kb.bookings.splice(index, 1);
    res.json({ message: 'Booking cancelled' });
  } else {
    res.status(404).json({ message: 'Booking not found' });
  }
});

module.exports = router;