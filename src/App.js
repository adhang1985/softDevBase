import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import BookDemo from './components/BookDemo';
import ContactPage from './components/ContactPage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import MobileAppDevelopment from './components/MobileAppDevelopment';
import FullStackDevelopment from './components/FullStackDevelopment';
import AIDevelopment from './components/AIDevelopment';
import FinTechPage from './components/FinTechPage';
import HealthTechPage from './components/HealthTechPage';
import EdTechPage from './components/EdTechPage';
import ECommercePage from './components/ECommercePage';
import StartupsPage from './components/StartupsPage';
import SMEsPage from './components/SMEsPage';
import EnterprisesPage from './components/EnterprisesPage';
import AgenciesPage from './components/AgenciesPage';
import CustomSolutionsPage from './components/CustomSolutionsPage';
import SaaSDevelopmentPage from './components/SaaSDevelopmentPage';
import DigitalPlatformsPage from './components/DigitalPlatformsPage';
import IntegrationServicesPage from './components/IntegrationServicesPage';
import BlockChainDevelopment from './components/BlockChainDevelopment';
import UIUXDesign from './components/UIUXDesign';
import SoftwareProductDevelopment from './components/SoftwareProductDevelopment';
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';
import ScrollToTop from './components/ScrollToTop';
import './styles/App.css';

// Home Page Component
const HomePage = () => (
  <>
    <Hero />
    <Services />
    <About />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
         <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/services" element={<ServicesPage />} />
           <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
           <Route path="/full-stack-development" element={<FullStackDevelopment />} />
           <Route path="/ai-development" element={<AIDevelopment />} />
           <Route path="/fintech" element={<FinTechPage />} />
           <Route path="/healthtech" element={<HealthTechPage />} />
           <Route path="/edtech" element={<EdTechPage />} />
           <Route path="/ecommerce" element={<ECommercePage />} />
           <Route path="/startups" element={<StartupsPage />} />
           <Route path="/smes" element={<SMEsPage />} />
           <Route path="/enterprises" element={<EnterprisesPage />} />
           <Route path="/agencies" element={<AgenciesPage />} />
           <Route path="/custom-solutions" element={<CustomSolutionsPage />} />
           <Route path="/saas-development" element={<SaaSDevelopmentPage />} />
           <Route path="/digital-platforms" element={<DigitalPlatformsPage />} />
           <Route path="/integration-services" element={<IntegrationServicesPage />} />
           <Route path="/blockchain-development" element={<BlockChainDevelopment />} />
           <Route path="/uiux-design" element={<UIUXDesign />} />
           <Route path="/software-product-development" element={<SoftwareProductDevelopment />} />
           <Route path="/about" element={<AboutPage />} />
           <Route path="/contact" element={<ContactPage />} />
           <Route path="/privacy" element={<PrivacyPage />} />
           <Route path="/terms" element={<TermsPage />} />
           <Route path="/demo" element={<BookDemo />} />
         </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 