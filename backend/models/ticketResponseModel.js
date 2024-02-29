const mongoose = require('mongoose');

const ticketReponseSchema = new mongoose.Schema({
  id: {type: Number, default: 0, unique: true},
  ticketId: Number,
  response: String,
  status: String
});

const TicketReponse = mongoose.model('TicketReponse', ticketReponseSchema);
module.exports = TicketReponse