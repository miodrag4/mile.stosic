import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import  Projects  from './components/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Aboutme } from './components/Aboutme';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Banner />
        <Aboutme />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;