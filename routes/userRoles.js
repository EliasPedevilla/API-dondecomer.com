const express = require('express');
const userRoleController = require('../controllers/userrole');
const { isAdmin, isAuth } = require('../middlewares');

const router = express.Router();

router.get('/', isAuth, isAdmin, userRoleController.getAllUserRoles);
router.put('/:userRoleId', isAuth, isAdmin, userRoleController.updateSingleUserRole);


module.exports = router;
