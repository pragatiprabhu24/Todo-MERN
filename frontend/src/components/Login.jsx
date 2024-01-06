import React from "react";

const Login = () => {
  return (
    <div>
      <form action="" class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
        <div class="pb-2 pt-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            class="block w-full p-4 text-lg rounded-sm bg-black"
          />
        </div>
        <div class="pb-2 pt-4">
          <input
            class="block w-full p-4 text-lg rounded-sm bg-black"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div class="text-right text-gray-400 hover:underline hover:text-gray-100">
          <a href="#">Forgot your password?</a>
        </div>
        <div class="px-4 pb-2 pt-4">
          <button class="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
            sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
