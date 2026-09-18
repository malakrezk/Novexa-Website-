import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Services from './pages/Services/Services.jsx';
import Solutions from './pages/Solutions/Solutions.jsx';
import Work from './pages/Work/Work.jsx';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails.jsx';
import About from './pages/About/About.jsx';
import './styles/global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<ProjectDetails />} />     
        <Route path="/about" element={<About />} />  
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
