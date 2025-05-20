import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

// Import pages
import Banner from './pages/banner/Banner';
import Store from './pages/store/Store';
import Workout from './pages/workout/Workout';
import Tools from './pages/tools/Tools';
import Login from './pages/register/Login';


const navLinks = [
  { name: 'Store', path: '/store' },
  { name: 'Workout', path: '/workout' },
  { name: 'Diet Plan', path: '/diet' },
  { name: 'Tools', path: '/tools' },
  { name: 'Articles', path: '/articles' },
];

function App() {
  return (
    <Router>
      <Navbar brand="BodyBuildX" links={navLinks} />

      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/store" element={<Store />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/tools" element={<Tools />} />
         <Route path="/login" element={<Login />} />
       
      
      </Routes>
      

      <Footer />
    </Router>
  );
}

export default App;
