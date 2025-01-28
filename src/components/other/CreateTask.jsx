import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!taskTitle || !taskDescription || !taskDate || !asignTo || !category) {
      alert("Please fill all the fields before submitting!");
      return;
    }

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const updatedData = [...userData];

    let isEmployeeFound = false;

    updatedData.forEach((employee) => {
      if (asignTo.toLowerCase() === employee.firstName.toLowerCase()) {
        isEmployeeFound = true;
        employee.tasks = [...(employee.tasks || []), newTask];
        employee.taskCounts = {
          ...employee.taskCounts,
          newTask: (employee.taskCounts?.newTask || 0) + 1,
        };
      }
    });

    if (isEmployeeFound) {
      setUserData(updatedData);
      alert("Task successfully created!");
      setTaskTitle("");
      setCategory("");
      setAsignTo("");
      setTaskDate("");
      setTaskDescription("");
    } else {
      alert(`No employee found with the name "${asignTo}".`);
    }
  };

  return (
    <div className="p-8 bg-[#1f2937] rounded-xl shadow-lg mt-5 max-w-4xl mx-auto">
      <h2 className="text-2xl text-emerald-500 font-semibold mb-6 text-center">
        Create New Task
      </h2>
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap items-start gap-6 justify-between"
      >
        {/* Left Section */}
        <div className="w-full lg:w-[45%] space-y-4">
          <div>
            <label className="text-gray-300 text-sm font-medium block mb-1">
              Task Title
            </label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-full py-2 px-4 rounded-lg border border-gray-600 bg-transparent text-gray-100 focus:ring-2 focus:ring-emerald-500 outline-none"
              type="text"
              placeholder="Enter task title"
            />
          </div>
          <div>
            <label className="text-gray-300 text-sm font-medium block mb-1">
              Date
            </label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="w-full py-2 px-4 rounded-lg border border-gray-600 bg-transparent text-gray-100 focus:ring-2 focus:ring-emerald-500 outline-none"
              type="date"
            />
          </div>
          <div>
            <label className="text-gray-300 text-sm font-medium block mb-1">
              Assign To
            </label>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className="w-full py-2 px-4 rounded-lg border border-gray-600 bg-transparent text-gray-100 focus:ring-2 focus:ring-emerald-500 outline-none"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <label className="text-gray-300 text-sm font-medium block mb-1">
              Category
            </label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full py-2 px-4 rounded-lg border border-gray-600 bg-transparent text-gray-100 focus:ring-2 focus:ring-emerald-500 outline-none"
              type="text"
              placeholder="Design, Dev, etc."
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[50%] flex flex-col space-y-4">
          <div>
            <label className="text-gray-300 text-sm font-medium block mb-1">
              Description
            </label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="w-full h-44 py-2 px-4 rounded-lg border border-gray-600 bg-transparent text-gray-100 focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
              placeholder="Describe the task..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-emerald-500 py-3 px-6 rounded-lg text-white font-medium hover:bg-emerald-600 transition w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
