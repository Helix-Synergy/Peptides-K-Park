// src/data/Collaborations.js
import AVLogo from '../assets/images/collaborations/AVCollageLogo.jpg'
import PragathiCollegeLogo from '../assets/images/collaborations/pragathiCollegeLogo.jpg'
import ReddyCollegeLogo from '../assets/images/collaborations/RBVRRCollegeLogo.png'
import BJRCollegeLogo from '../assets/images/collaborations/BJRCollegeLogo.png'
import KasthuribaCollegeLogo from '../assets/images/collaborations/KasturibaCollegeLogo.jpg'
// Banners
import pragathiCollegeBanner from  '../assets/images/collaborations/pragathiCollegeBanner.png'
import AVCollegeBanner from '../assets/images/collaborations/AVCollegeBanner.jpg'
import RBVRRCollegeBanner from '../assets/images/collaborations/RBVRRCollegeBanner.jpg'
import BJRCollegeBanner from '../assets/images/collaborations/BJRCollegeBanner.jpg'
import KasthurbhaCollegeBanner from '../assets/images/collaborations/KasthurbhaCollegeBanner.jpg'


export const academicCollaborations = [
  {
    id: "college-1",
    name: "Greenwood University",
    logo: "/images/colleges/greenwood.png",
    description: "Partnered for joint research programs and student exchange.",
    details: {
      workshops: ["AI in Healthcare", "Green Tech Bootcamp"],
      images: ["/images/colleges/greenwood1.jpg", "/images/colleges/greenwood2.jpg"],
    },
  },
  {
    id: "college-2",
    name: "Starlight College of Science",
    logo: "/images/colleges/starlight.png",
    description: "Workshops, guest lectures, and curriculum support.",
    details: {
      workshops: ["Quantum Computing 101", "Advanced Biotech Seminar"],
      images: ["/images/colleges/starlight1.jpg", "/images/colleges/starlight2.jpg"],
    },
  },
];

