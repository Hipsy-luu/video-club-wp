const { Booking } = require('../../sequelize');

function list(req, res, next){
  Booking.findAll({}).then(objects => res.json(objects));
}

function index(req, res, next){
  let id = req.params.id;
  Booking.findByPk(id, {}).then(object => res.json(object));
}

function create(req, res, next){
  let bookin = new Object;
  bookin.date = req.body.date;
  bookin.member_id = req.body.member_id;
  bookin.copy_id = req.body.copy_id;
  Booking.create(bookin).then(bookin => res.json(bookin));
}

function update(req, res, next){
  let id = req.params.id;
  Booking.findByPk(id, {}).then((object) =>{
    object.date = req.body.date ? req.body.date : object.date;
    object.member_id = req.body.member_id ? req.body.member_id : object.member_id;
    object.copy_id = req.body.copy_id ? req.body.copy_id : object.copy_id;
    object.update({'date':object.date, 'member_id':object.member_id, "copy_id":object.copy_id})
    .then( object => res.json(object));
  });
}

function destroy(req, res, next){
  let id = req.params.id;
  Booking.destroy({ where: {id: id}}).then( object => res.json(object));
}

module.exports = {
  index, list, create, update, destroy
}