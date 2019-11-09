module.exports = (sequelize, type) => {
    const Members = sequelize.define('member', {
        id: {type: type.INTEGER, primaryKey:true, autoIncrement: true},
        name: {type: type.STRING, notNull:true},
        last_name: type.STRING,
        address: type.STRING,
        phone: type.STRING,
        status: type.BOOLEAN
    });
  
    return Members;
  };