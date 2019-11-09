const express = require('express');
const router = express.Router();
const directorsController = require('../controllers/director/directorsController');

router.get('/', directorsController.list);

router.get('/:id', directorsController.index);

router.post('/', directorsController.create);

router.put('/:id', directorsController.update);

router.delete('/:id', directorsController.destroy);

module.exports = router;