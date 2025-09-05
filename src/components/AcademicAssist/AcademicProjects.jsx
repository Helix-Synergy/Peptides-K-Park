// import React, { useRef, useEffect, useState } from "react";
// import * as d3 from "d3";
// import { motion, useInView } from "framer-motion";
// import { BookOpen, Users, Award, Target, CheckCircle, ArrowRight } from "lucide-react";

// /* ---------- Data (Realistic 50 titles for UG & PG) ---------- */

// const leaf = (title) => ({ name: title });

// const UG_DATA = [
//   {
//     name: "Artificial Intelligence & Data",
//     children: [
//       leaf("Sentiment Analysis for Regional Languages"),
//       leaf("Crop Yield Prediction using ML"),
//       leaf("Facial Expression Recognition (CNN)"),
//       leaf("Fake News Detection with NLP"),
//       leaf("Student Performance Analytics Dashboard"),
//       leaf("E-Learning Recommendation Engine"),
//       leaf("Traffic Sign Recognition for Driver Assist"),
//       leaf("Energy Consumption Forecasting (Time Series)"),
//     ],
//   },
//   {
//     name: "Web & Mobile Engineering",
//     children: [
//       leaf("PWA Campus Navigator with Offline Maps"),
//       leaf("Event Management & Ticketing System"),
//       leaf("RTC Chat App (WebRTC + STUN/TURN)"),
//       leaf("Headless CMS E-commerce (Next.js)"),
//       leaf("Accessibility-first College Portal (WCAG 2.2)"),
//       leaf("Offline-first Notes App (IndexedDB)"),
//       leaf("Micro-frontend Demo for Modular UI"),
//     ],
//   },
//   {
//     name: "IoT & Embedded Systems",
//     children: [
//       leaf("Smart Irrigation with Soil Moisture Sensors"),
//       leaf("Home Energy Monitoring (ESP32 + MQTT)"),
//       leaf("Wearable Health Tracker (HR/SpO2)"),
//       leaf("City Air Quality Monitoring Network"),
//       leaf("Smart Parking System with Ultrasonic Sensors"),
//       leaf("RFID-based Attendance System"),
//       leaf("Cold-chain Temperature Logger"),
//       leaf("BLE Beacon Indoor Positioning"),
//     ],
//   },
//   {
//     name: "Cybersecurity",
//     children: [
//       leaf("Phishing Detection Browser Extension"),
//       leaf("Network Intrusion Detection (ML)"),
//       leaf("E2E Encrypted File Sharing (WebCrypto)"),
//       leaf("Password Strength Analyzer & Meter"),
//       leaf("Log Anomaly Detection (Isolation Forest)"),
//     ],
//   },
//   {
//     name: "Robotics & Electronics",
//     children: [
//       leaf("Line-following Robot with PID Control"),
//       leaf("Autonomous Obstacle Avoidance Bot"),
//       leaf("Drone Flight Controller Basics"),
//       leaf("Gesture-controlled Robotic Arm"),
//       leaf("Smart Wheelchair Prototype (Joystick + PWM)"),
//     ],
//   },
//   {
//     name: "Healthcare & Bio",
//     children: [
//       leaf("Disease Outbreak Monitoring Dashboard"),
//       leaf("ECG Signal Pre-processing & Classification"),
//       leaf("Plant Disease Detection via CNN"),
//       leaf("Protein Structure Visualization Tool"),
//       leaf("DNA Sequence Alignment Visualizer"),
//       leaf("Laboratory Inventory Management System"),
//     ],
//   },
//   {
//     name: "Environment & ESG",
//     children: [
//       leaf("Waste Segregation using Computer Vision"),
//       leaf("Smart Composting Monitor"),
//       leaf("Water Quality Index Prediction"),
//       leaf("Renewable Energy Analytics Dashboard"),
//       leaf("Carbon Footprint Calculator (Scope-3 Lite)"),
//     ],
//   },
//   {
//     name: "AR/VR & Media",
//     children: [
//       leaf("AR Classroom Models (Human Anatomy)"),
//       leaf("VR Campus Tour Experience"),
//       leaf("Automatic Video Summarization Tool"),
//     ],
//   },
//   {
//     name: "Blockchain & FinTech",
//     children: [
//       leaf("Blockchain-based Certificate Verification"),
//       leaf("Micro-payments with Lightning Network"),
//       leaf("Credit Scoring Sandbox (Explainable ML)"),
//     ],
//   },
// ];

