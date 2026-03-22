const express = require("express");
const app = express();

const connectDB = require("./config/db");
require("dotenv/config");

connectDB();

app.use(express.json());

const musicRoutes = require("./routes/music");

app.use("./", musicRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = 4300;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
