const express = require('express');
const router = express.Router();
const travelNewsController = require('../controllers/travelNewsController');

// Hiển thị danh sách tin tức du lịch
router.get('/', travelNewsController.getAllTravelNews);

// Render form thêm tin tức mới
router.get('/add', travelNewsController.addTravelNewsForm);

// Xử lý thêm tin tức du lịch
router.post('/add', travelNewsController.addTravelNews);

// Hiển thị form chỉnh sửa tin tức du lịch
router.get('/edit/:id', travelNewsController.editTravelNewsForm);  // Đảm bảo router gọi đúng controller

// Xử lý cập nhật tin tức du lịch
router.post('/edit/:id', travelNewsController.updateTravelNews);

// Xử lý xóa tin tức du lịch
router.post('/delete/:id', travelNewsController.deleteTravelNews);

module.exports = router;
