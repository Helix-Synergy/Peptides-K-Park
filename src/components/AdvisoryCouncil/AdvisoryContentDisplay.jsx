

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Image from '../../assets/images/about-banner.jpg'

import anuradha from '../../assets/images/advisory/anuradha.jpg';
import kumar from '../../assets/images/advisory/kumar.jpeg';
import pushpa from '../../assets/images/advisory/pushpa.jpg';
import sarika from '../../assets/images/advisory/sarika.jpg';
import sudhakar from '../../assets/images/advisory/sudhakar.jpeg';
import valasia from '../../assets/images/advisory/valasia.jpg';
import cristiano from '../../assets/images/advisory/cristiano.jpg';
import ramakanth from '../../assets/images/advisory/ramakanth.jpeg';
import saritha from '../../assets/images/advisory/saritha.jpeg';
import sujani from '../../assets/images/advisory/sujani.jpeg';
import vinyas from '../../assets/images/advisory/vinyas.jpg';
import kalyani from '../../assets/images/advisory/kalyani.jpg';
import murthy from '../../assets/images/advisory/murthy.jpg';
import roseMary from '../../assets/images/advisory/rose-mary.jpg';
import shivakrishna from '../../assets/images/advisory/shivakrishna.jpeg';
import thomas from '../../assets/images/advisory/thomas.jpg';

