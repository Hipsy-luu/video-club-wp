module.exports = (sequelize, type) => {
  const Movie = sequelize.define('movie', {
    id: {type: type.INTEGER, primaryKey:true, autoIncrement: true},
    title: type.STRING,
    genre_id: type.INTEGER,
    director_id: type.INTEGER
  });

  return Movie;
};
