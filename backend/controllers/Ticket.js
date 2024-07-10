const Ticket = require("../models/Ticket");

// Add Ticket
exports.addTicket = async (req, res) => {
  try {
    const { firstName, lastName, phNumber, email, message } = req.body;

    const newTicket = await Ticket.create({
      firstName,
      lastName,
      phNumber,
      email,
      message,
    });

    res.status(200).json({
      success: true,
      message: "Ticket added successfully",
      ticket: newTicket,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Get All Tickets
exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();

    res.status(200).json({
      success: true,
      tickets,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
