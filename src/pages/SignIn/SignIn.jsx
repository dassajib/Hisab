import { Link } from "react-router-dom";
import { PiFediverseLogoBold } from "react-icons/pi";

import signInPic from '../../assets/signIn.svg';

const SignIn = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen overflow-hidden">
      {/* Form Section */}
      <div className="flex justify-center items-center md:w-1/2">
        <div className="rounded-xl w-96 p-8 px-14 md:px-10">
          {/* Logo */}
          <div className="flex justify-center">
            <PiFediverseLogoBold size={40} />
          </div>

          {/* Title */}
          <h4 className="text-center mt-4 text-2xl font-semibold">Sign In</h4>

          {/* Phone Input */}
          <div className="mb-3">
            <label className="block mb-1 text-sm font-medium" htmlFor="phone">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Phone Number"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <label className="block mb-1 text-sm font-medium" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button className="w-full py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600">
              Sign In
            </button>
          </div>

          {/* Redirect to Sign Up */}
          <div className="text-center mt-4">
            <Link to="/sign-up" className="text-blue-500 hover:underline">
              Haven't account yet?
            </Link>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden md:block w-full md:w-1/2 h-full bg-slate-200">
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={signInPic}
            alt="Sign In Illustration"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
