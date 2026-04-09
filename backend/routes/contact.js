const express = require('express');
const Message = require('../models/Message');
const router = express.Router();

// @route   POST api/contact
// @desc    Submit a contact form message
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide all details' });
    }

    const newMessage = new Message({
      name,
      email,
      message,
    });

    await newMessage.save();

    res.status(201).json({ success: true, data: newMessage });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error while submitting message' });
  }
});

module.exports = router;
