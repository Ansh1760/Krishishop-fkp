import { useState } from "react";
import { Upload, Send, ChevronDown } from "lucide-react";

const Consultency = () => {
  const [formData, setFormData] = useState({
    cropType: "",
    diseaseType: "",
    problemDescription: "",
    photo: null
  });

  const [isCropOpen, setIsCropOpen] = useState(false);
  const [isDiseaseOpen, setIsDiseaseOpen] = useState(false);

  const cropOptions = [
    "Kela (Banana)",
    "Ganna (Sugarcane)", 
    "Dhan (Paddy)",
    "Gehu (Wheat)",
    "Aalu (Potato)",
    "Makka (Maize)",
    "Bajra (Pearl Millet)",
    "Masur (Lentil)",
    "Chana (Chickpea)",
    "Soya Bean",
    "Sarso (Mustard)",
    "Tamatar (Tomato)"
  ];

  const diseaseOptions = [
    "Keeda (Insect Attack)",
    "Chittha (Fungal Disease)",
    "Jal Sanrakshan (Water Problem)", 
    "Khadd ki Kami (Fertilizer Deficiency)",
    "Patta Sukna (Leaf Drying)",
    "Phool na khilna (Flowering Problem)",
    "Fal na lagna (Fruiting Problem)",
    "Soil Problem",
    "Growth Rukna (Stunted Growth)",
    "Dusre Rog (Other Disease)"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        photo: file
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Encode message for WhatsApp
    const message = encodeURIComponent(
      `*Consultation Request:*\n\n` +
      `*Crop Type:* ${formData.cropType}\n` +
      `*Problem Type:* ${formData.diseaseType}\n` +
      `*Description:* ${formData.problemDescription}\n\n` +
      `Please help with this agricultural problem.`
    );

    // ✅ Yaha apna asli WhatsApp number daalo
    window.open(`https://wa.me/919565425500?text=${message}`, '_blank');
  };

  return (
    <section id="consultency" className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Free Consultation
          </h2>
          <p className="text-lg text-gray-700">
            Share your crop problems with us – our experts will guide you.
          </p>
        </div>

        {/* Consultation Form */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-green-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Crop Type Dropdown */}
            <div className="relative">
              <label className="block text-green-800 font-semibold mb-2">
                Select Crop *
              </label>
              <div 
                className="w-full p-3 border border-green-300 rounded-lg cursor-pointer bg-white flex items-center justify-between"
                onClick={() => setIsCropOpen(!isCropOpen)}
              >
                <span className={formData.cropType ? "text-green-800" : "text-gray-500"}>
                  {formData.cropType || "Choose your crop"}
                </span>
                <ChevronDown size={20} className="text-green-600" />
              </div>
              
              {isCropOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-green-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {cropOptions.map((crop) => (
                    <div
                      key={crop}
                      className="p-3 hover:bg-green-50 cursor-pointer border-b border-green-100 last:border-b-0"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, cropType: crop }));
                        setIsCropOpen(false);
                      }}
                    >
                      {crop}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Problem Type Dropdown */}
            <div className="relative">
              <label className="block text-green-800 font-semibold mb-2">
                Problem Type *
              </label>
              <div 
                className="w-full p-3 border border-green-300 rounded-lg cursor-pointer bg-white flex items-center justify-between"
                onClick={() => setIsDiseaseOpen(!isDiseaseOpen)}
              >
                <span className={formData.diseaseType ? "text-green-800" : "text-gray-500"}>
                  {formData.diseaseType || "Choose problem"}
                </span>
                <ChevronDown size={20} className="text-green-600" />
              </div>
              
              {isDiseaseOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-green-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {diseaseOptions.map((disease) => (
                    <div
                      key={disease}
                      className="p-3 hover:bg-green-50 cursor-pointer border-b border-green-100 last:border-b-0"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, diseaseType: disease }));
                        setIsDiseaseOpen(false);
                      }}
                    >
                      {disease}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Problem Description */}
            <div>
              <label className="block text-green-800 font-semibold mb-2">
                Describe Your Problem *
              </label>
              <textarea
                name="problemDescription"
                rows="3"
                placeholder="Write your problem here..."
                className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
                onChange={handleInputChange}
              />
            </div>

            {/* Photo Upload */}
            <div>
              <label className="block text-green-800 font-semibold mb-2">
                Upload Photo (Optional)
              </label>
              <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-green-300 rounded-lg cursor-pointer hover:bg-green-50 transition-colors">
                <Upload className="text-green-600 mb-2" size={20} />
                <span className="text-sm text-green-700 text-center">
                  {formData.photo ? formData.photo.name : "Click to upload photo"}
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center mx-auto"
                disabled={!formData.cropType || !formData.diseaseType}
              >
                <Send size={18} className="mr-2" />
                Get Advice on WhatsApp
              </button>
            </div>
          </form>

          {/* Quick Contact Options */}
          <div className="mt-6 pt-6 border-t border-green-200">
            <p className="text-center text-gray-600 mb-3">Or contact us directly:</p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <a 
                href="tel:+919565425500" 
                className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-medium hover:bg-green-200 transition-colors text-center text-sm"
              >
                📞 Call Us
              </a>
              <a 
                href="https://wa.me/919565425500" 
                className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-medium hover:bg-green-200 transition-colors text-center text-sm"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-600">
            * We will reply within 24 hours. Uploading a photo helps with better diagnosis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Consultency;
