const router = require('express').Router();

const axios = require("axios");
const redis = require("redis");

// Rick and Morty API Base URL
const BASE_URL = "https://rickandmortyapi.com/api";

router.get('/', (req, res) => {
  res.json({'version': '1.1.0'});
});

router.get('/character', async(req, res) => {
  // Fetching Data
  const response = await axios.get(BASE_URL + "/character");
  console.log(response.data);
  res.json([]);

});

module.exports = router;
