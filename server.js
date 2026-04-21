const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv/config");

const connectDB = require("./config/db");
app.use(cors());

connectDB();
app.use(express.json());

const musicRoutes = require("./routes/music");

app.use("/music", musicRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = 4300;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
