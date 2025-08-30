import { Sprout, Shield, Users, Truck, Phone, CheckCircle, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Sprout className="text-green-600" size={40} />,
      title: "Banana Plants Supply",
      description: "Sabhi prakar ke kele ke behtarin paudhe - TC plants bhi available",
      features: ["TC Plants", "Grand Naine", "G9 Variety", "Robusta", "100% Guarantee"],
      image: "https://5.imimg.com/data5/SELLER/Default/2021/6/SX/JR/DL/111506046/new-product-500x500.jpeg"
    },
    {
      icon: <Shield className="text-green-600" size={40} />,
      title: "Quality Pesticides & Fertilizers",
      description: "Coragen, Urea, DAP aur sabhi zaroori dawai - expert staff se service",
      features: ["Coragen Available", "Urea & DAP", "Organic Options", "Expert Application"],
      image: "https://5.imimg.com/data5/SELLER/Default/2023/6/314039360/RY/NE/ZH/138440690/agriculture-pesticide-500x500.jpg",
      products: [
        { name: "Coragen", type: "Insecticide" },
        { name: "Urea", type: "Fertilizer" },
        { name: "DAP", type: "Fertilizer" },
        { name: "Potash", type: "Fertilizer" }
      ]
    },
    {
      icon: <Users className="text-green-600" size={40} />,
      title: "FREE Expert Consultation",
      description: "Bilkul muft expert salah - crop planning se market guidance tak",
      features: ["Bilkul Free Service", "24/7 Support", "Farm Visit", "WhatsApp Guidance"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN14wRaR4Ruu7q_qMT3YTAKaQvDaBNYwKIqw&s",
      isHighlighted: true
    },
    {
      icon: <Truck className="text-green-600" size={40} />,
      title: "Home Delivery Service",
      description: "Ghar tak delivery - emergency mai bhi available, no extra charge",
      features: ["Free Delivery", "Same Day Service", "Emergency Available", "Safe Packing"],
      image: "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2021-09/Food%20delivery%20image.jpg"
    }
  ];

  const availableProducts = [
    {
      name: "Coragen",
      image: "https://www.somaniagro.com/cdn/shop/files/13_1809dfe3-02cb-4c56-9f65-517ec039f570.png?v=1716564036",
      category: "Insecticide"
    },
    {
      name: "Urea",
      image: "https://m.media-amazon.com/images/I/31H+2p-NUEL.jpg",
      category: "Fertilizer"
    },
    {
      name: "DAP",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkS97YKNs-FkzDIAFRkCheEbS1BLI0Ag-pJw&s",
      category: "Fertilizer"
    },
    {
      name: "Potash",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDArx25zg13e1s56RHU77g9HIuOgMvuHWjw&s",
      category: "Fertilizer"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Hamari Services
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Kele ki kheti se lekar poore farm management tak - hum sab kuch provide karte hain
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border cursor-pointer relative overflow-hidden ${
                service.isHighlighted 
                  ? 'border-yellow-400 ring-2 ring-yellow-200' 
                  : 'border-green-100'
              }`}
              onClick={scrollToContact}
            >
              {/* Highlight Badge */}
              {service.isHighlighted && (
                <div className="absolute top-0 right-0 bg-yellow-500 text-white px-3 py-1 rounded-bl-lg text-xs font-bold flex items-center">
                  <Star size={12} className="mr-1" />
                  FREE
                </div>
              )}

              {/* Service Image */}
              <div className="mb-4 rounded-lg overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-32 object-cover"
                />
              </div>

              <div className="flex items-center mb-4">
                <div className="flex justify-center w-12 h-12 bg-green-100 rounded-lg items-center mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-green-800">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm">
                {service.description}
              </p>

              <ul className="space-y-2 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-green-700 text-sm">
                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                    <span className={service.isHighlighted && featureIndex === 0 ? "font-semibold text-yellow-600" : ""}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-2 rounded-lg mt-4 transition-colors duration-300 font-medium text-sm ${
                service.isHighlighted
                  ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}>
                Contact Karein
              </button>
            </div>
          ))}
        </div>

        {/* Available Products Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-green-800 text-center mb-8">
            Available Products
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {availableProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center hover:shadow-lg transition-all duration-300">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-20 h-20 mx-auto mb-3 rounded-lg object-cover"
                />
                <h4 className="font-semibold text-green-800 text-sm">{product.name}</h4>
                <p className="text-xs text-gray-600">{product.category}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600 mb-3">Aur bhi bahut saare products available hain!</p>
            <button 
              onClick={scrollToContact}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300 text-sm"
            >
              Poori List Dekhen
            </button>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-3">FREE Consultation Le Kar Shuru Karein!</h3>
            <p className="text-lg mb-6 opacity-90">
              Pehle FREE expert advice lein, phir decide karein - bilkul risk free!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="tel:+919838738870" 
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300 text-sm flex items-center justify-center"
              >
                <Phone size={16} className="mr-2" />
                Call Karein (FREE)
              </a>
              <a 
                href="https://wa.me/919565425500" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 text-sm flex items-center justify-center"
              >
                📱 WhatsApp Karein
              </a>
            </div>
            <p className="text-sm mt-4 opacity-80">24/7 Available • No Charges for Consultation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
