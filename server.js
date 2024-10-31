require('dotenv').config(); // Thêm dòng này

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TravelNews = require('./models/TravelNews'); // import model

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

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
