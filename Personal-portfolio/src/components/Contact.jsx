import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact= () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    
    <div className='bg-black text-white py-20 ' id='contact'>
         <h2 className="text-3xl font-bold mt-12 text-center">Contact Me</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
             < h3 className=" mt-14 pb-9 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Lets Talk</h3>
          <p className="flex items-center space-x-2 mt-10">
            <FaEnvelope className="inline-block text-green-400 mr-2" />
            <span>Email: jaisha.selfwork@gmail.com</span>
          </p>
         
          <p className="flex items-center space-x-2 pt-7">
            <FaMapMarkerAlt  className="inline-block text-green-400 mr-2" />
            <span>Location: Lahore,Pakistan</span>
          </p>
        </div>

        {/* Right Side (Form) */}
        <div>
          <form
            className="bg-gray-800 p-8 rounded-md space-y-4 mt-10"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-2 bg-gray-700 rounded text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 bg-gray-700 rounded text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full mt-1 p-2 bg-gray-700 rounded text-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
                transform transition-trandform duration-300 hover:scale-105 px-4 py-2 rounded-full'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
