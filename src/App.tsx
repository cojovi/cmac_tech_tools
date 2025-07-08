import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-white font-inter">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<div className="pt-20 p-8 text-center">Projects page coming soon...</div>} />
            <Route path="/about" element={<div className="pt-20 p-8 text-center">About page coming soon...</div>} />
            <Route path="/blog" element={<div className="pt-20 p-8 text-center">Blog page coming soon...</div>} />
            <Route path="/contact" element={<div className="pt-20 p-8 text-center">Contact page coming soon...</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;