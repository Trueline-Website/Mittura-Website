import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import ProjectDetail from "./Pages/ProjectDetail.jsx";
import PortfolioPage from "./Pages/PortfolioPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Footer from "./Components/Footer.jsx";
import ConstructionLoader from "./Components/ConstructionLoader.jsx";
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
  const [loading, setLoading] = useState(true);

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
      {/* INITIAL VISIT ARCHITECTURAL SLIDEUP LOADER */}
      <AnimatePresence mode="wait">
        {loading && (
          <ConstructionLoader onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Navbar />
        <main key={location.pathname} className="animate-slide-up">
          <Routes>
            <Route path="/" element={<Home isLoaded={!loading} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ServiceProvider>
  );
}

export default App;