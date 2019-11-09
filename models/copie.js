module.exports = (sequelize, type) => {
    const Copie = sequelize.define('copie', {
        id: {type: type.INTEGER, primaryKey:true, autoIncrement: true},
        number: type.INTEGER,
        format: type.ENUM('value 1', 'value 2'),
        movie_id: type.INTEGER,
        status: type.ENUM('value 1', 'value 2')
    });
  
    return Copie;
  };
  