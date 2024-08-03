import React from'react';
import Login from './Component.js/Login';
import SignUpForm from './Component.js/Sinup';
import TaskManagement from './Component.js/managetasks';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/" element={<TaskManagement />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
