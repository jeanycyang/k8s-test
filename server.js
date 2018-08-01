const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world~');
});

app.get('/health', (req, res) => {
  res.send('I\'m healthy!');
});

app.get('/crashme', (req, res) => {
  // Oh no!
  console.error('oh no!');
  process.exit(500);
  res.sendStatus(500);
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
