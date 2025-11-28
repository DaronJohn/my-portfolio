import { motion } from "framer-motion";
import { useState } from "react";
import logo from '../assets/logo.png';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  }

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="logo"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src={logo} alt="Daron John logo" className="logo-image" />
      </motion.div>

      <button
        type="button"
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <motion.ul
        className={`nav-links ${isOpen ? "nav-open" : ""}`}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.li
          variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#home" onClick={handleLinkClick}> Home</a>
        </motion.li>
        <motion.li
          variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#projects" onClick={handleLinkClick}> Projects</a>
        </motion.li>
        <motion.li
          variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#contact" onClick={handleLinkClick}> Contact</a>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};