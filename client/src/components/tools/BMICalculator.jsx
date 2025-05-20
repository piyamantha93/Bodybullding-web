import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [bmi, setBmi] = useState(null);
  const [advice, setAdvice] = useState('');
  const [history, setHistory] = useState([]);

  const calculateBMI = () => {
    if (!weight || !height || !age || !gender) {
      setAdvice('⚠️ Please fill in all fields!');
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    const roundedBmi = bmiValue.toFixed(2);
    setBmi(roundedBmi);

    const newEntry = {
      bmi: roundedBmi,
      weight,
      height,
      age,
      gender,
      date: new Date().toLocaleString(),
    };
    setHistory(prev => [newEntry, ...prev.slice(0, 4)]);

    if (bmiValue < 18.5) {
      setAdvice("You are underweight. Focus on healthy meals.");
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setAdvice("✅ Healthy weight! Keep it up.");
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setAdvice("Slightly overweight. Time to move a bit more!");
    } else {
      setAdvice("⚠️ Obese range. Consider consulting a doctor.");
    }
  };

  const chartData = {
    labels: history.map(entry => entry.date),
    datasets: [
      {
        label: 'BMI Value',
        data: history.map(entry => parseFloat(entry.bmi)),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">BMI Calculator</h2>

        <div className="space-y-4">
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <button
            onClick={calculateBMI}
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Calculate BMI
          </button>
        </div>

        {bmi && (
          <div className="text-center mt-6">
            <p className="text-xl font-semibold">Your BMI: <span className="text-blue-600">{bmi}</span></p>
            <p className="mt-2 text-green-600">{advice}</p>
          </div>
        )}

        {history.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">BMI History</h3>
            <div className="space-y-2">
              {history.map((entry, index) => (
                <div key={index} className="p-3 border rounded-lg bg-gray-50">
                  <p><strong>BMI:</strong> {entry.bmi} ({entry.weight}kg / {entry.height}cm)</p>
                  <p className="text-sm text-gray-500">{entry.gender} | {entry.age} years | {entry.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {history.length > 1 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">BMI Progress Chart</h3>
            <div className="w-full h-64">
              <Line
                data={chartData}
                options={{
                  responsive: true,
                  plugins: {
                    title: {
                      display: true,
                      text: 'BMI History',
                    },
                  },
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
