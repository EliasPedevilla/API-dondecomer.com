const {
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
  changeUserPassword,
  changeUserRole } = require('../controllers/user')
const express = require('express');
const { isAdmin, isAuth } = require('../middlewares');

const router = express.Router();

router.get('/', isAuth, isAdmin, getAllUsers);
router.get('/:userId', isAdmin, getSingleUser);
router.post('/changeRole/:userId', isAuth, isAdmin, changeUserRole);
router.put('/:userId', isAuth, updateSingleUser);
router.delete('/:userId', isAuth, deleteSingleUser);
router.post('/changePassword/:userId', isAuth, changeUserPassword);

module.exports = router;
