const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('This is Auth Route'));

module.exports = router;
