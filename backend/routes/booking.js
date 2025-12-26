const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const Slot = require("../models/Slot");

// book slot
router.post("/book", async (req, res) => {
  const { userId, slotId } = req.body;

  const slot = await Slot.findById(slotId);
  if (!slot || slot.isBooked) {
    return res.status(400).json({ message: "Slot unavailable" });
  }

  slot.isBooked = true;
  await slot.save();

  const booking = await Booking.create({
    userId,
    slotId,
    consultantName: slot.consultantName,
    consultationType: slot.consultationType,
    date: slot.date,
    startTime: slot.startTime,
    endTime: slot.endTime,
    status: "BOOKED"
  });

  res.json({ message: "Slot booked", booking });
});

// get bookings of user
router.get("/user/:userId", async (req, res) => {
  const bookings = await Booking.find({
    userId: req.params.userId,
    status: "BOOKED"
  });
  res.json(bookings);
});

// cancel booking
router.post("/cancel", async (req, res) => {
  const { bookingId } = req.body;

  const booking = await Booking.findById(bookingId);
  if (!booking) return res.status(404).json({ message: "Not found" });

  booking.status = "CANCELLED";
  await booking.save();

  await Slot.findByIdAndUpdate(booking.slotId, { isBooked: false });

  res.json({ message: "Booking cancelled" });
});

module.exports = router;
