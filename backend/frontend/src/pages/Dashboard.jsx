import React, { useEffect, useState } from "react";
import CreateTodo from "../components/CreateTodo";
import backgroundImage from "../asset/back.png";
import axios from "axios";
import { MdOutlineDone } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import no from "../asset/no.gif";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get(`${window.location.origin}/get`)
      .then((result) => setTodos(result.data))
      .catch((error) => console.log(error));
  }, [todos]);

  const divStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    overflowY: "auto",
  };

  const handleEdit = (id) => {
    axios
      .put(`${window.location.origin}/update/` + id)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const handleDelete = (id) => {
    axios
      .delete(`${window.location.origin}/delete/` + id)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
  <>
  
  <div style={divStyle}>
  <Navbar/>
  <CreateTodo />

  <div className="editor mx-auto w-10/12 flex flex-col text-white font-bold border bg-gray-800 border-gray-300 p-4 shadow-lg max-w-2xl">
    {todos.length === 0 ? (
      <div className="flex flex-col items-center">
        <img src={no} className="w-80" />
        <h6>Task sheet is empty!</h6>
      </div>
    ) : (
      todos.map((todo, i) => (
        <div key={i} className="mt-4 border-b border-gray-300 pb-4">
          <div className="flex justify-between items-center">
            <div>
              <span className="p-2 border bg-rose-500 mr-2 font-bold">
                {i + 1}
              </span>{" "}
              <span
                className={
                  todo.done === true
                    ? "line-through decoration-rose-500 break"
                    : ""
                }
              >
                {todo.task}
              </span>
            </div>
            <div>
              <div className="flex gap-2">
                {todo.done === true ? (
                  <button className="bg-green-500 p-2 flex items-center gap-2">
                    <MdOutlineDone /> Done
                  </button>
                ) : (
                  <button
                    className="p-2 border flex items-center gap-2"
                    onClick={() => handleEdit(todo._id)}
                  >
                    Mark as Done
                  </button>
                )}

                <button
                  className="p-2 border flex items-center gap-2"
                  onClick={() => handleDelete(todo._id)}
                >
                  <MdOutlineDelete /> Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))
    )}
  </div>
  <Footer/>
</div>

  </>
  );
};

export default Dashboard;
