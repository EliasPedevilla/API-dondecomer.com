const { success, error, serverError } = require('../helpers')
const services = require('../services')
const { StoreCategory } = require('../models')

const createSingleStoreCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const data = await services.createSingle(StoreCategory, { name });

    success({
      res,
      message: 'store category created',
      data,
      status: 201,
    });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

const getAllStoreCategories = async (req, res) => {
  try {
    const data = await services.getAll(StoreCategory)
    success({
      res,
      message: 'list of all store categories',
      data,
      status: 200,
    });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

const updateSingleStoreCategory = async (req, res) => {
  const { storeCategoryId } = req.params

  const { name } = req.body;

  try {
    const data = await services.updateSingle(StoreCategory, storeCategoryId, { name });

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

const deleteSingleStoreCategory = async (req, res) => {
  const { storeCategoryId } = req.params
  try {
    const data = await services.deleteSingle(StoreCategory, storeCategoryId)

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
  createSingleStoreCategory,
  getAllStoreCategories,
  updateSingleStoreCategory,
  deleteSingleStoreCategory
}
