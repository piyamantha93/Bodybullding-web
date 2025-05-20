import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/store'); // or any default page like "/home"
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white">
      <h1 className="text-5xl font-bold mb-6 text-red-600">Welcome to BodyBuildX</h1>
      <p className="text-xl max-w-xl text-center mb-8">
        Your ultimate platform for workouts, tools, and a complete bodybuilding lifestyle.
      </p>
      <button
        onClick={handleEnter}
        className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md text-lg font-semibold"
      >
        Enter Site
      </button>
    </div>
  );
};

export default Banner;
