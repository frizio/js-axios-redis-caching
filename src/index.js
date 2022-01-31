const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const responseTime = require("response-time");

require('dotenv').config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));
app.use(responseTime());
app.use(cors());
// app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Demo Express API</h1>');
});

app.get('/api', (req, res) => {
  res.json({'nome': 'ciao'});
});

app.listen(PORT);

console.log("server listen on port", PORT);
