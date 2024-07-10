const { default: mongoose } = require("mongoose");

// Define Ticket schema
const TicketSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  phNumber: { type: String },
  email: { type: String },
  message: { type: String },
  // Add other Ticket fields if needed
});

const Ticket = mongoose.model("Ticket", TicketSchema);
module.exports = Ticket;
