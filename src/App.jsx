// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Imagen from './pages/Imagen';
import Revista from './pages/Revista';
import Podcast from './pages/Podcast';
import Video from './pages/Video';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/imagen" element={<Imagen />} />
          <Route path="/revista" element={<Revista />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
