import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState({ sending: false, success: null, msg: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, success: null, msg: "" });

    try {
      const response = await fetch("https://formspree.io/f/xovnvoje", {   // apna Formspree URL daalna
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus({
          sending: false,
          success: true,
          msg: "✅ Message send ho gaya! Jaldi reply milega."
        });
        setFormData({ name: "", phone: "", message: "" });

        setTimeout(() => setStatus({ sending: false, success: null, msg: "" }), 5000);
      } else {
        throw new Error("Form submit failed");
      }
    } catch (error) {
      setStatus({
        sending: false,
        success: false,
        msg: "❌ Message send nahi hua. Please WhatsApp ya Call karein."
      });
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Hamse Sampark Karein
          </h2>
          <p className="text-lg text-gray-700">
            Kisi bhi agricultural need ke liye humse directly baat karein
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-green-50 rounded-2xl p-4 md:p-6">
            <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-4">Message Bhejein</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-green-800 font-medium mb-2">Apka Naam *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Pura naam likhein"
                  className="w-full p-3 border border-green-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-green-800 font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Apna mobile number"
                  className="w-full p-3 border border-green-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-green-800 font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Apna message yahan likhein..."
                  className="w-full p-3 border border-green-300 rounded-lg resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={status.sending}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 flex items-center justify-center disabled:opacity-50"
              >
                <Send size={18} className="mr-2" />
                {status.sending ? "Bhej rahe hain..." : "Message Bhejein"}
              </button>
            </div>

            {status.msg && (
              <div className={`mt-4 p-3 rounded-lg ${status.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                {status.msg}
              </div>
            )}
          </div>

          {/* Map and Contact Info */}
          <div className="space-y-6">
 

            {/* Google Map */}
            <div className="bg-green-50 rounded-2xl p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-4">हमारा Location</h3>
              
              <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden border-2 border-green-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223.62860508347296!2d81.53018672763918!3d27.4327969874655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999a77e6e72725b%3A0x49fbd8332e1aca5d!2sFakharpur%2C%20Uttar%20Pradesh%20271902!5e1!3m2!1sen!2sin!4v1756379483212!5m2!1sen!2sinhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1067.8275440239463!2d81.52998181805131!3d27.43262994432339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999a7b3fc350513%3A0x1077de3192cf6c00!2sShambhu%20hospital!5e1!3m2!1sen!2sin!4v1756379865008!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Agricultural Market Location"
                />
              </div>
              
              <div className="mt-4 text-center">
                <a
                  href="https://goo.gl/maps/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MapPin size={16} className="mr-2" />
                  Google Maps में देखें
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    
  );
};

export default Contact;