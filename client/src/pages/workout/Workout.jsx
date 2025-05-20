import React, { useState } from 'react';
import axios from 'axios';
import BMICalculator from '../../components/tools/BMICalculator'; // Adjust path as needed

const WorkoutPage = () => {
  const [gender, setGender] = useState('');
  const [goal, setGoal] = useState('');
  const [equipment, setEquipment] = useState('');
  const [workoutPlan, setWorkoutPlan] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showBmi, setShowBmi] = useState(false);

  const generateWorkoutPlan = async () => {
    if (!gender || !goal) {
      alert('Please select gender and goal.');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(
        'https://zylalabs.com/api/4210/ai+workout+planner+api/5105/list+of+body+parts',
        {
          headers: {
            Authorization: 'Bearer YOUR_API_KEY',
          },
          params: {
            gender,
            goal,
            equipment,
          },
        }
      );

      setWorkoutPlan(response.data || []);
    } catch (error) {
      console.error('Error fetching workout plan:', error);
      alert('Failed to fetch workout plan. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">
        Workout Planner & Fitness Tools
      </h1>

      {/* Gender Selection */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Select Gender</h2>
        <div className="flex space-x-4">
          <button
            onClick={() => setGender('male')}
            className={`px-4 py-2 rounded ${gender === 'male' ? 'bg-red-700 text-white' : 'bg-gray-200'}`}
          >
            Male
          </button>
          <button
            onClick={() => setGender('female')}
            className={`px-4 py-2 rounded ${gender === 'female' ? 'bg-red-700 text-white' : 'bg-gray-200'}`}
          >
            Female
          </button>
        </div>
      </div>

      {/* Goal Selection */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Select Goal</h2>
        <div className="flex space-x-4">
          <button
            onClick={() => setGoal('bulk')}
            className={`px-4 py-2 rounded ${goal === 'bulk' ? 'bg-red-700 text-white' : 'bg-gray-200'}`}
          >
            Bulk
          </button>
          <button
            onClick={() => setGoal('cut')}
            className={`px-4 py-2 rounded ${goal === 'cut' ? 'bg-red-700 text-white' : 'bg-gray-200'}`}
          >
            Cut
          </button>
        </div>
      </div>

      {/* Equipment */}
      <div className="mb-6">
        <label className="block mb-2 font-medium">Available Equipment</label>
        <input
          type="text"
          value={equipment}
          onChange={(e) => setEquipment(e.target.value)}
          placeholder="e.g., dumbbells, resistance bands"
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      {/* Generate Button */}
      <div className="mb-6">
        <button
          onClick={generateWorkoutPlan}
          className="px-6 py-2 bg-red-700 text-white rounded hover:bg-red-800"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Workout Plan'}
        </button>
      </div>

      {/* Workout Plan Output */}
      {workoutPlan.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Your Workout Plan</h2>
          <ul className="list-disc pl-6 space-y-1">
            {workoutPlan.map((exercise, index) => (
              <li key={index}>{typeof exercise === 'string' ? exercise : JSON.stringify(exercise)}</li>
            ))}
          </ul>
        </div>
      )}

      {/* BMI Calculator */}
      <div className="text-center">
        <button
          onClick={() => setShowBmi(!showBmi)}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {showBmi ? 'Hide BMI Calculator' : 'Check BMI'}
        </button>
      </div>

      {showBmi && (
        <div className="mt-8">
          <BMICalculator />
        </div>
      )}
    </div>
  );
};

export default WorkoutPage;
