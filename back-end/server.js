const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies

// Example API route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.post('/api/data', (req, res) => {
  const { name } = req.body; // Extract data from the request body
  res.status(200).json({ message: `Hello, ${name}!` });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
