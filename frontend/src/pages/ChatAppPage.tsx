import Logout from "@/components/auth/Logout";
import { Button } from "@/components/ui/button";
import api from "@/lib/axios";
import { useAuthStore } from "@/stores/useAuthStore";
import { toast } from "sonner";

const ChatAppPage = () => {
  const user = useAuthStore((s) => s.user);

  const handleTest = async () => {
    // Dòng này chắc chắn sẽ hiện trong console trước tiên
    console.log("Bấm nút Test rồi nè!");

    // Đảm bảo toast luôn hiện dù thành công hay lỗi
    try {
      const res = await api.get("/users/test", { withCredentials: true });
      console.log("Response:", res.data);
      toast.success("Test thành công nha!");
    } catch (error) {
      console.error("Lỗi đây:", error);
      toast.error("Test fail rồi");
    }
  };

  return (
    <div className="p-8">
      <p>
        Xin chào: <strong>{user?.username || "Khách"}</strong>
      </p>

      <div className="mt-6">
        <Button onClick={handleTest} variant="default" size="lg">
          Test
        </Button>
        <Logout />
      </div>
    </div>
  );
};

export default ChatAppPage;
