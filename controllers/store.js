const {
  success,
  error,
  serverError,
} = require('../helpers');

const services = require('../services');

const { Store } = require('../models')

const createSingleStore = async (req, res) => {
  const userId = 1

  const {
    name,
    username,
    description,
    phone,
    address,
    locationCoordinates,
    categoryId,
    facebookUrl,
    instagramUrl,
    twitterUrl,
  } = req.body;

  try {
    const data = await services.createSingle(Store, {
      userId,
      name,
      username,
      description,
      phone,
      address,
      locationCoordinates,
      categoryId,
      facebookUrl,
      instagramUrl,
      twitterUrl,
    });

    success({
      res,
      message: 'store created',
      data,
      status: 201,
    });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

const getAllStores = async (req, res) => {
  try {
    const stores = await services.getAll(Store)
    success({
      res,
      message: 'list of all stores',
      data: stores,
      status: 200,
    });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

const getSingleStore = async (req, res) => {
  const { storeId } = req.params
  try {
    const data = await services.getSingle(Store, { id: storeId })
    success({
      res,
      message: 'store detail',
      data,
      status: 200,
    });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

const updateSingleStore = async (req, res) => {
  const { storeId } = req.params

  const {
    name,
    username,
    description,
    phone,
    address,
    locationCoordinates,
    categoryId,
    facebookUrl,
    instagramUrl,
    twitterUrl,
  } = req.body;

  try {
    const data = await services.updateSingle(Store, storeId, {
      name,
      username,
      description,
      phone,
      address,
      locationCoordinates,
      categoryId,
      facebookUrl,
      instagramUrl,
      twitterUrl,
    });

    (data[0] === 0)
      ? error({ res, message: 'store not found', status: 404 })
      : success({
        res,
        message: 'store updated',
        status: 200,
      });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

module.exports = {
  createSingleStore,
  getAllStores,
  getSingleStore,
  updateSingleStore,
}
