const express = require("express");
const router = express.Router();

let mothers = [];

router.post("/register", (req, res) => {
  const { name, phone, village, expectedDelivery } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ message: "Name and phone are required" });
  }

  const newMother = {
    id: mothers.length + 1,
    name,
    phone,
    village,
    expectedDelivery,
    registeredAt: new Date(),
  };

  mothers.push(newMother);
  res.status(201).json({
    message: "Mother registered successfully",
    newMother,
  });
});

router.get("/", (req, res) => {
  res.json(mothers);
});

module.exports = router;