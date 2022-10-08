const { Product } = require('../models/index.js')

// const getAll = () => Product.findAll()

const getAll = () => Product.create({
  name: 'product 1',
  description: 'description 1',
  available: true,
  price: 23,
  categoryId: 1,
  storeId: 1
});

module.exports = {
  getAll
}