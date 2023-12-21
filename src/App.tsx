import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/home-page';
import DashBoard from './Layouts/Dashboard/dashboard';
import TopNavBar from './Layouts/TopNavBar/topnav-bar';

function App() {
  return (
    <Router>
      <div className="App">
        <DashBoard />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <TopNavBar />
      </div>
    </Router>
  );
}

export default App;
