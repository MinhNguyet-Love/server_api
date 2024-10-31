const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TravelNews = require('./models/TravelNews'); // import model

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Kết nối tới MongoDB
mongoose.connect('mongodb+srv://nguyet100147:5SxyWLOvFg3m3sxH@datafellow4u.igqq4.mongodb.net/tour', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Endpoint để lấy danh sách tin tức du lịch
app.get('/travel-news', async (req, res) => {
  try {
    const news = await TravelNews.find();
    res.json(news);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
