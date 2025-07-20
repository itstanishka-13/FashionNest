const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const products = require('../data/products'); // ✅ Only once

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Route: Homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Route: Products API
app.get('/api/products', (req, res) => {
  res.json(products); // ✅ Fixed typo
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
