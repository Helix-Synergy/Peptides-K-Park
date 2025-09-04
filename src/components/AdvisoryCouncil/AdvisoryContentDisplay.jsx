// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { FileText } from "lucide-react";

// const advisoryContentData = {
//   "about-advisory-board": {
//     "heroTitle": "About Our Panel of Experts",
//     "heroSubtitle": "Our Panel of Experts provides strategic guidance and expertise to drive innovation and growth for Peptides Knowledge Park.",
//     "brochures": [
//       {
//         "title": "Board Charter",
//         "link": "/assets/brochure-board-charter.pdf"
//       },
//       {
//         "title": "Annual Report 2023",
//         "link": "/assets/brochure-annual-report.pdf"
//       }
//     ],
//     "helpSection": {
//       "image": "https://placehold.co/96x96/48D1CC/000000?text=JD",
//       "title": "Need Assistance?",
//       "description": "Our team is ready to help you with any queries regarding our advisory services.",
//       "phone": "+91 7997940959"
//     },
//     "mainContent": [
//       {
//         "title": "Our Mission and Vision",
//         "paragraphs": [
//           "The Panel of Experts is committed to fostering a culture of excellence and strategic foresight within Peptides Knowledge Park. Our mission is to provide invaluable insights and direction, ensuring that our initiatives align with global best practices and emerging industry trends.",
//           "We envision a future where our organization is a beacon of innovation, driven by the collective wisdom and diverse experiences of our distinguished board members. Their guidance is crucial in navigating complex challenges and capitalizing on new opportunities."
//         ],
//         "images": [
//           {
//             "src": "https://placehold.co/600x400/A0DDA0/000000?text=Board+Meeting",
//             "alt": "Panel of Experts Meeting"
//           },
//           {
//             "src": "https://placehold.co/600x400/DDA0DD/000000?text=Strategy+Session",
//             "alt": "Strategy Session"
//           }
//         ],
//         "benefits": [
//           "Strategic Direction and Oversight",
//           "Industry Expertise and Insights",
//           "Enhanced Governance and Accountability",
//           "Networking and Partnership Opportunities",
//           "Risk Mitigation and Opportunity Identification",
//           "Innovation and Research Guidance"
//         ]
//       },
//       {
//         "title": "Roles and Responsibilities",
//         "paragraphs": [
//           "The Panel of Experts plays a critical role in shaping the strategic direction of Peptides Knowledge Park. Their responsibilities include reviewing key strategies, providing expert opinions on complex issues, and offering guidance on market positioning and technological advancements.",
//           "They also serve as ambassadors for the organization, leveraging their networks to foster collaborations and promote our mission globally. Their independent perspectives are vital for robust decision-making and ensuring long-term success."
//         ]
//       }
//     ],
//     "faq": [
//       {
//         "question": "What is the primary role of the Panel of Experts?",
//         "answer": "The Panel of Experts primarily provides strategic advice and high-level guidance to the executive management, focusing on long-term vision and industry trends."
//       },
//       {
//         "question": "How often does the Panel of Experts convene?",
//         "answer": "The Panel of Experts typically meets quarterly, with additional special sessions convened as needed to address specific strategic initiatives or urgent matters."
//       },
//       {
//         "question": "What kind of expertise do Panel of Experts members bring?",
//         "answer": "Members are selected for their extensive experience and leadership in various fields, including technology, finance, research, and global markets, ensuring a diverse range of perspectives."
//       },
//       {
//         "question": "Is the Panel of Experts involved in daily operations?",
//         "answer": "No, the Panel of Experts focuses on strategic oversight and guidance, leaving the day-to-day operational decisions to the executive team."
//       }
//     ]
//   },
//   "panel-of-experts": {
//     "heroTitle": "Meet Our Panel of Experts",
//     "heroSubtitle": "Our panel comprises visionary leaders and experts dedicated to guiding our strategic direction and fostering innovation at Peptides Knowledge Park.",
//     "brochures": [
//       {
//         "title": "Panel Member Profiles",
//         "link": "/assets/brochure-member-profiles.pdf"
//       },
//       {
//         "title": "Strategic Initiatives",
//         "link": "/assets/brochure-strategic-initiatives.pdf"
//       }
//     ],
//     "helpSection": {
//       "image": "https://placehold.co/96x96/FF69B4/000000?text=Contact",
//       "title": "Connect With Us",
//       "description": "Have questions about our panel or seeking collaboration? Reach out today!",
//       "phone": "+91 7997940959"
//     },
//     "mainContent": [
//       {
//         "title": "Meet Our Subject Matter Experts",
//         "paragraphs": [
//           "The Panel of Experts at Peptides Knowledge Park is composed of highly respected individuals who bring a wealth of knowledge, experience, and diverse perspectives to our organization. Each member is a leader in their respective field, contributing significantly to our strategic planning and operational excellence.",
//           "Their collective expertise spans technology, business development, research, and global markets, enabling us to stay at the forefront of innovation and maintain our competitive edge."
//         ],
//         "advisoryMembers": [
//           {
//             "name": "Dr. Anya Sharma",
//             "role": "Chairperson, AI & Robotics",
//             "image": "https://placehold.co/150x150/8A2BE2/FFFFFF?text=AS",
//             "bio": "Dr. Sharma is a pioneer in AI ethics and robotics, with over 20 years of experience in leading technological advancements and responsible AI deployment."
//           },
//           {
//             "name": "Mr. David Chen",
//             "role": "Vice-Chair, Global Strategy",
//             "image": "https://placehold.co/150x150/FF69B4/FFFFFF?text=DC",
//             "bio": "Mr. Chen has a proven track record in global market expansion and strategic partnerships across multiple continents, driving significant revenue growth."
//           },
//           {
//             "name": "Prof. Emily White",
//             "role": "Lead, Biotechnology Research",
//             "image": "https://placehold.co/150x150/4682B4/FFFFFF?text=EW",
//             "bio": "Prof. White is a renowned biotechnologist, bringing cutting-edge research insights and academic rigor to the panel, with a focus on peptide therapeutics."
//           },
//           {
//             "name": "Ms. Sarah Lee",
//             "role": "Advisor, Digital Transformation",
//             "image": "https://placehold.co/150x150/32CD32/FFFFFF?text=SL",
//             "bio": "Ms. Lee specializes in digital transformation strategies, helping organizations leverage technology for sustainable growth and operational efficiency."
//           },
//           {
//             "name": "Mr. Robert Green",
//             "role": "Advisor, Financial Markets",
//             "image": "https://placehold.co/150x150/FFD700/000000?text=RG",
//             "bio": "Mr. Green provides invaluable insights into financial planning and investment strategies for technology ventures and startups."
//           },
//           {
//             "name": "Dr. Maria Garcia",
//             "role": "Advisor, Public Health",
//             "image": "https://placehold.co/150x150/FF6347/000000?text=MG",
//             "bio": "Dr. Garcia is a public health expert, guiding the panel on health-related innovations, regulatory compliance, and community impact initiatives."
//           }
//         ]
//       },
//       {
//         "title": "Impact and Contributions",
//         "paragraphs": [
//           "The Panel of Experts' contributions are instrumental in guiding our research and development efforts, ensuring that our projects are not only scientifically sound but also commercially viable and socially impactful.",
//           "Their diverse expertise helps us to identify emerging opportunities, mitigate risks, and maintain a competitive edge in a rapidly evolving global landscape. They actively participate in workshops and strategic sessions, offering hands-on guidance."
//         ]
//       }
//     ],
//     "faq": [
//       {
//         "question": "What is the difference between the Panel of Experts and Panel of Experts?",
//         "answer": "The Panel of Experts provides high-level strategic oversight, while the Panel of Experts offers detailed expert guidance on specific initiatives, projects, and technical aspects."
//       },
//       {
//         "question": "How can I become a Panel of Experts member?",
//         "answer": "Membership is by invitation only, based on extensive industry experience, demonstrated leadership, and a strong alignment with our organizational values and strategic goals."
//       },
//       {
//         "question": "Can I propose a topic for the Panel to discuss?",
//         "answer": "Yes, we welcome suggestions from our partners and stakeholders. Please submit your proposals through the 'Become a Member' page, and they will be reviewed by the panel secretariat."
//       },
//       {
//         "question": "What is the expected commitment for panel members?",
//         "answer": "Panel members are expected to attend regular meetings, participate in ad-hoc discussions, and contribute their expertise to specific projects as needed, with flexibility for their primary professional commitments."
//       }
//     ]
//   }
// };


