const express = require('express');
const storeStatusController = require('../controllers/storeStatus');
const { isAdmin, isAuth } = require('../middlewares');

const router = express.Router();

router.post('/', isAuth, isAdmin, storeStatusController.createSingleStoreStatus);
router.get('/', storeStatusController.getAllStoreStatus);
router.put('/:storeStatusId', isAuth, isAdmin, storeStatusController.updateSingleStoreStatus);
router.delete('/:storeStatusId', isAuth, isAdmin, storeStatusController.deleteSingleStoreStatus);


module.exports = router;