// const PG_DATA = [
//   {
//     name: "Advanced AI / Machine Learning",
//     children: [
//       leaf("Few-shot Learning for Medical Images"),
//       leaf("Transformer-based Time-Series Forecasting"),
//       leaf("Federated Learning for Healthcare"),
//       leaf("Explainable AI for Credit Risk (SHAP)"),
//       leaf("Graph Neural Nets for Traffic Flow"),
//       leaf("Multimodal Emotion Recognition"),
//       leaf("LLM-based Document QA for Papers"),
//       leaf("Anomaly Detection with Autoencoders"),
//       leaf("Causal Inference for A/B Testing"),
//       leaf("RL for Resource Allocation in Cloud"),
//     ],
//   },
//   {
//     name: "Bioinformatics & Biotechnology",
//     children: [
//       leaf("Single-cell RNA-seq Clustering Pipeline"),
//       leaf("CRISPR Off-target Prediction Model"),
//       leaf("Drug Repurposing via Knowledge Graphs"),
//       leaf("Shotgun Metagenomics Classification"),
//       leaf("Protein-Protein Interaction Prediction"),
//       leaf("Epitope Mapping for Vaccine Design"),
//       leaf("Molecular Docking Workflow Automation"),
//       leaf("Differential Gene Expression Toolkit"),
//     ],
//   },
//   {
//     name: "IoT, Edge & 5G",
//     children: [
//       leaf("Edge AI for Real-time Video Analytics"),
//       leaf("TinyML on Wearables (Ultra-low Power)"),
//       leaf("5G Network Slicing Orchestrator (NFV)"),
//       leaf("Digital Twin for Smart Factory"),
//       leaf("MQTT→Kafka Bridge with Schema Registry"),
//       leaf("Secure OTA Firmware Updates"),
//     ],
//   },
//   {
//     name: "Cybersecurity & Privacy",
//     children: [
//       leaf("Adversarial Attacks & Defenses in DL"),
//       leaf("Privacy-preserving Analytics (HE)"),
//       leaf("Zero-Trust Network Prototype"),
//       leaf("SIEM Correlation via Stream Processing"),
//       leaf("Threat Intelligence Aggregation Platform"),
//       leaf("Secure Multi-party Computation Demo"),
//     ],
//   },
//   {
//     name: "Cloud & Data Engineering",
//     children: [
//       leaf("Lakehouse with Delta/Iceberg"),
//       leaf("Real-time ETL using Apache Flink"),
//       leaf("MLOps with Kubeflow Pipelines"),
//       leaf("Data Quality & Lineage (OpenMetadata)"),
//       leaf("Serverless Batch Orchestration"),
//       leaf("Vector DB Benchmarking for RAG"),
//       leaf("Cost-Optimized Data Lake Governance"),
//     ],
//   },
//   {
//     name: "Robotics & Autonomy",
//     children: [
//       leaf("SLAM for Indoor Navigation"),
//       leaf("Multi-robot Task Coordination"),
//       leaf("Deep Learning Visual Servoing"),
//       leaf("Autonomous Drone Path Planning"),
//       leaf("Dexterous Manipulation with RL"),
//     ],
//   },
//   {
//     name: "AR/VR/HCI",
//     children: [
//       leaf("Eye-tracking in VR for Adaptive UX"),
//       leaf("Hand-tracking Training Simulator"),
//       leaf("Spatial Audio Rendering Engine"),
//       leaf("Collaborative AR for Remote Labs"),
//     ],
//   },
//   {
//     name: "Blockchain / Web3",
//     children: [
//       leaf("Cross-chain Bridge Prototype"),
//       leaf("Decentralized Identity (DID) for Academia"),
//       leaf("Tokenized Research Data Marketplace"),
//       leaf("Verifiable Credentials for Transcripts"),
//     ],
//   },
// ];

// /* ---------- Page Component ---------- */

// const AcademicProjects = () => {
//   const sectionRef = useRef(null);
//   const svgRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
//   const [selectedLevel, setSelectedLevel] = useState("UG");

//   const features = [
//     {
//       icon: <BookOpen className="w-8 h-8 text-white" />,
//       title: "Project Planning & Design",
//       description: "Comprehensive planning with research methodology, timelines, and resource allocation.",
//     },
//     {
//       icon: <Users className="w-8 h-8 text-white" />,
//       title: "Expert Guidance",
//       description: "One-on-one mentorship from experienced researchers and industry professionals.",
//     },
//     {
//       icon: <Award className="w-8 h-8 text-white" />,
//       title: "Quality Assurance",
//       description: "Peer reviews and validation processes to meet academic standards.",
//     },
//     {
//       icon: <Target className="w-8 h-8 text-white" />,
//       title: "Implementation Support",
//       description: "Help with data collection, analysis, and execution using industry-standard tools.",
//     },
//   ];