// const navigationLinks = [
//   { name: 'About Panel of Experts', href: '/about-advisory-board' },
//   { name: 'About Panel of Experts', href: '/panel-of-experts' },
//   { name: 'Subject Matter Experts', href: '/panel-of-experts/subject-matter-experts' },
//   { name: 'Become a Panel Member', href: '/panel-of-experts/become-a-member' },
//   { name: 'Activities/Benefits', href: '/panel-of-experts/activities-benefits' },
// ];

// const AdvisoryContentDisplay = ({ pageType }) => {
//   const [content, setContent] = useState(null);

//   useEffect(() => {
//     // Determine the correct key from the navigation links to match the pageType
//     const contentKey = pageType === 'panel-of-experts' ? 'panel-of-experts' : 'about-advisory-board';
//     setContent(advisoryContentData[contentKey] || null);
//   }, [pageType]);

//   if (!content) {
//     return (
//       <div className="flex justify-center items-center h-screen text-xl text-gray-500">
//         No content available.
//       </div>
//     );
//   }

//   return (
//     <main className="bg-gradient-to-br from-[#0f2920] to-[#3a4a3f] min-h-screen text-gray-100 font-inter">
//       {/* Hero Section */}
//       <section className="h-[40vh] md:h-[50vh] flex items-center justify-center text-center relative overflow-hidden">
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-amber-400">
//             {content.heroTitle}
//           </h1>
//           <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
//             {content.heroSubtitle}
//           </p>
//         </motion.div>
//       </section>

