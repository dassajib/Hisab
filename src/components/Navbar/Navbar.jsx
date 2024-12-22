import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between px-4 py-3 bg-[#1f2937] text-white">
        {/* Left Side: Brand / Logo */}
        <div className="text-md md:text-lg font-semibold">Brand</div>

        {/* Center: Search Bar (Hidden on Mobile) */}
        <div className="hidden md:flex flex-grow max-w-lg mx-0">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-gray-500 placeholder-gray-400"
            />
            <FiSearch className="absolute top-2.5 left-3 text-gray-400" size={20} />
          </div>
        </div>

        {/* Right Side: User Profile / Actions */}
        <div className="relative flex items-center">
          <div className="text-right mr-2 hidden md:block">
            <h4 className="text-sm font-medium">Sajib Das</h4>
            <span className="text-xs text-gray-400">Software Engineer</span>
          </div>
          <button
            className="w-10 h-10 bg-gray-600 rounded-full focus:outline-none hover:bg-gray-500 transition"
            aria-label="User profile"
          ></button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
