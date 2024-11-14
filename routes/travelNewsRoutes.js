const express = require('express');
const router = express.Router();
const TravelNews = require('../models/TravelNews'); // Đường dẫn


// Hiển thị danh sách tin tức du lịch
router.get('/', async (req, res) => {
  try {
    // Lấy dữ liệu tin tức từ cơ sở dữ liệu
    const news = await TravelNews.find(); // Giả sử bạn có model `TravelNews`
    res.render('travelNewsList', { news }); // Hiển thị view travelNewsList.ejs
  } catch (error) {
    res.status(500).send('Lỗi khi hiển thị tin tức du lịch');
  }
});
// Các logic thêm, sửa, xóa...

//  render form thêm tin tức mới
router.get('/add', (req, res) => {
  res.render('addTravelNews'); // Tạo file addTravelNews.ejs trong thư mục views
});

// Route xử lý thêm tin tức du lịch
router.post('/add', async (req, res) => {
  const { title, imageUrl, date } = req.body;
  
  try {
    // Tạo tin tức mới và lưu vào MongoDB
    const newTravelNews = new TravelNews({
      title,
      imageUrl,
      date
    });
    
    await newTravelNews.save(); // Lưu tin tức mới vào cơ sở dữ liệu

    res.redirect('/travel-news'); // Chuyển hướng đến trang danh sách tin tức sau khi thêm thành công
  } catch (error) {
    res.status(500).send('Lỗi khi thêm tin tức');
  }
});



// Route cập nhật dữ liệu sau khi chỉnh sửa
router.post('/edit/:id', async (req, res) => {
  try {
    const { title, imageUrl, date } = req.body;
    await TravelNews.findByIdAndUpdate(req.params.id, { title, imageUrl, date });
    res.redirect('/travel-news'); // Chuyển hướng sau khi cập nhật thành công
  } catch (error) {
    res.status(500).send('Lỗi khi cập nhật tin tức');
  }
});

// Route hiển thị form chỉnh sửa tin tức du lịch
router.get('/edit/:id', async (req, res) => {
  try {
    const newsItem = await TravelNews.findById(req.params.id); // Tìm dữ liệu theo ID
    if (!newsItem) {
      return res.status(404).send('Không tìm thấy tin tức');
    }
    res.render('editTravelNews', { newsItem }); // Hiển thị view chỉnh sửa
  } catch (error) {
    res.status(500).send('Lỗi khi tải form chỉnh sửa');
  }
});
module.exports = router;

// Route để xóa một mục tin tức du lịch
router.post('/delete/:id', async (req, res) => {
  try {
    await TravelNews.findByIdAndDelete(req.params.id);
    res.redirect('/travel-news'); // Chuyển hướng sau khi xóa thành công
  } catch (error) {
    res.status(500).send('Lỗi khi xóa tin tức');
  }
});
