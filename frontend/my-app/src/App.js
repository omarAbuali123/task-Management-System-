import React from'react';
import Login from './Component.js/Login';
import SignUpForm from './Component.js/Sinup';
import Tasks from './Component.js/managetasks';
import Header from './Component.js/Heder';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/task" element={<Tasks />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
