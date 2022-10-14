const { success, error, serverError, encryptPassword } = require('../helpers')
const services = require('../services')
const { User, UserRole } = require('../models')

const getAllUsers = async (req, res) => {
  try {
    const users = await services.getAll(User)
    success({
      res,
      message: 'list of all users',
      data: users,
      status: 200,
    });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

const getSingleUser = async (req, res) => {
  const { userId } = req.params
  try {
    const data = await services.getSingle(User, { id: userId })
    success({
      res,
      message: 'user detail',
      data,
      status: 200,
    });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

const updateSingleUser = async (req, res) => {
  const { userId } = req.params

  const {
    name,
    lastname,
    photo
  } = req.body;

  try {
    const data = await services.updateSingle(User, userId, {
      name,
      lastname,
      photo
    });

    (data[0] === 0)
      ? error({ res, message: 'user not found', status: 404 })
      : success({
        res,
        message: 'user updated',
        status: 200,
      });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

const deleteSingleUser = async (req, res) => {
  const { userId } = req.params
  try {
    const data = await services.deleteSingle(User, userId)

    if (data === 0) return error({ res, message: 'user not found', status: 404 })
    success({
      res,
      message: 'user deleted',
      status: 200,
    });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

const changeUserPassword = async (req, res) => {
  const { userId } = req.params

  const { password } = req.body;

  try {
    const encrypted = await encryptPassword(password)

    const data = await services.updateSingle(User, userId, {
      password: encrypted
    });

    (data[0] === 0)
      ? error({ res, message: 'user not found', status: 404 })
      : success({
        res,
        message: 'password updated',
        status: 200,
      });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

const changeUserRole = async (req, res) => {
  const { userId } = req.params

  const { roleId } = req.body;

  const role = await services.getSingle(UserRole, { id: roleId })

  try {
    const data = await services.updateSingle(User, userId, {
      roleId
    });

    (data[0] === 0)
      ? error({ res, message: 'user not found', status: 404 })
      : success({
        res,
        message: `role updated to ${role.name}`,
        status: 200,
      });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

module.exports = {
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
  changeUserPassword,
  changeUserRole
}