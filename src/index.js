import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Single from './pages/Single';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Products from './pages/Products';
import Clients from './pages/Clients';
import Careers from './pages/Careers';
import Login from './pages/Login';
import Register from './pages/Register';

import Portfolio from './pages/Portfolio';
import Testimonials from './pages/Testimonials';
import BEPartner from './pages/BEPartner';
import Feedback from './pages/Feedback';
import Sitemap from './pages/Sitemap';
import TermsUse from './pages/TermsUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicies from './pages/RefundPolicies';




export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/products" element={<Products />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/single-blog" element={<Single />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/be-partner" element={<BEPartner />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/terms-use" element={<TermsUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policies" element={<RefundPolicies />} />
          

          
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterApp />);

reportWebVitals();




