const { success, error, serverError } = require('../helpers')
const services = require('../services')
const { ProductCategory } = require('../models')

const createSingleProductCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const data = await services.createSingle(ProductCategory, { name });

    success({
      res,
      message: 'product category created',
      data,
      status: 201,
    });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

const getAllProductCategories = async (req, res) => {
  try {
    const data = await services.getAll(ProductCategory)
    success({
      res,
      message: 'list of all product categories',
      data,
      status: 200,
    });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

const updateSingleProductCategory = async (req, res) => {
  const { productCategoryId } = req.params

  const { name } = req.body;

  try {
    const data = await services.updateSingle(ProductCategory, productCategoryId, { name });

    (data[0] === 0)
      ? error({ res, message: 'category not found', status: 404 })
      : success({
        res,
        message: 'category updated',
        status: 200,
      });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

const deleteSingleProductCategory = async (req, res) => {
  const { productCategoryId } = req.params
  try {
    const data = await services.deleteSingle(ProductCategory, productCategoryId)

    if (data === 0) return error({ res, message: 'category not found', status: 404 })
    success({
      res,
      message: 'category deleted',
      status: 200,
    });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

module.exports = {
  createSingleProductCategory,
  getAllProductCategories,
  updateSingleProductCategory,
  deleteSingleProductCategory
}
