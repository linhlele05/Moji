import jwt from "jsonwebtoken";
import User from "../models/User.js";

// xác minh user là ai
export const protectedRoute = async (req, res, next) => {
    try {
        // Lấy token từ header Authorization
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

        if (!token) {
            return res.status(401).json({ message: "Thiếu token xác thực" });
        }
        // xác minh token
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decodedUser) => {
            if (err) {
                console.error("Lỗi xác minh JWT trong authMiddleware:", err);
                return res.status(403).json({ message: "Token không hợp lệ" });
            }
            //tìm user từ token
            const userId = decodedUser.userId;
            const user = await User.findById(userId).select('-hashedPassword'); // loại bỏ hashedPassword khỏi kết quả

            if (!user) {
                return res.status(404).json({ message: "Người dùng không tồn tại" });
            }

            // gán user vào req.user để sử dụng trong các route sau
            req.user = user; 
            next(); // tiếp tục sang middleware hoặc route handler tiếp theo
        });
        

        
        
    } catch (error) {
        console.error("Lỗi khi xác minh JWT trong authMiddleware:", error);
        return res.status(500).json({ message: "Lỗi hệ thống" });
    }
}