import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar"
import Navbar from "../components/Navbar/Navbar"

const AppLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        <Navbar />

        {/* Page Content */}
        <div className="flex-1 p-4 bg-gray-100 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
