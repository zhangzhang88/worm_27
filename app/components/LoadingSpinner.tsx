import React from 'react';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen bg-gray-800">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
  </div>
);

export default LoadingSpinner;