const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

function getCookie(cookieString, name) {
    if (cookieString) {
      let cookie = cookieString.split(';').find(cookie => cookie.trim().startsWith(`${name}=`));
      if (cookie) {
        return parseInt(cookie.split('=')[1]); // Parse the cookie value as an integer
      }
    }
    return 0;
  }
  
// Serve HTML files
app.get('/', (req, res) => {
    let totalViews = getCookie(req.headers.cookie, 'views');
    totalViews++;
    let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
    html = html.replace('{{views}}', totalViews)
    res.setHeader('Set-Cookie', `views=${totalViews}`)
    res.send(html);
});

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname)));

app.get('/cats', (req, res) => {
  res.sendFile(path.join(__dirname, 'cats.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});