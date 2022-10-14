const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('DONDESCOMER.COM API')
});

module.exports = router;
