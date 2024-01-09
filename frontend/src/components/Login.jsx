import axios from "axios";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        email,
        password,
      })
      .then(function (response) {
        if ((response.data = "Success")) {
          localStorage.setItem("userEmail", response.data.email);
          toast.success("Login successful!");
          navigate("/");
          console.log(response.data.email);
        }

        setEmail("");
        setPassword("");
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Something went wrong");
      });
  };
  return (
    <div>
      <form
        onSubmit={handleLoginSubmit}
        class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
      >
        <div class="pb-2 pt-4">
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