//   const benefits = [
//     "Enhanced research skills and methodology",
//     "Industry-relevant project experience",
//     "Opportunities for publications & patents",
//     "Networking with industry professionals",
//   ];

//   const data = selectedLevel === "UG" ? { name: "UG Projects", children: UG_DATA } : { name: "PG Projects", children: PG_DATA };

//   useEffect(() => {
//     const margin = { top: 20, right: 90, bottom: 20, left: 90 };
//     const width = 1200 - margin.left - margin.right;
//     const height = 800 - margin.top - margin.bottom;

//     const svg = d3.select(svgRef.current)
//       .attr("width", "100%")
//       .attr("height", "auto")
//       .attr("viewBox", [0, 0, width + margin.right + margin.left, height + margin.top + margin.bottom])
//       .attr("style", "max-width: 100%; height: auto; font: 14px sans-serif;");

//     const g = svg.html("") // Clear previous render
//       .append("g")
//       .attr("transform", `translate(${margin.left},${margin.top})`);

//     let i = 0;
//     const duration = 750;

//     const root = d3.hierarchy(data, (d) => d.children);
//     root.x0 = height / 2;
//     root.y0 = 0;

//     // Collapse all nodes except the root
//     root.children.forEach(collapse);

//     function collapse(d) {
//       if (d.children) {
//         d._children = d.children;
//         d._children.forEach(collapse);
//         d.children = null;
//       }
//     }
    
//     // Custom link generator for curved lines
//     const linkGenerator = d3.linkHorizontal()
//       .x(d => d.y)
//       .y(d => d.x);

//     function update(source) {
//       const tree = d3.tree().nodeSize([30, 250]);
//       const rootNode = tree(root);
      
//       let x0 = Infinity;
//       let x1 = -Infinity;
//       rootNode.each(d => {
//         if (d.x > x1) x1 = d.x;
//         if (d.x < x0) x0 = d.x;
//       });

//       const svgHeight = x1 - x0 + margin.top + margin.bottom;

//       const svgTransition = svg.transition()
//           .duration(duration)
//           .attr("viewBox", [0, x0 - margin.top, width + margin.right + margin.left, svgHeight])
//           .tween("resize", () => () => svg.dispatch("resize", {bubbles: true}));

//       const nodes = rootNode.descendants().reverse();
//       const links = rootNode.links();
      
//       // Update the nodes
//       const node = g.selectAll("g.node").data(nodes, (d) => d.id || (d.id = ++i));

//       // Enter any new nodes at the parent's previous position
//       const nodeEnter = node.enter().append("g")
//         .attr("class", "node cursor-pointer")
//         .attr("transform", `translate(${source.y0},${source.x0})`)
//         .on("click", (event, d) => {
//           d.children = d.children ? null : d._children;
//           update(d);
//         });
      
//       // Rectangular box for each node
//       nodeEnter.append("rect")
//         .attr("rx", 5)
//         .attr("ry", 5)
//         .style("fill", "#2c2c2c")
//         .style("stroke", "#c2c2c2")
//         .style("stroke-width", "1.5px")
//         .style("opacity", 1e-6);
      
//       // The "dot" inside the rectangle
//       nodeEnter.append("circle")
//         .attr("r", 3)
//         .attr("cx", 10)
//         .attr("cy", 0)
//         .style("fill", "#c2c2c2")
//         .style("opacity", 1e-6);

//       // The text label for the node
//       const textEnter = nodeEnter.append("text")
//         .attr("dy", ".35em")
//         .attr("x", 20)
//         .attr("text-anchor", "start")
//         .text((d) => d.data.name)
//         .style("fill", "#c2c2c2")
//         .style("font-size", "14px")
//         .style("font-weight", "500")
//         .style("opacity", 1e-6);

//       // Transition nodes to their new position
//       const nodeUpdate = node.merge(nodeEnter).transition(svgTransition)
//         .attr("transform", (d) => `translate(${d.y},${d.x})`);

//       nodeUpdate.select("rect")
//         .attr("width", d => {
//           const textWidth = d.data.name.length * 8 + 30; // Estimate text width + padding
//           return textWidth;
//         })
//         .attr("height", 24)
//         .attr("x", -5)
//         .attr("y", -12)
//         .style("opacity", 1);
      
//       nodeUpdate.select("circle")
//         .style("opacity", 1);

//       nodeUpdate.select("text")
//         .style("opacity", 1);

//       // Transition exiting nodes to the parent's new position
//       const nodeExit = node.exit().transition(svgTransition)
//         .attr("transform", `translate(${source.y},${source.x})`)
//         .remove();

