import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { PiFediverseLogoBold } from "react-icons/pi";

import menuItems from "../../utils/menuIte";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  // Utility to check if a route is active
  const isActive = (path) => pathname === path || pathname.startsWith(path + "/");

  // Render menu items based on type
  const renderMenuItems = (type) => {
    if (!Array.isArray(menuItems)) return null;

    return menuItems
      .filter((item) => item.type === type)
      .map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex items-center gap-4 px-4 py-3 rounded-md text-sm font-normal transition-colors duration-200 hover:bg-gray-700 ${isActive(item.path) ? "bg-gray-700 text-[#A8D30F]" : "text-[#FAFAFA]"
            }`}
          aria-current={isActive(item.path) ? "page" : undefined}
        >
          <span
            className={`transition-all duration-300 ${sidebarExpanded ? "text-lg" : "text-xl"
              }`}
          >
            {item.icon}
          </span>
          <span
            className={`transition-opacity text-sm font-normal duration-300 ${sidebarExpanded ? "opacity-100" : "opacity-0 hidden"
              }`}
          >
            {item.title}
          </span>
        </Link>
      ));
  };

  return (
    <div className={`flex flex-col h-screen bg-[#333741] text-gray-100 transition-all duration-300 ${sidebarExpanded ? "w-64" : "w-16"}`}>
      {/* Header with Logo and Hamburger Menu */}
      <div className="px-4 py-5">
        {sidebarExpanded ? (
          <NavLink
            to="/dashboard"
            className="flex items-center justify-between gap-2"
            onClick={() => setSidebarExpanded((prev) => !prev)}
            aria-expanded={sidebarExpanded}
          >
            <PiFediverseLogoBold size={24} />
            <TbLayoutSidebarLeftCollapse size={24} />
          </NavLink>

        ) : (
          <GiHamburgerMenu size={24} className="text-white cursor-pointer" onClick={() => setSidebarExpanded((prev) => !prev)} />
        )}
      </div>

      {/* Top Menu */}
      <nav className="space-y-1">{renderMenuItems("top")}</nav>

      {/* Bottom Menu */}
      <nav className="absolute bottom-4 w-[inherit]">{renderMenuItems("bottom")}</nav>
    </div>
  );
};

export default Sidebar;