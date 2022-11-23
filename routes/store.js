const express = require('express');

const {
  createSingleStore,
  getAllStores,
  getSingleStore,
  updateSingleStore
} = require('../controllers/store');
const { isAuth, userOwnership } = require('../middlewares');

const router = express.Router();

router.get('/', getAllStores);
router.get('/:id', getSingleStore);
router.put('/', isAuth, userOwnership, updateSingleStore);
router.post('/', isAuth, userOwnership, createSingleStore);

module.exports = router;