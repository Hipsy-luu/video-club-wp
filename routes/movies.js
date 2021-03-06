const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movie/moviesController');

router.get('/', moviesController.list);

router.get('/:id', moviesController.index);

router.post('/', moviesController.create);

router.put('/:id', moviesController.update);

router.delete('/:id', moviesController.destroy);

module.exports = router;
