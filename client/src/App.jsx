import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import Store from './pages/store';


// Import pages



const navLinks = [
  { name: 'Store', path: '/store' },
  { name: 'Protein', path: '/workout' },
  { name: 'Pre-Workout', path: '/workout' },
  { name: 'Creatien', path: '/diet' },
  { name: 'Vitamin', path: '/tools' },
  { name: 'Mass Gainers', path: '/articles' },
  { name: 'Fat Burners', path: '/articles' },
  { name: 'Recovery', path: '/articles' },
];

function App() {
  return (
    <Router>
      <Navbar brand="BodyBuildX" links={navLinks} />
      <Store />
      <Footer />
     </Router>
  );
}

export default App;