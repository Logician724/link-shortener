const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    unique: true,
    required: true
  },
});

const Link = mongoose.model('Link', LinkSchema);

module.exports = Link;