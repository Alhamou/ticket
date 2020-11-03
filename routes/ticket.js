const express = require('express');
const router = express.Router();

const ticketController = require('../controllers/ticketController')

/* GET  all Tickets */
router.get('/', ticketController.getAll);

/* create new ticket   */
router.post('/', ticketController.createTicket);

module.exports = router;
