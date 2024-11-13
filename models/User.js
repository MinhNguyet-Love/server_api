import mongoose from "mongoose";

// Định nghĩa Schema cho User
const userSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true,
    unique: true, // Đảm bảo email là duy nhất
    match: [/.+@.+\..+/, 'Địa chỉ email không hợp lệ'] // Kiểm tra định dạng email
  },
  name: { 
    type: String, 
    required: true 
  },
  role: { 
    type: String, 
    required: true,
    enum: ['Admin', 'User', 'Moderator'] // Giới hạn các giá trị có thể cho role (có thể điều chỉnh)
  },
}, { timestamps: true }); // Thêm thời gian tạo và cập nhật tự động

// Tạo Model User
const User = mongoose.model("User", userSchema);

export default User;