//       nodeExit.select("rect").style("opacity", 1e-6);
//       nodeExit.select("circle").style("opacity", 1e-6);
//       nodeExit.select("text").style("opacity", 1e-6);

//       // Update the links
//       const link = g.selectAll("path.link").data(links, (d) => d.target.id);

//       // Enter any new links at the parent's previous position
//       const linkEnter = link.enter().insert("path", "g")
//         .attr("class", "link")
//         .attr("fill", "none")
//         .attr("stroke", "#c2c2c2")
//         .attr("stroke-opacity", 0.5)
//         .attr("stroke-width", 1.5)
//         .attr("d", d => {
//             const o = {x: source.x0, y: source.y0};
//             return linkGenerator({source: o, target: o});
//         });

//       // Transition links to their new position
//       link.merge(linkEnter).transition(svgTransition)
//         .attr("d", d => linkGenerator(d));

//       // Transition exiting links to the parent's new position
//       link.exit().transition(svgTransition)
//         .attr("d", d => {
//             const o = {x: source.x, y: source.y};
//             return linkGenerator({source: o, target: o});
//         })
//         .remove();
      
//       // Stash the old positions for transition
//       rootNode.eachBefore((d) => {
//         d.x0 = d.x;
//         d.y0 = d.y;
//       });
//     }

//     update(root);
//   }, [selectedLevel]); // Re-run effect when UG/PG is toggled

//   return (
//     <div className="min-h-screen bg-[#1c1c1c] text-white">
//       {/* Hero */}
//       <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-[#1c1c1c]">
//         <motion.div
//           ref={sectionRef}
//           initial={{ y: -50, opacity: 0 }}
//           animate={isInView ? "visible" : "hidden"}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 text-center text-white"
//         >
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
//             Academic Projects
//           </h1>
//           <p className="text-lg md:text-xl max-w-3xl mx-auto px-4">
//             Realistic project ideas presented as a category tree with collapsible nodes
//           </p>
//           <p className="text-base mt-2 max-w-3xl mx-auto px-4">
//             Click on a category to expand or collapse its projects
//           </p>
//         </motion.div>
//       </section>

//       {/* Features */}
//       <section className="w-full py-12 px-4 lg:px-12">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
//           {features.map((f, i) => (
//             <div
//               key={i}
//               className="bg-[#2c2c2c] border border-[#c2c2c2] rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300"
//             >
//               <div className="w-16 h-16 bg-[#1c1c1c] border border-[#c2c2c2] rounded-full flex items-center justify-center mx-auto mb-4">
//                 {f.icon}
//               </div>
//               <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
//               <p className="text-gray-400">{f.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* UG/PG Toggle */}
//         <div className="flex justify-center gap-4 mb-8">
//           <button
//             onClick={() => setSelectedLevel("UG")}
//             className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105 ${
//               selectedLevel === "UG"
//                 ? "bg-[#c2c2c2] text-[#1c1c1c]"
//                 : "bg-[#1c1c1c] text-white border border-[#c2c2c2]"
//             }`}
//           >
//             UG Projects
//           </button>
//           <button
//             onClick={() => setSelectedLevel("PG")}
//             className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105 ${
//               selectedLevel === "PG"
//                 ? "bg-[#c2c2c2] text-[#1c1c1c]"
//                 : "bg-[#1c1c1c] text-white border border-[#c2c2c2]"
//             }`}
//           >
//             PG Projects
//           </button>
//         </div>

//         {/* D3 Tree Visualization */}
//         <div className="max-w-7xl mx-auto overflow-x-auto rounded-xl border border-[#c2c2c2] bg-[#2c2c2c] p-6 shadow-sm">
//           <div className="flex flex-col items-center">
//             <svg ref={svgRef}></svg>
//           </div>
//         </div>
//       </section>

