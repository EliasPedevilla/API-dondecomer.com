const express = require('express');
const storeCategoryController = require('../controllers/storeCategory');
const { isAdmin, isAuth } = require('../middlewares');

const router = express.Router();

router.post('/', isAuth, storeCategoryController.createSingleStoreCategory);
router.get('/', storeCategoryController.getAllStoreCategories);
router.put('/:storeCategoryId', isAuth, isAdmin, storeCategoryController.updateSingleStoreCategory);
router.delete('/:storeCategoryId', isAuth, storeCategoryController.deleteSingleStoreCategory);


module.exports = router;
