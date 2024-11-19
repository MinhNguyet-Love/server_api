const express = require('express');
const multer = require('multer');
const thongbaoController = require('../controllers/thongbaoController');
const upload = multer({ dest: 'uploads/' });  // Cấu hình thư mục lưu trữ tệp tải lên

const router = express.Router();

// Route để hiển thị danh sách thông báo
router.get('/', thongbaoController.getAllThongbaos);

// Các route khác như thêm, sửa, xóa
router.get('/add', thongbaoController.addThongbaoForm);

// Sử dụng `multer` để xử lý tệp tải lên trước khi gửi dữ liệu vào controller
router.post('/add', upload.single('image'), thongbaoController.addThongbao); // 'image' là tên trường trong form

router.get('/edit/:id', thongbaoController.editThongbaoForm);
router.post('/edit/:id', thongbaoController.updateThongbao);
router.get('/delete/:id', thongbaoController.deleteThongbao);

module.exports = router;
