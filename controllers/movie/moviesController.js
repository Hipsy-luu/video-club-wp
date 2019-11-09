const { Movie } = require('../../sequelize');

function list(req, res, next){
  Movie.findAll({}).then(objects => res.json(objects));
}

function index(req, res, next){
  let id = req.params.id;
  Movie.findByPk(id, {}).then(object => res.json(object));
}

function create(req, res, next){
  let movie = new Object;
  movie.title = req.body.title;
  movie.genre_id = req.body.genre_id;
  movie.director_id = req.body.director_id;
  Movie.create(movie).then(movie => res.json(movie));
}

function update(req, res, next){
  let id = req.params.id;
  Movie.findByPk(id, {}).then((object) =>{
    object.title = req.body.title ? req.body.title : object.title;
    object.genre_id = req.body.genre_id ? req.body.genre_id : object.genre_id;
    object.director_id = req.body.director_id ? req.body.director_id : object.director_id;
    object.update({'title':object.title, 'genre_id':object.genre_id, 'director_id':object.director_id})
    .then( object => res.json(object));
  });
}

function destroy(req, res, next){
  let id = req.params.id;
  Movie.destroy({ where: {id: id}}).then( object => res.json(object));
}

module.exports = {
  index, list, create, update, destroy
}