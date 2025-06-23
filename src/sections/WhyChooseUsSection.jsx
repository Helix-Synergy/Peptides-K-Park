import React, { useState } from "react";
import { Share2, UserCog, Cloud, Laptop2, Play } from "lucide-react";

const features = [
  {
    title: "Strategic Direction",
    desc: "Our Advisory Board Team comprises seasoned professionals with vast expertise across diverse industries. They provide strategic direction and mentorship to strengthen our vision and objectives.",
    icon: <Share2 className="w-10 h-10" />,
  },
  {
    title: "Innovative Insight",
    desc: "By guiding us in navigating complex challenges and seizing opportunities, they play an integral role in shaping our growth with insight that fosters innovation and excellence.",
    icon: <UserCog className="w-10 h-10" />,
  },
  {
    title: "Sustainable Progress",
    desc: "Their commitment to excellence drives impactful solutions and sustainable progress. They help us build resilience and lead with responsibility toward future goals.",
    icon: <Cloud className="w-10 h-10" />,
  },
  {
    title: "Empowered Leadership",
    desc: "With their leadership, we achieve new milestones and deliver exceptional outcomes. Together, we foster innovation and create a lasting impact for a better tomorrow.",
    icon: <Laptop2 className="w-10 h-10" />,
  },
];

const WhyChooseUsSection = () => {
  const [hovered, setHovered] = useState(null);
  return (
    <section className="w-full py-20 px-4 sm:px-8 lg:px-8 bg-gradient-to-br from-[#2a2e8a] via-[#6a3fa0] to-[#a84ca4] relative overflow-hidden">
      {/* Dots pattern (optional) */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full pointer-events-none select-none mt-12"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <span className="text-pink-400 text-base font-semibold tracking-widest mb-2 uppercase block">
            People Assisting PEPTIDES
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Team Of Excellence
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:my-24">
          {features.map((f, i) => {
            const isActive = hovered === i;
            return (
              <div
                key={i}
                className={`relative border rounded-2xl px-4 py-6 flex flex-col items-center text-center shadow-xl transition-all duration-300 group cursor-pointer
                  ${
                    isActive
                      ? "bg-white border-white scale-105 z-10"
                      : "bg-white/5 border-white/10"
                  }
                `}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="absolute -top-14 left-1/2 -translate-x-1/2">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-28 h-28"
                  >
                    <path
                      fill={isActive ? "#60a5fa" : "#ec4899"}
                      d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
                    />
                  </svg>
                  <span
                    className={`absolute inset-0 flex items-center justify-center w-28 h-28 transition-all duration-300 ${
                      isActive ? "text-white" : "text-white"
                    }`}
                    style={{ top: 0, left: 0 }}
                  >
                    {f.icon}
                  </span>
                </div>

                <div className="mt-12">
                  <h3
                    className={`text-xl font-semibold mb-2 transition-all duration-300 ${
                      isActive ? "text-gray-900" : "text-white"
                    }`}
                  >
                    {f.title}
                  </h3>
                  <p
                    className={`text-base transition-all duration-300 ${
                      isActive ? "text-gray-600" : "text-white/60"
                    }`}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* Video Section */}
        {/* <div className="w-full flex flex-col md:flex-row items-center bg-white mt-8 rounded-2xl overflow-hidden">
          Video thumbnail
          <div className="relative w-full md:w-1/2 h-64 md:h-72 flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
              alt="Agency Video"
              className="w-full h-full object-cover object-center"
            />
            <button className="absolute inset-0 flex items-center justify-center w-full h-full group">
              <span className="bg-white/80 hover:bg-white text-blue-700 rounded-full p-5 shadow-lg transition-all duration-200">
                <Play className="w-10 h-10" />
              </span>
            </button>
          </div>
          Text and button
          <div className="relative w-full md:w-1/2 h-64 md:h-72 flex items-center justify-center bg-transparent">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2a2e8a]/80 via-[#6a3fa0]/60 to-[#a84ca4]/80 mix-blend-multiply" />
            <div className="relative z-10 flex flex-col items-start justify-center h-full p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Learn More About
                <br />
                Our Leadership
              </h3>
              <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl text-base shadow transition-all duration-200 mt-4">
                READ MORE{" "}
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
