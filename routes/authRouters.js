// routes/authRouters.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const User = require('../models/User');


// Route để hiển thị danh sách người dùng
router.get('/', async (req, res) => {
  try {
    const users = await User.find(); // Lấy danh sách tất cả người dùng từ MongoDB
    res.json(users); // Trả về danh sách người dùng dưới dạng JSON
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy danh sách người dùng', error });
  }
});
// Route GET cho trang đăng nhập
router.get('/login', (req, res) => {
  // Nếu người dùng đã đăng nhập, chuyển hướng trực tiếp đến trang admin
  if (req.session.user) {
    return res.redirect('/admin');
  }
  res.render('login'); // Render trang đăng nhập
});

// Route POST để xử lý đăng nhập
router.post('/login', authController.login);

// Route GET cho trang quản lý admin (yêu cầu đăng nhập)
router.get('/admin', (req, res) => {
  if (req.session.user) {
    res.render('admin', { user: req.session.user }); // Truyền thông tin user vào view
  } else {
    res.redirect('/login'); // Nếu chưa đăng nhập, chuyển hướng về trang đăng nhập
  }
});

// Route đăng xuất
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Lỗi khi đăng xuất:', err);
    }
    res.redirect('/login'); // Chuyển hướng về trang đăng nhập sau khi đăng xuất
  });
});

module.exports = router;