export const industrialCollaborations = [
{
  id: "lavin-laboratories",
  name: "Lavin Laboratories",
  logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFyoj9FM_UIPw/company-logo_200_200/company-logo_200_200/0/1649150712894?e=2147483647&v=beta&t=rhzI--DGkal5go-QX7sobI4owqBAXHNzpMcYlVP5474", // Placeholder

  // Banner Section
  banner: {
    title: "Collaboration with Lavin Laboratories",
    subtitle: "Advanced testing, research, and quality solutions across industries.",
    imageUrl: "https://content.jdmagicbox.com/v2/comp/hyderabad/x6/040pxx40.xx40.160809124442.w5x6/catalogue/lavin-laboratories-nallakunta-hyderabad-laboratory-testing-services-dkjw3ybg40.jpg", // Placeholder
  },

  // About the Industry Partner
  about: {
    title: "About Lavin Laboratories",
    content: `Lavin Laboratories is a well-established, ISO/IEC 17025:2017 accredited testing laboratory providing advanced analytical solutions to a wide range of industries, including food & beverages, pharmaceuticals, fuels, oils, and environmental sciences.  

With a team of highly skilled scientists and cutting-edge instrumentation, Lavin Laboratories ensures accurate, reliable, and authentic results that meet global standards. Their strong quality systems and uncompromising control measures have positioned them as a trusted partner for high-quality testing and research solutions.`,
  },

  // Collaboration Details Section
  collaborationDetails: {
    sectionTitle: "Our Partnership",
    collaborationText: `Through our collaboration with Lavin Laboratories, we aim to bridge the gap between industry and academia by creating opportunities for advanced testing, research, and innovation.  

This partnership enables students and researchers to gain practical exposure to high-end laboratory practices while industries benefit from collaborative projects, contract research, and innovation-driven services. Together, we support breakthroughs in biotechnology, pharmaceuticals, food safety, and environmental sustainability.`,
  },

  // Services / Areas of Collaboration
  workshops: {
    sectionTitle: "Areas of Expertise",
    description: "Lavin Laboratories offers a wide spectrum of testing and research services that align with our joint objectives.",
    list: [
      "Water, Soil, Air Quality, and Environmental Testing",
      "Food and Beverages Testing including nutritional, microbiological, and allergen analyses",
      "Pharmaceutical Testing covering raw materials, formulations, sterility, and microbial safety",
      "Shelf Life Studies and Quality Control for consumer products",
      "Contract Research in microbiology, molecular biology, and nanotechnology",
      "Specialized studies including antibacterial, antioxidant, anti-inflammatory, and anticancer activities",
    ],
  },

  // Image Gallery Section
  gallery: {
    sectionTitle: "Inside Lavin Laboratories",
    images: [
      "/images/gallery/lavin-1.jpg", // Placeholder
      "/images/gallery/lavin-2.jpg", // Placeholder
      "/images/gallery/lavin-3.jpg", // Placeholder
      "/images/gallery/lavin-4.jpg", // Placeholder
    ],
  },

  // News and Updates Section
  news: {
    sectionTitle: "Highlights & Achievements",
    updates: [
      "ISO/IEC 17025:2017 accredited laboratory with stringent quality systems.",
      "Serving 5+ industries including biotech, pharma, hospitals, food & beverages, and environmental sciences.",
      "Trusted partner for research, testing, and innovation across Hyderabad and beyond.",
      "Specialized expertise in water, food, pharmaceuticals, and contract research projects.",
    ],
  },
},
{
  id: "global-tech-research",
  name: "Global Tech Research Labs",
  logo: "https://www.shutterstock.com/image-vector/dna-logo-design-templateicon-science-600nw-1473227693.jpg", // Placeholder

  // Banner Section
  banner: {
    title: "Collaboration with Global Tech Research Labs",
    subtitle: "Driving innovation through research, testing, and technology solutions.",
    imageUrl: "/images/banner/global-tech-banner.jpg", // Placeholder
  },

  // About the Industry Partner
  about: {
    title: "About Global Tech Research Labs",
    content: `Global Tech Research Labs is a multidisciplinary R&D and testing company committed to advancing innovation across healthcare, environmental sciences, and emerging technologies.  

With state-of-the-art facilities, international certifications, and a strong team of researchers, the organization delivers reliable testing, product validation, and contract research solutions for clients worldwide.`,
  },

  // Collaboration Details Section
  collaborationDetails: {
    sectionTitle: "Our Partnership",
    collaborationText: `Through our partnership with Global Tech Research Labs, we aim to create opportunities for industry-academia integration.  

This collaboration enables students, researchers, and startups to access cutting-edge laboratory infrastructure, contribute to joint projects, and gain insights into real-world industrial problem solving. Together, we are building a bridge between scientific innovation and market-ready solutions.`,
  },

  // Services / Areas of Collaboration
  workshops: {
    sectionTitle: "Areas of Expertise",
    description: "Global Tech Research Labs offers services that complement our collaborative initiatives.",
    list: [
      "Advanced Biotechnology and Molecular Diagnostics",
      "Environmental Testing (Water, Soil, and Air Quality)",
      "Pharmaceuticals & Nutraceuticals Validation",
      "Product Prototyping and Shelf Life Studies",
      "Renewable Energy and Green Technology Research",
      "AI & Machine Learning Applications in Healthcare",
    ],
  },

  // Image Gallery Section
  gallery: {
    sectionTitle: "Inside Global Tech Research Labs",
    images: [
      "/images/gallery/global-tech-1.jpg", // Placeholder
      "/images/gallery/global-tech-2.jpg", // Placeholder
      "/images/gallery/global-tech-3.jpg", // Placeholder
      "/images/gallery/global-tech-4.jpg", // Placeholder
    ],
  },

  // News and Updates Section
  news: {
    sectionTitle: "Highlights & Achievements",
    updates: [
      "Accredited with international ISO/IEC standards.",
      "Partnered with 20+ universities and research institutes worldwide.",
      "Pioneering AI-driven healthcare diagnostics solutions.",
      "Recognized as one of the Top 50 Innovative Research Labs in Asia.",
    ],
  },
},
];


// This file contains all the dummy content for multiple academic collaboration pages.

