const express = require('express')
const router = express.Router()
const {getTickets, createTicket, getTicketResponses, updateTicket} = require('../controllers/ticketController')

router.route('/').get(getTickets).post(createTicket)
router.route('/:id').get(getTicketResponses).put(updateTicket)

module.exports = router;