const express = require('express');
const router = express.Router();
const genresController = require('../controllers/genre/genresController');

router.get('/', genresController.list);

router.get('/:id', genresController.index);

router.post('/', genresController.create);

router.put('/:id', genresController.update);

router.delete('/:id', genresController.destroy);

module.exports = router;