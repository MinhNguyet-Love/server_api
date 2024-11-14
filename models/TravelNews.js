const mongoose = require('mongoose');

const travelNewsSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  title: { type: String, required: true },
  date: { type: String, required: true }, // có thể đổi thành Date nếu cần
});

const TravelNews = mongoose.model('TravelNews', travelNewsSchema);

module.exports = TravelNews;