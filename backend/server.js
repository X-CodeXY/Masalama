const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const motherRoutes = require("./routes/mothers");
app.use("/api/mothers", motherRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("Maternal Health API is running...");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
