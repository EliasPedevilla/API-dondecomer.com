const express = require('express');
const productCategoryController = require('../controllers/productCategory');
const { isAdmin, isAuth } = require('../middlewares');

const router = express.Router();

router.post('/', isAuth, productCategoryController.createSingleProductCategory);
router.get('/', productCategoryController.getAllProductCategories);
router.put('/:productCategoryId', isAuth, isAdmin, productCategoryController.updateSingleProductCategory);
router.delete('/:productCategoryId', isAuth, isAdmin, productCategoryController.deleteSingleProductCategory);


module.exports = router;
