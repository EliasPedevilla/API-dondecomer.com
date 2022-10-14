const { success, error, serverError } = require('../helpers')
const services = require('../services')
const { UserRole } = require('../models')

const getAllUserRoles = async (req, res) => {
  try {
    const data = await services.getAll(UserRole)
    success({
      res,
      message: 'list of all user roles',
      data,
      status: 200,
    });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

const updateSingleUserRole = async (req, res) => {
  const { userRoleId } = req.params

  const { name } = req.body;

  try {
    const data = await services.updateSingle(UserRole, userRoleId, { name });

    (data[0] === 0)
      ? error({ res, message: 'user role not found', status: 404 })
      : success({
        res,
        message: 'user role updated',
        status: 200,
      });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

module.exports = {
  getAllUserRoles,
  updateSingleUserRole,
}
