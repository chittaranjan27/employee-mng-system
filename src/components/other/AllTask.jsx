import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#121212] p-6 rounded-lg shadow-xl mt-5">
      {/* Header */}

      <div className="bg-gradient-to-r from-[#ff4e50] to-[#ff5f6d] py-4 px-6 flex justify-between items-center rounded-t-lg shadow-md mb-4">
        <h2 className="text-lg font-semibold text-white w-1/5 text-center">Employee Name</h2>
        <h3 className="text-lg font-semibold text-white w-1/5 text-center">New Task</h3>
        <h5 className="text-lg font-semibold text-white w-1/5 text-center">Active Task</h5>
        <h5 className="text-lg font-semibold text-white w-1/5 text-center">Completed</h5>
        <h5 className="text-lg font-semibold text-white w-1/5 text-center">Failed</h5>
      </div>

      
      <div>
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="border-2 border-[#28a745] mb-3 py-4 px-6 flex justify-between items-center rounded-lg shadow-md hover:bg-[#333] transition-all duration-300"
          >
            <h2 className="text-lg font-medium text-white w-1/5 text-center">{elem.firstName}</h2>
            <h3 className="text-lg font-medium text-blue-400 w-1/5 text-center">{elem.taskCounts.newTask}</h3>
            <h5 className="text-lg font-medium text-yellow-400 w-1/5 text-center">{elem.taskCounts.active}</h5>
            <h5 className="text-lg font-medium text-green-500 w-1/5 text-center">{elem.taskCounts.completed}</h5>
            <h5 className="text-lg font-medium text-red-600 w-1/5 text-center">{elem.taskCounts.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
