const {
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
  changeUserPassword,
  changeUserRole } = require('../controllers/user')
const express = require('express');
const { isAdmin, isAuth, userOwnership } = require('../middlewares');

const router = express.Router();

router.get('/', isAuth, isAdmin, getAllUsers);
router.get('/:userId', isAuth, userOwnership, getSingleUser);
router.post('/changeRole/:userId', isAuth, isAdmin, changeUserRole);
router.put('/:userId', isAuth, userOwnership, updateSingleUser);
router.delete('/:userId', isAuth, userOwnership, deleteSingleUser);
router.post('/changePassword/:userId', isAuth, userOwnership, changeUserPassword);

module.exports = router;
