const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  slotId: { type: mongoose.Schema.Types.ObjectId, ref: "Slot" },
  consultantName: String,
  consultationType: String,
  date: String,
  startTime: String,
  endTime: String,
  status: String
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);
