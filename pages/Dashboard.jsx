import React from "react";
import {Link} from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-pink-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-indigo-600 mb-8">Dashboard</h1>
        <ul className="space-y-4 text-gray-700">
           <li>
            <Link
              to="/"
              className="hover:text-indigo-600 cursor-pointer"
            >
              Home
            </Link>
          </li> 
          </ul>
          </aside>
        

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-semibold text-pink-700 mb-4">Welcome</h2>
        <p className="text-gray-600 font-bold italic">You’re now inside your dashboard
           <br></br> Small steps lead to big victories </p>
      </main>
    </div>
  );
};

export default Dashboard;
