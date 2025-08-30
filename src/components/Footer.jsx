import { FaInstagram, FaFacebook, FaTwitter, FaArrowUp, FaLeaf, FaLaptopCode } from "react-icons/fa";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Show scroll-to-top button when user scrolls down
  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.pageYOffset > 400);
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  // Function for scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-green-900 to-green-800 text-white pt-8 pb-6 mt-12 relative">
      {/* Main footer content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          
          {/* Company info */}
          <div className="space-y-3">
            <div className="flex items-center">
              <FaLeaf className="text-green-400 mr-2" />
              <h3 className="text-lg font-bold text-green-300">Krishi Samadhan Sangh</h3>
            </div>
            <p className="text-green-100 text-xs leading-relaxed">
              Empowering farmers with sustainable agricultural solutions and connecting them to better markets.
            </p>
          <a href="http://bytebound.in" target="_blank">  <div className="pt-2 bg-green-800 p-2 rounded-lg mt-2">
              <div className="flex items-center text-yellow-200 text-xs mb-1">
                <FaLaptopCode className="mr-1" />
                <span>Digital Partner</span>
              </div>
              <p className="text-white text-sm font-medium">ByteBound Technologies</p>
              <p className="text-green-200 text-xs">Web & Mobile App Solutions</p>
            </div></a>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-md font-semibold text-green-300">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="#" className="text-green-100 hover:text-white transition-colors text-xs">Farming Techniques</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors text-xs">Crop Calendar</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors text-xs">Market Prices</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors text-xs">Expert Advice</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors text-xs">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-md font-semibold text-green-300">Contact Us</h3>
            <div className="text-green-100 text-xs space-y-1">
              <p>Krishi Samadhan Sangh , Fakharpur Bahraich</p>
              <p>kaustubhtripathi66@gmail.com</p>
              <p>+91 9838738870</p>
            </div>
            
            <div className="pt-2">
              <div className="flex space-x-3 pt-1">
                <a href="https://www.facebook.com/bytebound" target="_blank" rel="noopener noreferrer" 
                   className="text-green-200 hover:text-blue-400 transition transform hover:scale-110">
                  <FaFacebook size={16} />
                </a>
                <a href="https://www.instagram.com/bytebound.in" target="_blank" rel="noopener noreferrer" 
                   className="text-green-200 hover:text-blue-300 transition transform hover:scale-110">
                  <FaTwitter size={16} />
                </a>
                <a href="https://www.instagram.com/krishi_samadhan_sangh?igsh=MXE1OGE0eHliMGRq" target="_blank" rel="noopener noreferrer" 
                   className="text-green-200 hover:text-pink-400 transition transform hover:scale-110">
                  <FaInstagram size={16} />
                </a>
              </div>
              <p className="text-green-200 text-xs mt-1">Follow ByteBound</p>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-green-700 my-4"></div>
        
        {/* Copyright and bottom info */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p className="text-xs text-green-200">
            © 2025 Krishi Samadhan Sangh. All rights reserved. | Powered by <span className="text-white font-medium">ByteBound.in</span>
          </p>
          
          <div className="flex space-x-4 text-xs text-green-200">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Floating back to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-green-600 hover:bg-green-500 transition-all duration-300 text-white p-2 rounded-full shadow-lg z-50 ${
          showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <FaArrowUp size={14} />
      </button>
    </footer>
  );
};

export default Footer;