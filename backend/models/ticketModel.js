const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  id: { type: Number, unique: true},
  name: String,
  description: String,
  status: String
});


const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket