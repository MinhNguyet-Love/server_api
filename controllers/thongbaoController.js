const Thongbao = require('../models/Thongbao');

// Hiển thị danh sách thông báo
exports.getAllThongbaos = async (req, res) => {
  try {
    const thongbaos = await Thongbao.find();
    res.render('thongbaoList', { thongbaos });
  } catch (error) {
    res.status(500).send('Lỗi khi hiển thị thông báo');
  }
};

// Hiển thị form thêm thông báo
exports.addThongbaoForm = (req, res) => {
  res.render('addThongbao');
};

// Thêm thông báo
exports.addThongbao = async (req, res) => {
  const { tieude, title, date } = req.body;

  try {
    const newThongbao = new Thongbao({ tieude, title, date });
    await newThongbao.save();
    res.redirect('/thongbao');
  } catch (error) {
    res.status(500).send('Lỗi khi thêm thông báo');
  }
};

// Hiển thị form chỉnh sửa thông báo
exports.editThongbaoForm = async (req, res) => {
  try {
    const thongbaoItem = await Thongbao.findById(req.params.id);
    if (!thongbaoItem) {
      return res.status(404).send('Không tìm thấy thông báo');
    }
    res.render('editThongbao', { thongbao: thongbaoItem });
  } catch (error) {
    res.status(500).send('Lỗi khi tải form chỉnh sửa');
  }
};

// Cập nhật thông báo
exports.updateThongbao = async (req, res) => {
  const { tieude, title, date } = req.body;

  try {
    await Thongbao.findByIdAndUpdate(req.params.id, { tieude, title, date });
    res.redirect('/thongbao');
  } catch (error) {
    res.status(500).send('Lỗi khi cập nhật thông báo');
  }
};

// Xóa thông báo
exports.deleteThongbao = async (req, res) => {
  try {
    await Thongbao.findByIdAndDelete(req.params.id);
    res.redirect('/thongbao');
  } catch (error) {
    res.status(500).send('Lỗi khi xóa thông báo');
  }
};
