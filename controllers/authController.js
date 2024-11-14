const User = require('../models/User'); // Import model User

// Hàm đăng nhập
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Tìm người dùng theo username
    const user = await User.findOne({ username });

    // Kiểm tra nếu không có người dùng hoặc mật khẩu sai
    if (!user || user.password !== password) {
      return res.render('login', { error: 'Incorrect username or password' });
    }

    // Lưu thông tin người dùng vào session
    req.session.user = user;
    res.redirect('/admin'); // Redirect tới trang admin
  } catch (error) {
    console.error(error);
    res.status(500).send('Login error');
  }
};
