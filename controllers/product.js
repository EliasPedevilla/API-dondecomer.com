const { success, error, serverError } = require('../helpers/index')
const { getAll } = require('../services/product')


const getAllProducts = async () => {
  await getAll()
}

module.exports = { getAllProducts }
