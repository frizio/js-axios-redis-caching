const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({'version': '1.1.0'});
});

module.exports = router;