export const collaboratingColleges = [
{
  id: "av-college",
  name: "A.V. College of Arts, Science and Commerce",
  logo: AVLogo,

  // Banner Section
  banner: {
    title: "Our Collaboration with A.V. College of Arts, Science and Commerce",
    subtitle: "Honoring a legacy of education, vision, and values since 1968.",
    imageUrl: AVCollegeBanner,
  },

  // About the College Section
  about: {
    title: "About A.V. College",
    content: `A.V. College of Arts, Science and Commerce, established in 1968, is one of Hyderabad’s most respected institutions. Its origins trace back to 1944 with the founding of Andhra Vidyalaya High School by visionaries Sri Konda Venkata Ranga Reddy, Sri Suravaram Pratap Reddy, and Sri Madapati Hanumantha Rao. 

From these beginnings, the college has grown into a multifaceted center of higher education, offering undergraduate and postgraduate programs, including the pioneering K.V. Ranga Reddy Law College. Known for academic excellence, ethical leadership, and holistic development, A.V. College continues to shape generations of students into responsible and capable citizens.`,
  },

  // Collaboration Details Section
  collaborationDetails: {
    sectionTitle: "Legacy and Vision",
    collaborationText: `Through our collaboration with A.V. College, we are proud to support their mission of developing well-rounded individuals. The institution’s initiatives such as NCC, NSS, and academic forums inspire students to embrace leadership, teamwork, and social responsibility. 

Together, we aim to foster an environment where true excellence is defined not only by academic achievements but also by the lasting impact students create in society.`,
  },

  // Workshops Section
  workshops: {
    sectionTitle: "Programs & Initiatives",
    description: "Our collaboration reinforces the diverse academic and developmental opportunities A.V. College provides.",
    list: [
      "Undergraduate and Postgraduate Programs across Arts, Science, and Commerce",
      "K.V. Ranga Reddy Law College – a pioneering legal education initiative",
      "Holistic Development Programs including NCC and NSS",
      "Student Leadership through Academic Forums and Cultural Activities",
    ],
  },

  // Image Gallery Section
  gallery: {
    sectionTitle: "A Glimpse into A.V. College",
    images: [
      "/images/gallery/av-1.jpg",
      "/images/gallery/av-2.jpg",
      "/images/gallery/av-3.jpg",
      "/images/gallery/av-4.jpg",
    ],
  },
},

{
  id: "rbvrr-womens-college",
  name: "R.B.V.R.R. Women’s College",
  logo: ReddyCollegeLogo,

  // Banner Section
  banner: {
    title: "Collaborating with R.B.V.R.R. Women’s College",
    subtitle: "Empowering women through quality education and leadership since 1954.",
    imageUrl: RBVRRCollegeBanner
},

  // About the College Section
  about: {
    title: "About R.B.V.R.R. Women’s College",
    content: `Raja Bahadur Venkata Rama Reddy Women’s College, established in 1954 by the Hyderabad Mahila Vidhya Sangham (HMVS), is one of the oldest women’s colleges in Hyderabad. The college was founded with the vision of empowering women through modern education and continues to uphold that mission today.  

The institution holds a special place in history, with its foundation stone laid by Pandit Jawaharlal Nehru in 1954, its building inaugurated by Dr. S. Radhakrishnan in 1955, and its hostel inaugurated by Smt. Indira Gandhi in 1965. With a legacy spanning decades, the college has consistently nurtured women to excel academically, professionally, and socially.`,
  },

  // Collaboration Details Section
  collaborationDetails: {
    sectionTitle: "Vision and Mission",
    collaborationText: `Through our collaboration with R.B.V.R.R. Women’s College, we proudly support their mission of empowering women as transformative leaders. The college equips students with the skills and knowledge required to thrive in a rapidly changing world while fostering innovation, sustainability, and employability.  

Together, we encourage research, entrepreneurship, and global collaboration, helping women become confident, competitive, and impactful contributors to society.`,
  },

  // Workshops Section
  workshops: {
    sectionTitle: "Programs & Opportunities",
    description: "Our partnership highlights the college’s strong academic and developmental ecosystem for women.",
    list: [
      "Undergraduate, Postgraduate, and MBA Programs across diverse disciplines",
      "Placements and Career Development Cell with strong industry collaborations",
      "Research and Innovation opportunities including conferences and exchange programs",
      "Digital Transformation and Entrepreneurship-focused initiatives",
      "Cultural, Sports, and Leadership activities promoting holistic growth",
    ],
  },

  // Image Gallery Section
  gallery: {
    sectionTitle: "Campus Life at R.B.V.R.R.",
    images: [
      "/images/gallery/rbvrr-1.jpg",
      "/images/gallery/rbvrr-2.jpg",
      "/images/gallery/rbvrr-3.jpg",
      "/images/gallery/rbvrr-4.jpg",
    ],
  },

  // News and Events Section
  news: {
    sectionTitle: "Recent Updates",
    updates: [
      "Workshop on Artificial Intelligence organized by Dept. of Computer Science in collaboration with Pantech e-Learning (Sep 2025).",
      "NSE Financial Awareness Session by the Department of Commerce.",
      "VANIJYA VIPANI 2025 – 2nd Virtual International Conference on AI-Driven Transformation in Commerce and Management.",
      "14th Graduation Day announced for UG and PG candidates (2022-2024 batches).",
      "Placed in the 201-300 band of NIRF 2024 Rankings.",
    ],
  },
},

{
  id: "pragathi-college",
  name: "Pragathi Group of Colleges",
  logo: PragathiCollegeLogo,

  // Banner Section
  banner: {
    title: "Partnering with Pragathi Group of Colleges",
    subtitle: "Shaping future leaders with academic excellence and holistic growth.",
    imageUrl: pragathiCollegeBanner,
  },

  // About the College Section
  about: {
    title: "About Pragathi College",
    content: `Pragathi Group of Colleges has established itself as one of Hyderabad’s leading institutions, known for quality education, affordable fees, and highly qualified faculty. With a vision to empower students through knowledge and values, Pragathi has grown into a hub for academic excellence and holistic student development. 

Over the years, the institution has produced graduates who are equipped to meet the challenges of today’s fast-changing world, while nurturing innovation, integrity, and leadership.`,
  },

  // Collaboration Details Section
  collaborationDetails: {
    sectionTitle: "Vision and Mission",
    collaborationText: `Our collaboration with Pragathi College strengthens its mission to deliver education that blends innovative teaching with practical exposure. By focusing on scientific, technical, management, and interpersonal skills, the institution prepares students to thrive as responsible citizens and confident professionals.

Together, we are creating opportunities that bridge classroom learning with real-world applications, shaping future leaders who are community-driven and globally competitive.`,
  },

  // Workshops Section
  workshops: {
    sectionTitle: "Programs & Opportunities",
    description: "Through this collaboration, Pragathi College students gain access to programs and initiatives that enhance both academic and personal growth.",
    list: [
      "Undergraduate and Postgraduate Programs across multiple disciplines",
      "Campus Placements and Career Development Programs",
      "Industrial Visits and Industry-Oriented Training",
      "Community Engagement through Cultural and Social Events",
      "Skill Development Workshops and Student Leadership Forums",
    ],
  },

  // Image Gallery Section
  gallery: {
    sectionTitle: "Life at Pragathi College",
    images: [
      "/images/gallery/pragathi-1.jpg",
      "/images/gallery/pragathi-2.jpg",
      "/images/gallery/pragathi-3.jpg",
      "/images/gallery/pragathi-4.jpg",
    ],
  },

  // News and Events Section
  news: {
    sectionTitle: "Recent Updates",
    updates: [
      "Over 140+ students selected in Campus Drive conducted by MagicBus (2023).",
      "Industrial Visit to R.A. Silks, Janagaon (2023).",
      "Students placed in Sutherland Global Company (2023).",
      "20th Annual Day Celebrations 'Yaadien-2023'.",
      "Sports Week, Rangoli, Mehandi, and Hair Styling Competitions.",
      "World Heart Day Awareness Program by Nutrition Students.",
      "Graduation Day Celebrations (2022).",
      "Multiple successful campus drives in collaboration with MagicBus.",
    ],
  },
},

{
  id: "bjr-college",
  name: "BJR Government Degree College (Autonomous)",
  logo: BJRCollegeLogo,

  // Banner Section
  banner: {
    title: "Collaborating with BJR Government Degree College",
    subtitle: "Empowering students through innovation, skill development, and quality education since 1974.",
    imageUrl: BJRCollegeBanner,
  },

  // About the College Section
  about: {
    title: "About BJR Government Degree College",
    content: `Babu Jagjivan Ram Government Degree College (Autonomous), Narayanaguda, Hyderabad, is one of Telangana’s premier government institutions of higher education. Established in 1974 to honor the legacy of Sri Babu Jagjivan Ram, the college has consistently worked towards uplifting students from socially and economically disadvantaged backgrounds.

Affiliated with Osmania University and operating from its permanent campus at Vittalwadi since 2015, the college is recognized for academic excellence, skill development, and community service. With a strong team of dedicated faculty, the college continues to shape competent and responsible graduates who contribute meaningfully to society.`,
  },

  // Collaboration Details Section
  collaborationDetails: {
    sectionTitle: "Our Collaboration with BJR College",
    collaborationText: `Our partnership with BJR Government Degree College reflects a shared commitment to empowering students with the right skills, values, and opportunities. Through this collaboration, we aim to bridge the gap between academics and industry by supporting initiatives in skill development, employability training, and community engagement.

Together, we are fostering a new generation of students who are not only academically strong but also equipped to lead with integrity, creativity, and purpose.`,
  },

  // Workshops Section
  workshops: {
    sectionTitle: "Programs & Initiatives",
    description: "As part of our collaboration, students of BJR College benefit from joint programs that enhance their academic learning and prepare them for real-world challenges.",
    list: [
      "Skill Development and Employability Training Programs",
      "Industry-Oriented Workshops and Career Guidance",
      "Community Engagement and Social Responsibility Activities",
      "Support for NCC, NSS, and Student Leadership Initiatives",
      "Collaborative Events, Seminars, and Knowledge Sharing Sessions",
    ],
  },

  // Image Gallery Section
  gallery: {
    sectionTitle: "Highlights from Our Collaboration",
    images: [
      "/images/gallery/bjr-1.jpg",
      "/images/gallery/bjr-2.jpg",
      "/images/gallery/bjr-3.jpg",
      "/images/gallery/bjr-4.jpg",
    ],
  },

  // News and Events Section
  news: {
    sectionTitle: "Recent Updates",
    updates: [
      "Admissions Open for 2025 at BJR Government Degree College.",
      "40 days of Free Training for Self Employment in collaboration with TATA Steel BFSI.",
      "National Librarian Day Celebrations organized on 12th August.",
      "NCC Naval Wing First Year Enrollment 2025.",
      "Collaborative student programs driving academic excellence and holistic growth.",
    ],
  },
},
{
  id: "kasturba-college",
  name: "Kasturba Gandhi Degree & PG College for Women",
  logo: KasthuribaCollegeLogo,

  // Banner Section
  banner: {
    title: "Collaborating with Kasturba Gandhi Degree & PG College for Women",
    subtitle: "Empowering women through quality education, innovation, and leadership since 1973.",
    imageUrl: KasthurbhaCollegeBanner,
  },

  // About the College Section
  about: {
    title: "About Kasturba Gandhi College",
    content: `Kasturba Gandhi Degree & PG College for Women, West Marredpally, Secunderabad, is a premier institution established in 1973 by the Osmania Graduates’ Association under the patronage of the Exhibition Society. Named after Kasturba Gandhi, the college has been a beacon of women’s education and empowerment for over five decades.

Spread across 3.85 acres in the heart of Secunderabad, the college has been consistently recognized for its academic excellence. Accredited with an 'A+' grade by NAAC in its 4th cycle, the institution ranks 2nd among Non-Autonomous Colleges in Telangana and among the Top 100 colleges in India, according to India Today and Education World surveys.`,
  },

  // Collaboration Details Section
  collaborationDetails: {
    sectionTitle: "Our Collaboration with Kasturba Gandhi College",
    collaborationText: `Our partnership with Kasturba Gandhi Degree & PG College for Women is founded on a shared vision to foster women’s leadership and academic growth. Through this collaboration, we are bridging the gap between classroom learning and real-world opportunities by supporting new-age courses, skill-based training, and placement initiatives.

Together, we aim to create an ecosystem where women students are encouraged to excel in science, commerce, technology, and leadership roles, thereby contributing significantly to society and the workforce.`,
  },

  // Workshops Section
  workshops: {
    sectionTitle: "Programs & Initiatives",
    description: "As part of our collaboration, students benefit from exposure to innovative programs that complement their formal education.",
    list: [
      "Skill Development and Employability Training for Women",
      "Workshops on Artificial Intelligence, Machine Learning, and Emerging Tech",
      "Entrepreneurship and Leadership Development Programs",
      "Career Guidance and Placement Support",
      "Celebrating Women Empowerment through Seminars & Cultural Events",
    ],
  },

  // Image Gallery Section
  gallery: {
    sectionTitle: "Highlights from Our Collaboration",
    images: [
      "/images/gallery/kasturba-1.jpg",
      "/images/gallery/kasturba-2.jpg",
      "/images/gallery/kasturba-3.jpg",
      "/images/gallery/kasturba-4.jpg",
    ],
  },

  // News and Events Section
  news: {
    sectionTitle: "Recent Updates",
    updates: [
      "Golden Jubilee Celebrations held on 27th February 2025 with Hon’ble Governor Shri Jishnu Dev Varma as Chief Guest.",
      "Ranked 26th in the country by Education World (2025–26).",
      "NAAC Accreditation with A+ Grade in 4th Cycle.",
      "New Courses Introduced in 2025–26: B.Sc Botany-Zoology-Biotechnology, B.Sc AI & ML, and BCA.",
      "Consistently ranked among the Top 100 Colleges in India by India Today Survey.",
    ],
  },
},
];