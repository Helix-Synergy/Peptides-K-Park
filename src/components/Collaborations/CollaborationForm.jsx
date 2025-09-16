import React, { useState, useEffect } from "react";

const API_URL = "http://localhost:5000"; // Replace with your live API URL

const CollaborationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "Academic",
    email: "",
    address: "", // New address field
    message: "",
  });
  const [status, setStatus] = useState({ success: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (status.message) {
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
        setStatus({ success: null, message: "" });
      }, 5000); // 5 seconds
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ success: null, message: "" });

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
        setStatus({ success: true, message: data.message });
        setFormData({
          name: "",
          type: "Academic",
          email: "",
          address: "",
          message: "",
        });
      } else {
        setStatus({
          success: false,
          message: data.message || "Submission failed. Please try again.",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({
        success: false,
        message:
          "An error occurred. Please check your network and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Toast Notification */}
      {showToast && (
        <div
          className={`fixed top-12 right-4 z-50 py-3 px-6 rounded-lg shadow-xl text-white transition-opacity duration-300 ${
            status.success ? "bg-green-500" : "bg-red-500"
          }`}
          style={{ opacity: showToast ? 1 : 0 }}
        >
          {status.message}
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <img
          src="https://www.admissionfever.com/Media/clgimg/gallery/660_img7880807966798673.jpg"
          alt="Collaboration Banner"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
            Our Academic Collaborations
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto opacity-90">
            Partnering with World-class Institutions to forge a Brighter Future.
          </p>
        </div>
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