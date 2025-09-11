// src/components/Collaborations/IndustrialDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { industrialCollaborations } from "../../data/Collaborations";

const IndustrialDetail = () => {
  const { id } = useParams();
  const industry = industrialCollaborations.find((c) => c.id === id);

  if (!industry) {
    return <p className="text-center text-red-500">Industry not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
        <img src={industry.logo} alt={industry.name} className="w-32 h-32 mx-auto object-contain mb-6" />
        <h1 className="text-3xl font-bold text-center text-gray-800">{industry.name}</h1>
        <p className="text-gray-600 text-center mt-2">{industry.description}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Projects & Programs</h2>
        <ul className="list-disc list-inside text-gray-700">
          {industry.details.workshops.map((workshop, idx) => (
            <li key={idx}>{workshop}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Gallery</h2>
        <div className="grid grid-cols-2 gap-4">
          {industry.details.images.map((img, idx) => (
            <img key={idx} src={img} alt={`${industry.name} ${idx}`} className="rounded-lg shadow" />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/collaborations/industry" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
            Back to Industrial Collaborations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustrialDetail;
