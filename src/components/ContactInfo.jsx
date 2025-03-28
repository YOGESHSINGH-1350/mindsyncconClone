import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Office Address */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center text-left">
          <div className="bg-[#684DF4] p-4 rounded-md shadow-lg shadow-blue-500/50 flex items-center justify-center min-w-[60px] min-h-[60px]">
            <FaMapMarkerAlt className="text-white text-3xl" />
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-bold">Our Office Address</h3>
            <p className="text-gray-600 mt-2 hover:text-[#684DF4]">
              Office No 210-211, A-115 Vakil Chamber, Shakarpur, Delhi 110092
            </p>
          </div>
        </div>

        {/* Call Us */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center text-left">
          <div className="bg-[#684DF4] p-4 rounded-md shadow-lg shadow-blue-500/50 flex items-center justify-center min-w-[60px] min-h-[60px]">
            <FaPhoneAlt className="text-white text-3xl" />
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-bold">Call Us Anytime</h3>
            <p className="text-gray-600 mt-2 hover:text-[#684DF4]">
              +919717900953 <br />
              +91-1143572646
            </p>
          </div>
        </div>

        {/* Send Email */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center text-left">
          <div className="bg-[#684DF4] p-4 rounded-md shadow-lg shadow-blue-500/50 flex items-center justify-center min-w-[60px] min-h-[60px]">
            <FaEnvelope className="text-white text-3xl" />
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-bold">Send An Email</h3>
            <p className="text-gray-600 mt-2 hover:text-[#684DF4]">sales@mindsynccon.com</p>
          </div>
        </div>

      </div>
    </div>
  );
}
