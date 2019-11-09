const express = require('express');
const router = express.Router();
const bookingsController = require('../controllers/booking/bookingsController');

router.get('/', bookingsController.list);

router.get('/:id', bookingsController.index);

router.post('/', bookingsController.create);

router.put('/:id', bookingsController.update);

router.delete('/:id', bookingsController.destroy);

module.exports = router;