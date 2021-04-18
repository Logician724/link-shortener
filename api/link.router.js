const express = require('express');
const router = express.Router();
const LinksController = require('./links.controller');
router.get('/:link', LinksController.getLink);
router.post('/', LinksController.shortenLink);

module.exports = router;