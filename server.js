const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser')

  const port = process.env.PORT || 5000;

  app.get('/api/hello', (req, res) => {
    res.send({ express: process.env.Name || 'Hello From Express I guesss' });
  });

  app.get('/test', (req, res) => {
      res.send('testing completed')
  })

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
  
    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }
  
  app.listen(port, () => console.log(`Listening on port ${port}`));