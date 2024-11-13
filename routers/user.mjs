import express from "express";
import UserController from "../controllers/user_controller.mjs";

const userRouter = express.Router();

// Định nghĩa các route cho user
userRouter.get("/", UserController.index); // Hiển thị danh sách người dùng (với tìm kiếm tùy chọn)
userRouter.get("/new", UserController.new); // Hiển thị form tạo người dùng mới
userRouter.post("/create", UserController.create); // Tạo người dùng mới
userRouter.get("/delete/:id", UserController.delete); // Xóa người dùng theo id

export default userRouter;
