require('dotenv').config(); // Đọc các biến môi trường từ file .env

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TravelNews = require('./models/TravelNews');
const TravelNews1 = require('./models/thongbaos'); // Nếu bạn đã có model cho TravelNews
const TourNews = require('./models/TourNews'); // Import model TourNews

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Kết nối tới MongoDB bằng biến môi trường
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));

// Endpoint để lấy danh sách tin tức du lịch
app.get('/travel-news', async (req, res) => {
  try {
    const news = await TravelNews.find();
    res.json(news);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.get('/thongbao', async (req, res) => {
  try {
    const news = await TravelNews1.find();
    res.json(news);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Endpoint để lấy danh sách tour news
app.get('/tour-news', async (req, res) => {
  try {
    const tourNews = await TourNews.find();
    res.json(tourNews);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Endpoint để thêm một tour news mới
app.post('/tour-news', async (req, res) => {
  const { imageUrl, title, date, price, days } = req.body;

  const newTourNews = new TourNews({
    imageUrl,
    title,
    date,
    price,
    days,
  });

  try {
    const savedTourNews = await newTourNews.save();
    res.status(201).json(savedTourNews);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