const advisoryContentData = {
  "about-advisory-board": {
    heroTitle: "About Our Panel of Experts",
    heroSubtitle:
      "Our Panel of Experts Provides Strategic Guidance and Expertise to Drive Innovation and Growth for Peptides Knowledge Park.",
    brochures: [
      {
        title: "Board Charter",
        link: "/assets/brochure-board-charter.pdf",
      },
      {
        title: "Annual Report 2023",
        link: "/assets/brochure-annual-report.pdf",
      },
    ],
    helpSection: {
      image: "https://placehold.co/96x96/48D1CC/000000?text=JD",
      title: "Need Assistance?",
      description:
        "Our Team is Ready to Help You With Any Queries Regarding Our Advisory Services.",
      phone: "+91 7997940959",
    },
    mainContent: [
      {
        title: "Our Mission & Vision",
        paragraphs: [
          "The Panel of Experts is Committed to Fostering a Culture of Excellence and Strategic Foresight Within Peptides Knowledge Park. Our Mission is to Provide Invaluable Insights and Direction, Ensuring That Our Initiatives Align With Global Best Practices and Emerging Industry Trends.",
          "We Envision a Future Where Peptides Knowledge Park is a Beacon of Innovation, Driven by the Collective Wisdom and Diverse Experiences of Our Distinguished Board Members. Their Guidance is Crucial in Navigating Complex Challenges and Capitalizing on New Opportunities.",
        ],
        images: [
          {
            src: "https://placehold.co/600x400/A0DDA0/000000?text=Board+Meeting",
            alt: "Panel of Experts Meeting",
          },
          {
            src: "https://placehold.co/600x400/DDA0DD/000000?text=Strategy+Session",
            alt: "Strategy Session",
          },
        ],
        benefits: [
          "Strategic Direction and Oversight",
          "Industry Expertise and Insights",
          "Enhanced Governance and Accountability",
          "Networking and Partnership Opportunities",
          "Risk Mitigation and Opportunity Identification",
          "Innovation and Research Guidance",
        ],
      },
      {
        title: "Roles and Responsibilities",
        paragraphs: [
          "The Panel of Experts Plays a Critical Role in Shaping the Strategic Direction of Peptides Knowledge Park. Their Responsibilities Include Reviewing Key Strategies, Providing Expert Opinions on Complex Issues, and Offering Guidance on Market Positioning and Technological Advancements.",
          "They Also Serve as Ambassadors for Peptides Knowledge Park, Leveraging Their Networks to Foster Collaborations and Promote Our Mission Globally. Their Independent Perspectives are Vital for Robust Decision-Making and Ensuring Long-Term Success.",
        ],
      },
    ],
    faq: [
      {
        question: "What is the Primary Role of the Panel of Experts?",
        answer:
          "The Panel of Experts Primarily Provides Strategic Advice and High-Level Guidance to the Executive Management, Focusing on Long-Term Vision and Industry Trends.",
      },
      {
        question: "How Often Does the Panel of Experts Convene?",
        answer:
          "The Panel of Experts Typically Meets Quarterly, With Additional Special Sessions Convened as Needed to Address Specific Strategic Initiatives or Urgent Matters.",
      },
      {
        question: "What Kind of Expertise Do Panel of Experts Members Bring?",
        answer:
          "Members are Selected for Their Extensive Experience and Leadership in Various Fields, Including Technology, Finance, Research, and Global Markets, Ensuring a Diverse Range of Perspectives.",
      },
      {
        question: "Is the Panel of Experts Involved in Daily Operations?",
        answer:
          "No, the Panel of Experts Focuses on Strategic Oversight and Guidance, Leaving the Day-to-Day Operational Decisions to the Executive Team.",
      },
    ],
  },
  "panel-of-experts": {
    heroTitle: "Our Subject Matter Experts",
    heroSubtitle:
      "Our Panel Comprises Visionary Leaders and Experts Dedicated to Guiding Strategic Direction and Fostering Innovation at Peptides Knowledge Park.",
    brochures: [
      {
        title: "Panel Member Profiles",
        link: "/assets/brochure-member-profiles.pdf",
      },
      {
        title: "Strategic Initiatives",
        link: "/assets/brochure-strategic-initiatives.pdf",
      },
    ],
    helpSection: {
      image: "https://placehold.co/96x96/FF69B4/000000?text=Contact",
      title: "Connect With Us",
      description:
        "Have Questions About Our Panel or Seeking Collaboration? Reach Out Today!",
      phone: "+91 7997940959",
    },
    mainContent: [
      {
        title: "Meet Our Subject Matter Experts",
        paragraphs: [
          "The Panel of Experts at Peptides Knowledge Park is Composed of Highly Respected Individuals Who Bring a Wealth of Knowledge, Experience, and Diverse Perspectives. Each Member is a Leader in Their Respective Field, Contributing Significantly to Strategic Planning and Operational Excellence.",
          "Their Collective Expertise Spans Technology, Business Development, Research, and Global Markets, Enabling Peptides Knowledge Park to Stay at the Forefront of Innovation and Maintain a Competitive Edge.",
        ],
        advisoryMembers: [
          {
            name: "Dr. Valasia Iakovoglou",
            image: valasia,
            role: "PhD in Ecophysiology/Sylviculture",
            subtitle: "Iowa State University, USA",
            country: "USA",
            bio: "Dr. Valasia Iakovoglou is a distinguished graduate of Iowa State University (ISU), USA, where she earned her BS in Forest Biology, MSc in Urban Forestry, and PhD in Ecophysiology/Sylviculture. Her extensive research background is dedicated to ecosystem restoration and conservation, with a key focus on biodiversity and climate change. Amassing over 25 years of international and national experience, she has profoundly contributed to education, research, teaching, and outreach, actively participating in more than 20 international projects. Dr. Iakovoglou is a prolific scholar, with over 100 publications, including books and peer-reviewed papers. She also serves as an esteemed editor and reviewer for numerous international journals. Her commitment extends to significant roles in scientific societies like the Mediterranean Experts of Climate and environmental Change (MedECC). Since 2018, she has directed the Ecotourism sector as a Scientific Committee member of the UNESCO chair “Con-E-Ect.” Additionally, since 2016, she has been an active Board Member of the “Association of Inter-Balkan Woman’s Cooperation Societies, AIWCS,” focusing on education initiatives.",
            achievements: [
              "25+ years of international and national experience",
              "Over 100 publications including books and peer-reviewed papers",
              "Editor and reviewer for international journals",
              "Active roles in scientific societies such as MedECC",
              "Scientific Committee member of UNESCO chair 'Con-E-Ect.'",
              "Board Member of AIWCS",
            ],
            contributions: [
              "Ecosystem restoration and conservation research",
              "Biodiversity and climate change initiatives",
              "Education, teaching, and outreach programs",
            ],
          },
          {
            name: "Dr. Thomas J. Webster",
            image: thomas,
            role: "Biomedical Engineer & Chief Nano Scientific Officer",
            subtitle: "",
            country: "USA",
            bio: "Thomas J. Webster is an American biomedical engineer, researcher, and entrepreneur with over 25 years in academia. He holds a BSc in chemical engineering from the University of Pittsburgh (1995), and an MSc and PhD (2000) in biomedical engineering from Rensselaer Polytechnic Institute. His research extensively explores nanotechnology, focusing on developing nanophase materials for superior biomedical applications like tissue regeneration and anti-cancer strategies. He pioneered improved tissue growth and decreased bacteria functions on nanomaterials, also establishing a mathematical equation for predicting nanoscale surface features. Presently, he is the Chief Nano Scientific Officer at PrinterPrezz and leads several start-up companies. His groundbreaking work has garnered significant media attention and has been displayed in major science museums.",
            achievements: [
              "Over 1350 publications, H-index 118",
              "Clarivate’s Most Distinguished Researcher (Top 0.1%)",
              "Awards: BMES Rita Schaffer, Coulter Foundation, Acta Biomaterialia Silver Award",
              "Fellow of multiple prestigious organizations",
              "Editor-in-chief of Research Journal of Medical and Health Sciences",
            ],
            contributions: [
              "Nanotechnology research for tissue regeneration and anti-cancer strategies",
              "Mathematical modeling of nanoscale surfaces",
              "Leadership in biomedical startups",
            ],
          },
          {
            name: "Cristiano José de Andrade",
            image: cristiano,
            role: "Adjunct Professor",
            subtitle: "Federal University of Santa Catarina (UFSC)",
            country: "Brazil",
            bio: "Cristiano José de Andrade holds a degree in Food Engineering from the Federal University of Lavras (UFLA), and a Master's and PhD in Food Science (concentration in Biochemistry) from the State University of Campinas (UNICAMP). He completed a PhD program at the University of Reading (UK) and a postdoctoral degree from the Polytechnic School of the University of São Paulo (USP) in Chemical Engineering. His expertise lies in the development of biotechnological processes related to bacteria, microalgae, and macroalgae, particularly their metabolism (proteomics), bioproducts with high surfactant activity, purification processes (membranes and high-pressure extraction), and biomolecule identification by mass spectrometry.",
            achievements: [
              "Adjunct Professor at UFSC",
              "Professor in Graduate Program in Chemical Engineering",
              "Member of Ibero-American Network for Microalgae Effluent Treatment",
              "Member of steering committee of PRH/ANP 11.1",
            ],
            contributions: [
              "Biotechnological processes for bacteria and algae",
              "Proteomics and biomolecule identification",
              "Purification and bioproduct development",
            ],
          },
          {
            name: "Sarika Kuchipudi",
            image: sarika,
            role: "Senior Scientist – Biotechnology & Pharmaceuticals",
            subtitle: "MBA Candidate, Melbourne Business School",
            country: "",
            bio: "Sarika Kosaraju is a seasoned Senior Scientist with over 12 years of experience in the biotechnology and pharmaceutical sectors, specializing in GMP-compliant vaccine development and manufacturing. With a strong foundation in molecular biology and process development, she has held pivotal roles that bridge research and quality operations. Sarika combines technical depth with operational leadership, and her current pursuit of an MBA at Melbourne Business School underscores her growing focus on strategic and cross-functional leadership.",
            achievements: [
              "Led development, scale-up, and optimization of vaccine manufacturing systems",
              "Hands-on expertise with bioreactors, fermenters, and TFF systems",
              "Integrated quality systems for large-scale projects",
              "Technical capabilities in qPCR, flow cytometry, RT-PCR, molecular cloning",
              "Member of advisory boards providing strategic direction",
            ],
            contributions: [
              "Vaccine process automation",
              "Research and operational leadership in biotech and pharma",
              "Advisory roles bridging science and business",
            ],
          },
          {
            name: "Dr. Sri Samba Murthy",
            image: murthy,
            role: "Educator & Researcher",
            subtitle: "",
            country: "India",
            bio: "S.Samba Murthy, M.Sc., PGDCA, and Diploma in German, is a distinguished educator and researcher with a strong background in botany. He has amassed extensive teaching experience, serving as a Research Assistant in the Botany Department at S.U. University, a lecturer, and eventually progressing to become the Head of the Department of Botany. His expertise extends beyond academia, as he has also held administrative roles such as Controller of Examinations in an Autonomous College and Assistant Coordinator at the IGNOU Study Centre, K.B.N. College. A dedicated advocate for community service, he has contributed as an NSS Coordinator and Secretary of RCTA Unit-3, Vijayawada, where he has been actively involved in initiatives like supporting S.V. Temple. His research pursuits have led to the publication of articles exploring the effects of phenolics on plant growth, underscoring his dedication to advancing scientific knowledge.",
            achievements: [
              "Extensive teaching experience in botany",
              "Administrative leadership roles in colleges",
              "Community service through NSS and RCTA initiatives",
              "Research on phenolics in plant growth",
            ],
            contributions: [
              "Botany education",
              "Academic administration",
              "Community engagement",
            ],
          },
          {
            name: "Dr. Shivakrishna Pabba",
            image: shivakrishna,
            role: "Managing Director & Lab Head",
            subtitle: "PSK Lavin Laboratories Pvt. Ltd.",
            country: "India",
            bio: "Dr. Shivakrishna Pabba completed his doctoral research in Microbiology from the esteemed Kakatiya University. With over a decade of research experience in microbiology and food microbiology, his contributions to scientific innovation and public health are truly commendable. He began his journey as an independent researcher in 2015 at the Centre for Advanced Biological Research, Hyderabad, where he delved deep into quality control studies related to food, water, and environmental monitoring. In 2017, driven by his vision to bridge science with society, Dr. Shivakrishna established his own state-of-the-art testing facility, PSK Lavin Laboratories Pvt. Ltd., with the motto 'Applying Science for Better Life.' Under his leadership as Managing Director and Lab Head, the lab has grown into a premier institution recognized for its excellence, holding ISO 9001, ISO 14001, and ISO 45001 certifications, along with NABL (ISO/IEC 17025:2017) accreditation. The laboratory is also recognized by the Ministry of Environment, Forests & Climate Change (MoEFCC).",
            achievements: [
              "Young Scientist Award (2013), K.V. Rao Research Award (2014), Young Teacher Award (2015)",
              "Over 28 research publications, 4 books, 1 patent",
              "Mentoring 7 Ph.D. scholars",
              "Technical Assessor for NABL under QCI India",
              "Board of Studies Member and reviewer for national and international journals",
            ],
            contributions: [
              "Food and environmental microbiology research",
              "Establishing accredited testing laboratories",
              "Scientific mentoring and training",
            ],
          },
          {
            name: "Dr. Vinyas Mayasa",
            image: vinyas,
            role: "Assistant Professor, Pharmacology and Toxicology",
            subtitle: "GITAM School of Pharmacy, Telangana, India",
            country: "India",
            bio: "Dr. Vinyas Mayasa is a seasoned academic and researcher with over 15 years of experience in pharmacology and toxicology. He holds a Ph.D. in Pharmacy with research focused on agents affecting insulin metabolism in diabetic models. He has held various teaching and research roles across reputed institutions and industries. Dr. Vinyas has contributed extensively to academic event planning, organizing national and international conferences in pharmacology and toxicology, and conducting pre-clinical pharmacological studies. Additionally, he serves as an editor for several peer-reviewed journals, advancing research quality in biomedical sciences.",
            achievements: [
              "Best Researcher Award – MNR College of Pharmacy",
              "Best Oral & Poster Presentations – Various Conferences",
              "Best Teacher Award – MNR College of Pharmacy, 2022",
              "50 published research articles, 2 books, 5 book chapters",
              "Supervising 4 Ph.D. Scholars in anti-diabetic, anti-obesity, and food-drug interactions",
            ],
            contributions: [
              "Research in pharmacology and toxicology",
              "Organizing conferences and pre-clinical studies",
              "Editorial contributions to peer-reviewed journals",
            ],
          },
          {
            name: "Dr. Mallappa Kumara Swamy",
            image: kumar,
            role: "HOD Biotechnology",
            subtitle: "East West First Grade College, Bengaluru, India",
            country: "India",
            bio: "Dr. Mallappa Kumara Swamy is a distinguished academic and researcher, currently serving as Professor and Head in the Department of Biotechnology and Microbiology at East West First Grade College, Bengaluru, India. With over two decades of teaching and research expertise, he has earned a reputation as one of India’s leading scientists, being included in Stanford University’s prestigious list of the Top 2% Most Influential Scientists from 2021 to 2024. Dr. Swamy possesses a robust educational foundation, holding a Ph.D. in Biotechnology from Acharya Nagarjuna University, complemented by an M.Phil and M.Sc in the same field. His extensive career encompasses key academic positions and post-doctoral research at Universiti Putra Malaysia, where he explored medicinal plant biotechnology, phytochemical genomics, secondary metabolite production, and nanobiotechnology. He has successfully completed numerous funded research projects on topics ranging from bioinformatics to probiotics, contributing groundbreaking findings to his field. As an author, Dr. Swamy boasts an impressive catalog of scholarly work, including 68 research and review papers, alongside 20 books published by eminent publishers like Springer, Elsevier, and CRC Press. His administrative acumen is reflected in his six years of experience as Principal and Head, paired with a commitment to talent development, conference management, and innovation-driven education.",
            achievements: [
              "Included in Stanford University’s list of Top 2% Most Influential Scientists",
              "68 research and review papers, 20 books",
              "6 years as Principal and Head",
              "Industrial experience in microbiology and technical sales",
              "Mentoring students and organizing research initiatives",
            ],
            contributions: [
              "Biotechnology and microbiology research",
              "Educational leadership and mentorship",
              "Bridging academia and industry",
            ],
          },
          {
            name: "Dr. Ramakanth Sharma",
            image: ramakanth,
            role: "R&D Specialist",
            subtitle: "Advance Aqua Biotechnologies",
            country: "India",
            bio: "Expertise in molecular biology techniques such as PCR, ELISA, and HPLC. Published extensively in national and international journals, with a focus on cancer biology and radiation studies. Dr. Ramakant Sharma is a dedicated Professor of Botany with extensive experience in academic leadership, teaching, and research. Currently serving at Ramadevi Mahila P.G. Mahavidyalaya, Jhunjhunu, he excels as an Academic Co-ordinator, NSS Officer, and Head of the Placement Cell. His expertise spans molecular techniques, plant tissue culture, and hematology, with proficiency in advanced methods like PCR and HPLC. Dr. Sharma holds a Ph.D. with research focused on radiation protection and hematological studies in Swiss albino mice. His academic journey includes degrees such as M.Sc. in Biotechnology and B.Sc. in Zoology, alongside certifications in computer skills and teaching methodologies. An active participant in national and international seminars, his work has been widely recognized, including accolades for paper and poster presentations. With a strong affiliation to academic bodies like UGC, NCTE, and NAAC, Dr. Sharma has contributed significantly to curriculum development, affiliation processes, and event organization. His multilingual abilities, coupled with a commitment to innovation and education, make him a distinguished figure in the field of science and academia.",
            achievements: [
              "Extensive research in molecular biology, PCR, ELISA, HPLC",
              "Published work on cancer biology and radiation studies",
              "Academic leadership roles as Professor, Academic Coordinator, NSS Officer",
              "Active participant in national and international seminars",
            ],
            contributions: [
              "Molecular biology research",
              "Radiation biology studies",
              "Education and mentorship",
            ],
          },
          {
            name: "Dr. SUJANI GUDIPATI",
            image: sujani,
            role: "R&D",
            subtitle: "Advance Aqua Biotechnologies India Pvt Ltd.",
            country: "India",
            bio: "Dr. SUJANI GUDIPATI is an accomplished professional with extensive expertise in scientific research, teaching, and administration. Currently leading the R&D division at Advance Aqua Biotechnologies India Pvt Ltd., Dr.Sujani Gudipati develops innovative veterinary pharmaceutical formulations to enhance animal health globally. With a rich academic history, including roles as Vice Principal, Lecturer, and Head of Department at esteemed institutions like Andhra Loyola College and Sri Chaitanya College, they have nurtured talent and contributed to the overall growth of students through teaching, counseling, and career guidance. A prolific researcher and dedicated participant in international seminars and webinars, Dr. Sujani Gudipati has presented groundbreaking work in aqua phytobiotics and sustainable agricultural practices. Their research has been recognized with accolades such as 'Best Poster Presentation,' and they have contributed significantly to climate change studies, biodiversity conservation, and pharmaceutical advancements. Their academic achievements also include involvement with national and international conferences, guest faculty roles, and contributions as a Board of Studies member. Dr. Sujani Gudapati combines a unique blend of teaching, scientific innovation, and event management expertise, holding a vision of empowering individuals and organizations. Their dedication to knowledge transfer and skill development has left a lasting impact on academia and the broader scientific community.",
            achievements: [
              "Led R&D at Advance Aqua Biotechnologies India Pvt Ltd.",
              "Contributions to aqua phytobiotics and veterinary formulations",
              "Teaching and administrative roles across multiple colleges",
              "Best Poster Presentation and recognition in climate change, biodiversity, and pharma research",
            ],
            contributions: [
              "Scientific research in veterinary pharmaceuticals",
              "Education, mentorship, and community service",
              "Event management and academic leadership",
            ],
          },
          {
            name: "Peri Anuradha",
            image: anuradha,
            role: "Founding Principal",
            subtitle:
              "Pragathi Women’s Junior, Degree, and PG College, Hyderabad",
            country: "India",
            bio: "Peri Anuradha is a dedicated academician and administrator with over 30 years of experience in the education sector. As the founding Principal of Pragathi Women’s Junior, Degree, and PG College in Hyderabad, she has played a pivotal role in establishing and leading the institution since its inception in 2003. With a strong foundation in Chemistry and a deep understanding of institutional management, she has successfully overseen all academic, administrative, and financial functions. Her leadership has not only fostered the growth of the college but also helped shape it into a respected center of higher education for women in the region.",
            achievements: [
              "Founding Principal of Pragathi Women’s College, Hyderabad",
              "30+ years in education sector",
              "Leadership in academic, administrative, and financial management",
              "Head of Examination and Chemistry evaluator at Osmania University",
              "Postgraduate university topper and MA in Hindi",
            ],
            contributions: [
              "Institution building",
              "Academic leadership",
              "Mentoring and guiding female students",
            ],
          },
          {
            name: "Pushpa Lalitha",
            image: pushpa,
            role: "Senior Food Analyst",
            subtitle: "Hydrolabs",
            country: "India",
            bio: "Pushpa Lalitha is a dedicated Senior Food Analyst at Hydrolabs with over nine years of experience in food testing. She holds a Master’s degree in Biotechnology and began her career as a Research Assistant under Dr. B.N. Satyanarayana at G.K.V.K., where she gained recognition for her research contributions. With a passion for continuous learning and innovation, she remains committed to maintaining high standards in food analysis and quality assurance.",
            achievements: [
              "Participated in NABL audits, earning appreciation for contributions to compliance and quality control",
              "Research at G.K.V.K. recognized for impact on biotechnology",
              "Acknowledged for commitment to excellence and proactive problem-solving in food analysis",
              "Implemented effective food testing methodologies ensuring industry standards are met",
            ],
            contributions: [
              "Quality assurance in food testing",
              "Implementation of industry-standard methodologies",
              "Research and analytical work in biotechnology and food analysis",
            ],
          },
          {
            name: "Dr. Kalyani Paidikondala",
            image: kalyani,
            role: "Women Scientist A (WOSA)-DST",
            subtitle: "",
            country: "India",
            bio: "Dr. Kalyani Paidikondala is currently working as a Women Scientist under the DST-WOSA (Department of Science and Technology–Women Scientists Scheme). Her major research focus lies in the synthesis and evaluation of biologically active compounds, particularly those with anti-inflammatory and anti-cancer properties, including the synthesis of metal complexes for therapeutic applications. She earned her Ph.D. in Chemistry from Jawaharlal Nehru Technological University, Hyderabad, India. Dr. Paidikondala is the author of six books, each highlighting advances in anticancer drug discovery and mechanisms of action. Her scientific contributions include 3 patents, 30 research publications and presentations at more than 25 national and international conferences, reflecting her active engagement with the global research community.",
            achievements: [
              "Synthesis and evaluation of biologically active compounds, particularly anti-inflammatory and anti-cancer",
              "Synthesis of quercetin and Curcumin metal Complexes and its biological activities",
              "Author of six books on anticancer drug discovery",
              "Scientific contributions include 3 patents and 30 research publications",
              "Presented at more than 25 national and international conferences",
              "18 years of total experience",
            ],
            contributions: [
              "Research in anti-cancer and anti-inflammatory compounds",
              "Synthesis of therapeutic metal complexes",
              "Scientific publications, books, and patents",
            ],
          },
          {
            name: "Dr. Rose Mary Tadiparthi",
            image: roseMary,
            role: "HOD, Botany Department",
            subtitle: "",
            country: "India",
            bio: "For over 34 years, Dr. Rose Mary Tadiparthi has dedicated her career to the field of Botany, with a passion for educating the next generation of scientists. Her teaching approach highlights making complex botanical topics clear and relatable for BSc students, and her role as Head of the Botany Department showcases her commitment to academic leadership. This focus on clarity and communication has been the foundation of her long career. Outside the classroom, she is a committed scholar with a diverse academic background, demonstrating her varied interests and ability to master her field. Her qualifications, including a Doctorate in Botany, an M.Phil, an M.Ed, and a successful NET qualification, show her skill in exploring new areas and making meaningful contributions across different academic and educational fields. This drive also extends beyond her academic work. Her strong inclination towards the practical application of her knowledge is demonstrated by her Diploma in Herbal Medicine, highlighting a unique blend of scientific discipline and a hands-on approach to natural remedies. In her leadership role as the Head of the Botany Department, she serves as a key link between faculty, administration, and students. This role has nurtured her skills in listening, understanding challenges, and effectively advocating for practical solutions, ensuring that the department’s needs are acknowledged and addressed.",
            achievements: [
              "Expertise: Teaching all papers to BSc Botany students, Herbal Medicine",
              "Research: Doctorate in Botany, MPhil, and NET qualified",
              "Leadership: Head of the Botany Department",
              "Experience: 34 years of experience in the field",
            ],
            contributions: [
              "Botany education",
              "Research in herbal medicine",
              "Departmental leadership and academic mentoring",
            ],
          },
          {
            name: "Dr. Y. Sudhakar",
            image: sudhakar,
            role: "Assistant Professor & HOD, Department of Science & Humanities",
            subtitle: "",
            country: "India",
            bio: "Dr. Y. Sudhakar is an accomplished academician with over 20 years of teaching and research experience in Physics. He holds a Ph.D. in Bio-glasses and an M.Phil. in Glass Science from Acharya Nagarjuna University. Currently serving as Assistant Professor and Head of the Department of Science & Humanities at Andhra Loyola Institute of Engineering and Technology, Vijayawada, he has also held key academic roles in various reputed institutions. His research interests focus on optical and spectroscopic properties of glass systems, with several published papers in international journals. Dr. Sudhakar is known for his dedication to teaching and has contributed significantly to undergraduate and postgraduate education in Physics.",
            achievements: [
              "Expertise: Bio-glasses, Glass Science, Physics education",
              "Education: Ph.D. in Bio-glasses and M.Phil. in Glass Science",
              "Experience: Over 20 years in teaching and research",
              "Leadership: Assistant Professor and Head of Department at Andhra Loyola Institute of Engineering and Technology",
              "Research: Published several papers in international journals",
            ],
            contributions: [
              "Research in bio-glasses and glass science",
              "Physics education at undergraduate and postgraduate levels",
              "Academic leadership in science and humanities",
            ],
          },
          {
            name: "Dr. Saritha Sivampeta",
            image: saritha,
            role: "HOD, Department of Chemistry",
            subtitle: "",
            country: "India",
            bio: "For over 25 years, Dr.Saritha Sivampeta has focused her career on Organic Chemistry, with a passion for educating the next generation of scientists. Her teaching approach highlights making complex topics clear and relatable by using everyday examples and constantly exploring innovative teaching techniques and integrating the latest technologies. This commitment to clarity and communication has been the foundation of her long career. Outside the classroom, she is a flexible researcher with seven published papers, demonstrating her varied interests and ability to adapt. Her work spans Chemistry, Biochemistry, the Internet of Things (IoT), and important sociological studies, including a survey on mental health during the lockdown. This experience demonstrates her skill in exploring new areas and making meaningful contributions across different scientific and technical fields. This creative drive also extends beyond her academic work. Her strong inclination towards art, DIYs, and specifically terracotta jewelry making has blossomed into a small entrepreneurial venture, demonstrating a unique blend of scientific discipline and artistic enterprise. In leadership roles, she has served as both Academic Coordinator and a Staff Representative, acting as a key link between colleagues and administration. This role has nurtured her skills in listening, understanding challenges, and effectively advocating for practical solutions, ensuring that the team's issues are acknowledged and addressed.",
            achievements: [
              "Expertise: Organic Chemistry, Spectroscopy",
              "Research: Published 7 papers across diverse fields including Chemistry, Biochemistry, IoT, and Sociology",
              "Leadership: Served as Academic Coordinator and Staff Representative",
              "Entrepreneurship: Manages a small venture making terracotta jewelry",
              "Experience: 25 years of experience in the field",
            ],
            contributions: [
              "Teaching and research in organic chemistry and spectroscopy",
              "Leadership and coordination in academic roles",
              "Entrepreneurial initiatives in art and craft",
            ],
          },
        ],
      },
      {
        title: "Impact and Contributions",
        paragraphs: [
          "The Panel of Experts' Contributions are Instrumental in Guiding Our Research and Development Efforts, Ensuring That Projects are Scientifically Sound, Commercially Viable, and Socially Impactful.",
          "Their Diverse Expertise Helps Identify Emerging Opportunities, Mitigate Risks, and Maintain a Competitive Edge in a Rapidly Evolving Global Landscape. They Actively Participate in Workshops and Strategic Sessions, Offering Hands-On Guidance.",
        ],
      },
    ],
    faq: [
      {
        question:
          "What is the Difference Between the Advisory Board and the Panel of Experts?",
        answer:
          "The Advisory Board Provides High-Level Strategic Oversight, While the Panel of Experts Offers Detailed Expert Guidance on Specific Initiatives, Projects, and Technical Aspects.",
      },
      {
        question: "How Can I Become a Panel of Experts Member?",
        answer:
          "Membership is by Invitation Only, Based on Extensive Industry Experience, Demonstrated Leadership, and Strong Alignment With Our Organizational Values and Strategic Goals.",
      },
      {
        question: "Can I Propose a Topic for the Panel to Discuss?",
        answer:
          "Yes, We Welcome Suggestions From Our Partners and Stakeholders. Please Submit Proposals Through the 'Become a Member' Page, and They Will Be Reviewed by the Panel Secretariat.",
      },
      {
        question: "What is the Expected Commitment for Panel Members?",
        answer:
          "Panel Members are Expected to Attend Regular Meetings, Participate in Ad-Hoc Discussions, and Contribute Their Expertise to Specific Projects as Needed, With Flexibility for Their Primary Professional Commitments.",
      },
    ],
  },
};

