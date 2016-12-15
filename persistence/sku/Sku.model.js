'use strict';

var mongoose = require('mongoose');

var SkuSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  item_id: String,
  detail_url: String,
  title: String,
  image_url: String,
});

module.exports = mongoose.model('Sku', SkuSchema);
