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

// Routes
app.use(require('./routes/index.js'));
app.use('/api', require('./routes/api.js'));

app.listen(PORT);

console.log("server listen on port", PORT);
