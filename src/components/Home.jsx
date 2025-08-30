import { useState, useEffect } from "react";
import { Phone, MessageCircle, ChevronDown, Menu, X } from "lucide-react";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Correct order: Home, About, Services, Consultency, Contact
  const navItems = ['home', 'about', 'services', 'consultency', 'contact'];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/3 -right-16 w-64 h-64 bg-emerald-300 rounded-full opacity-15"></div>
        <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-lime-200 rounded-full opacity-15"></div>
      </div>

      {/* Navigation Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-20 h-20  rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg"><img src="/LOGOO.png" alt="" /></span>
            </div>
            <h1 className="text-2xl font-bold text-green-800">Krishi Samadhan Sangh</h1>
          </div>

          {/* Desktop Navigation - Correct Order */}
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize hover:text-green-600 transition-colors duration-200"
              >
                {item === 'consultency' ? 'Consultancy' : item}
              </button>
            ))}
          </nav>

          {/* Call Now Button - Desktop */}
          <a 
            href="tel:+919565425500" 
            className="hidden md:flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            <Phone size={18} />
            <span>Call Now</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-3 text-gray-700 bg-white rounded-lg shadow-sm border"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown - Same Correct Order */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg px-6 py-6 space-y-5 mt-4 rounded-lg mx-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-gray-700 hover:text-green-600 py-2 capitalize text-lg font-medium"
              >
                {item === 'consultency' ? 'Consultancy' : item}
              </button>
            ))}
            <a 
              href="tel:+919565425500" 
              className="flex items-center space-x-2 bg-green-600 text-white px-4 py-3 rounded-lg mt-4 text-center justify-center"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>
          </div>
        )}
      </header>

      {/* Hero Content Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24 relative z-10">
        <div className="max-w-4xl w-full space-y-10 text-center">
          {/* Circular Profile Photo */}
          <div className="relative flex justify-center">
            <div className="relative">
              <img
                src="/Tauji.jpg"
                alt="Founder - Krishi Samadhan Sangh"
                className="w-46 h-46 md:w-52 md:h-52 rounded-full object-cover shadow-2xl border-4 border-white/30"
              />
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-200 rounded-2xl rotate-12 opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-emerald-300 rounded-full opacity-40"></div>
              
              {/* Experience Badge */}
              <div className="absolute -bottom-2 -right-2 bg-white/90 px-4 py-2 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-700">20+</div>
                  <div className="text-xs text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-green-100 px-5 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              <span className="text-green-700 font-medium">Trusted Since 2003</span>
            </div>
            
            <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold text-green-900 leading-tight">
              Krishi Samadhan Sangh
              <span className="text-green-600 block mt-2">Faslo Ki Suraksha, Kheti Ki Samriddhi</span>
            </h1>
            
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            With 20+ years of experience in farming, we provide trusted solutions for banana cultivation, sugarcane, and crop protection. Based in Fakharpur, Bahraich, our services are led by Mahesh Tripathi, a renowned banana trader and dedicated supporter of farmers
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('consultency')}
              className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Free Consultation
            </button>
            
            <a 
              href="https://wa.me/919565425500" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 border-2 border-green-600 text-green-700 px-6 py-4 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all duration-300"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Message</span>
            </a>
          </div>

          
        </div>

       
      </section>

      {/* Other Sections will come here with IDs: about, services, consultency, contact */}
    </div>
  );
};

export default Home;