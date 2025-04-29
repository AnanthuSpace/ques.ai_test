import { ArrowLeft } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";
import { useNavigate } from "react-router-dom";
import LogoutIcone from "../components/LogoutIcone";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-100 p-7 overflow-auto">
        <header className="flex items-center justify-between px-6 py-4">
          <Breadcrumbs projectName="Sample Project" />
          <LogoutIcone />
        </header>

        <main className="flex-1 overflow-auto">
          <div className=" p-8">
            {/* Header */}
            <div className="flex items-center mb-8">
              <button
                className="mr-2 p-2 rounded hover:bg-gray-200 transition"
                onClick={() => navigate(-1)}
              >
                <ArrowLeft size={20} />
              </button>
              <h1 className="text-2xl font-bold">Account Settings</h1>
            </div>

            {/* User Profile Section */}
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              {/* Profile Picture */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full overflow-hidden border">
                  <img
                    src="/images.jpeg"
                    alt="Profile picture"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* User Info Fields */}
              <div className="flex-1 grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-gray-700 mb-2"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-purple-200"
                    defaultValue="alphauser"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-purple-200"
                    defaultValue="alphauser@gmail.com"
                  />
                </div>
              </div>
            </div>

            {/* Subscriptions Section */}
            <div>
              <h2 className="text-xl font-bold mb-4">Subscriptions</h2>
              <div className="bg-purple-50 border border-purple-100 rounded-lg p-4 flex justify-between items-center">
                <p className="text-gray-800">
                  <span>Oops! You don't have any active plans. </span>
                  <span className="text-purple-700 font-medium">
                    Upgrade now!
                  </span>
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded transition">
                  Upgrade
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
