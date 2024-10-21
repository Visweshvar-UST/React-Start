import React from 'react';
import logo from './logo.svg';
// import Viswa from './viswa.jpg';
import './App.css';
import './components/About'
import About from './components/About';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<h1>Welcome to MST Technological!</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <img src={`${process.env.PUBLIC_URL}/viswa.jpg`} width={100} style={{ borderRadius: '50%' }}  alt="viswa" />
        <About/>
      </header>
    </div>
  );
}

export default App;
