import { motion } from "framer-motion";

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

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.a
          className="project-card"
          href="https://daronjohn.github.io/SleekAuth/"
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/sleekauth.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>SleekAuth</h3>
          <p>
            A clean and responsive authentication template built for smooth signup and login experiences. 
            It features a modern layout, soft blur effects, and simple form elements, making it a great starting point for stylish user flows.
          </p>
          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </motion.a>

        <motion.a
          className="project-card"
          href="https://customer-support-chatbot-1.streamlit.app/"
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/chatbot.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Customer Support Chatbot</h3>
          <p>
           An intent-aware customer support chatbot built with Python, NLP, and classic machine learning. 
           It processes user messages in real time and delivers friendly, helpful replies through a polished and easy-to-use Streamlit interface.
          </p>
          <div className="project-tech">
            <span>Python</span>
            <span>NLP</span>
            <span>Machine Learning</span>
          </div>
        </motion.a>

        <motion.a
          className="project-card"
          href="https://twitter-sentiment-app.streamlit.app/"
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/twitter-app.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Twitter Sentiment App</h3>
          <p>
            A lightweight machine learning web app that analyzes tweet sentiment using NLP and logistic regression. 
            It offers fast, simple predictions and presents results through a clean, minimal Streamlit interface suitable for beginners.
          </p>
          <div className="project-tech">
            <span>Python</span>
            <span>Scikit-learn</span>
            <span>Streamlit</span>
          </div>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};