//       {/* Content Section */}
//       <section className="w-full py-12 px-4 lg:px-12">
//         <div className="grid grid-cols-1 lg:grid-cols-[22rem_1fr] gap-8">
//           {/* Sidebar */}
//           <aside className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6">
//             <h3 className="text-xl font-bold mb-4 text-amber-300">
//               Quick Links
//             </h3>
//             <ul className="space-y-2">
//               {navigationLinks.map((link, i) => (
//                 <li key={i}>
//                   <Link
//                     to={link.href}
//                     className="block py-2 px-3 rounded-lg hover:bg-amber-400/20 transition"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>

//             {/* Brochures */}
//             {content.brochures && content.brochures.length > 0 && (
//               <div className="mt-8">
//                 <h3 className="text-lg font-semibold mb-3 text-amber-300">
//                   Brochures
//                 </h3>
//                 {content.brochures.map((b, i) => (
//                   <a
//                     key={i}
//                     href={b.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-amber-400/20 transition"
//                   >
//                     <FileText className="h-5 w-5" /> {b.title}
//                   </a>
//                 ))}
//               </div>
//             )}
//           </aside>

//           {/* Main Dynamic Content */}
//           <div>
//             {content.mainContent.map((section, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: idx * 0.1 }}
//                 className="mb-12 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg"
//               >
//                 <h2 className="text-2xl md:text-3xl font-bold mb-4 text-amber-400">
//                   {section.title}
//                 </h2>

//                 {section.paragraphs?.map((p, i) => (
//                   <p key={i} className="text-gray-200 mb-3 leading-relaxed">
//                     {p}
//                   </p>
//                 ))}

//                 {/* Advisory Members */}
//                 {section.advisoryMembers && (
//                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
//                     {section.advisoryMembers.map((member, i) => (
//                       <div key={i} className="bg-[#1f3b30] rounded-xl p-4 flex flex-col items-center text-center">
//                         <img
//                           src={member.image}
//                           alt={member.name}
//                           className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
//                         />
//                         <h4 className="text-lg font-bold text-amber-300 mb-1">{member.name}</h4>
//                         <p className="text-sm font-semibold text-gray-300 mb-2">{member.role}</p>
//                         <p className="text-xs text-gray-400 leading-snug">{member.bio}</p>
//                       </div>
//                     ))}
//                   </div>
//                 )}
                
//                 {/* Images */}
//                 {section.images && (
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
//                     {section.images.map((img, i) => (
//                       <img
//                         key={i}
//                         src={img.src}
//                         alt={img.alt}
//                         className="rounded-xl object-cover w-full h-60"
//                         onError={(e) =>
//                           (e.target.src =
//                             "https://placehold.co/600x400/333333/FFFFFF?text=Image")
//                         }
//                       />
//                     ))}
//                   </div>
//                 )}

//                 {/* Benefits */}
//                 {section.benefits && (
//                   <ul className="mt-4 space-y-2">
//                     {section.benefits.map((benefit, i) => (
//                       <li key={i} className="flex items-start gap-2">
//                         <span className="text-amber-400">✔</span>
//                         <span>{benefit}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default AdvisoryContentDisplay;



