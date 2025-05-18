const express = require('express');
const mongoose = require('mongoose');
const Booking = require('./models/Booking'); // Make sure this file exists
const FAQ = require('./models/FAQ');         // Make sure this file exists
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // No need for body-parser in recent Express versions

// MongoDB Connection
mongoose.connect('mongodb+srv://siddharthshukla:asdfghjkl@cluster0.ji9aaod.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// **Booking Endpoints**
app.post('/api/bookings', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.put('/api/bookings/:id', async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/api/bookings/:id', async (req, res) => {
  try {
    await Booking.findByIdAndUpdate(req.params.id, { status: 'cancelled' });
    res.json({ message: 'Booking cancelled' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// **FAQ Endpoints**
app.get('/api/faqs', async (req, res) => {
  try {
    const { location, category } = req.query;
    const query = {};
    if (location) query.location = { $in: [location, 'Both'] };
    if (category) query.category = category;

    const faqs = await FAQ.find(query);
    res.json(faqs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
