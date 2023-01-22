const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/submit-seller', ensureAuthenticated, (req, res) =>
  res.render('submit-seller', {
    user: req.user
  })
);

module.exports = router;
