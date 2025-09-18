import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from '../../assets/images/PageBanners/collaborations.jpg'

// const API_URL = "http://localhost:5000"; // Replace with your live API URL
const API_URL = "https://peptidesbackend.onrender.com"; // Replace with your live API URL

const CollaborationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "Academic",
    email: "",
    address: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/api/collaborate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message, { autoClose: 10000 });
        setFormData({
          name: "",
          type: "Academic",
          email: "",
          address: "",
          message: "",
        });
      } else {
        toast.error(data.message || "Submission failed. Please try again.", { autoClose: 10000 });
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An error occurred. Please check your network and try again.", { autoClose: 10000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f2efe9", color: "#714819" }}>
      <ToastContainer
        position="top-right"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-end text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
            Come Collaborate
          </h1>
        </motion.div>
      </section>

      {/* Collaboration Form Section */}
      <div
        className="py-16 px-6"
        style={{ backgroundColor: "#f2efe9", color: "#714819" }}
      >
        <div className="bg-white p-8 md:p-12 shadow-xl rounded-2xl w-full max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">
            Collaboration Form
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name / Institution */}
              <div>
                <label className="block font-semibold mb-2">
                  Name / Institution <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-300 focus:outline-none transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-semibold mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-300 focus:outline-none transition"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block font-semibold mb-2">
                Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address"
                onChange={handleChange}
                value={formData.address}
                required
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-300 focus:outline-none transition"
              />
            </div>

            {/* Collaboration Type */}
            <div>
              <label className="block font-semibold mb-2">
                Collaboration Type <span className="text-red-500">*</span>
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-300 focus:outline-none transition"
              >
                <option value="Academic">Academic</option>
                <option value="Industrial">Industrial</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block font-semibold mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                onChange={handleChange}
                value={formData.message}
                rows="4"
                required
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-300 focus:outline-none transition"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="py-3 rounded-lg font-bold transition disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto px-12"
                style={{ backgroundColor: "#b89c6b", color: "#714819" }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CollaborationForm;