import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Header from './components/NavBar'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner' // Novo componente
import './App.css' // Importar estilos globais
import 'tailwindcss/tailwind.css' // Importar Tailwind CSS
import './styles/global.css' // Importar estilos globais personalizados

// Lazy loading para páginas
const HomePage = React.lazy(() => import('./pages/HomePage'))
const AboutPage = React.lazy(() => import('./pages/AboutPage'))
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'))
const UniversitiesPage = React.lazy(() => import('./pages/UniversitiesPage'))
const StudentFinancePage = React.lazy(() => import('./pages/StudentFinancePage'))
const ContactPage = React.lazy(() => import('./pages/ContactPage'))
const Testimonials = React.lazy(() => import('./components/Testimonials'))
const FAQ = React.lazy(() => import('./components/FAQ'))

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/universities" element={<UniversitiesPage />} />
            <Route path="/student-finance" element={<StudentFinancePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            
            {/* Rota 404 */}
            <Route path="*" element={
              <div className="container mx-auto py-20 text-center">
                <h1 className="text-4xl font-bold mb-4">404</h1>
                <p>{t('common.pageNotFound')}</p>
              </div>
            } />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </Router>
  )
}

export default App