import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-primary-900 shadow-md py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <span className="text-2xl font-serif font-bold text-white">
            Bamba <span className="text-secondary-400">Law</span>
          </span>
        </a>
        
        <nav className="hidden md:flex space-x-8">
          <a 
            href="#home" 
            className="text-white hover:text-secondary-300 transition-colors font-medium"
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-white hover:text-secondary-300 transition-colors font-medium"
          >
            About
          </a>
          <a 
            href="#services" 
            className="text-white hover:text-secondary-300 transition-colors font-medium"
          >
            Services
          </a>
          <a 
            href="#reviews" 
            className="text-white hover:text-secondary-300 transition-colors font-medium"
          >
            Reviews
          </a>
          <a 
            href="#contact" 
            className="text-white hover:text-secondary-300 transition-colors font-medium"
          >
            Contact
          </a>
        </nav>
        
        <a 
          href="tel:4436568310"
          className={`hidden md:flex items-center justify-center bg-secondary-500 hover:bg-secondary-600 text-white py-2 px-5 rounded transition-colors shadow-sm font-medium`}
        >
          (443) 656-8310
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary-900 shadow-lg py-4 absolute top-full left-0 right-0 animate-fadeIn">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <a 
              href="#home" 
              className="text-white hover:text-secondary-300 transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-white hover:text-secondary-300 transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-white hover:text-secondary-300 transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#reviews" 
              className="text-white hover:text-secondary-300 transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reviews
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-secondary-300 transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="tel:4436568310"
              className="bg-secondary-500 hover:bg-secondary-600 text-white py-2 px-5 rounded transition-colors shadow-sm font-medium text-center mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              (443) 656-8310
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 