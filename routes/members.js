const express = require('express');
const router = express.Router();
const membersController = require('../controllers/member/membersController');

router.get('/', membersController.list);

router.get('/:id', membersController.index);

router.post('/', membersController.create);

router.put('/:id', membersController.update);

router.delete('/:id', membersController.destroy);

module.exports = router;