module.exports = (sequelize, type) => {
  const MoviesActors = sequelize.define('moviesActors', {
    id: {type: type.INTEGER, primaryKey:true, autoIncrement: true},
    movie_id: type.INTEGER,
    actor_id: type.INTEGER
  });

  return MoviesActors;
};
