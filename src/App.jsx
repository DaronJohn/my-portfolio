import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY);
  }, []);

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Navbar />
      
      <Hero />
      <Projects />
      <Contact />

      <motion.footer
      className='footer'
      initial={{ opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true}}
      transition={{duration: 0.6}}
      >
      <p> &copy; 2025 Daron John. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

export default App;
