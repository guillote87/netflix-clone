import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import { Navbar } from './components/Navbar/Navbar';
import { App } from './App';
import {New} from './pages/New'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
    <Router>
    <Navbar />
      <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/novedades" element={<New/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
