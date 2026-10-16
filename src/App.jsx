import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import ProjectDetail from "./Pages/ProjectDetail.jsx";
import PortfolioPage from "./Pages/PortfolioPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Footer from "./Components/Footer.jsx";
import { ServiceProvider } from "./context/ServiceContext.jsx";

// Component to handle scroll to top or hash on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  const location = useLocation();

  // Handle hash scroll
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <ServiceProvider>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />

        <style>{`
          @keyframes fade-in {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
              animation: fade-in 1.2s cubic-bezier(0.4, 0, 0.2, 1);
          }
        `}</style>
      </div>
    </ServiceProvider>
  );
}

export default App;