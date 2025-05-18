const mongoose = require('mongoose');

const FAQSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  location: { type: String, enum: ['Delhi', 'Bangalore', 'Both'], default: 'Both' },
  category: { type: String, enum: ['hours', 'menu', 'offers', 'location'], required: true }
});

module.exports = mongoose.model('FAQ', FAQSchema);