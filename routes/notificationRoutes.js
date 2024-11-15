const express = require('express');
const router = express.Router();
const thongbaoController = require('../controllers/thongbaoController');

// Route để hiển thị danh sách thông báo
router.get('/', thongbaoController.getAllThongbaos);

// Các route khác như thêm, sửa, xóa
router.get('/add', thongbaoController.addThongbaoForm);
router.post('/add', thongbaoController.addThongbao);
router.get('/edit/:id', thongbaoController.editThongbaoForm);
router.post('/edit/:id', thongbaoController.updateThongbao);
router.get('/delete/:id', thongbaoController.deleteThongbao);

module.exports = router;
