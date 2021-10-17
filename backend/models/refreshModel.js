const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const refreshSchema = new Schema(
  {
    token: { type: String, required: true },
    userID: { type: Schema.Types.ObjectID, ref: "User" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Refresh", refreshSchema, "tokens");