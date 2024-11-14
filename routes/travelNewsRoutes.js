const express = require('express');
const router = express.Router();
const travelNewsController = require('../controllers/travelNewsController');

// Route cho giao diện HTML
router.get('/', travelNewsController.getAllTravelNewsHTML);

// Route cho API trả về JSON
router.get('/api', travelNewsController.getAllTravelNewsJSON);

// Các route khác cho việc thêm, chỉnh sửa, xóa tin tức
router.get('/add', travelNewsController.addTravelNewsForm);
router.post('/add', travelNewsController.addTravelNews);
router.get('/edit/:id', travelNewsController.editTravelNewsForm);
router.post('/edit/:id', travelNewsController.updateTravelNews);
router.post('/delete/:id', travelNewsController.deleteTravelNews);

module.exports = router;
