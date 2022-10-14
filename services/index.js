const createSingle = (model, data) => model.create(data);

const getAll = (model) => model.findAll()

const getSingle = (model, parameter) => model.findOne({ where: parameter })

const updateSingle = (model, id, data) => model.update(data, { where: { id } });

const deleteSingle = (model, id) => model.destroy({ where: { id } });


module.exports = {
  createSingle,
  getAll,
  getSingle,
  updateSingle,
  deleteSingle
}