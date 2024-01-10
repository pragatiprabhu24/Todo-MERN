import axios from "axios";
import { useState } from "react";
import React from "react";
import { IoMdAdd } from "react-icons/io";
import { MdCancelPresentation } from "react-icons/md";
import { toast } from "react-toastify";

const CreateTodo = () => {
  const [task, setTask] = useState();

  const handleAdd = () => {
    if (!task) {
      toast.warn("Please enter a task before creating.");
      return;
    }
    axios
      .post("http://localhost:3001/add", { task: task })
      .then((result) => {
        console.log(result);
        // Reset the task state to clear the input field
        setTask("");
      })
      .catch((err) => console.log(err));
  };

  const handleCancel = () => {
    setTask("");
  };

  return (
    <div>
      <div className="heading text-center font-bold text-2xl p-4 text-white">
        What to do Today?
      </div>

      <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border bg-gray-800 border-gray-300 p-4 shadow-lg max-w-2xl">
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          placeholder="Title"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <div className="buttons flex">
          <div
            className="btn border border-gray-100 p-1 px-4 font-semibold cursor-pointer text-gray-100 ml-auto flex items-center gap-2"
            onClick={handleCancel}
          >
            <MdCancelPresentation /> Cancel
          </div>
          <div
            className="btn border border-rose-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-rose-500 flex items-center gap-2 hover:bg-rose-300"
            onClick={handleAdd}
          >
            <IoMdAdd /> Create task
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;
