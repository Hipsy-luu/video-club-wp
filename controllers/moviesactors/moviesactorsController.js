const { MoviesActors } = require('../../sequelize');

function list(req, res, next){
  MoviesActors.findAll({}).then(objects => res.json(objects));
}

function index(req, res, next){
  let id = req.params.id;
  MoviesActors.findByPk(id, {}).then(object => res.json(object));
}

function create(req, res, next){
  let movie = new Object;
  movie.movie_id = req.body.movie_id;
  movie.actor_id = req.body.actor_id;
  MoviesActors.create(movie).then(movie => res.json(movie));
}

function update(req, res, next){
  let id = req.params.id;
  MoviesActors.findByPk(id, {}).then((object) =>{
    object.movie_id = req.body.movie_id ? req.body.movie_id : object.movie_id;
    object.actor_id = req.body.actor_id ? req.body.actor_id : object.actor_id;
    object.update({'movie_id':object.movie_id, 'actor_id':object.actor_id})
    .then( object => res.json(object));
  });
}

function destroy(req, res, next){
  let id = req.params.id;
  MoviesActors.destroy({ where: {id: id}}).then( object => res.json(object));
}

module.exports = {
  index, list, create, update, destroy
}