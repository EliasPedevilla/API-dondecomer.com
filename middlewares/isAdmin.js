const { error } = require("../helpers")

module.exports = (req, res, next) => {
  const { roleId } = req.userData

  return (roleId !== 3)
    ? error({ res, message: 'request unauthorized, you need to be admin' })
    : next()
}