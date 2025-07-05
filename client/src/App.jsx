import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import Store from './pages/store';
import Login from './pages/login';
import Register from './pages/register';


// Navigation links
const navLinks = [
  { name: 'Store', path: '/store' },
  { name: 'Protein', path: '/protein' },
  { name: 'Pre-Workout', path: '/preworkout' },
  { name: 'Creatine', path: '/creatine' },
  { name: 'Vitamin', path: '/vitamin' },
  { name: 'Mass Gainers', path: '/massgainers' },
  { name: 'Fat Burners', path: '/fatburners' },
  { name: 'Recovery', path: '/recovery' },
];

function App() {
  return (
    <Router>
      <Navbar brand="BodyBuildX" links={navLinks} />

      <Routes>
        <Route path="/store" element={<Store />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      

        {/* Optional: Default redirect or fallback */}
        <Route path="*" element={<Store />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
