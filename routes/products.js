const express = require('express');
const productController = require('../controllers/product');
const { isAdmin, isAuth, userOwnership } = require('../middlewares');

const router = express.Router();

router.post('/', isAuth, productController.createSingleProduct);
router.get('/', productController.getAllProducts);
router.get('/:productId', productController.getSingleProduct);
router.put('/:productId', isAuth, userOwnership, productController.updateSingleProduct);
router.delete('/:productId', isAuth, userOwnership, productController.deleteSingleProduct);


module.exports = router;
