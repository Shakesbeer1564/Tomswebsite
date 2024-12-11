import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Page1 from './Page1';

function App() {
  const [isBox1Enlarged, setIsBox1Enlarged] = useState(false);

const handleBoxClick = () => {
    setIsBox1Enlarged(!isBox1Enlarged);

  };

  return (
    <div className="App">
      <header>
        <h1>Welcome to TomsTolleWebsite</h1>
      </header>
      <div className="main-content">
        <div className="summary">
          <div className="summary-box">Summary Point 1</div>
          <div className="summary-box">Summary Point 2</div>
          <div className="summary-box">Summary Point 3</div>
        </div>
      </div>
      <div className="main-content">
        <div className="main-box">Main Content</div>
      </div>
      <div className="lower-content">
        <div
          onClick={() => handleBoxClick('/page1')}
          className={`lower-box ${isBox1Enlarged ? 'enlarged' : ''}`}
        >
          Box 1
        </div>
        <div className="lower-box">Box 2</div>
        <div className="lower-box">Box 3</div>
      </div>
    </div>
  );
};


export default App;

