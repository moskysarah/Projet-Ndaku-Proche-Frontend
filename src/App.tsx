import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import 'leaflet/dist/leaflet.css';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/Services';
import ContactPage from './pages/ContactPage';
import PropertyPage from './pages/PropertyPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/a-propos" element={<AboutPage/>} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={< ContactPage/>} />
          <Route path="/proprietes" element={<PropertyPage/>} />
          <Route path="/connexion" element={<LoginPage/>} />
          <Route path="/inscription" element={<RegisterPage/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;