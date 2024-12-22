import { Link } from "react-router-dom";
import { PiFediverseLogoBold } from "react-icons/pi";

import signUpPic from '../../assets/signUp.svg';

const SignUp = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen overflow-hidden">
      <div className="flex justify-center items-center md:w-1/2">
        <div className="rounded-xl w-96 p-8 px-14 md:px-10">
          <div className="flex justify-center">
            <PiFediverseLogoBold size={40} />
          </div>
          <h4 className="text-center mt-4 text-2xl font-semibold">Sign Up</h4>

          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 text-sm bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-2 text-sm bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-4 py-2 text-sm bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 text-sm bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 text-sm bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500">
            Sign Up
          </button>
          <div className="text-center mt-4">
            <Link to="/" className="text-indigo-600 hover:underline">
              Have an account?
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-full md:w-1/2 h-full bg-slate-200">
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={signUpPic}
            alt="Sign Up Greeting"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
