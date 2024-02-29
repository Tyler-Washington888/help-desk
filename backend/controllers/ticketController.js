const asyncHandler = require("express-async-handler");
const Ticket = require('../models/ticketModel')
const TicketResponse = require('../models/ticketResponseModel')

// @desc Get tickets
// @route GET /tickets
const getTickets = asyncHandler(async (req, res) => {
    const tickets = await Ticket.find()
    .select('id name description status -_id')
    .sort({id: 'desc'})

    res.status(200).json(tickets)
});

// @desc Get ticket responses 
// @route GET /tickets/:id
const getTicketResponses = asyncHandler(async (req, res) => {
    const ticketId = +req.params.id

    const ticketResponses = await TicketResponse.find({ticketId})
    .select('id response ticketId status -_id')
    .sort({ticketId: 'desc'})

    res.status(200).json(ticketResponses)
});

// @desc Create ticket
// @route POST /tickets
const createTicket = asyncHandler(async (req, res) => {
    let { name, description} = req.body;

    name = req.body?.name ? req.body.name : 'Unknown user'
    description = req.body?.description ? req.body.description : '' 

    const tickets = await Ticket.find().sort({id: 'desc'})
    const id = tickets.length ? tickets[0].id  + 1 : 1

    const newTicket = await Ticket.create({
        id,
        name,
        description,
        status: 'new',
      });

    res.status(200).json({message:'Ticket was successfully created'});
});

// @desc Update ticket
// @route POST /tickets/:id
const updateTicket = asyncHandler(async (req, res) => {
    const ticketId = +req.params.id
    let {response, status} = req.body;

    status = req.body?.status ?  req.body.status: 'in progress',
    response = req.body?.response ?  req.body.response : ''

    if (!(['new', 'in progress', 'resolved'].includes(status))){
        status = 'in progress'
    }

    const existingTicket = Ticket.find({id: ticketId})

    if (!existingTicket){
        return res.status(404).json({message: 'Ticket not found'});
    }

    const ticketResponses = await TicketResponse.find().sort({id: 'desc'})
    const id = ticketResponses.length ? ticketResponses[0].id  + 1 : 1

    const newReponse = await TicketResponse.create({
        id,
        status,
        response,
        ticketId 
      });

    await Ticket.findOneAndUpdate({id: ticketId}, {status});

    res.status(200).json({message: 'Ticket successfully updated'});
});


module.exports = {
    getTickets,
    getTicketResponses,
    createTicket,
    updateTicket
};