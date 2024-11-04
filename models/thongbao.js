const mongoose = require('mongoose');

const travelNewsSchema1 = new mongoose.Schema({
  tieude: { type: String, required: true },
  title: { type: String, required: true },
  date: { type: String, required: true }, // You could also use Date type if you prefer
});

// Create the model using the schema
const TravelNews1 = mongoose.model('thongbao', travelNewsSchema1);

// Export the model
module.exports = TravelNews1;
