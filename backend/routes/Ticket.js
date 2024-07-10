const express = require("express");
const { addTicket, getAllTickets } = require("../controllers/Ticket");
const router = express.Router();

// Add Ticket route
router.post("/addTicket", addTicket);

// Get All Tickets route
router.get("/getAllTickets", getAllTickets);

module.exports = router;
