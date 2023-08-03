const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  name: String,
  company: String,
  description: String,
  location: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Job", jobSchema);
