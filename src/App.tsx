import './App.css';
import { motion } from 'framer-motion';
import NavBar from './layout/Navbar';
import AboutUs from './pages/AboutUs';
import OurRooms from './pages/OurRooms';
import OurEvents from './pages/OurEvents';
import OurCusine from './pages/OurCusine';
import ContactUs from './pages/ContactUs';
import Footer from './layout/Footer';
import BackImage from './pages/BackImg';

// Animation wrapper for each section
const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <div>
      <NavBar />

      <SectionWrapper>
        <BackImage />
      </SectionWrapper>

      <SectionWrapper>
        <AboutUs />
      </SectionWrapper>

      <SectionWrapper>
        <OurRooms />
      </SectionWrapper>

      <SectionWrapper>
        <OurEvents />
      </SectionWrapper>

      <SectionWrapper>
        <OurCusine />
      </SectionWrapper>

      <SectionWrapper>
        <ContactUs />
      </SectionWrapper>

      <Footer />
    </div>
  );
}

export default App;


