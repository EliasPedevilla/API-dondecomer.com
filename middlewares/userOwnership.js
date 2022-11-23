const { error, serverError } = require("../helpers")
const services = require('../services')

module.exports = async (req, res, next) => {
  const { userdata } = req
  const { userId, storeId, productId } = req.params

  if (userData.roleId === 3) return next()

  if (userId && userId === userdata.id) return next()

  try {

    if (storeId) {
      const store = await services.getSingle(Store, { id: storeId })
      if (!store) return error({ res, message: 'store not found' })
      if (store.userId === userdata.id) return next()
    }

    if (productId) {
      const product = await services.getSingle(Store, { id: productId })
      if (!product) return error({ res, message: 'product not found' })

      const store = await services.getSingle(Store, { id: product.storeId })
      if (!store) return error({ res, message: 'store not found' })
      if (store.userId === userdata.id) return next()
      return error({ res, message: 'reques unauthorized, you are not an owner' })
    }
  }
  catch (err) {
    serverError({ res, message: err.message })
  }

}