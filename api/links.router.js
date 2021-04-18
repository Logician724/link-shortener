const express = require('express');
const router = express.Router();
const LinksController = require('./links.controller');
const LinksValidator = require('./links.validator');

router.get('/:link', LinksController.getLink);
router.post('/', LinksValidator.validateLink, LinksController.shortenLink);

module.exports = router;