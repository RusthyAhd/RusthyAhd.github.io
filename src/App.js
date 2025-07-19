import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton'; // ✅ NEW
import Experience from './sections/Experience';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <CustomCursor />
      {/* Sidebar */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-16 ml-48">
        <section id="hero" className="mb-24">
          <Hero />
        </section>
        <section id="about" className="mb-24">
          <About />
        </section>
        <section id="experience" className="mb-24">
    <Experience />
  </section>
        <section id="projects" className="mb-24">
          <Projects />
        </section>
        <section id="contact" className="mb-24">
          <Contact />
        </section>

        <Footer />
      </main>

      {/* Scroll to Top Button */}
      <ScrollToTopButton /> {/* ✅ ADDED */}
    </div>
  );
}

export default App;
