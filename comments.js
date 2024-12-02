// create web server
// create a route for comments
// when the route is hit, read the comments.json file
// and send the contents back to the client

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.static('public'));

app.get('/comments', (req, res) => {
  fs.readFile(path.join(__dirname, 'comments.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading comments file');
    } else {
      res.send(data);
    }
  });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});