const express = require("express");
const router = express.Router();
const Slot = require("../models/Slot");

// get all slots
router.get("/", async (req, res) => {
  const slots = await Slot.find();
  res.json(slots);
});

// create slot (admin)
router.post("/create", async (req, res) => {
  const slot = await Slot.create(req.body);
  res.json(slot);
});

module.exports = router;
