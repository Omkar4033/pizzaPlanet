import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar'
const ReportBug = () => {
    const [bugDescription, setBugDescription] = useState('');
    
    const handleBugSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post('/api/bugs', { description: bugDescription });
        console.log(response.data);
        alert('Thank you for reporting the bug!');
      } catch (error) {
        console.log(error);
        alert('An error occurred while submitting the bug report. Please try again later.');
      }
    };
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar/>

        This is a Report Bug page 
        <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Report Bugs</h1>
      <form onSubmit={handleBugSubmit}>
        <label htmlFor="bug-description" className="block font-medium text-lg mb-2">Bug Description:</label>
        <textarea
          id="bug-description"
          className="w-full h-48 p-4 border rounded-md resize-none mb-4"
          placeholder="Please describe the bug you encountered."
          value={bugDescription}
          onChange={(event) => setBugDescription(event.target.value)}
          required
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default ReportBug

