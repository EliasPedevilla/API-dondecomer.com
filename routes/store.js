const express = require('express');

const {
  createSingleStore,
  getAllStores,
  getSingleStore,
  updateSingleStore
} = require('../controllers/store');
const { isAdmin, isAuth } = require('../middlewares');

const router = express.Router();

router.get('/', getAllStores);
router.get('/:id', getSingleStore);
router.put('/', isAuth, updateSingleStore);
router.post('/', isAuth, createSingleStore);

module.exports = router;