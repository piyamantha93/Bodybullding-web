import React from 'react';
import WorkoutPage from '../workout/Workout';import BMICalculator from '../../components/tools/BMICalculator';

const Tools = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-red-700 mb-10">
        Fitness Tools & Planner
      </h1>

    

      {/* BMI Calculator */}
      <div className="mt-16">
        <BMICalculator />
      </div>
    </div>
  );
};

export default Tools;
