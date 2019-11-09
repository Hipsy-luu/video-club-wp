const { Copie } = require('../../sequelize');

function list(req, res, next){
  Copie.findAll({}).then(objects => res.json(objects));
}

function index(req, res, next){
  let id = req.params.id;
  Copie.findByPk(id, {}).then(object => res.json(object));
}

function create(req, res, next){
  let copie = new Object;
  copie.number = req.body.number;
  copie.format = req.body.format;
  copie.movie_id = req.body.movie_id;
  copie.status = req.body.status;
  Copie.create(copie).then(copie => res.json(copie));
}

function update(req, res, next){
  let id = req.params.id;
  Copie.findByPk(id, {}).then((object) =>{
    object.number = req.body.number ? req.body.number : object.number;
    object.format = req.body.format ? req.body.format : object.format;
    object.movie_id = req.body.movie_id ? req.body.movie_id : object.movie_id;
    object.status = req.body.status ? req.body.status : object.status;
    object.update({'number':object.number, 'format':object.format, 'movie_id':object.movie_id,'status':object.status})
    .then( object => res.json(object));
  });
}

function destroy(req, res, next){
  let id = req.params.id;
  Copie.destroy({ where: {id: id}}).then( object => res.json(object));
}

module.exports = {
  index, list, create, update, destroy
}