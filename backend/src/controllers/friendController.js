export const addFriend = async (req, res) => {
    try {
        
    } catch (error) {
        console.error("Lỗi khi thêm bạn bè:", error);
        return res.status(500).json({ message: "Lỗi hệ thống" });
    }
}

export const acceptFriendRequest = async (req, res) => {
    try {
        
    } catch (error) {
        console.error("Lỗi khi chấp nhận kết bạn:", error);
        return res.status(500).json({ message: "Lỗi hệ thống" });
    }
}

export const declineFriendRequest = async (req, res) => {
    try {
        
    } catch (error) {
        console.error("Lỗi khi từ chối kết bạn:", error);
        return res.status(500).json({ message: "Lỗi hệ thống" });
    }
}

export const getAllFriend = async(req,res) =>{
    try {
        
    } catch (error) {
        console.error("Lỗi khi lấy danh sách bạn bè:", error);
        return res.status(500).json({ message: "Lỗi hệ thống" });
    }
}
export const getAllFriendRequest = async(req,res) =>{
    try {
        
    } catch (error) {
        console.error("Lỗi khi lấy danh sách yêu cầu kết bạn:", error);
        return res.status(500).json({ message: "Lỗi hệ thống" });
    }
}