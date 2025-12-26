const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
  consultantName: String,
  consultationType: String,
  date: String,
  startTime: String,
  endTime: String,
  isBooked: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Slot", slotSchema);
