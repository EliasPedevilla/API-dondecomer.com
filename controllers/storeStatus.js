const { success, error, serverError } = require('../helpers')
const services = require('../services')
const { StoreStatus } = require('../models')

const createSingleStoreStatus = async (req, res) => {
  const { name } = req.body;

  try {
    const data = await services.createSingle(StoreStatus, { name });

    success({
      res,
      message: 'store status created',
      data,
      status: 201,
    });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

const getAllStoreStatus = async (req, res) => {
  try {
    const data = await services.getAll(StoreStatus)
    success({
      res,
      message: 'list of all store status',
      data,
      status: 200,
    });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

const updateSingleStoreStatus = async (req, res) => {
  const { storeStatusId } = req.params

  const { name } = req.body;

  try {
    const data = await services.updateSingle(StoreStatus, storeStatusId, { name });

    (data[0] === 0)
      ? error({ res, message: 'store status not found', status: 404 })
      : success({
        res,
        message: 'store status updated',
        status: 200,
      });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

const deleteSingleStoreStatus = async (req, res) => {
  const { storeStatusId } = req.params
  try {
    const data = await services.deleteSingle(StoreStatus, storeStatusId)

    if (data === 0) return error({ res, message: 'story status not found', status: 404 })
    success({
      res,
      message: 'store status deleted',
      status: 200,
    });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

module.exports = {
  createSingleStoreStatus,
  getAllStoreStatus,
  updateSingleStoreStatus,
  deleteSingleStoreStatus
}