import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const advisoryContentData = {
  "about-advisory-board": {
    "heroTitle": "About Our Panel of Experts",
    "heroSubtitle": "Our Panel of Experts provides strategic guidance and expertise to drive innovation and growth for Peptides Knowledge Park.",
    "brochures": [
      {
        "title": "Board Charter",
        "link": "/assets/brochure-board-charter.pdf"
      },
      {
        "title": "Annual Report 2023",
        "link": "/assets/brochure-annual-report.pdf"
      }
    ],
    "helpSection": {
      "image": "https://placehold.co/96x96/48D1CC/000000?text=JD",
      "title": "Need Assistance?",
      "description": "Our team is ready to help you with any queries regarding our advisory services.",
      "phone": "+91 7997940959"
    },
    "mainContent": [
      {
        "title": "Our Mission and Vision",
        "paragraphs": [
          "The Panel of Experts is committed to fostering a culture of excellence and strategic foresight within Peptides Knowledge Park. Our mission is to provide invaluable insights and direction, ensuring that our initiatives align with global best practices and emerging industry trends.",
          "We envision a future where our organization is a beacon of innovation, driven by the collective wisdom and diverse experiences of our distinguished board members. Their guidance is crucial in navigating complex challenges and capitalizing on new opportunities."
        ],
        "images": [
          {
            "src": "https://placehold.co/600x400/A0DDA0/000000?text=Board+Meeting",
            "alt": "Panel of Experts Meeting"
          },
          {
            "src": "https://placehold.co/600x400/DDA0DD/000000?text=Strategy+Session",
            "alt": "Strategy Session"
          }
        ],
        "benefits": [
          "Strategic Direction and Oversight",
          "Industry Expertise and Insights",
          "Enhanced Governance and Accountability",
          "Networking and Partnership Opportunities",
          "Risk Mitigation and Opportunity Identification",
          "Innovation and Research Guidance"
        ]
      },
      {
        "title": "Roles and Responsibilities",
        "paragraphs": [
          "The Panel of Experts plays a critical role in shaping the strategic direction of Peptides Knowledge Park. Their responsibilities include reviewing key strategies, providing expert opinions on complex issues, and offering guidance on market positioning and technological advancements.",
          "They also serve as ambassadors for the organization, leveraging their networks to foster collaborations and promote our mission globally. Their independent perspectives are vital for robust decision-making and ensuring long-term success."
        ]
      }
    ],
    "faq": [
      {
        "question": "What is the primary role of the Panel of Experts?",
        "answer": "The Panel of Experts primarily provides strategic advice and high-level guidance to the executive management, focusing on long-term vision and industry trends."
      },
      {
        "question": "How often does the Panel of Experts convene?",
        "answer": "The Panel of Experts typically meets quarterly, with additional special sessions convened as needed to address specific strategic initiatives or urgent matters."
      },
      {
        "question": "What kind of expertise do Panel of Experts members bring?",
        "answer": "Members are selected for their extensive experience and leadership in various fields, including technology, finance, research, and global markets, ensuring a diverse range of perspectives."
      },
      {
        "question": "Is the Panel of Experts involved in daily operations?",
        "answer": "No, the Panel of Experts focuses on strategic oversight and guidance, leaving the day-to-day operational decisions to the executive team."
      }
    ]
  },
  "panel-of-experts": {
    "heroTitle": "Meet Our Panel of Experts",
    "heroSubtitle": "Our panel comprises visionary leaders and experts dedicated to guiding our strategic direction and fostering innovation at Peptides Knowledge Park.",
    "brochures": [
      {
        "title": "Panel Member Profiles",
        "link": "/assets/brochure-member-profiles.pdf"
      },
      {
        "title": "Strategic Initiatives",
        "link": "/assets/brochure-strategic-initiatives.pdf"
      }
    ],
    "helpSection": {
      "image": "https://placehold.co/96x96/FF69B4/000000?text=Contact",
      "title": "Connect With Us",
      "description": "Have questions about our panel or seeking collaboration? Reach out today!",
      "phone": "+91 7997940959"
    },
    "mainContent": [
      {
        "title": "Meet Our Subject Matter Experts",
        "paragraphs": [
          "The Panel of Experts at Peptides Knowledge Park is composed of highly respected individuals who bring a wealth of knowledge, experience, and diverse perspectives to our organization. Each member is a leader in their respective field, contributing significantly to our strategic planning and operational excellence.",
          "Their collective expertise spans technology, business development, research, and global markets, enabling us to stay at the forefront of innovation and maintain our competitive edge."
        ],
        "advisoryMembers": [
          {
            "name": "Dr. Anya Sharma",
            "role": "Chairperson, AI & Robotics",
            "image": "https://placehold.co/150x150/8A2BE2/FFFFFF?text=AS",
            "bio": "Dr. Sharma is a pioneer in AI ethics and robotics, with over 20 years of experience in leading technological advancements and responsible AI deployment."
          },
          {
            "name": "Mr. David Chen",
            "role": "Vice-Chair, Global Strategy",
            "image": "https://placehold.co/150x150/FF69B4/FFFFFF?text=DC",
            "bio": "Mr. Chen has a proven track record in global market expansion and strategic partnerships across multiple continents, driving significant revenue growth."
          },
          {
            "name": "Prof. Emily White",
            "role": "Lead, Biotechnology Research",
            "image": "https://placehold.co/150x150/4682B4/FFFFFF?text=EW",
            "bio": "Prof. White is a renowned biotechnologist, bringing cutting-edge research insights and academic rigor to the panel, with a focus on peptide therapeutics."
          },
          {
            "name": "Ms. Sarah Lee",
            "role": "Advisor, Digital Transformation",
            "image": "https://placehold.co/150x150/32CD32/FFFFFF?text=SL",
            "bio": "Ms. Lee specializes in digital transformation strategies, helping organizations leverage technology for sustainable growth and operational efficiency."
          },
          {
            "name": "Mr. Robert Green",
            "role": "Advisor, Financial Markets",
            "image": "https://placehold.co/150x150/FFD700/000000?text=RG",
            "bio": "Mr. Green provides invaluable insights into financial planning and investment strategies for technology ventures and startups."
          },
          {
            "name": "Dr. Maria Garcia",
            "role": "Advisor, Public Health",
            "image": "https://placehold.co/150x150/FF6347/000000?text=MG",
            "bio": "Dr. Garcia is a public health expert, guiding the panel on health-related innovations, regulatory compliance, and community impact initiatives."
          }
        ]
      },
      {
        "title": "Impact and Contributions",
        "paragraphs": [
          "The Panel of Experts' contributions are instrumental in guiding our research and development efforts, ensuring that our projects are not only scientifically sound but also commercially viable and socially impactful.",
          "Their diverse expertise helps us to identify emerging opportunities, mitigate risks, and maintain a competitive edge in a rapidly evolving global landscape. They actively participate in workshops and strategic sessions, offering hands-on guidance."
        ]
      }
    ],
    "faq": [
      {
        "question": "What is the difference between the Panel of Experts and Panel of Experts?",
        "answer": "The Panel of Experts provides high-level strategic oversight, while the Panel of Experts offers detailed expert guidance on specific initiatives, projects, and technical aspects."
      },
      {
        "question": "How can I become a Panel of Experts member?",
        "answer": "Membership is by invitation only, based on extensive industry experience, demonstrated leadership, and a strong alignment with our organizational values and strategic goals."
      },
      {
        "question": "Can I propose a topic for the Panel to discuss?",
        "answer": "Yes, we welcome suggestions from our partners and stakeholders. Please submit your proposals through the 'Become a Member' page, and they will be reviewed by the panel secretariat."
      },
      {
        "question": "What is the expected commitment for panel members?",
        "answer": "Panel members are expected to attend regular meetings, participate in ad-hoc discussions, and contribute their expertise to specific projects as needed, with flexibility for their primary professional commitments."
      }
    ]
  }
};