//       {/* Benefits */}
//       <section className="w-full py-12 px-4 lg:px-12 bg-[#1c1c1c]">
//         <div className="max-w-7xl mx-auto">
//           <h3 className="text-2xl font-bold text-white text-center mb-8">
//             Why Choose Our Academic Projects Service?
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {benefits.map((b, i) => (
//               <div
//                 key={i}
//                 className="flex items-start gap-3 rounded-xl bg-[#2c2c2c] border border-[#c2c2c2] p-5 shadow-sm"
//               >
//                 <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
//                 <span className="text-gray-400">{b}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="w-full py-16 px-4 lg:px-12 bg-[#333333] text-white text-center">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl lg:text-4xl font-bold mb-6">
//             Ready to Start Your Academic Project?
//           </h2>
//           <p className="text-lg mb-8 opacity-90">
//             Let’s discuss your requirements and craft a roadmap to success.
//           </p>
//           <button className="bg-[#c2c2c2] text-[#1c1c1c] font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-200 inline-flex items-center border border-[#c2c2c2]">
//             Get Started <ArrowRight className="ml-2 w-5 h-5" />
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AcademicProjects;




import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import { motion, useInView } from "framer-motion";
import { BookOpen, Users, Award, Target, CheckCircle, ArrowRight, ChevronDown } from "lucide-react";

/* ---------- Data (Realistic 50 titles for UG & PG) ---------- */

const leaf = (title) => ({ name: title });

const UG_DATA = [
  {
    name: "Artificial Intelligence & Data",
    children: [
      leaf("Sentiment Analysis for Regional Languages"),
      leaf("Crop Yield Prediction using ML"),
      leaf("Facial Expression Recognition (CNN)"),
      leaf("Fake News Detection with NLP"),
      leaf("Student Performance Analytics Dashboard"),
      leaf("E-Learning Recommendation Engine"),
      leaf("Traffic Sign Recognition for Driver Assist"),
      leaf("Energy Consumption Forecasting (Time Series)"),
    ],
  },
  {
    name: "Web & Mobile Engineering",
    children: [
      leaf("PWA Campus Navigator with Offline Maps"),
      leaf("Event Management & Ticketing System"),
      leaf("RTC Chat App (WebRTC + STUN/TURN)"),
      leaf("Headless CMS E-commerce (Next.js)"),
      leaf("Accessibility-first College Portal (WCAG 2.2)"),
      leaf("Offline-first Notes App (IndexedDB)"),
      leaf("Micro-frontend Demo for Modular UI"),
    ],
  },
  {
    name: "IoT & Embedded Systems",
    children: [
      leaf("Smart Irrigation with Soil Moisture Sensors"),
      leaf("Home Energy Monitoring (ESP32 + MQTT)"),
      leaf("Wearable Health Tracker (HR/SpO2)"),
      leaf("City Air Quality Monitoring Network"),
      leaf("Smart Parking System with Ultrasonic Sensors"),
      leaf("RFID-based Attendance System"),
      leaf("Cold-chain Temperature Logger"),
      leaf("BLE Beacon Indoor Positioning"),
    ],
  },
  {
    name: "Cybersecurity",
    children: [
      leaf("Phishing Detection Browser Extension"),
      leaf("Network Intrusion Detection (ML)"),
      leaf("E2E Encrypted File Sharing (WebCrypto)"),
      leaf("Password Strength Analyzer & Meter"),
      leaf("Log Anomaly Detection (Isolation Forest)"),
    ],
  },
  {
    name: "Robotics & Electronics",
    children: [
      leaf("Line-following Robot with PID Control"),
      leaf("Autonomous Obstacle Avoidance Bot"),
      leaf("Drone Flight Controller Basics"),
      leaf("Gesture-controlled Robotic Arm"),
      leaf("Smart Wheelchair Prototype (Joystick + PWM)"),
    ],
  },
  {
    name: "Healthcare & Bio",
    children: [
      leaf("Disease Outbreak Monitoring Dashboard"),
      leaf("ECG Signal Pre-processing & Classification"),
      leaf("Plant Disease Detection via CNN"),
      leaf("Protein Structure Visualization Tool"),
      leaf("DNA Sequence Alignment Visualizer"),
      leaf("Laboratory Inventory Management System"),
    ],
  },
  {
    name: "Environment & ESG",
    children: [
      leaf("Waste Segregation using Computer Vision"),
      leaf("Smart Composting Monitor"),
      leaf("Water Quality Index Prediction"),
      leaf("Renewable Energy Analytics Dashboard"),
      leaf("Carbon Footprint Calculator (Scope-3 Lite)"),
    ],
  },
  {
    name: "AR/VR & Media",
    children: [
      leaf("AR Classroom Models (Human Anatomy)"),
      leaf("VR Campus Tour Experience"),
      leaf("Automatic Video Summarization Tool"),
    ],
  },
  {
    name: "Blockchain & FinTech",
    children: [
      leaf("Blockchain-based Certificate Verification"),
      leaf("Micro-payments with Lightning Network"),
      leaf("Credit Scoring Sandbox (Explainable ML)"),
    ],
  },
];

const PG_DATA = [
  {
    name: "Advanced AI / Machine Learning",
    children: [
      leaf("Few-shot Learning for Medical Images"),
      leaf("Transformer-based Time-Series Forecasting"),
      leaf("Federated Learning for Healthcare"),
      leaf("Explainable AI for Credit Risk (SHAP)"),
      leaf("Graph Neural Nets for Traffic Flow"),
      leaf("Multimodal Emotion Recognition"),
      leaf("LLM-based Document QA for Papers"),
      leaf("Anomaly Detection with Autoencoders"),
      leaf("Causal Inference for A/B Testing"),
      leaf("RL for Resource Allocation in Cloud"),
    ],
  },
  {
    name: "Bioinformatics & Biotechnology",
    children: [
      leaf("Single-cell RNA-seq Clustering Pipeline"),
      leaf("CRISPR Off-target Prediction Model"),
      leaf("Drug Repurposing via Knowledge Graphs"),
      leaf("Shotgun Metagenomics Classification"),
      leaf("Protein-Protein Interaction Prediction"),
      leaf("Epitope Mapping for Vaccine Design"),
      leaf("Molecular Docking Workflow Automation"),
      leaf("Differential Gene Expression Toolkit"),
    ],
  },
  {
    name: "IoT, Edge & 5G",
    children: [
      leaf("Edge AI for Real-time Video Analytics"),
      leaf("TinyML on Wearables (Ultra-low Power)"),
      leaf("5G Network Slicing Orchestrator (NFV)"),
      leaf("Digital Twin for Smart Factory"),
      leaf("MQTT→Kafka Bridge with Schema Registry"),
      leaf("Secure OTA Firmware Updates"),
    ],
  },
  {
    name: "Cybersecurity & Privacy",
    children: [
      leaf("Adversarial Attacks & Defenses in DL"),
      leaf("Privacy-preserving Analytics (HE)"),
      leaf("Zero-Trust Network Prototype"),
      leaf("SIEM Correlation via Stream Processing"),
      leaf("Threat Intelligence Aggregation Platform"),
      leaf("Secure Multi-party Computation Demo"),
    ],
  },
  {
    name: "Cloud & Data Engineering",
    children: [
      leaf("Lakehouse with Delta/Iceberg"),
      leaf("Real-time ETL using Apache Flink"),
      leaf("MLOps with Kubeflow Pipelines"),
      leaf("Data Quality & Lineage (OpenMetadata)"),
      leaf("Serverless Batch Orchestration"),
      leaf("Vector DB Benchmarking for RAG"),
      leaf("Cost-Optimized Data Lake Governance"),
    ],
  },
  {
    name: "Robotics & Autonomy",
    children: [
      leaf("SLAM for Indoor Navigation"),
      leaf("Multi-robot Task Coordination"),
      leaf("Deep Learning Visual Servoing"),
      leaf("Autonomous Drone Path Planning"),
      leaf("Dexterous Manipulation with RL"),
    ],
  },
  {
    name: "AR/VR/HCI",
    children: [
      leaf("Eye-tracking in VR for Adaptive UX"),
      leaf("Hand-tracking Training Simulator"),
      leaf("Spatial Audio Rendering Engine"),
      leaf("Collaborative AR for Remote Labs"),
    ],
  },
  {
    name: "Blockchain / Web3",
    children: [
      leaf("Cross-chain Bridge Prototype"),
      leaf("Decentralized Identity (DID) for Academia"),
      leaf("Tokenized Research Data Marketplace"),
      leaf("Verifiable Credentials for Transcripts"),
    ],
  },
];

/* ---------- CSS Theme Classes ---------- */

const cssTheme = `
/* Dark Forest Theme */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Inter', system-ui, sans-serif;
  }
  .text-primary-text {
    /* For light theme, a dark text color is needed */
    color: #0f2920;
  }
}

@layer components {
  /* Primary Button */
  .btn-primary {
    @apply bg-gradient-to-br from-[#0f2920] to-[#3a4a3f] hover:from-[#1f3b30] hover:to-[#4a5c4f] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#3a4a3f] focus:ring-offset-2;
  }

  /* Secondary Button */
  .btn-secondary {
    @apply bg-[#1f3b30] hover:bg-[#3a4a3f] text-white font-semibold py-3 px-6 rounded-lg border-2 border-[#0f2920] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#3a4a3f] focus:ring-offset-2;
  }

  /* Outlined Button */
  .btn-outline {
    @apply bg-transparent hover:bg-gradient-to-br from-[#0f2920] to-[#3a4a3f] hover:text-white font-semibold py-3 px-6 rounded-lg border-[1px] border-[#0f2920] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#3a4a3f] focus:ring-offset-2;
  }

  /* Card Component */
  .card {
    /* Updated for light theme */
    @apply rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-[#d7f2da] text-black;
  }

  /* Section Padding */
  .section-padding {
    @apply py-16 md:py-24;
  }

  /* Container */
  .container-custom {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }

  /* Gradient Text */
  .gradient-text {
    @apply bg-gradient-to-br from-[#0f2920] to-[#3a4a3f] bg-clip-text text-transparent;
  }

  /* Gradient Background */
  .gradient-bg {
    @apply bg-gradient-to-br from-[#0f2920] to-[#3a4a3f];
  }
}
`;

/* ---------- D3 Tree Visualization Component (for Tablets & Desktops) ---------- */

const TreeVisualization = ({ data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const margin = { top: 20, right: 90, bottom: 40, left: 90 };
    const width = 1200 - margin.left - margin.right;
    const height = 1000 - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current)
      .attr("width", "100%")
      .attr("height", "auto")
      .attr("viewBox", [0, 0, width + margin.right + margin.left, height + margin.top + margin.bottom])
      .attr("style", "max-width: 100%; height: auto; font: 14px sans-serif;");

    const g = svg.html("")
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    let i = 0;
    const duration = 750;

    const root = d3.hierarchy(data, (d) => d.children);
    root.x0 = height / 2;
    root.y0 = 0;

    root.children.forEach(collapse);

    function collapse(d) {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
      }
    }
    
    const linkGenerator = d3.linkHorizontal()
      .x(d => d.y)
      .y(d => d.x);

    function update(source) {
      const tree = d3.tree().nodeSize([30, 250]);
      const rootNode = tree(root);
      
      let x0 = Infinity;
      let x1 = -Infinity;
      rootNode.each(d => {
        if (d.x > x1) x1 = d.x;
        if (d.x < x0) x0 = d.x;
      });

      const svgHeight = x1 - x0 + margin.top + margin.bottom;

      const svgTransition = svg.transition()
          .duration(duration)
          .attr("viewBox", [0, x0 - margin.top, width + margin.right + margin.left, svgHeight])
          .tween("resize", () => () => svg.dispatch("resize", {bubbles: true}));

      const nodes = rootNode.descendants().reverse();
      const links = rootNode.links();
      
      const node = g.selectAll("g.node").data(nodes, (d) => d.id || (d.id = ++i));

      const nodeEnter = node.enter().append("g")
        .attr("class", "node cursor-pointer")
        .attr("transform", `translate(${source.y0},${source.x0})`)
        .on("click", (event, d) => {
          d.children = d.children ? null : d._children;
          update(d);
        });
      
      nodeEnter.append("rect")
        .attr("rx", 5)
        .attr("ry", 5)
        .style("fill", "#d7f2da")
        .style("stroke", "#0f2920")
        .style("stroke-width", "1.5px")
        .style("opacity", 1e-6);
      
      nodeEnter.append("circle")
        .attr("r", 3)
        .attr("cx", 10)
        .attr("cy", 0)
        .style("fill", "#0f2920")
        .style("opacity", 1e-6);

      const textEnter = nodeEnter.append("text")
        .attr("dy", ".35em")
        .attr("x", 20)
        .attr("text-anchor", "start")
        .text((d) => d.data.name)
        .style("fill", "#0f2920")
        .style("font-size", "14px")
        .style("font-weight", "500")
        .style("opacity", 1e-6);

      const nodeUpdate = node.merge(nodeEnter).transition(svgTransition)
        .attr("transform", (d) => `translate(${d.y},${d.x})`);

      nodeUpdate.select("rect")
        .attr("width", d => {
          const textWidth = d.data.name.length * 8 + 30;
          return textWidth;
        })
        .attr("height", 24)
        .attr("x", -5)
        .attr("y", -12)
        .style("opacity", 1);
      
      nodeUpdate.select("circle")
        .style("opacity", 1);

      nodeUpdate.select("text")
        .style("opacity", 1);

      const nodeExit = node.exit().transition(svgTransition)
        .attr("transform", `translate(${source.y},${source.x})`)
        .remove();

      nodeExit.select("rect").style("opacity", 1e-6);
      nodeExit.select("circle").style("opacity", 1e-6);
      nodeExit.select("text").style("opacity", 1e-6);

      const link = g.selectAll("path.link").data(links, (d) => d.target.id);

      const linkEnter = link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("fill", "none")
        .attr("stroke", "#0f2920")
        .attr("stroke-opacity", 0.5)
        .attr("stroke-width", 1.5)
        .attr("d", d => {
            const o = {x: source.x0, y: source.y0};
            return linkGenerator({source: o, target: o});
        });

      link.merge(linkEnter).transition(svgTransition)
        .attr("d", d => linkGenerator(d));

      link.exit().transition(svgTransition)
        .attr("d", d => {
            const o = {x: source.x, y: source.y};
            return linkGenerator({source: o, target: o});
        })
        .remove();
      
      rootNode.eachBefore((d) => {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    }

    update(root);
  }, [data]);

  return (
    <div className="max-w-7xl mx-auto overflow-x-auto rounded-xl border border-[#0f2920] bg-white p-6 shadow-sm">
      <div className="flex flex-col items-center">
        <svg ref={svgRef}></svg>
      </div>
    </div>
  );
};

/* ---------- Mobile Dropdown UI Component (for Mobile Devices) ---------- */

const MobileProjects = ({ data }) => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (categoryName) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-12">
      {data.map((category) => (
        <div key={category.name} className="mb-4 rounded-lg overflow-hidden border border-[#0f2920] bg-white">
          <button
            onClick={() => toggleCategory(category.name)}
            className="w-full flex justify-between items-center py-4 px-6 text-left font-bold text-black transition-colors duration-200 hover:bg-[#d7f2da]"
          >
            <span className="flex items-center gap-2">
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openCategory === category.name ? 'rotate-180' : ''}`} />
              {category.name}
            </span>
          </button>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              openCategory === category.name ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <ul className="px-6 py-4 space-y-2">
              {category.children.map((project, index) => (
                <li key={index} className="text-gray-600 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0"></span>
                  {project.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

/* ---------- Main Page Component ---------- */

const AcademicProjects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [selectedLevel, setSelectedLevel] = useState("UG");
  const [isMobile, setIsMobile] = useState(false);

  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-[#0f2920]" />,
      title: "Project Planning & Design",
      description: "Comprehensive planning with research methodology, timelines, and resource allocation.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#0f2920]" />,
      title: "Expert Guidance",
      description: "One-on-one mentorship from experienced researchers and industry professionals.",
    },
    {
      icon: <Award className="w-8 h-8 text-[#0f2920]" />,
      title: "Quality Assurance",
      description: "Peer reviews and validation processes to meet academic standards.",
    },
    {
      icon: <Target className="w-8 h-8 text-[#0f2920]" />,
      title: "Implementation Support",
      description: "Help with data collection, analysis, and execution using industry-standard tools.",
    },
  ];

  const benefits = [
    "Enhanced research skills and methodology",
    "Industry-relevant project experience",
    "Opportunities for publications & patents",
    "Networking with industry professionals",
  ];

  const data = selectedLevel === "UG" ? UG_DATA : PG_DATA;

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <style>{cssTheme}</style>
      
      {/* Hero */}
<section 
        className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-white text-black"
        style={{
          backgroundImage: `url('https://media.licdn.com/dms/image/v2/D4E12AQHs_iqPwgEZ-w/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1681787211071?e=2147483647&v=beta&t=Y-n-JbHoCVb-KB7xoksJAfgN1O3wGgiSJWu9Sm6B16A')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white/0 z-0"></div> 
      </section>

      {/* Features */}
      <section className="w-full py-12 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="card p-6 text-center"
            >
              <div className="w-16 h-16 bg-white border border-[#0f2920] rounded-full flex items-center justify-center mx-auto mb-4">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-secondary-text">{f.description}</p>
            </div>
          ))}
        </div>

        {/* UG/PG Toggle */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setSelectedLevel("UG")}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105 ${
              selectedLevel === "UG"
                ? "btn-primary"
                : "btn-outline"
            }`}
          >
            UG Projects
          </button>
          <button
            onClick={() => setSelectedLevel("PG")}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105 ${
              selectedLevel === "PG"
                ? "btn-primary"
                : "btn-outline"
            }`}
          >
            PG Projects
          </button>
        </div>

        {/* Conditional Rendering of the Tree or Dropdown UI */}
        {isMobile ? (
          <MobileProjects data={data} />
        ) : (
          <TreeVisualization data={selectedLevel === "UG" ? { name: "UG Projects", children: UG_DATA } : { name: "PG Projects", children: PG_DATA }} />
        )}
      </section>

      {/* Benefits */}
      <section className="w-full py-12 px-4 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Why Choose Our Academic Projects Service?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl card p-5 shadow-sm"
              >
                <CheckCircle className="h-5 w-5 text-[#ffnf3f] flex-shrink-0" />
                <span className="text-secondary-text">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 px-4 lg:px-12 bg-[#d7f2da] text-black text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 gradient-text">
            Ready to Start Your Academic Project?
          </h2>
          <p className="text-lg mb-8 text-primary-text">
            Let’s discuss your requirements and craft a roadmap to success.
          </p>
          <button className="btn-primary inline-flex items-center">
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AcademicProjects;