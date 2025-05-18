const knowledgeBase = {
  properties: {
    delhi: [
      {
        id: "del-001",
        name: "Barbeque Nation - Connaught Place",
        address: "N-79, N Block, Outer Circle, Connaught Place, New Delhi",
        contact: "+91-1123321234",
        openingHours: "12:00 PM - 11:00 PM",
        capacity: 120,
        specialFeatures: ["Outdoor seating", "Valet parking", "Private dining area"],
        popularDishes: ["Cajun Spiced Potatoes", "Ghost Wings", "Peri Peri Chicken"],
        averageCost: "₹1600 for two people",
        bookingSlots: {
          weekday: ["12:00", "12:30", "13:00", "13:30", "14:00", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"],
          weekend: ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"]
        }
      }
    ],
    bangalore: [
      {
        id: "blr-001",
        name: "Barbeque Nation - Indiranagar",
        address: "607, 2nd Floor, CMH Road, Indiranagar, Bengaluru",
        contact: "+91-8041234567",
        openingHours: "12:00 PM - 11:00 PM",
        capacity: 100,
        specialFeatures: ["Rooftop dining", "Corporate bookings", "Valet service"],
        popularDishes: ["Paneer Tikka", "Tandoori Prawns", "Grilled Fish"],
        averageCost: "₹1500 for two people",
        bookingSlots: {
          weekday: ["12:00", "12:30", "13:00", "13:30", "14:00", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"],
          weekend: ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"]
        }
      }
    ]
  },
  faqs: [
    {
      question: "Do you offer vegan options?",
      answer: "Yes, we have a variety of vegan options available."
    }
  ],
  bookings: []
};

module.exports = knowledgeBase;