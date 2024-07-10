const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const connectDB = require("./libs/db");
// const TicketRoutes = require("./routes/Ticket");
connectDB();

const app = express();
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));
// app.use("/api", TicketRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
