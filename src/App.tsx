import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/home-page';
import DashBoard from './Layouts/Dashboard/dashboard';
import TopNavBar from './Layouts/TopNavBar/topnav-bar';
import TestPage from './Pages/test-page';


function App() {
  return (
    <Router>
      <div className="App">
        <DashBoard />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test-page" element={<TestPage />} />
        </Routes>
        <TopNavBar />
      </div>
    </Router>
  );
}

export default App;
