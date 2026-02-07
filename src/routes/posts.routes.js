const express = require('express');
const router = express.Router();

// import controller
const { getAllPosts } = require('../controllers/posts.controller');

// use controller
router.get('/', getAllPosts);

module.exports = router;
