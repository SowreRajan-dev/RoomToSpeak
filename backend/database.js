const mongoose = require("mongoose");
function DbConnect() {
  const DB_CONNECT = process.env.DB_CONNECT;
  mongoose.connect(DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    console.log("Database Connected...");
  });
}
module.exports = DbConnect;