const navigationLinks = [
  {
    name: "About Panel of Experts",
    href: "/panel-of-experts/about-advisory-board",
  },
  {
    name: "Our Subject Matter Experts",
    href: "/panel-of-experts/subject-matter-experts",
  },
  { name: "Become a Panel Member", href: "/panel-of-experts/become-a-member" },
  {
    name: "Activities/Benefits",
    href: "/panel-of-experts/activities-benefits",
  },
];

const AdvisoryContentDisplay = ({ pageType }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const contentKey =
      pageType === "panel-of-experts"
        ? "panel-of-experts"
        : "about-advisory-board";
    setContent(advisoryContentData[contentKey] || null);
  }, [pageType]);

  if (!content) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-700">
        No content available.
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen text-gray-900 font-inter">
      {/* Hero Section */}
<section
  className="relative h-[50vh] md:h-[50vh] flex items-center justify-center text-white overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: `url(${Image})` }}
>
  <motion.div
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 text-end w-full px-4"
  >
    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
      {content.heroTitle}
    </h1>
    {/* <p className="text-lg md:text-xl max-w-3xl mx-auto">
      Peptides Knowledge Park’s Academic Support Services
    </p>
    <p className="text-base text-gray-200 mt-2 max-w-3xl mx-auto">
      Enhancing student success and engagement through Tutoring,
      Mentoring, Writing Labs, Academic Advising, Skill-Building
      Workshops, Review Programs, Career Counselling, and more.
    </p> */}
  </motion.div>

  <div className="absolute inset-0 bg-black/50"></div>
