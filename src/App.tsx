import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './components/About';
import ServicesPage from './pages/ServicesPage';
import UniversitiesPage from './pages/UniversitiesPage';
import FoundationPage from './pages/FoundationPage';
import StudentFinancePage from './pages/StudentFinancePage';
import ContactPage from './pages/ContactPage';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';


function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/universities" element={<UniversitiesPage />} />
          <Route path="/foundation" element={<FoundationPage />} />
          <Route path="/student-finance" element={<StudentFinancePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;