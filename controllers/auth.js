const {
  success,
  error,
  serverError,
  encryptPassword,
  comparePassword,
  generateToken,
} = require('../helpers');

const jwt = require('jsonwebtoken');

const services = require('../services');

const { User, Store } = require('../models')

const register = async (req, res) => {
  const { name, lastName, email, password } = req.body
  try {
    const encrypted = await encryptPassword(password);

    const user = await services.createSingle(User, { name, lastName, email, password: encrypted, roleId: 1, });

    await services.createSingle(Store, { userId: user.id });

    const token = await generateToken({ userId: user.id, roleId: user.roleId });

    if (user && !token) return error({ res, message: 'the user as created correctly but has error ocurred in the token creation. Please login' })

    success({
      res,
      message: 'user created',
      data: { user, token },
      status: 201,
    });
  } catch (err) {
    serverError({ res, message: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { userId } = req.userData;

    const data = await services.getSingle(User, { id: userId });

    (data)
      ? success({ res, message: 'user data', data })
      : error({ res, message: 'user not found' })
  } catch (err) {
    serverError({ res, message: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await services.getSingle(User, { email });

    if (!user) return error({ res, message: 'user not found', status: 404 });

    if (comparePassword(password, user.password)) {
      const token = await generateToken({
        id: user.id,
        name: user.name,
        roleId: user.roleId
      }
      );
      return success({ res, message: 'successfull login', data: token, status: 200, });
    }
    return error({ res, message: 'invalid password', status: 401 });
  } catch (err) {
    return serverError({ res, message: err.message });
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body

  try {
    const user = await services.getSingle(User, { email })

    if (!user) return error({ res, message: 'user not found' })

    const token = await jwt.sign({ id: user.dataValues.id }, process.env.SECRET_JWT_RESET, {
      expiresIn: '1h',
    })

    if (!token) return error({ res, message: 'error occurred in token generation' })

    /* SEND MAIL 
      to email
      link: http:localhost/restorePassword?t=token
    */
    success({ res, message: 'check your email for a link to reset password', data: token })

  } catch (err) {
    return serverError({ res, message: err.message });
  }
}

const newPassword = async (req, res) => {
  const { password } = req.body
  const { reset } = req.headers

  try {
    const { id } = await jwt.verify(reset, process.env.SECRET_JWT_RESET)

    const encrypted = await encryptPassword(password);

    const data = services.updateSingle(User, id, { password: encrypted })

    if (data[0] === 0) return error({ res, message: 'user not found' })

    success({ res, message: 'password created' })

  } catch (err) {
    return serverError({ res, message: err.message });
  }
}

module.exports = {
  register,
  getUser,
  login,
  forgotPassword,
  newPassword
};
