import User from "../models/user.mjs";

class UserController {
  // Phương thức hiển thị danh sách người dùng (có hỗ trợ tìm kiếm)
  static async index(req, res) {
    let q = req.query.q || ''; // Nếu không có tham số tìm kiếm, mặc định là chuỗi rỗng
    let re = new RegExp(q, 'i'); // 'i' để không phân biệt chữ hoa/chữ thường

    try {
      // Tìm kiếm người dùng theo tên (hoặc điều kiện bạn mong muốn)
      let users = await User.find({ name: re });
      res.render("user", { title: "User Management", users });
    } catch (error) {
      res.status(500).send("Lỗi trong quá trình tìm kiếm người dùng.");
    }
  }

  // Phương thức hiển thị form tạo mới người dùng
  static async new(req, res) {
    res.render("formnew", { title: "User Management" });
  }

  // Phương thức tạo mới một người dùng
  static async create(req, res) {
    let { email, name, role } = req.body;

    // Kiểm tra thông tin đầu vào
    if (!email || !name || !role) {
      return res.render("formnew", { title: "User Management", error: "Thông tin không đầy đủ." });
    }

    try {
      let user = await User.create({ email, name, role });
      res.redirect("/users");
    } catch (error) {
      res.render("formnew", { title: "User Management", error: "Không thể tạo người dùng." });
    }
  }

  // Phương thức xóa một người dùng theo id
  static async delete(req, res) {
    try {
      let user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).send("Không tìm thấy người dùng.");
      }
      await User.deleteOne({ _id: req.params.id });
      res.redirect("/users");
    } catch (error) {
      res.status(500).send("Lỗi trong quá trình xóa người dùng.");
    }
  }
}

export default UserController;
