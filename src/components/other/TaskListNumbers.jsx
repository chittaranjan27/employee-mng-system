import React from 'react';

const TaskListNumbers = ({ data }) => {
  return (
    <div className="flex flex-wrap mt-10 justify-between gap-6">
      {/* New Task */}
      <div className="rounded-xl w-full sm:w-[45%] lg:w-[22%] py-6 px-8 bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6] shadow-lg transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl font-extrabold text-white">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl mt-2 text-white font-medium">New Task</h3>
      </div>

      {/* Completed Task */}
      <div className="rounded-xl w-full sm:w-[45%] lg:w-[22%] py-6 px-8 bg-gradient-to-r from-[#10B981] to-[#34D399] shadow-lg transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl font-extrabold text-white">{data.taskCounts.completed}</h2>
        <h3 className="text-xl mt-2 text-white font-medium">Completed Task</h3>
      </div>

      {/* Active Task */}
      <div className="rounded-xl w-full sm:w-[45%] lg:w-[22%] py-6 px-8 bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] shadow-lg transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl font-extrabold text-black">{data.taskCounts.active}</h2>
        <h3 className="text-xl mt-2 text-black font-medium">Accepted Task</h3>
      </div>

      {/* Failed Task */}
      <div className="rounded-xl w-full sm:w-[45%] lg:w-[22%] py-6 px-8 bg-gradient-to-r from-[#EF4444] to-[#F87171] shadow-lg transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl font-extrabold text-white">{data.taskCounts.failed}</h2>
        <h3 className="text-xl mt-2 text-white font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
