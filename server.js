const express = require('express');
const fs = require('fs');
const ejs = require('ejs')
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname)));

// Serve HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/cats', (req, res) => {
  res.sendFile(path.join(__dirname, 'cats.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

let totalViews = 0;

app.get('/', (req, res) => {
  totalViews++;
  let html = fs.readFileSync(__dirname + '/index.html', 'utf8');
  html = ejs.render(html, {views: totalViews});
  res.send(html);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});