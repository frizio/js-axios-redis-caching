const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('<h1>Demo Express API</h1>');
});

module.exports = router;
