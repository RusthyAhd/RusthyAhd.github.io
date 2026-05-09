import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaMoon, FaSun } from 'react-icons/fa';
import socials from '../constants/socials';
import useDarkMode from '../hooks/useDarkMode';

const sidebarVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.1,
      duration: 0.8,
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Header() {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-gray-200 dark:border-gray-800 px-4 py-3 md:hidden">
        <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Rusthy Ahamed
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100/90 dark:bg-gray-800 px-3 py-1 text-xs font-semibold text-gray-800 dark:text-gray-100"
            aria-label="Toggle dark mode"
          >
            {darkMode ? 'Dark' : 'Light'}
          </button>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1 text-xs font-semibold text-gray-800 dark:text-gray-100"
            aria-label="Toggle navigation menu"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/30 md:hidden" onClick={() => setMenuOpen(false)}>
          <motion.div
            initial={{ x: -240, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -240, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 text-xl font-bold text-gray-900 dark:text-gray-100">
              Navigation
            </div>
            <nav className="flex flex-col space-y-4">
              {['about', 'experience', 'skills', 'projects', 'education', 'certificates', 'contact'].map((section) => (
                <Link
                  key={section}
                  to={section}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-50}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                  onClick={() => setMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              ))}
            </nav>
          </motion.div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <motion.aside
        initial="hidden"
        animate="visible"
        variants={sidebarVariants}
        className="fixed left-0 top-0 h-full w-48 hidden md:flex flex-col items-center py-8 bg-white dark:bg-gray-900 shadow-lg z-40 overflow-y-auto"
      >
      {/* 👤 Your Name */}
<motion.div
  className="mb-10 px-4 text-center max-w-xs mx-auto"
>
  <motion.div
    variants={itemVariants}
    className="text-2xl font-bold text-gray-900 dark:text-gray-100"
  >
   <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-extrabold text-4xl">
  Rusthy Ahamed
</h1>

  </motion.div>
  <motion.div
    variants={itemVariants}
    className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-2"
  >
    Software Engineer
  </motion.div>
 
</motion.div>


      {/* Navigation Links */}
      <motion.nav className="mb-6 w-full px-4 flex flex-col items-start space-y-4">
        {['about', 'experience', 'skills', 'projects', 'education', 'certificates', 'contact'].map((section) => (
          <motion.div key={section} variants={itemVariants}>
            <Link
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
              activeClass="text-blue-600 dark:text-blue-400 font-semibold"
              className="block w-full text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition-all"
              data-cursor="link"  
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </motion.div>
        ))}
      </motion.nav>

      {/* Dark Mode Toggle */}
      <motion.div variants={itemVariants} className="mb-6 w-full px-4">
        <button
          onClick={toggleDarkMode}
          className="w-full flex items-center justify-between gap-3 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100/90 dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-800 dark:text-gray-100 shadow-sm transition-colors"
          aria-label="Toggle dark mode"
          data-cursor="link"
        >
          <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
          <span className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors">
            <span
              className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow transition-transform ${
                darkMode ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
            <span className="absolute left-2 text-xs text-gray-500 dark:text-gray-400">
              {!darkMode && <FaSun />}
            </span>
            <span className="absolute right-2 text-xs text-gray-500 dark:text-gray-300">
              {darkMode && <FaMoon />}
            </span>
          </span>
        </button>
      </motion.div>

      {/* Social Links */}
     <motion.div className="flex space-x-4 mt-auto" variants={sidebarVariants}>
  {socials.map((social, index) => (
    <motion.a
      key={index}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xl text-gray-600 dark:text-gray-300 hover:text-blue-500"
      variants={itemVariants}
       data-cursor="link" 
    >
      {social.icon}
    </motion.a>
  ))}
</motion.div>

      </motion.aside>
    </>
  );
}

export default Header;
