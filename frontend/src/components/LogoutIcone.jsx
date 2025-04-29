import { Bell, LogOut } from "lucide-react";
import React, { useState } from "react";
import LogoutModal from "./LogoutModal";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const LogoutIcone = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("accessToken");
    toast.success("Successfully Logout")
    navigate("/login");
  };

  return (
    <>
      <div className="flex items-center space-x-4">
        <button className="p-2 bg-white rounded-full shadow border border-gray-300 hover:bg-gray-100 transition">
          <Bell className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={() => setIsModalOpen(true)}
          className="p-2 bg-white rounded-full shadow border border-gray-300 hover:bg-gray-100 transition"
        >
          <LogOut className="w-6 h-6 text-red-500" />
        </button>
      </div>

      <LogoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleLogout}
      />
    </>
  );
};

export default LogoutIcone;
