const Sequelize = require('sequelize');
const log4js = require('log4js');
const logger = log4js.getLogger();

const actorModel = require('./models/actor');
const bookingModel = require('./models/booking');
const memberModel = require('./models/member');
const moviesActorsModel = require('./models/moviesactors');
const movieModel = require('./models/movie');
const copieModel = require('./models/copie');
const genreModel = require('./models/genre');
const directorModel = require('./models/director');

logger.level = 'debug';


const sequelize = new Sequelize('video-club', 'root','15Quince', {
  host:'localhost',
  dialect:'mysql'
});

const Actor = actorModel(sequelize, Sequelize);
const Booking = bookingModel(sequelize, Sequelize);
const Member = memberModel(sequelize, Sequelize);
const MoviesActors = moviesActorsModel(sequelize, Sequelize);
const Movie = movieModel(sequelize, Sequelize);
const Copie = copieModel(sequelize, Sequelize);
const Genre = genreModel(sequelize, Sequelize);
const Director = directorModel(sequelize, Sequelize);

//Referencia directa generos(uno)-movies(muchos)
//Genre.hasMany(Movie, {as: 'movies'});
Movie.belongsTo(Genre, {foreignKey: 'genre_id'});

//Referencia directa directors(uno)-movies(muchos)
Movie.belongsTo(Director, {foreignKey: 'director_id'});

//Referencia directa movies(uno)-copies(muchos)
Copie.belongsTo(Movie, {foreignKey: 'movie_id'});

//Referencia directa copie(uno)-booking(muchos)
Booking.belongsTo(Copie, {foreignKey: 'copy_id'});
//Referencia directa member(uno)-booking(muchos)
Booking.belongsTo(Member, {foreignKey: 'member_id'});


MoviesActors.belongsTo(Movie, {foreignKey: 'movie_id'});
MoviesActors.belongsTo(Actor, {foreignKey: 'actor_id'});

//moviesActors es el nombre de la tabla
Movie.belongsToMany(Actor, { 
  through: 'moviesActors',
  foreignKey: 'actor_id',
  as: 'actors'
});

Actor.belongsToMany(Movie, {
  through: 'moviesActors',
  foreignKey: 'movie_id',
  as: 'movies'
});


sequelize.sync({
  force: true
}).then(()=>{
  logger.info("Database created !!!!");
});

module.exports = {
  Actor, Genre, Movie
};