const navigationLinks = [
  { name: "About Panel of Experts", href: "/panel-of-experts/about-advisory-board" },
  { name: "Subject Matter Experts", href: "/panel-of-experts/subject-matter-experts" },
  { name: "Become a Panel Member", href: "/panel-of-experts/become-a-member" },
  { name: "Activities/Benefits", href: "/panel-of-experts/activities-benefits" },
];

const AdvisoryContentDisplay = ({ pageType }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const contentKey =
      pageType === "panel-of-experts" ? "panel-of-experts" : "about-advisory-board";
    setContent(advisoryContentData[contentKey] || null);
  }, [pageType]);

  if (!content) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-500">
        No content available.
      </div>
    );
  }

  return (
    <main className="bg-gradient-to-br from-[#0f2920] to-[#3a4a3f] min-h-screen text-gray-100 font-inter">
      {/* Hero Section */}
      <section className="h-[40vh] md:h-[50vh] flex items-center justify-center text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-amber-400">
            {content.heroTitle}
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
            {content.heroSubtitle}
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="w-full py-12 px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[22rem_1fr] gap-8">
          {/* Sidebar */}
          <aside className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 lg:sticky top-[146px] h-fit">
            <h3 className="text-xl font-bold mb-4 text-amber-300">Quick Links</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.href}
                    className="block py-2 px-3 rounded-lg hover:bg-amber-400/20 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Dynamic Content */}
          <div>
            {content.mainContent.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="mb-12 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-amber-400">
                  {section.title}
                </h2>

                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="text-gray-200 mb-3 leading-relaxed">
                    {p}
                  </p>
                ))}

                {/* Advisory Members (Clickable Cards) */}
                {section.advisoryMembers && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                    {section.advisoryMembers.map((member, i) => (
                      <Link
                        key={i}
                        to={`/panel-of-experts/member/${i}`}
                        state={{ member }}
                        className="bg-[#1f3b30] rounded-xl p-4 flex flex-col items-center text-center hover:scale-105 transition-transform"
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
                        />
                        <h4 className="text-lg font-bold text-amber-300 mb-1">
                          {member.name}
                        </h4>
                        <p className="text-sm font-semibold text-gray-300 mb-2">
                          {member.role}
                        </p>
                        <p className="text-xs text-gray-400 leading-snug line-clamp-3">
                          {member.bio}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Images (Clickable) */}
                {section.images && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {section.images.map((img, i) => (
                      <Link
                        key={i}
                        to={`/image-detail/${i}`}
                        state={{ img }}
                        className="block"
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="rounded-xl object-cover w-full h-60 hover:scale-[1.02] transition-transform"
                          onError={(e) =>
                            (e.target.src =
                              "https://placehold.co/600x400/333333/FFFFFF?text=Image")
                          }
                        />
                      </Link>
                    ))}
                  </div>
                )}

                {/* Benefits */}
                {section.benefits && (
                  <ul className="mt-4 space-y-2">
                    {section.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-400">✔</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdvisoryContentDisplay;



// // src/components/AdvisoryCouncil/AdvisoryContentDisplay.jsx
// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { FileText, Phone } from 'lucide-react'; // Importing icons from lucide-react

// // Directly import the JSON data from its specified location
// import advisoryCouncilData from '../../pages/advisoryCouncilData.json';

// // This component will dynamically render content based on the pageType prop
// const AdvisoryContentDisplay = ({ pageType }) => {
//   const [content, setContent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     setError(null);
//     // Directly access data from the imported JSON based on pageType
//     const data = advisoryCouncilData[pageType];
//     if (data) {
//       setContent(data);
//     } else {
//       // If data for the specific pageType is not found in the JSON
//       setError(`Content for page type "${pageType}" not found in advisoryCouncilData.json.`);
//     }
//     setLoading(false);
//   }, [pageType]); // Re-run effect if pageType prop changes

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen text-xl text-gray-700">
//         Loading content...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen text-xl text-red-500">
//         Error: {error}
//       </div>
//     );
//   }

//   if (!content) {
//     return (
//       <div className="flex justify-center items-center h-screen text-xl text-gray-500">
//         No content available for this section.
//       </div>
//     );
//   }

//   // Find the index of "Roles and Responsibilities" to apply conditional layout
//   const rolesAndResponsibilitiesIndex = content.mainContent.findIndex(
//     (section) => section.title.includes("Roles and Responsibilities")
//   );

//   return (
//     // Main background changed to an eyecatching, light multicolor gradient
//     <main className="bg-gradient-to-br from-blue-100 via-green-50 to-pink-50 min-h-screen font-inter">
//       {/* Hero Section - Dynamic Title and Subtitle - This section will scroll normally */}
//       <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-blue-700 to-purple-600">
//         <motion.div
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 text-center"
//         >
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">{content.heroTitle}</h1>
//           <p className="text-lg md:text-xl max-w-3xl mx-auto px-4">
//             {content.heroSubtitle}
//           </p>
//         </motion.div>
//       </section>

//       {/* Main Content Area - Conditional Grid Layout */}
//       <section className="w-full py-12 px-4 lg:px-12">
//         <div className="grid grid-cols-1 lg:grid-cols-[26vw_1fr] gap-8">
//           {/* Sidebar Navigation - Applied Glassmorphism effect with white/transparent background */}
//           <motion.aside
//             className="p-6 bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl shadow-xl" // Glassmorphism classes, fixed width handled by grid
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.1 }}
//             transition={{ duration: 0.7, ease: 'easeOut' }}
//           >
//             <h3 className="text-xl font-bold text-gray-900 mb-4">Advisory Council</h3> {/* Text color adjusted for light background */}
//             <nav>
//               <ul>
//                 {/* Links for sidebar navigation with clickable button styling */}
//                 <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
//                   <Link
//                     to="/about-advisory-board"
//                     className="block py-2 px-3 text-gray-700 font-semibold rounded-lg hover:bg-blue-100 hover:scale-105 active:scale-95 transition-all duration-200" // Text and hover bg adjusted
//                   >
//                     About Panel of Experts
//                   </Link>
//                 </motion.li>
//                 <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
//                   <Link
//                     to="/our-advisory-council"
//                     className="block py-2 px-3 rounded-lg text-gray-700 font-semibold hover:bg-blue-100 hover:scale-105 active:scale-95 transition-all duration-200" // Text and hover bg adjusted
//                   >
//                     Our Advisory Council
//                   </Link>
//                 </motion.li>
//                 <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
//                   <Link
//                     to="/become-a-member"
//                     className="block py-2 px-3 rounded-lg text-gray-700 font-semibold hover:bg-blue-100 hover:scale-105 active:scale-95 transition-all duration-200" // Text and hover bg adjusted
//                   >
//                     Become a Member
//                   </Link>
//                 </motion.li>
//               </ul>
//             </nav>

//             {/* Brochures Section - Applied Glassmorphism effect */}
//             {content.brochures && content.brochures.length > 0 && (
//               <motion.div
//                 className="mt-8 p-6 bg-white/30 backdrop-blur-md border border-white/20 rounded-xl shadow-md" // Glassmorphism classes
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.1 }}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//               >
//                 <h3 className="text-xl font-bold text-gray-800 mb-4">Brochures</h3> {/* Text color adjusted */}
//                 {content.brochures.map((brochure, idx) => (
//                   <motion.a
//                     key={idx}
//                     href={brochure.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 py-2 px-3 rounded-lg text-blue-600 hover:bg-blue-100 transition-colors duration-200" // Text and hover bg adjusted
//                     initial={{ opacity: 0, x: -10 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
//                   >
//                     <FileText className="h-5 w-5" />
//                     {brochure.title}
//                   </motion.a>
//                 ))}
//               </motion.div>
//             )}

//             {/* How Can We Help? Section - Retained distinct styling, added hover effect */}
//             <motion.div
//               className="mt-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:scale-103 transition-transform duration-200"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.1 }}
//               transition={{ duration: 0.7, delay: 0.6 }}
//             >
//               <img
//                 src={content.helpSection.image}
//                 alt="How Can We Help?"
//                 className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-white shadow-md"
//                 onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/112x112/CCCCCC/000000?text=User'; }}
//               />
//               <h4 className="text-xl font-bold mb-1">{content.helpSection.title}</h4>
//               <p className="text-sm mb-3">{content.helpSection.description}</p>
//               <div className="text-base font-semibold mb-4">
//                 <p>{content.helpSection.phone}</p>
//                 <p>Mail: info@example.com</p>
//               </div>
//               <div className="flex gap-3 mt-2">
//                 <a href="#" className="w-9 h-9 flex items-center justify-center bg-white text-blue-700 rounded-full hover:bg-gray-100 transition-colors duration-200">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.812c-3.233 0-4.188 1.501-4.188 4.004v2.996z"/></svg>
//                 </a>
//                 <a href="#" className="w-9 h-9 flex items-center justify-center bg-white text-blue-700 rounded-full hover:bg-gray-100 transition-colors duration-200">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.594 0-6.495 2.902-6.495 6.495 0 .509.058 1.006.173 1.485-5.392-.27-10.197-2.857-13.407-6.793-.559.957-.883 2.077-.883 3.261 0 2.253 1.149 4.246 2.895 5.424-.849-.026-1.646-.26-2.34-.647-.005.021-.005.042-.005.063 0 3.166 2.262 5.8 5.26 6.39-.547.148-1.12.227-1.703.227-.417 0-.82-.041-1.215-.116.834 2.606 3.251 4.504 6.101 4.554-2.245 1.76-5.087 2.812-8.15 2.812-.53 0-1.053-.031-1.566-.092 2.905 1.86 6.356 2.946 10.063 2.946 12.071 0 18.67-10.003 18.67-18.67 0-.6-.013-1.196-.039-1.79z"/></svg>
//                 </a>
//                 <a href="#" className="w-9 h-9 flex items-center justify-center bg-white text-blue-700 rounded-full hover:bg-gray-100 transition-colors duration-200">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5 1.11-2.5 2.48-2.5 2.48 1.119 2.48 2.5zm.02 6.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.59-11.011-3.6z"/></svg>
//                 </a>
//               </div>
//             </motion.div>
//           </motion.aside>

//           {/* Main Content Area (for sections before "Roles and Responsibilities") */}
//           <div id="main-content-scroll-section-top">
//             {content.mainContent.slice(0, rolesAndResponsibilitiesIndex !== -1 ? rolesAndResponsibilitiesIndex : content.mainContent.length).map((section, idx) => (
//               <motion.div
//                 key={idx}
//                 className="mb-12 p-6 bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl shadow-xl" // Applied Glassmorphism
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.6, delay: idx * 0.1 }}
//               >
//                 <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">{section.title}</h2> {/* Text color adjusted */}
//                 {section.paragraphs.map((paragraph, pIdx) => (
//                   <p key={pIdx} className="text-gray-700 mb-4 text-lg leading-relaxed">{paragraph}</p> 
//                 ))}

