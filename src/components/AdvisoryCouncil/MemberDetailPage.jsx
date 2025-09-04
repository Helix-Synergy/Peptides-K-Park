// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const MemberDetailPage = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   if (!state?.member) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6">
//         <div className="bg-gray-800 p-8 rounded-xl shadow-2xl text-center">
//           <p className="text-xl font-semibold mb-4">No member details available.</p>
//           <button
//             onClick={() => navigate(-1)}
//             className="mt-4 px-6 py-3 bg-amber-500 text-black rounded-lg font-bold shadow-lg transition duration-300 ease-in-out hover:bg-amber-400 transform hover:scale-105"
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const { member } = state;

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-[#0f2920] to-[#3a4a3f] text-gray-100 py-20 px-6">
//       <div className="max-w-7xl mx-auto relative pb-24">
//         <div className="bg-white p-6 sm:p-10 md:p-16 rounded-3xl shadow-2xl">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
//             {/* Left column: image + name + role */}
//             <div className="flex flex-col items-center text-center space-y-6">
//               <div className="flex-shrink-0">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover shadow-2xl border-4 border-amber-400 transform transition duration-500 hover:scale-105"
//                 />
//               </div>
//               <div className="w-full">
//                 <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-400 mb-1 leading-tight">
//                   {member.name}
//                 </h1>
//                 <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 tracking-wide">
//                   {member.role}
//                 </h2>
//               </div>
//             </div>

//             {/* Right column: About + extra sections */}
//             <div className="md:col-span-2 mt-8 md:mt-0 pt-8 md:pt-0 border-t md:border-t-0 md:border-l border-gray-300 pl-0 md:pl-10 text-gray-800">
//               {/* About */}
//               <h3 className="text-3xl font-bold text-amber-400 mb-4 text-center md:text-left">
//                 About
//               </h3>

//               {/* Subtitle + Country */}
//               {member.title && (
//                 <p className="text-lg font-semibold text-amber-400 mb-2 text-center md:text-left">
//                   {member.title}
//                 </p>
//               )}
//               {member.country && (
//                 <p className="text-base text-gray-600 italic mb-4 text-center md:text-left">
//                   {member.country}
//                 </p>
//               )}

//               {/* Bio */}
//               <p className="leading-relaxed text-lg whitespace-pre-wrap mb-8">
//                 {member.bio}
//               </p>

//               {/* Key Contributions */}
//               {member.additionalInfo && (
//                 <div className="mb-10">
//                   <h4 className="text-2xl font-bold text-amber-400 mb-4 text-center md:text-left">
//                     Key Contributions
//                   </h4>
//                   <p className="leading-relaxed text-lg whitespace-pre-wrap">
//                     {member.additionalInfo}
//                   </p>
//                 </div>
//               )}

//               {/* Achievements */}
//               {member.achievements && member.achievements.length > 0 && (
//                 <div>
//                   <h4 className="text-2xl font-bold text-amber-400 mb-4 text-center md:text-left">
//                     Achievements & Recognitions
//                   </h4>
//                   <ul className="list-disc pl-6 space-y-3 text-lg leading-relaxed">
//                     {member.achievements.map((item, idx) => (
//                       <li key={idx}>{item}</li>
//                     ))}
//                   </ul>
//                 </div>
//               )}

//               {/* Back to Team Button */}
//               <div className="absolute bottom-12 right-0 p-6 sm:p-10 md:p-16">
//                 <button
//                   onClick={() => navigate(-1)}
//                   className="px-8 py-4 bg-gradient-to-br from-[#0f2920] to-[#3a4a3f] text-white text-lg font-bold shadow-lg rounded-xl transition duration-300 ease-in-out transform hover:scale-105"
//                 >
//                   Back to Team
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default MemberDetailPage;



import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Award, BookOpen, User, ArrowLeft } from "lucide-react";

const MemberDetailPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("about");

  if (!state?.member) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6">
        <div className="bg-gray-800 p-8 rounded-xl shadow-2xl text-center">
          <p className="text-xl font-semibold mb-4">No member details available.</p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-6 py-3 bg-amber-500 text-black rounded-lg font-bold shadow-lg transition hover:bg-amber-400"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const { member } = state;

  return (
    <main className="min-h-screen bg-[#f5f7f5] text-gray-800 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 h-[80vh]">
        {/* Sidebar */}
        <aside className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
          <img
            src={member.image}
            alt={member.name}
            className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-amber-500 mb-6"
          />
          <h1 className="text-3xl font-bold text-amber-600">{member.name}</h1>
          <h2 className="text-lg font-medium text-gray-600">{member.role}</h2>
          {member.title && (
            <p className="mt-2 text-sm text-gray-500 italic">{member.title}</p>
          )}
          {member.country && (
            <p className="mt-1 text-sm text-gray-500">🌍 {member.country}</p>
          )}
        </aside>

        {/* Main Content */}
        <section className="lg:col-span-2 bg-white rounded-2xl shadow-xl flex flex-col h-[80vh]">
          {/* Tabs */}
          <div className="flex gap-6 border-b px-8 py-4">
            <button
              onClick={() => setActiveTab("about")}
              className={`flex items-center gap-2 font-semibold ${
                activeTab === "about"
                  ? "text-amber-600 border-b-2 border-amber-600 pb-1"
                  : "text-gray-500 hover:text-amber-600"
              }`}
            >
              <User className="w-5 h-5" /> About
            </button>
            <button
              onClick={() => setActiveTab("contributions")}
              className={`flex items-center gap-2 font-semibold ${
                activeTab === "contributions"
                  ? "text-amber-600 border-b-2 border-amber-600 pb-1"
                  : "text-gray-500 hover:text-amber-600"
              }`}
            >
              <BookOpen className="w-5 h-5" /> Contributions
            </button>
            <button
              onClick={() => setActiveTab("achievements")}
              className={`flex items-center gap-2 font-semibold ${
                activeTab === "achievements"
                  ? "text-amber-600 border-b-2 border-amber-600 pb-1"
                  : "text-gray-500 hover:text-amber-600"
              }`}
            >
              <Award className="w-5 h-5" /> Achievements
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-8 py-6">
            {activeTab === "about" && (
              <div>
                <h3 className="text-2xl font-bold text-amber-600 mb-4">About</h3>
                <p className="leading-relaxed whitespace-pre-wrap">{member.bio}</p>
              </div>
            )}

            {activeTab === "contributions" && member.contributions && (
              <div>
                <h3 className="text-2xl font-bold text-amber-600 mb-4">Key Contributions</h3>
                <p className="leading-relaxed whitespace-pre-wrap">{member.contributions}</p>
              </div>
            )}

            {activeTab === "achievements" && member.achievements && (
              <div>
                <h3 className="text-2xl font-bold text-amber-600 mb-4">Achievements</h3>
                <ul className="list-disc list-inside space-y-2">
                  {member.achievements.map((ach, idx) => (
                    <li key={idx} className="text-gray-700">{ach}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Back Button */}
      <div className="max-w-6xl mx-auto mt-10 text-right">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-600 text-white font-bold shadow-lg transition hover:bg-amber-700"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Team
        </button>
      </div>
    </main>
  );
};

export default MemberDetailPage;