</section>

      {/* Content Section */}
      <section className="w-full py-12 px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[22rem_1fr] gap-8">
          {/* Sidebar */}
          <aside className="bg-green-900/10 backdrop-blur-md rounded-xl shadow-lg p-6 lg:sticky top-[146px] h-fit">
            <h3 className="text-xl font-bold mb-4 text-peptides-color-brown">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigationLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.href}
                    className="block py-2 px-3 rounded-lg hover:bg-green-800/20 transition text-black font-medium"
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
                className="mb-12 bg-white shadow-lg p-6 rounded-xl"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0F2920]">
                  {section.title}
                </h2>

                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="text-black mb-3 leading-relaxed">
                    {p}
                  </p>
                ))}

                {/* Advisory Members (Clickable Cards) */}
                {section.advisoryMembers && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                    {section.advisoryMembers.map((member, i) => {
                      const memberSlug = encodeURIComponent(
                        member.name.toLowerCase().replace(/\s+/g, "-")
                      );

                      return (
                        <Link
                          key={i}
                          to={`/panel-of-experts/member/${memberSlug}`}
                          state={{ member }}
                          className="bg-amber-900/10 rounded-xl p-4 flex flex-col items-center text-center hover:scale-105 transition-transform"
                        >
                          <img
                            src={
                              member.image ||
                              `https://placehold.co/100x100/444/FFF?text=${member.name}`
                            }
                            alt={member.name}
                            className="w-36 h-36 p-4 rounded-full object-cover mb-4 shadow-lg"
                          />
                          <h4 className="text-lg font-bold text-peptides-color-brown mb-1">
                            {member.name}
                          </h4>
                          <p className="text-sm font-semibold text-gray-700 mb-2">
                            {member.role}
                          </p>
                          <p className="text-xs text-gray-600 leading-snug line-clamp-3">
                            {member.bio}
                          </p>
                        </Link>
                      );
                    })}
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
  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
    {section.benefits.map((benefit, i) => (
      <li 
        key={i} 
        className="flex items-start gap-2 p-4 border border-gray-300 rounded-lg shadow-sm" // Added border, border-gray-300, padding, rounded corners, and shadow
      >
        <span className="text-peptides-color-brown">✔</span>
        <span className="text-black">{benefit}</span>
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
