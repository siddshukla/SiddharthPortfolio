const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

const knowledgeRoutes = require('./routes/knowledgeBase');

app.use(cors());
app.use(express.json());
app.use('/api', knowledgeRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});