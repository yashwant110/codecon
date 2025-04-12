// backend/index.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Default route
app.get('/', (req, res) => {
  res.send('🚀 CodeCon Backend is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Backend server running at http://localhost:${PORT}`);
});
