const express = require('express');
const router = express.Router();
const actorsController = require('../controllers/actor/actorsController');

router.get('/', actorsController.list);

router.get('/:id', actorsController.index);

router.post('/', actorsController.create);

router.put('/:id', actorsController.update);

router.delete('/:id', actorsController.destroy);

module.exports = router;
