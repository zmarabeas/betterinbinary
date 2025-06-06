// Vercel serverless function entry point
const express = require('express');
const path = require('path');

const app = express();

// Serve static files from dist
app.use(express.static(path.join(__dirname, '../dist')));

// Handle all routes by serving the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

module.exports = app;