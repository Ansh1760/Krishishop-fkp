import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const About = () => {
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
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-emerald-100 relative overflow-hidden" id="About">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/3 -right-16 w-64 h-64 bg-emerald-300 rounded-full opacity-15"></div>
        <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-lime-200 rounded-full opacity-15"></div>
      </div>

      {/* Hero Content */}
      <section id="about" className="flex-1 flex items-center justify-center px-6 pt-10 relative z-10">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                <span className="text-green-700 font-medium">Since 2009</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-green-900 leading-tight">
                Krishi Samadhan Sangh
                <span className="text-green-600 block">किसानों की पहली पसंद</span>
              </h1>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                20+ years of trusted service in agricultural solutions. Specialized in 
                banana cultivation, sugarcane crops, and all types of farming needs.
                हम केले की खेती, गन्ना फसल, और सभी प्रकार की कृषि आवश्यकताओं में विशेषज्ञ हैं।
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Our Services देखें
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-green-600 text-green-700 px-8 py-4 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all duration-300"
              >
                Contact Us जानें
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              {[
                { icon: "🌱", title: "Organic Solutions", desc: "प्राकृतिक उपचार" },
                { icon: "🚜", title: "Farm Equipment", desc: "कृषि उपकरण" },
                { icon: "📞", title: "Expert Support", desc: "विशेषज्ञ सलाह" }
              ].map((feature, index) => (
                <div key={index} className="text-center p-4 bg-white/50 rounded-xl shadow-sm">
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <div className="font-semibold text-green-700">{feature.title}</div>
                  <div className="text-sm text-gray-600">{feature.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Content */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/bg-img.jpg"
                alt="Tauji - Agricultural Expert"
                className="rounded-3xl shadow-2xl w-full max-w-md mx-auto lg:max-w-lg border-4 border-white/20"
              />
            </div>
            
            {/* Floating elements around image */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-200 rounded-2xl rotate-12 opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-emerald-300 rounded-full opacity-40"></div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-4 -right-4 bg-white/90 px-6 py-3 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">20+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

   
    </div>
  );
};

export default About;