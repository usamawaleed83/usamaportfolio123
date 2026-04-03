import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Skills from './components/sections/Skills';
import Achievements from './components/sections/Achievements';
import Projects from './components/sections/Projects';
import NovaShowcase from './components/sections/NovaShowcase';
import ShilajitShowcase from './components/sections/ShilajitShowcase';
import Network from './components/sections/Network';
import Model3D from './components/sections/Model3D';
import Blogs from './components/sections/Blogs';
import Testimonials from './components/sections/Testimonials';
import Process from './components/sections/Process';
import Newsletter from './components/sections/Newsletter';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Resume from './pages/Resume';
import AchievementsPage from './pages/Achievements';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen transition-colors duration-500 selection:bg-[#ef8354] selection:text-white">
          <Navbar />

          <Routes>
            {/* Main Portfolio Page */}
            <Route path="/" element={
              <main className="overflow-x-hidden">
                <Hero />
                <About />
                <Services />
                <Skills />
                <Achievements />
                <Projects />
                <NovaShowcase />
                <ShilajitShowcase />
                <Network />
                <Model3D />
                <Blogs />
                <Testimonials />
                <Process />
                <Newsletter />
                <Contact />
              </main>
            } />

            {/* Resume/CV Page */}
            <Route path="/resume" element={<Resume />} />

            {/* Achievements Page */}
            <Route path="/achievements" element={<AchievementsPage />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
