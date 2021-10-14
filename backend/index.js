require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5500;
const morgan = require("morgan");

const router = require("./routes/routes");
app.use(express.json());
app.use(morgan("dev"));
app.use(router);
app.get("/", (req, res) => {
  res.send("hello!");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
