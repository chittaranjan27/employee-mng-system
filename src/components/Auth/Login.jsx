import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="relative bg-white/5 backdrop-blur-lg border border-red-600 rounded-2xl p-12 shadow-2xl max-w-md w-full mx-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-green-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
            <svg
              className="w-10 h-10 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9zM13.73 21a2 2 0 01-3.46 0"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-gray-400">Sign in to continue</p>
        </div>

        <form
          onSubmit={submitHandler}
          className="flex flex-col space-y-6"
        >
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-3 bg-black border-2 border-red-600 text-white font-medium text-lg rounded-xl placeholder:text-gray-500 outline-none focus:border-green-500 transition-all duration-300"
                type="email"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-3 bg-black border-2 border-red-600 text-white font-medium text-lg rounded-xl placeholder:text-gray-500 outline-none focus:border-green-500 transition-all duration-300"
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Submit */}
          <button className="mt-8 text-white border-none outline-none bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 font-semibold text-lg py-3 px-8 w-full rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