//                 {/* Images Section */}
//                 {section.images && section.images.length > 0 && (
//                   <div className={`grid ${section.images.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} gap-6 mt-8`}>
//                     {section.images.map((img, imgIdx) => (
//                       <motion.img
//                         key={imgIdx}
//                         src={img.src}
//                         alt={img.alt}
//                         className="rounded-2xl shadow-lg w-full object-cover h-64 md:h-72"
//                         onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/DDA0DD/FFFFFF?text=Image+Load+Error'; }}
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true, amount: 0.5 }}
//                         transition={{ duration: 0.5, delay: imgIdx * 0.1 }}
//                       />
//                     ))}
//                   </div>
//                 )}

//                 {/* Benefits Section */}
//                 {section.benefits && section.benefits.length > 0 && (
//                   <div className="mt-8">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits With Our Service</h3> {/* Text color adjusted */}
//                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-lg"> {/* Text color adjusted */}
//                       {section.benefits.map((benefit, bIdx) => (
//                         <li key={bIdx} className="flex items-start">
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Icon color adjusted */}
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                           </svg>
//                           {benefit}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Full-width content from "Roles and Responsibilities" onwards AND FAQ */}
//         {rolesAndResponsibilitiesIndex !== -1 && (
//           <div className="w-full mt-12"> {/* Added mt-12 for spacing from previous section */}
//             {content.mainContent.slice(rolesAndResponsibilitiesIndex).map((section, idx) => (
//               <motion.div
//                 key={idx}
//                 className="mb-12 p-6 bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl shadow-xl" // Applied Glassmorphism
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.6, delay: idx * 0.1 }}
//               >
//                 <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">{section.title}</h2> {/* Text color adjusted */}
//                 {section.paragraphs.map((paragraph, pIdx) => (
//                   <p key={pIdx} className="text-gray-700 mb-4 text-lg leading-relaxed">{paragraph}</p> 
//                 ))}

