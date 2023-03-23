import React from 'react';
import Sidebar from './Sidebar';

const AdminDashboard = () => {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar/>
      
      {/* Main content */}
      <div className="flex-1 overflow-auto focus:outline-none">
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-center text-gray-900 mb-3">Admin Dashboard</h1>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              {/* Your content goes here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
