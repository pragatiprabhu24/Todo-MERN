import React, { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";

const AuthPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm((prevIsLoginForm) => !prevIsLoginForm);
  };
  return (
    <>
      <section class="min-h-screen flex items-stretch text-white ">
        <div
          class="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-photo/time-organization-concept-close-up_23-2149046744.jpg)",
          }}
        >
          <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
          <div class="w-full px-24 z-10">
            <h1 class="text-5xl font-bold text-left tracking-wide">
              The best preparation for tomorrow is doing your best today. ...
            </h1>
            <p class="text-3xl my-4"></p>
          </div>
        </div>
        <div
          class="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
          style={{ backgroundColor: "#161616" }}
        >
          <div
            class="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
            }}
          >
            <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
          </div>
          <div class="w-full py-6 z-20">
            <h2 className="text-3xl font-serif">
              {isLoginForm ? "Sign In" : "Sign Up"}
            </h2>
            <div class="py-6 space-x-2">
              <span class="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">
                f
              </span>
              <span class="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">
                G+
              </span>
              <span class="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">
                in
              </span>
            </div>
            <p class="text-gray-100">or use email your account</p>
            {isLoginForm ? <Login /> : <Register />}
            <div class="text-center text-gray-400 hover:underline hover:text-gray-100 cursor-pointer">
              <a onClick={toggleForm}>
                {isLoginForm
                  ? "Don't have an account?"
                  : "Already have an account?"}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthPage;
