const TravelNews = require('../models/TravelNews');

// Hiển thị danh sách tin tức du lịch
exports.getAllTravelNews = async (req, res) => {
  try {
    const news = await TravelNews.find();
    res.render('travelNewsList', { news });
  } catch (error) {
    res.status(500).send('Lỗi khi hiển thị tin tức du lịch');
  }
};

// Render form thêm tin tức mới
exports.addTravelNewsForm = (req, res) => {
  res.render('addTravelNews');
};

// Xử lý thêm tin tức du lịch
exports.addTravelNews = async (req, res) => {
  const { title, imageUrl, date } = req.body;
  
  try {
    const newTravelNews = new TravelNews({ title, imageUrl, date });
    await newTravelNews.save();
    res.redirect('/travel-news');
  } catch (error) {
    res.status(500).send('Lỗi khi thêm tin tức');
  }
};

// Hiển thị form chỉnh sửa tin tức du lịch
exports.editTravelNewsForm = async (req, res) => {
  try {
    const newsItem = await TravelNews.findById(req.params.id);
    if (!newsItem) {
      return res.status(404).send('Không tìm thấy tin tức');
    }
    res.render('editTravelNews', { travelNews: newsItem });
  } catch (error) {
    res.status(500).send('Lỗi khi tải form chỉnh sửa');
  }
};

// Xử lý cập nhật tin tức du lịch
exports.updateTravelNews = async (req, res) => {
  try {
    const { title, imageUrl, date } = req.body;
    await TravelNews.findByIdAndUpdate(req.params.id, { title, imageUrl, date });
    res.redirect('/travel-news');
  } catch (error) {
    res.status(500).send('Lỗi khi cập nhật tin tức');
  }
};

// Xử lý xóa tin tức du lịch
exports.deleteTravelNews = async (req, res) => {
  try {
    await TravelNews.findByIdAndDelete(req.params.id);
    res.redirect('/travel-news');
  } catch (error) {
    res.status(500).send('Lỗi khi xóa tin tức');
  }
};
