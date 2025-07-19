function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-10">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="font-bold text-xl">John Doe</div>
        <div className="space-x-4">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