//                 {/* Images Section */}
//                 {section.images && section.images.length > 0 && (
//                   <div className={`grid ${section.images.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} gap-6 mt-8`}>
//                     {section.images.map((img, imgIdx) => (
//                       <motion.img
//                         key={imgIdx}
//                         src={img.src}
//                         alt={img.alt}
//                         className="rounded-2xl shadow-lg w-full object-cover h-64 md:h-72"
//                         onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/DDA0DD/FFFFFF?text=Image+Load+Error'; }}
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true, amount: 0.5 }}
//                         transition={{ duration: 0.5, delay: imgIdx * 0.1 }}
//                       />
//                     ))}
//                   </div>
//                 )}

//                 {/* Benefits Section (if it appears after Roles and Responsibilities) */}
//                 {section.benefits && section.benefits.length > 0 && (
//                   <div className="mt-8">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits With Our Service</h3> {/* Text color adjusted */}
//                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-lg"> {/* Text color adjusted */}
//                       {section.benefits.map((benefit, bIdx) => (
//                         <li key={bIdx} className="flex items-start">
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Icon color adjusted */}
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                           </svg>
//                           {benefit}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 {/* Advisory Members Section (if it appears after Roles and Responsibilities) */}
//                 {section.advisoryMembers && section.advisoryMembers.length > 0 && (
//                   <div className="mt-12">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Esteemed Advisory Members</h3> {/* Text color adjusted */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                       {section.advisoryMembers.map((member, mIdx) => (
//                         <motion.div
//                           key={mIdx}
//                           className="bg-white/30 rounded-xl shadow-md p-6 text-center flex flex-col items-center" // Applied Glassmorphism
//                           initial={{ opacity: 0, scale: 0.9 }}
//                           whileInView={{ opacity: 1, scale: 1 }}
//                           viewport={{ once: true, amount: 0.3 }}
//                           transition={{ duration: 0.5, delay: mIdx * 0.1 }}
//                         >
//                           <img
//                             src={member.image}
//                             alt={member.name}
//                             className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-blue-400"
//                             onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/96x96/CCCCCC/000000?text=Member'; }}
//                           />
//                           <h4 className="text-xl font-bold text-gray-900">{member.name}</h4> {/* Text color adjusted */}
//                           <p className="text-sm text-gray-600">{member.role}</p> {/* Text color adjusted */}
//                           {member.bio && <p className="text-sm text-gray-600 mt-2 italic">{member.bio}</p>} {/* Text color adjusted */}
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//             {/* FAQ Section - Now explicitly placed here to be full-width if rolesAndResponsibilitiesIndex is found */}
//             {content.faq && content.faq.length > 0 && (
//               <motion.div
//                 className="mt-12 p-6 bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl shadow-lg" // Applied Glassmorphism
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2> {/* Text color adjusted */}
//                 <div className="space-y-4">
//                   {content.faq.map((item, faqIdx) => (
//                     <motion.div
//                       key={faqIdx}
//                       className="bg-white/30 rounded-xl shadow-md p-6 cursor-pointer" // Inner FAQ item styling with Glassmorphism
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true, amount: 0.3 }}
//                       transition={{ duration: 0.5, delay: faqIdx * 0.1 }}
//                       onClick={(e) => {
//                         const answer = e.currentTarget.querySelector('.faq-answer');
//                         const icon = e.currentTarget.querySelector('svg');
//                         if (answer) {
//                           answer.classList.toggle('hidden');
//                           icon.classList.toggle('rotate-180');
//                         }
//                       }}
//                     >
//                       <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center"> {/* Text color adjusted */}
//                         {item.question}
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 transform transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor"> {/* Icon color adjusted */}
//                           <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                         </svg>
//                       </h3>
//                       <p className="faq-answer hidden mt-3 text-gray-600">{item.answer}</p> {/* Text color adjusted */}
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             )}
//           </div>
//         )}
//         {/* If Roles and Responsibilities is NOT found, but FAQ exists, render it here (full width) */}
//         {rolesAndResponsibilitiesIndex === -1 && content.faq && content.faq.length > 0 && (
//           <motion.div
//             className="w-full mt-12 p-6 bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl shadow-lg" // Applied Glassmorphism
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2> {/* Text color adjusted */}
//             <div className="space-y-4">
//               {content.faq.map((item, faqIdx) => (
//                 <motion.div
//                   key={faqIdx}
//                   className="bg-white/30 rounded-xl shadow-md p-6 cursor-pointer" // Inner FAQ item styling with Glassmorphism
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.3 }}
//                   transition={{ duration: 0.5, delay: faqIdx * 0.1 }}
//                   onClick={(e) => {
//                     const answer = e.currentTarget.querySelector('.faq-answer');
//                     const icon = e.currentTarget.querySelector('svg');
//                     if (answer) {
//                       answer.classList.toggle('hidden');
//                       icon.classList.toggle('rotate-180');
//                     }
//                   }}
//                 >
//                   <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center"> {/* Text color adjusted */}
//                     {item.question}
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 transform transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor"> {/* Icon color adjusted */}
//                       <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                   </h3>
//                   <p className="faq-answer hidden mt-3 text-gray-600">{item.answer}</p> {/* Text color adjusted */}
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </section>
//     </main>
//   );
// };

// export default AdvisoryContentDisplay;
