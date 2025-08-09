const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8000;

let code = require('./pair');

require('events').EventEmitter.defaultMaxListeners = 500;

// Comment out or define 'server' if needed
// const server = require('./server');
// app.use('/server', server);

app.use('/code', code);

app.use('/pair', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'pair.html'));
});

app.use('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'main.html'));
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Don't Forget To Give Star
Server running on http://localhost:${PORT}`);
});

module.exports = app;
