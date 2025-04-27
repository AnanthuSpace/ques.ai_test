import React from "react";
import { Settings, Bell } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between py-6 px-15 bg-white">
      {/* Left Section (Logo + Text) */}
      <div className="flex items-center gap-2 main-text">
        <img src="/Icone.svg" alt="Logo" className="w-10 h-10" />
        <h1 className="text-2xl font-bold">
          <span className="font-bold">Ques</span>
          <span className="font-normal">.AI</span>
        </h1>
      </div>

      {/* Right Section (Icons) */}
      <div className="flex items-center gap-6">
        <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600 transition" />
        <Settings className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600 transition" />
      </div>
    </nav>
  );
};

export default Navbar;
