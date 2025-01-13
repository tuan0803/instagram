const express = require('express');
const router = express.Router();
const SearchController = require('../controllers/search.controller');

router.get('/users', SearchController.searchUsers);
router.get('/posts', SearchController.searchPosts);

module.exports = router;
