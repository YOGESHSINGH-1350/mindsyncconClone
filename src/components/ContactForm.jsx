'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row gap-8">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Have Any Questions?</h2>
          <p className="text-gray-600 mb-6">
            Get in touch with Mindsync Consulting Pvt Ltd for all your IT solutions.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name*"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile No.*"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="">Select Service</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Software QA">Software QA</option>
            </select>
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#684DF4] text-white p-3 rounded-md hover:bg-[#5738C3] transition"
            >
              Submit »
            </button>
          </form>
        </div>

        {/* Right Side - Illustration */}
        <div className="hidden md:flex w-1/2 justify-center items-center">
          <img
            src="images/63bbf22710f7d2fedab33ea2_contact us.svg"
            alt="Contact Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}