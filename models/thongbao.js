const mongoose = require('mongoose');

const travelNewsSchema1 = new mongoose.Schema({
  tieude: { type: String, required: true },
  title: { type: String, required: true },
  date: { type: String, required: true }, // hoặc có thể sử dụng Date type
});

const TravelNews1 = mongoose.model('thongbao', travelNewsSchema1);

module.exports = TravelNews1;
