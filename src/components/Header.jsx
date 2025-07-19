import { motion } from 'framer-motion';
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

  return (
    <motion.aside
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
      className="fixed left-0 top-0 h-full w-48 flex flex-col items-center py-8 bg-white dark:bg-gray-900 shadow-lg z-50"
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
  <motion.div
    variants={itemVariants}
    className="text-sm text-gray-600 dark:text-gray-400 mt-3 leading-snug"
  >
    I’m a software developer who loves building beautiful and performant web apps.
  </motion.div>
</motion.div>


      {/* Navigation Links */}
      <motion.nav className="mb-8 flex flex-col space-y-4">
        {['about', 'experience', 'projects', 'contact'].map((section) => (
          <motion.div key={section} variants={itemVariants}>
            <Link
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
              activeClass="text-blue-600 dark:text-blue-400 font-semibold"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition-all"
              data-cursor="link"  
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </motion.div>
        ))}
      </motion.nav>

      {/* Dark Mode Toggle */}
      <motion.div variants={itemVariants} className="mb-8">
        <button
          onClick={toggleDarkMode}
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500 text-xl transition duration-300"
          aria-label="Toggle dark mode"
        >
          <motion.div
            key={darkMode ? 'dark' : 'light'}
            initial={{ rotate: 180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </motion.div>
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
  );
}

export default Header;
