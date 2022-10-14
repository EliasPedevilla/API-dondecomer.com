const { success, error, serverError } = require('../helpers')
const services = require('../services')
const { Product, Store } = require('../models')

const createSingleProduct = async (req, res) => {
  const {
    name,
    description,
    photo,
    promotion,
    available,
    price,
    categoryId,
  } = req.body;

  try {
    const storeByUser = await services.getSingle(Store, { userId: req.userData.id })
    if (!storeByUser) return error({ res, message: 'store not found' })

    const storeId = storeByUser.dataValues.id
    console.log(storeId);
    const data = await services.createSingle(Product, {
      name,
      description,
      photo,
      promotion,
      available,
      price,
      categoryId,
      storeId
    });

    success({
      res,
      message: 'product created',
      data,
      status: 201,
    });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

const getAllProducts = async (req, res) => {
  try {
    const products = await services.getAll(Product)
    success({
      res,
      message: 'list of all products',
      data: products,
      status: 200,
    });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

const getSingleProduct = async (req, res) => {
  const { productId } = req.params
  try {
    const data = await services.getSingle(Product, { id: productId })
    if (!data) return error({ res, message: 'product not found' })

    success({
      res,
      message: 'product detail',
      data,
      status: 200,
    });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

const updateSingleProduct = async (req, res) => {
  const { productId } = req.params

  const {
    name,
    description,
    photo,
    promotion,
    available,
    price,
    categoryId,
  } = req.body;

  try {
    const data = await services.updateSingle(Product, productId, {
      name,
      description,
      photo,
      promotion,
      available,
      price,
      categoryId
    });

    (data[0] === 0)
      ? error({ res, message: 'product not found', status: 404 })
      : success({
        res,
        message: 'product updated',
        status: 200,
      });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

const deleteSingleProduct = async (req, res) => {
  const { productId } = req.params
  try {
    const data = await services.deleteSingle(Product, productId)

    if (data === 0) return error({ res, message: 'product not found', status: 404 })
    success({
      res,
      message: 'product deleted',
      status: 200,
    });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

module.exports = {
  createSingleProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct
}
