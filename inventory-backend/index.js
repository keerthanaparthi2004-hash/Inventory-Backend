const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const inventoryRoutes = require('./routes/inventoryRoutes');
const errorHandler = require('./middleware/errorHandler');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "Inventory API is running" });
});

app.use('/api/inventory', inventoryRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));