import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", {
        name,
        email,
        password,
      })
      .then(function (response) {
        console.log(response);
        toast.success("Registration successful!");
        setName("");
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
        onSubmit={handleSubmit}
        class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
      >
        <div class="pb-2 pt-4">
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            class="block w-full p-4 text-lg rounded-sm bg-black"
          />
        </div>
        <div class="pb-2 pt-4">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        <div class="px-4 pb-2 pt-4">
          <button class="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
