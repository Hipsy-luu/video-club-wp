const express = require('express');
const router = express.Router();
const moviesactorssController = require('../controllers/moviesactors/moviesactorsController');

router.get('/', moviesactorssController.list);

router.get('/:id', moviesactorssController.index);

router.post('/', moviesactorssController.create);

router.put('/:id', moviesactorssController.update);

router.delete('/:id', moviesactorssController.destroy);

module.exports = router;