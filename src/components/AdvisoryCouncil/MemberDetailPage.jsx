import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MemberDetailPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state?.member) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6">
        <div className="bg-gray-800 p-8 rounded-xl shadow-2xl text-center">
          <p className="text-xl font-semibold mb-4">No member details available.</p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-6 py-3 bg-amber-500 text-black rounded-lg font-bold shadow-lg transition duration-300 ease-in-out hover:bg-amber-400 transform hover:scale-105"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const { member } = state;

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f2920] to-[#3a4a3f] text-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto relative pb-24">
        {/* The inner container is now a solid white background */}
        <div className="bg-white p-6 sm:p-10 md:p-16 rounded-3xl shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {/* Image and Basic Info Column */}
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="flex-shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover shadow-2xl border-4 border-amber-400 transform transition duration-500 hover:scale-105"
                />
              </div>
              <div className="w-full">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-400 mb-1 leading-tight">
                  {member.name}
                </h1>
                {/* Text color changed to a dark gray for readability on white background */}
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 tracking-wide">
                  {member.role}
                </h2>
              </div>
            </div>

            {/* Description and Contributions Column */}
            {/* Text color changed to a dark gray for readability */}
            <div className="md:col-span-2 mt-8 md:mt-0 pt-8 md:pt-0 border-t md:border-t-0 md:border-l border-gray-300 pl-0 md:pl-10 text-gray-800">
              <h3 className="text-3xl font-bold text-amber-400 mb-4 text-center md:text-left">About</h3>
              <p className="leading-relaxed text-lg whitespace-pre-wrap mb-8">
                {member.bio}
              </p>
              {member.additionalInfo && (
                <div>
                  <h4 className="text-2xl font-bold text-amber-400 mb-4 text-center md:text-left">Key Contributions</h4>
                  <p className="leading-relaxed text-lg whitespace-pre-wrap">
                    {member.additionalInfo}
                  </p>
                </div>
                
              )}
                                  {/* Back to Team Button at the bottom-right */}
        <div className="absolute bottom-12 right-0 p-6 sm:p-10 md:p-16">
          {/* Button now uses your theme's gradient and white text */}
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-4 bg-gradient-to-br from-[#0f2920] to-[#3a4a3f] text-white text-lg font-bold shadow-lg rounded-xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            Back to Team
          </button>
        </div>
            </div>
          </div>
        </div>
        

      </div>
    </main>
  );
};

export default MemberDetailPage;