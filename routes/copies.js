const express = require('express');
const router = express.Router();
const copiesController = require('../controllers/copie/copiesController');

router.get('/', copiesController.list);

router.get('/:id', copiesController.index);

router.post('/', copiesController.create);

router.put('/:id', copiesController.update);

router.delete('/:id', copiesController.destroy);

module.exports = router;