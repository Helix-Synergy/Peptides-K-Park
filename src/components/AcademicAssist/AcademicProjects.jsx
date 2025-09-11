import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Users, Award, Target, CheckCircle, ArrowRight, ChevronDown, Briefcase, ChevronRight, GraduationCap } from "lucide-react";

/* ---------- Data (UG & PG Subjects) ---------- */
const leaf = (title) => ({ name: title });

// Manually created data with 50 projects for each subject

const UG_DATA = [
    {
        name: "Accounting",
        children: [
            leaf("Financial Statement Analysis for Profitability Assessment"),
            leaf("Cost-Volume-Profit Analysis for Decision Making"),
            leaf("Auditing of Internal Controls and Fraud Detection"),
            leaf("Blockchain Technology in Accounting and Auditing"),
            leaf("Forensic Accounting Case Study: Detecting Financial Misconduct"),
            leaf("Tax Planning and Management for Small Businesses"),
            leaf("Implementation of a Cloud-Based Accounting System"),
            leaf("Budgeting and Forecasting for a Startup"),
            leaf("Analysis of IFRS vs. GAAP Reporting Standards"),
            leaf("Working Capital Management Strategies"),
            leaf("Automated Bookkeeping System using RPA"),
            leaf("E-commerce Accounting Integration with ERP"),
            leaf("Data Analytics for Expense Report Audits"),
            leaf("Machine Learning Model for Predictive Accounting"),
            leaf("Development of a Tax Calculator Web Application"),
            leaf("Hospitality Sector Accounting Practices"),
            leaf("Real Estate Investment Trust (REIT) Financial Analysis"),
            leaf("Non-Profit Organization Fund Accounting"),
            leaf("Agricultural Sector Cost Accounting"),
            leaf("Manufacturing Overhead Allocation and Control"),
            leaf("Ethical Considerations in Financial Reporting"),
            leaf("The Impact of Big Data on Modern Auditing"),
            leaf("Global Financial Reporting Standards Harmonization"),
            leaf("Corporate Governance and Its Link to Financial Performance"),
            leaf("Sustainability Reporting and its Impact on Investors"),
            leaf("Project on Asset Valuation Techniques"),
            leaf("Project on Inventory Management Systems"),
            leaf("Project on Mergers and Acquisitions Accounting"),
            leaf("Project on International Finance Reporting"),
            leaf("Project on Capital Budgeting Analysis"),
            leaf("Project on Payroll Management Automation"),
            leaf("Project on Risk Management in Financial Institutions"),
            leaf("Project on Financial Ratios and Benchmarking"),
            leaf("Project on Enterprise Resource Planning (ERP) Systems"),
            leaf("Project on Supply Chain Cost Optimization"),
            leaf("Project on Investment Portfolio Analysis"),
            leaf("Project on Treasury Management Functions"),
            leaf("Project on Digital Currencies and Taxation"),
            leaf("Project on Corporate Social Responsibility Accounting"),
            leaf("Project on Performance Measurement in Organizations"),
            leaf("Project on Cost Reduction Strategies"),
            leaf("Project on Revenue Recognition Standards (ASC 606)"),
            leaf("Project on Capital Market Efficiency Studies"),
            leaf("Project on Hedge Fund Financial Reporting"),
            leaf("Project on Venture Capital Accounting Practices"),
            leaf("Project on Credit Risk Assessment Models"),
            leaf("Project on Derivatives Accounting and Valuation"),
            leaf("Project on Cash Flow Statement Analysis"),
            leaf("Project on Public Sector Budgeting"),
            leaf("Project on Financial Planning for Retirement"),
            leaf("Project on Cloud Computing Financial Models"),
        ],
    },
    {
        name: "Applied Nutrition",
        children: [
            leaf("Personalized Diet Plan Generator for Athletes"),
            leaf("Analysis of Public Health Nutrition Programs in India"),
            leaf("Childhood Malnutrition Monitoring and Intervention System"),
            leaf("Food Nutrient Database & API Development for App Integration"),
            leaf("Dietary Interventions for Type 2 Diabetes Management"),
            leaf("Role of Probiotics in Gut Health and Immunity"),
            leaf("Analysis of Food Labeling and Consumer Awareness"),
            leaf("Nutritional Requirements for Geriatric Populations"),
            leaf("Impact of Veganism on Micronutrient Status"),
            leaf("Developing a School Lunch Program for Nutritional Improvement"),
            leaf("Nutritional Management of Chronic Kidney Disease"),
            leaf("Eating Disorder Treatment and Nutritional Counseling"),
            leaf("Assessing the Nutritional Needs of Pregnant Women"),
            leaf("Impact of Fast Food Consumption on Adolescent Health"),
            leaf("Designing a Diet Plan for Weight Loss and Management"),
            leaf("Mobile App for Calorie and Macronutrient Tracking"),
            leaf("AI-Based Food Recognition and Calorie Estimation"),
            leaf("Sensor-Based System for Monitoring Hydration Levels"),
            leaf("Data Analytics on Food Consumption Patterns in Urban Areas"),
            leaf("VR Simulation for Nutritional Education"),
            leaf("Project on Sport-Specific Nutrition for Endurance Athletes"),
            leaf("Project on Food Safety and Hygiene Protocols"),
            leaf("Project on the Effect of Organic Foods on Health"),
            leaf("Project on Nutritional Deficiencies in Low-Income Groups"),
            leaf("Project on the Role of Superfoods in a Balanced Diet"),
            leaf("Project on Sustainable Diets and Environmental Impact"),
            leaf("Project on Nutritional Counseling Techniques"),
            leaf("Project on Food Allergies and Intolerances Management"),
            leaf("Project on Food Preservation Techniques and Their Effects"),
            leaf("Project on Designing a Menu for a Hospital Cafeteria"),
            leaf("Project on the Impact of Processed Foods on Public Health"),
            leaf("Project on Nutritional Guidelines for Different Lifestyles"),
            leaf("Project on Herbal Supplements and Their Effects"),
            leaf("Project on the Role of Vitamin D in Bone Health"),
            leaf("Project on Carbohydrate and Protein Cycling in Diets"),
            leaf("Project on the Effect of Sugar on Brain Function"),
            leaf("Project on Mindful Eating and its Psychological Benefits"),
            leaf("Project on the Impact of Fermented Foods on Gut Flora"),
            leaf("Project on Nutritional Needs for a Ketogenic Diet"),
            leaf("Project on Dietary Fiber and Digestive Health"),
            leaf("Project on the Glycemic Index and Blood Sugar Control"),
            leaf("Project on Community-Based Nutritional Programs"),
            leaf("Project on the Use of Fortified Foods"),
            leaf("Project on Food Additives and their Health Risks"),
            leaf("Project on a Low-Salt Diet and Blood Pressure"),
            leaf("Project on the Role of Iron in Anemia Prevention"),
            leaf("Project on Omega-3 Fatty Acids and Heart Health"),
            leaf("Project on Diet for Skin Health"),
            leaf("Project on Nutritional Needs for Vegetarians"),
            leaf("Project on Hydration and Cognitive Performance"),
        ],
    },
    {
        name: "B. Com (Computers)",
        children: [
            leaf("E-commerce Business Plan & Website Development"),
            leaf("Digital Marketing Strategy for a Local Business"),
            leaf("Blockchain-based Supply Chain Management System"),
            leaf("Data Analytics Dashboard for Retail Sales Forecasting"),
            leaf("Cloud Computing for Small Business Operations"),
            leaf("Cybersecurity Plan for an E-commerce Platform"),
            leaf("Mobile App for Customer Relationship Management (CRM)"),
            leaf("Implementation of an ERP System for Inventory"),
            leaf("Website Development with Integrated Payment Gateway"),
            leaf("Search Engine Optimization (SEO) Strategy and Analysis"),
            leaf("Impact of AI on Business Operations and Efficiency"),
            leaf("Role of Social Media in Brand Building"),
            leaf("Feasibility Study for a SaaS-based Business"),
            leaf("Data Privacy and GDPR Compliance for Online Businesses"),
            leaf("E-commerce Pricing Strategy Tool using Data Analysis"),
            leaf("Automated Financial Reporting using Python"),
            leaf("Web Scraping for Market Research Data Collection"),
            leaf("Creating a Dynamic Business Intelligence Dashboard"),
            leaf("Developing a Simple HR Management System"),
            leaf("Network Design and Security for a Corporate Office"),
            leaf("Project on Customer Segmentation using K-Means Clustering"),
            leaf("Project on Mobile Commerce Trends and Future Scope"),
            leaf("Project on Content Management System (CMS) for Business"),
            leaf("Project on B2B E-commerce Platform Development"),
            leaf("Project on UI/UX Design for Business Applications"),
            leaf("Project on Data Backup and Disaster Recovery Plan"),
            leaf("Project on Business Intelligence Tools (e.g., Tableau)"),
            leaf("Project on Financial Technology (FinTech) Innovations"),
            leaf("Project on Cloud Security and Access Control"),
            leaf("Project on Lean Management and Automation"),
            leaf("Project on Digital Advertising Campaign Performance Analysis"),
            leaf("Project on Customer Service Chatbot Development"),
            leaf("Project on Supply Chain Logistics Optimization"),
            leaf("Project on Big Data Analytics in Retail"),
            leaf("Project on Ethical Hacking for Business Systems"),
            leaf("Project on Business Process Automation (BPA)"),
            leaf("Project on Online Payment Gateway Security Analysis"),
            leaf("Project on E-commerce Inventory Management"),
            leaf("Project on Web Analytics for Website Performance"),
            leaf("Project on Agile Project Management in IT"),
            leaf("Project on Implementing a CRM system (e.g., Salesforce)"),
            leaf("Project on Social Media Analytics for Marketing"),
            leaf("Project on a Business Management Simulation Game"),
            leaf("Project on Enterprise Data Warehousing"),
            leaf("Project on a Digital Supply Chain Solution"),
            leaf("Project on Customer Lifetime Value (CLV) Prediction"),
            leaf("Project on Automated Sales Reporting Dashboard"),
            leaf("Project on IoT for Retail Inventory Management"),
            leaf("Project on Cybersecurity Policies and Procedures"),
            leaf("Project on Online Brand Reputation Management"),
        ],
    },
    {
        name: "B. Com (General)",
        children: [
            leaf("Market Research and Feasibility Study for a New Product Launch"),
            leaf("Analysis of GST Impact on Small and Medium Enterprises (SMEs)"),
            leaf("Development of a Small Business Financial Model"),
            leaf("HR Management System Prototype for Employee Records"),
            leaf("E-commerce Pricing Strategy Tool based on Competitor Analysis"),
            leaf("Risk Management Strategies for a Service-Based Business"),
            leaf("Corporate Social Responsibility (CSR) Report for a Local Company"),
            leaf("Consumer Behavior Study on Online Shopping Habits"),
            leaf("Working Capital Management of a Manufacturing Company"),
            leaf("Financial Ratio Analysis for a Publicly Traded Company"),
            leaf("Analysis of Indian Stock Market Trends"),
            leaf("Business Plan for a Home-Based Catering Service"),
            leaf("Impact of Digital Marketing on Brand Awareness"),
            leaf("Study on Entrepreneurial Ecosystem in a Specific City"),
            leaf("Supply Chain Management Best Practices Case Study"),
            leaf("Analysis of Banking Sector Performance in India"),
            leaf("Capital Budgeting Analysis for a Hypothetical Project"),
            leaf("A Study on the Evolution of E-commerce in India"),
            leaf("Human Resource Management Challenges in the IT Sector"),
            leaf("Study on the Impact of demonetization on informal sector"),
            leaf("Analysis of Foreign Direct Investment (FDI) in India"),
            leaf("Feasibility Study of a Co-working Space"),
            leaf("A Comparative Study of Direct vs. Indirect Taxes in India"),
            leaf("Role of Microfinance in Rural Development"),
            leaf("Inventory Control Techniques in Retail Business"),
            leaf("A Study of Customer Satisfaction in the Banking Sector"),
            leaf("The Role of Advertising in Consumer Decision Making"),
            leaf("Impact of Mergers and Acquisitions on Company Performance"),
            leaf("Analysis of Public Sector Undertakings (PSUs) in India"),
            leaf("A Study on Corporate Governance Practices in India"),
            leaf("The Role of Auditing in Preventing Financial Fraud"),
            leaf("Analysis of a Company's Financial Health and Performance"),
            leaf("Project on Tax Implications of Digital Assets"),
            leaf("Project on Business Ethics and Corporate Scandals"),
            leaf("Project on Social Media Marketing Strategy for a Brand"),
            leaf("Project on The Role of IT in Modern Business"),
            leaf("Project on Financial Planning for Individuals"),
            leaf("Project on The Indian Banking System and Reforms"),
            leaf("Project on Export-Import Procedures and Documentation"),
            leaf("Project on Supply Chain Logistics and Optimization"),
            leaf("Project on Retail Management Strategies"),
            leaf("Project on The Role of Human Resources in Team Building"),
            leaf("Project on Small Business Financing Options"),
            leaf("Project on Marketing Mix Analysis of a Product"),
            leaf("Project on Risk Management in a Financial Firm"),
            leaf("Project on Brand Equity and Customer Loyalty"),
            leaf("Project on Customer Relationship Management (CRM)"),
            leaf("Project on The Impact of Globalization on Business"),
            leaf("Project on Market Feasibility of a New Product"),
            leaf("Project on Analyzing Stock Market Volatility"),
        ],
    },
    {
        name: "BBA (Bachelor of Business Administration)",
        children: [
            leaf("Customer Relationship Management (CRM) System Implementation Plan"),
            leaf("Business Process Automation (BPA) Strategy for a Service Company"),
            leaf("Corporate Social Responsibility (CSR) Report on Environmental Initiatives"),
            leaf("Market Entry Strategy for a New Product in a Foreign Market"),
            leaf("Brand Management and Repositioning Strategy"),
            leaf("Human Resource Analytics for Employee Retention"),
            leaf("Supply Chain Optimization using Lean Six Sigma Principles"),
            leaf("Financial Feasibility Study for a Social Enterprise"),
            leaf("Strategic Management Analysis of a Fortune 500 Company"),
            leaf("Consumer Behavior Study on E-commerce Platforms"),
            leaf("E-commerce Logistics and Last-Mile Delivery Optimization"),
            leaf("Digital Marketing Campaign Performance Analysis"),
            leaf("Talent Acquisition and Onboarding Process Improvement"),
            leaf("Performance Management System Design for a Team"),
            leaf("Organizational Behavior and Employee Motivation Study"),
            leaf("Data-driven Decision Making in Sales Management"),
            leaf("Risk Assessment and Mitigation Plan for a Project"),
            leaf("Feasibility of launching a Mobile App for Food Delivery"),
            leaf("Leadership Styles and their Impact on Team Productivity"),
            leaf("A Study on the Role of AI in Business Operations"),
            leaf("Business Plan for a Virtual Reality Gaming Cafe"),
            leaf("Analysis of Marketing Strategies of a Multinational Corporation"),
            leaf("A Study on the Impact of Work-Life Balance on Productivity"),
            leaf("Project on Employee Training and Development Programs"),
            leaf("Project on Business Ethics and Corporate Governance"),
            leaf("Project on Change Management in an Organization"),
            leaf("Project on E-commerce Business Models and Strategies"),
            leaf("Project on Financial Planning and Budgeting"),
            leaf("Project on Supply Chain Management in the Retail Sector"),
            leaf("Project on Brand Loyalty and Customer Satisfaction"),
            leaf("Project on Customer Segmentation Analysis"),
            leaf("Project on Operations Management in the Service Sector"),
            leaf("Project on Strategic Human Resource Management"),
            leaf("Project on Project Management Tools and Techniques"),
            leaf("Project on Global Business Environment Analysis"),
            leaf("Project on Crisis Management and Communication"),
            leaf("Project on Pricing Strategies and Market Demand"),
            leaf("Project on Negotiation and Conflict Resolution Skills"),
            leaf("Project on Entrepreneurial Finance and Venture Capital"),
            leaf("Project on Business Communication and Public Relations"),
            leaf("Project on Quality Management Systems (QMS)"),
            leaf("Project on Market Research and Consumer Insights"),
            leaf("Project on Retail Store Layout and Design"),
            leaf("Project on Digital Transformation in the Banking Industry"),
            leaf("Project on Sustainability and Corporate Responsibility"),
            leaf("Project on Leadership and Team Dynamics"),
            leaf("Project on Financial Risk Management"),
            leaf("Project on Market Analysis for a New Product"),
            leaf("Project on Innovation Management in Organizations"),
            leaf("Project on Performance Appraisal System Design"),
        ],
    },
    {
        name: "Banking",
        children: [
            leaf("Risk Assessment Model for Loan Approval using Machine Learning"),
            leaf("Digital Banking Onboarding Flow and User Experience Improvement"),
            leaf("Fraud Detection in Online Transactions using Data Analytics"),
            leaf("Personal Finance Management App with Budgeting Features"),
            leaf("Analysis of Credit Risk in Microfinance Institutions"),
            leaf("Implementation of a Blockchain-based Secure Payment Gateway"),
            leaf("Study on the Impact of Fintech on Traditional Banking"),
            leaf("Mobile Banking Security and Biometric Authentication"),
            leaf("Analysis of Non-Performing Assets (NPAs) in the Banking Sector"),
            leaf("Project on Treasury Management in a Commercial Bank"),
            leaf("Study on Customer Satisfaction in the Banking Sector"),
            leaf("Impact of RBI's Monetary Policies on Banking Operations"),
            leaf("Financial Inclusion through Digital Banking in Rural Areas"),
            leaf("Analysis of the Indian Banking System and its Reforms"),
            leaf("Project on Core Banking System (CBS) Implementation"),
            leaf("Risk Management in International Banking"),
            leaf("Project on E-KYC (Know Your Customer) Automation"),
            leaf("Project on Wealth Management and Investment Products"),
            leaf("Project on Credit Card Fraud Detection"),
            leaf("Project on Green Banking and Sustainable Finance"),
            leaf("Project on Banking Regulations and Compliance"),
            leaf("Project on Cross-Border Payments using Blockchain"),
            leaf("Project on Loan Portfolio Management"),
            leaf("Project on Retail Banking and its Products"),
            leaf("Project on Corporate Banking and Services"),
            leaf("Project on Financial Statement Analysis of a Bank"),
            leaf("Project on Mobile Wallets and their Impact"),
            leaf("Project on Customer Data Analytics for Banking"),
            leaf("Project on Cybersecurity in Banking Systems"),
            leaf("Project on Cashless Economy and Digital Payments"),
            leaf("Project on Debt Recovery Strategies for Banks"),
            leaf("Project on Mergers and Acquisitions in the Banking Sector"),
            leaf("Project on the Role of Commercial Banks in Economic Development"),
            leaf("Project on Financial Literacy Programs for Youth"),
            leaf("Project on the Impact of COVID-19 on the Banking Industry"),
            leaf("Project on Automated Customer Service Chatbots"),
            leaf("Project on Credit Scoring Models"),
            leaf("Project on Islamic Banking Principles"),
            leaf("Project on the Functioning of Stock Exchanges"),
            leaf("Project on Mutual Funds and their Performance Analysis"),
            leaf("Project on the Role of Public Sector Banks in India"),
            leaf("Project on Private Sector Banks and their Growth Strategies"),
            leaf("Project on Foreign Exchange Management"),
            leaf("Project on Banking Auditing and Regulations"),
            leaf("Project on the Impact of Globalization on Banking"),
            leaf("Project on Financial Derivatives and their Use in Banking"),
            leaf("Project on a Banking Simulation Game"),
            leaf("Project on Micro-Lending and its Impact"),
            leaf("Project on The Role of Central Bank in an Economy"),
            leaf("Project on Digital Lending Platforms"),
        ],
    },
    {
        name: "Biochemistry",
        children: [
            leaf("Protein-Ligand Interaction Visualization and Analysis"),
            leaf("Enzyme Kinetics Simulation and Modeling"),
            leaf("Metabolic Pathway Analysis Tool for Disease Prediction"),
            leaf("Drug Discovery Pipeline Study with a focus on a specific disease"),
            leaf("Molecular Cloning and Gene Expression Analysis"),
            leaf("Study of DNA Replication and Repair Mechanisms"),
            leaf("Protein Purification and Characterization Techniques"),
            leaf("Analysis of Photosynthesis and Cellular Respiration"),
            leaf("Bioinformatics Pipeline for Genome Annotation"),
            leaf("Project on Lipid Metabolism and its Regulation"),
            leaf("Project on Carbohydrate Metabolism Pathways"),
            leaf("Project on Nucleic Acid Structure and Function"),
            leaf("Project on Signal Transduction Pathways in Cells"),
            leaf("Project on the Biochemistry of Hormones"),
            leaf("Project on the Role of Vitamins and Minerals"),
            leaf("Project on the Biochemistry of Neurotransmitters"),
            leaf("Project on the Immune System and Antibody Production"),
            leaf("Project on the Biochemistry of Cancer Cells"),
            leaf("Project on the Effects of Toxins on Cellular Processes"),
            leaf("Project on the Biochemistry of Aging"),
            leaf("Project on the Use of Biosensors in Medicine"),
            leaf("Project on the Biochemistry of Muscle Contraction"),
            leaf("Project on the Role of Free Radicals in Disease"),
            leaf("Project on Glycogen Synthesis and Degradation"),
            leaf("Project on the Biochemistry of Vision"),
            leaf("Project on the Structure and Function of Hemoglobin"),
            leaf("Project on the Biochemistry of Plant Secondary Metabolites"),
            leaf("Project on the Role of Enzymes in Industrial Processes"),
            leaf("Project on the Biochemistry of DNA Damage and Repair"),
            leaf("Project on the Biochemistry of Apoptosis"),
            leaf("Project on the Role of RNA in Gene Regulation"),
            leaf("Project on the Biochemistry of Photosynthesis"),
            leaf("Project on the Effects of pH on Enzyme Activity"),
            leaf("Project on the Use of Chromatography in Biochemistry"),
            leaf("Project on the Biochemistry of Viral Replication"),
            leaf("Project on the Structure of Antibodies"),
            leaf("Project on the Role of ATP in Cellular Energy"),
            leaf("Project on the Biochemistry of Blood Clotting"),
            leaf("Project on the Role of Lipids in Cell Membranes"),
            leaf("Project on the Biochemistry of Food Processing"),
            leaf("Project on the Use of Bioinformatics in Drug Discovery"),
            leaf("Project on the Role of Antioxidants in Health"),
            leaf("Project on the Biochemistry of Photosynthesis and Respiration"),
            leaf("Project on the Structure of Collagen"),
            leaf("Project on the Role of Chaperones in Protein Folding"),
            leaf("Project on the Biochemistry of Photosynthesis in Algae"),
            leaf("Project on the Use of Spectroscopy in Biochemistry"),
            leaf("Project on the Role of Calcium in Cellular Signaling"),
            leaf("Project on the Biochemistry of Fermentation"),
            leaf("Project on the Role of Phosphorylation in Signaling"),
        ],
    },
    {
        name: "Biotechnology",
        children: [
            leaf("Genetic Engineering Simulation Software for Gene Editing"),
            leaf("Fermentation Process Optimization for Biofuel Production"),
            leaf("Bioremediation of Contaminated Sites using Microorganisms"),
            leaf("Biofuel Production from Algae: A Feasibility Study"),
            leaf("Development of a CRISPR-Cas9 System for Gene Therapy"),
            leaf("Production of Bioplastics from Agricultural Waste"),
            leaf("Analysis of Biosensor Technology for Environmental Monitoring"),
            leaf("Stem Cell Differentiation and its Applications"),
            leaf("Tissue Engineering for Regenerative Medicine"),
            leaf("Project on Vaccine Development and Production"),
            leaf("Project on Genetically Modified Organisms (GMOs)"),
            leaf("Project on Drug Discovery and Development Pipeline"),
            leaf("Project on Nanobiotechnology for Drug Delivery"),
            leaf("Project on Molecular Farming for Protein Production"),
            leaf("Project on Industrial Enzymes and their Applications"),
            leaf("Project on Bioprocess Engineering and Bioreactor Design"),
            leaf("Project on Bioinformatics for DNA Sequence Analysis"),
            leaf("Project on Gene Therapy for Genetic Disorders"),
            leaf("Project on a Bio-Based Water Purification System"),
            leaf("Project on the Role of Biotechnology in Agriculture"),
            leaf("Project on Plant Tissue Culture and Micropropagation"),
            leaf("Project on the Production of Recombinant Proteins"),
            leaf("Project on Microbial Biotechnology for Food Production"),
            leaf("Project on Biosafety and Ethical Issues in Biotechnology"),
            leaf("Project on a Diagnostic Kit for a Viral Disease"),
            leaf("Project on the Use of CRISPR in Crop Improvement"),
            leaf("Project on Bio-Based Nanomaterials Synthesis"),
            leaf("Project on Bioremediation of Plastic Waste"),
            leaf("Project on the Use of Algae in Carbon Sequestration"),
            leaf("Project on the Production of Bio-Fertilizers"),
            leaf("Project on the Role of Biotechnology in Forensic Science"),
            leaf("Project on Bio-Fuel Production from Lignocellulosic Biomass"),
            leaf("Project on the Use of RNAi for Gene Silencing"),
            leaf("Project on the Development of a Biosensor for Glucose"),
            leaf("Project on the Production of Monoclonal Antibodies"),
            leaf("Project on the Role of Biotechnology in Environmental Protection"),
            leaf("Project on the Use of Genomics in Personalized Medicine"),
            leaf("Project on the Ethical Issues of Cloning"),
            leaf("Project on the Use of Stem Cells in Regenerative Medicine"),
            leaf("Project on the Use of Microbes in Waste Treatment"),
            leaf("Project on the Development of a Bioreactor for Cell Culture"),
            leaf("Project on the Production of a Bio-Pesticide"),
            leaf("Project on the Use of Enzymes in the Textile Industry"),
            leaf("Project on the Development of a Biosensor for a Heavy Metal"),
            leaf("Project on the Production of Biodegradable Plastics"),
            leaf("Project on the Use of Bioreactors for Waste Water Treatment"),
            leaf("Project on the Production of a Therapeutic Protein"),
            leaf("Project on the Use of CRISPR for Disease Diagnosis"),
            leaf("Project on the Production of Biodiesel from Waste Cooking Oil"),
            leaf("Project on the Use of Bioremediation for Oil Spills"),
        ],
    },
    {
        name: "Botany",
        children: [
            leaf("Plant Disease Detection using CNN from Drone Imagery"),
            leaf("Crop Monitoring & Health Analytics System using IoT Sensors"),
            leaf("Digital Herbarium Management System for Plant Collections"),
            leaf("Drought-Resistant Plant Species Study and Breeding Program"),
            leaf("Analysis of Photosynthesis Efficiency in Different Plant Species"),
            leaf("Plant Tissue Culture for Mass Propagation of Orchids"),
            leaf("Ethnobotanical Study of Medicinal Plants in a Region"),
            leaf("Ecological Impact of Invasive Plant Species"),
            leaf("Molecular Marker Analysis for Plant Genetic Diversity"),
            leaf("Project on Plant-Microbe Interactions"),
            leaf("Project on the Anatomy of Plant Stems and Roots"),
            leaf("Project on the Pollination Biology of Flowering Plants"),
            leaf("Project on the Effects of Pollution on Plant Growth"),
            leaf("Project on the Role of Hormones in Plant Development"),
            leaf("Project on Plant Classification using DNA Barcoding"),
            leaf("Project on the Evolution of Plant Species"),
            leaf("Project on the Role of Algae in Aquatic Ecosystems"),
            leaf("Project on the Use of Plants in Phytoremediation"),
            leaf("Project on the Fungal Infections in Agricultural Crops"),
            leaf("Project on Plant Physiology and Stress Response"),
            leaf("Project on the Seed Dispersal Mechanisms in Plants"),
            leaf("Project on the Role of Mycorrhizae in Plant Nutrition"),
            leaf("Project on a Botanical Garden Management Plan"),
            leaf("Project on the Use of Bio-Fertilizers in Agriculture"),
            leaf("Project on the Anatomy and Physiology of Cacti"),
            leaf("Project on the Role of Plant Pigments in Photosynthesis"),
            leaf("Project on a Survey of Medicinal Plants in a Local Forest"),
            leaf("Project on the Effects of Light on Plant Growth"),
            leaf("Project on the Genetics of Plant Hybrids"),
            leaf("Project on the Use of Hydroponics in Plant Cultivation"),
            leaf("Project on the Symbiotic Relationship Between Plants and Insects"),
            leaf("Project on the Effects of Heavy Metals on Plant Growth"),
            leaf("Project on the Role of Plants in Carbon Sequestration"),
            leaf("Project on a Botanical Illustration Guide of a Plant Family"),
            leaf("Project on the Use of Tissue Culture for Rare Plant Conservation"),
            leaf("Project on the Role of Plants in Wetland Ecosystems"),
            leaf("Project on a Phylogenetic Analysis of a Plant Genus"),
            leaf("Project on the Use of Drones for Crop Health Monitoring"),
            leaf("Project on the Role of Plant Hormones in Flowering"),
            leaf("Project on the Anatomy of a Leaf"),
            leaf("Project on the Use of Remote Sensing in Forest Monitoring"),
            leaf("Project on the Use of Plants in Water Purification"),
            leaf("Project on the Life Cycle of a Fern"),
            leaf("Project on the Role of Lichens in the Environment"),
            leaf("Project on the Taxonomy of a Specific Plant Family"),
            leaf("Project on a Study of Plant Adaptations to Extreme Environments"),
            leaf("Project on the Role of Seed Banks in Plant Conservation"),
            leaf("Project on the Genetic Diversity of a Crop Plant"),
            leaf("Project on a Study of Plant-Fungus Interactions"),
            leaf("Project on the Use of Plant Extracts for Pest Control"),
        ],
    },
    {
        name: "Business Analytics",
        children: [
            leaf("Predictive Customer Churn Model for a Telecom Company"),
            leaf("Retail Sales Forecasting using Time-Series Analysis"),
            leaf("Sentiment Analysis on Social Media Data for Brand Insights"),
            leaf("Supply Chain Optimization using Analytics and Simulation"),
            leaf("Market Basket Analysis for E-commerce Product Recommendations"),
            leaf("Customer Lifetime Value (CLV) Prediction Model"),
            leaf("Fraud Detection in Financial Transactions using Machine Learning"),
            leaf("Web Analytics Dashboard for Website Performance"),
            leaf("A/B Testing for Website Optimization"),
            leaf("HR Analytics: Predicting Employee Attrition"),
            leaf("Analysis of Public Transport Usage Patterns using GIS Data"),
            leaf("Logistics Route Optimization for a Delivery Service"),
            leaf("Healthcare Analytics: Patient Readmission Prediction"),
            leaf("Marketing Campaign Effectiveness Analysis using Data"),
            leaf("Financial Portfolio Optimization using R"),
            leaf("E-commerce Pricing Strategy using Dynamic Pricing Models"),
            leaf("Customer Segmentation using K-Means Clustering"),
            leaf("Predictive Maintenance for Industrial Machinery"),
            leaf("Analysis of Airline Ticket Pricing Strategies"),
            leaf("Sports Analytics: Predicting Game Outcomes"),
            leaf("Text Analytics for Customer Feedback Analysis"),
            leaf("Social Media Listening and Trend Analysis"),
            leaf("Predictive Modeling for Loan Default Risk"),
            leaf("Energy Consumption Forecasting for a City"),
            leaf("Call Center Queue Optimization"),
            leaf("Project on an Inventory Management System"),
            leaf("Project on a Business Intelligence Dashboard"),
            leaf("Project on a Fraud Detection System"),
            leaf("Project on a Recommendation Engine"),
            leaf("Project on a Sales Forecasting Model"),
            leaf("Project on a Customer Segmentation Model"),
            leaf("Project on a Predictive Maintenance Model"),
            leaf("Project on a Churn Prediction Model"),
            leaf("Project on a Web Analytics Dashboard"),
            leaf("Project on a Market Basket Analysis"),
            leaf("Project on a Supply Chain Optimization Model"),
            leaf("Project on a Financial Risk Model"),
            leaf("Project on an HR Analytics Model"),
            leaf("Project on a Marketing Campaign Analysis"),
            leaf("Project on a Customer Service Chatbot"),
            leaf("Project on a Financial Planning Tool"),
            leaf("Project on a Social Media Analytics Tool"),
            leaf("Project on a Product Pricing Strategy"),
            leaf("Project on a Sales Pipeline Analysis"),
            leaf("Project on a Customer Acquisition Cost (CAC) Analysis"),
            leaf("Project on a Data Visualization Dashboard"),
            leaf("Project on a Sentiment Analysis Model"),
            leaf("Project on a Loan Approval Model"),
            leaf("Project on a Time-Series Forecasting Model"),
            leaf("Project on a Predictive Analytics Model"),
        ],
    },
    {
        name: "Chemistry",
        children: [
            leaf("Molecular Dynamics Simulation of Water at Different Temperatures"),
            leaf("Synthesis of Novel Organic Compounds for Medicinal Use"),
            leaf("Environmental Pollution Monitoring and Analysis of Water Samples"),
            leaf("Catalyst Design for Industrial Chemical Processes"),
            leaf("Computational Chemistry for Drug-Ligand Binding Prediction"),
            leaf("Synthesis and Characterization of Nanomaterials"),
            leaf("Spectroscopic Analysis of Chemical Compounds"),
            leaf("Study on the Kinetics of a Chemical Reaction"),
            leaf("Green Chemistry: Synthesis of Biodegradable Polymers"),
            leaf("Project on the Electrochemistry of a Battery"),
            leaf("Project on a Water Quality Testing System"),
            leaf("Project on the Synthesis of a New Dye"),
            leaf("Project on the Chemistry of Food Additives"),
            leaf("Project on a Study of Chemical Bonds"),
            leaf("Project on the Properties of Liquid Crystals"),
            leaf("Project on the Chemistry of Perfumes"),
            leaf("Project on a Study of Reaction Mechanisms"),
            leaf("Project on the Chemistry of Explosives"),
            leaf("Project on the Use of Chromatography for Separation"),
            leaf("Project on the Synthesis of a Polymer"),
            leaf("Project on a Study of Acid-Base Reactions"),
            leaf("Project on the Chemistry of a Photosynthesis Simulation"),
            leaf("Project on the Chemistry of Plastics"),
            leaf("Project on a Study of a Chemical Process"),
            leaf("Project on the Chemistry of a Biological System"),
            leaf("Project on a Study of a Metal Complex"),
            leaf("Project on the Use of Spectroscopy in Environmental Analysis"),
            leaf("Project on the Synthesis of a Biofuel"),
            leaf("Project on a Study of a Solid-State Material"),
            leaf("Project on the Chemistry of a Catalytic Reaction"),
            leaf("Project on the Synthesis of a Pigment"),
            leaf("Project on a Study of a Polymerization Reaction"),
            leaf("Project on the Chemistry of a Drug"),
            leaf("Project on a Study of a Chemical Equilibrium"),
            leaf("Project on the Synthesis of a Liquid Crystal"),
            leaf("Project on a Study of a Chemical Reaction in a Solution"),
            leaf("Project on the Chemistry of a Nanomaterial"),
            leaf("Project on the Synthesis of a Compound for a Specific Use"),
            leaf("Project on a Study of a Chemical Reaction at a Surface"),
            leaf("Project on the Chemistry of a Food Product"),
            leaf("Project on the Synthesis of a Chemical for a Specific Function"),
            leaf("Project on a Study of a Chemical Reaction under Pressure"),
            leaf("Project on the Chemistry of a Liquid"),
            leaf("Project on the Synthesis of a Chemical for a Specific Application"),
            leaf("Project on a Study of a Chemical Reaction with a Catalyst"),
            leaf("Project on the Chemistry of a Gas"),
            leaf("Project on the Synthesis of a Chemical for a Specific Purpose"),
            leaf("Project on a Study of a Chemical Reaction in the Gas Phase"),
            leaf("Project on the Chemistry of a Solid"),
            leaf("Project on the Synthesis of a Chemical for a Specific Use"),
        ],
    },
    {
        name: "Computer Science",
        children: [
            leaf("E-commerce Website with Secure Payment Gateway and Admin Panel"),
            leaf("Mobile App for Local Service Discovery and Booking"),
            leaf("Machine Learning Model for Image Classification (e.g., Plant Species)"),
            leaf("Real-time Chat Application with WebSocket Technology"),
            leaf("Blockchain-based Voting System with Smart Contracts"),
            leaf("Data Visualization Dashboard for Public Health Data"),
            leaf("Development of a Web Crawler for Data Extraction"),
            leaf("IoT-based Smart Home Automation System"),
            leaf("Computer Graphics Project: 3D Rendering Engine"),
            leaf("Cybersecurity: Penetration Testing of a Web Application"),
            leaf("Development of a Simple Operating System Kernel"),
            leaf("Natural Language Processing (NLP) Chatbot for Customer Service"),
            leaf("Game Development Project using Unity or Unreal Engine"),
            leaf("Big Data Analysis of Social Media Networks"),
            leaf("Development of a Compiler for a Custom Language"),
            leaf("Android App for a College Management System"),
            leaf("Web Development with MERN Stack (MongoDB, Express, React, Node)"),
            leaf("Implementation of a Recommendation Engine"),
            leaf("Development of a Serverless Application on AWS Lambda"),
            leaf("Cloud-based File Storage System"),
            leaf("Project on a Library Management System"),
            leaf("Project on a Hospital Management System"),
            leaf("Project on a Food Delivery App"),
            leaf("Project on an E-learning Platform"),
            leaf("Project on a Social Networking Site"),
            leaf("Project on a Job Portal Website"),
            leaf("Project on a Real-Time Bus Tracking System"),
            leaf("Project on a Student Information System"),
            leaf("Project on a Supply Chain Management System"),
            leaf("Project on a Customer Feedback System"),
            leaf("Project on a Personal Portfolio Website"),
            leaf("Project on a Video Conferencing App"),
            leaf("Project on a Cryptography Algorithm Implementation"),
            leaf("Project on a Network Monitoring Tool"),
            leaf("Project on a Smart Traffic Management System"),
            leaf("Project on a Face Recognition System"),
            leaf("Project on a Weather Forecasting App"),
            leaf("Project on a Music Player App"),
            leaf("Project on a Digital Wallet App"),
            leaf("Project on a Secure File Transfer Protocol"),
            leaf("Project on a Virtual Reality (VR) Application"),
            leaf("Project on a Machine Translation System"),
            leaf("Project on a Data Compression Algorithm"),
            leaf("Project on a File System Implementation"),
            leaf("Project on a Chatbot for a Business"),
            leaf("Project on an Online Examination System"),
            leaf("Project on a Flight Booking System"),
            leaf("Project on a Car Rental System"),
            leaf("Project on an E-ticketing System"),
            leaf("Project on a Stock Market Analysis App"),
        ],
    },
    {
        name: "Data Science",
        children: [
            leaf("Predictive Analytics for Stock Prices using Time-Series Models"),
            leaf("Natural Language Processing (NLP) Chatbot for Text Classification"),
            leaf("Big Data Analysis of Customer Behavior from E-commerce Logs"),
            leaf("Computer Vision for Object Detection in Medical Images"),
            leaf("Sentiment Analysis on Twitter Data for Political Polling"),
            leaf("Recommendation System for Movies using Collaborative Filtering"),
            leaf("Predictive Model for Credit Card Fraud Detection"),
            leaf("Time-Series Forecasting for Energy Consumption"),
            leaf("Web Scraping and Data Analysis of Job Market Trends"),
            leaf("Building a Dashboard for a Sales Team using Tableau"),
            leaf("Machine Learning Model for Spam Email Detection"),
            leaf("Clustering Analysis of Customer Demographics"),
            leaf("Analysis of Public Health Data on Disease Outbreaks"),
            leaf("Neural Network for Handwritten Digit Recognition"),
            leaf("A/B Testing Analysis for E-commerce Website Conversion"),
            leaf("Predictive Model for Real Estate Housing Prices"),
            leaf("Text Summarization using Deep Learning"),
            leaf("Analysis of Customer Reviews and Feedback"),
            leaf("Image Segmentation for Satellite Imagery"),
            leaf("Deep Learning Model for Financial Market Forecasting"),
            leaf("Project on a Predictive Churn Model"),
            leaf("Project on a Recommendation Engine"),
            leaf("Project on a Fraud Detection System"),
            leaf("Project on a Time-Series Forecasting Model"),
            leaf("Project on a Customer Segmentation Model"),
            leaf("Project on a Web Analytics Dashboard"),
            leaf("Project on a Market Basket Analysis"),
            leaf("Project on a Supply Chain Optimization Model"),
            leaf("Project on a Financial Risk Model"),
            leaf("Project on an HR Analytics Model"),
            leaf("Project on a Marketing Campaign Analysis"),
            leaf("Project on a Customer Service Chatbot"),
            leaf("Project on a Financial Planning Tool"),
            leaf("Project on a Social Media Analytics Tool"),
            leaf("Project on a Product Pricing Strategy"),
            leaf("Project on a Sales Pipeline Analysis"),
            leaf("Project on a Customer Acquisition Cost (CAC) Analysis"),
            leaf("Project on a Data Visualization Dashboard"),
            leaf("Project on a Sentiment Analysis Model"),
            leaf("Project on a Loan Approval Model"),
            leaf("Project on a Time-Series Forecasting Model"),
            leaf("Project on a Predictive Analytics Model"),
            leaf("Project on a Healthcare Analytics System"),
            leaf("Project on a Text Generation Model"),
            leaf("Project on a Reinforcement Learning Model"),
            leaf("Project on a Natural Language Understanding System"),
            leaf("Project on a Data Cleaning and Preprocessing Pipeline"),
            leaf("Project on a Big Data Processing Framework (e.g., Hadoop)"),
            leaf("Project on a Data Warehouse Design"),
            leaf("Project on a Data Lake Implementation"),
        ],
    },
    {
        name: "Economics",
        children: [
            leaf("Econometric Model for GDP Prediction of a Country"),
            leaf("Analysis of Inflationary Trends and their Causes"),
            leaf("Impact of Trade Policies on Local Markets"),
            leaf("Behavioral Economics Experiment Design for Consumer Choices"),
            leaf("Financial Market Efficiency and Portfolio Management"),
            leaf("Microeconomic Analysis of Supply and Demand in a Specific Market"),
            leaf("Study on the Impact of Minimum Wage on Employment"),
            leaf("Economic Analysis of Climate Change Policies"),
            leaf("Poverty and Inequality in a Developing Economy"),
            leaf("Game Theory Models for Oligopoly Markets"),
            leaf("Impact of Globalization on Domestic Industries"),
            leaf("Public Policy Analysis of a Government Scheme"),
            leaf("Analysis of Fiscal Policy and its Effects on Economic Growth"),
            leaf("Econometric Study of Education's Impact on Income"),
            leaf("Role of Central Bank in Economic Stabilization"),
            leaf("Project on the Economic Impact of COVID-19"),
            leaf("Project on the Economics of Labor Markets"),
            leaf("Project on the Economics of Health Care"),
            leaf("Project on the Economics of Education"),
            leaf("Project on the Economics of the Environment"),
            leaf("Project on the Economics of Development"),
            leaf("Project on the Economics of International Trade"),
            leaf("Project on the Economics of Public Finance"),
            leaf("Project on the Economics of Banking and Finance"),
            leaf("Project on the Economics of Agriculture"),
            leaf("Project on the Economics of the Service Sector"),
            leaf("Project on the Economics of the Industrial Sector"),
            leaf("Project on the Economics of the Technology Sector"),
            leaf("Project on the Economics of the Energy Sector"),
            leaf("Project on the Economics of the Transportation Sector"),
            leaf("Project on the Economics of the Communication Sector"),
            leaf("Project on the Economics of the Construction Sector"),
            leaf("Project on the Economics of the Real Estate Sector"),
            leaf("Project on the Economics of the Tourism Sector"),
            leaf("Project on the Economics of the Entertainment Sector"),
            leaf("Project on the Economics of the Sports Sector"),
            leaf("Project on the Economics of the Fashion Industry"),
            leaf("Project on the Economics of the Food Industry"),
            leaf("Project on the Economics of the Beverage Industry"),
            leaf("Project on the Economics of the Automobile Industry"),
            leaf("Project on the Economics of the Pharmaceutical Industry"),
            leaf("Project on the Economics of the Software Industry"),
            leaf("Project on the Economics of the Semiconductor Industry"),
            leaf("Project on the Economics of the Telecommunications Industry"),
            leaf("Project on the Economics of the Retail Industry"),
            leaf("Project on the Economics of the Hospitality Industry"),
            leaf("Project on the Economics of the Airline Industry"),
            leaf("Project on the Economics of the Logistics Industry"),
            leaf("Project on the Economics of the Education Sector"),
            leaf("Project on the Economics of the Health Care Sector"),
        ],
    },
    {
        name: "E-commerce",
        children: [
            leaf("Marketplace Platform Development with Multi-Vendor Support"),
            leaf("Personalized Product Recommendation Engine using Machine Learning"),
            leaf("Logistics & Inventory Management System for an E-commerce Business"),
            leaf("Customer Feedback Analysis for E-commerce using Sentiment Analysis"),
            leaf("E-commerce Business Plan for a Niche Product"),
            leaf("Implementation of a Secure Payment Gateway"),
            leaf("Search Engine Optimization (SEO) Strategy for an E-commerce Website"),
            leaf("Mobile App for a Retail E-commerce Store"),
            leaf("Supply Chain Management and Automation for E-commerce"),
            leaf("Digital Marketing Campaign Performance Analysis"),
            leaf("A/B Testing for Website Conversion Rate Optimization"),
            leaf("Customer Segmentation and Targeting Strategy"),
            leaf("UI/UX Design for a User-Friendly E-commerce Website"),
            leaf("E-commerce Pricing Strategy and Dynamic Pricing Models"),
            leaf("Web Scraping for Competitor Pricing Analysis"),
            leaf("Data Analytics Dashboard for Sales and Revenue"),
            leaf("Social Media Marketing for E-commerce Brand Building"),
            leaf("Customer Retention and Loyalty Program Design"),
            leaf("Risk Management in E-commerce Transactions"),
            leaf("A Study on the Impact of COVID-19 on E-commerce"),
            leaf("Project on a Digital Marketing Strategy for an Online Store"),
            leaf("Project on an E-commerce Platform for Handmade Products"),
            leaf("Project on a Subscription Box Service Model"),
            leaf("Project on a Dropshipping Business Plan"),
            leaf("Project on a B2B E-commerce Marketplace"),
            leaf("Project on a Customer Service Chatbot for E-commerce"),
            leaf("Project on an E-commerce Platform for Digital Goods"),
            leaf("Project on a Returns Management System"),
            leaf("Project on a Loyalty Program for E-commerce Customers"),
            leaf("Project on an E-commerce Dashboard for a Business"),
            leaf("Project on an E-commerce Platform for a Local Business"),
            leaf("Project on a Social Commerce Platform"),
            leaf("Project on an E-commerce App for a Fashion Brand"),
            leaf("Project on a Marketplace for Used Goods"),
            leaf("Project on a Food Delivery App with E-commerce Features"),
            leaf("Project on an E-commerce Platform for a Bookstore"),
            leaf("Project on an E-commerce Platform for a Pharmacy"),
            leaf("Project on an E-commerce Platform for a Grocery Store"),
            leaf("Project on an E-commerce Platform for a Pet Store"),
            leaf("Project on an E-commerce Platform for a Toy Store"),
            leaf("Project on an E-commerce Platform for a Sports Store"),
            leaf("Project on an E-commerce Platform for a Craft Store"),
            leaf("Project on an E-commerce Platform for a Home Decor Store"),
            leaf("Project on an E-commerce Platform for a Gift Store"),
            leaf("Project on an E-commerce Platform for a Flower Store"),
            leaf("Project on an E-commerce Platform for a Jewelry Store"),
            leaf("Project on an E-commerce Platform for a Health Food Store"),
            leaf("Project on an E-commerce Platform for a Vegan Store"),
            leaf("Project on an E-commerce Platform for a Zero-Waste Store"),
            leaf("Project on an E-commerce Platform for a Fair Trade Store"),
        ],
    },
    {
        name: "Electronics",
        children: [
            leaf("Smart Home Automation System (IoT) using Raspberry Pi"),
            leaf("Robotic Arm Control using Arduino and Servo Motors"),
            leaf("Digital Signal Processing (DSP) for Audio Filtering"),
            leaf("FPGA-based Digital Clock with Alarm Functionality"),
            leaf("Gesture-Controlled Robot using a Microcontroller"),
            leaf("Wireless Power Transfer System for Mobile Devices"),
            leaf("Solar-Powered Automatic Street Lighting System"),
            leaf("Smart Security System with Facial Recognition"),
            leaf("PCB Design and Fabrication of a Simple Circuit"),
            leaf("Project on a Line Follower Robot"),
            leaf("Project on a Bluetooth-Controlled Car"),
            leaf("Project on a Home Automation System"),
            leaf("Project on a Smart Irrigation System"),
            leaf("Project on a Weather Monitoring System"),
            leaf("Project on a Water Level Indicator"),
            leaf("Project on a Voice-Controlled Home Appliance System"),
            leaf("Project on a Temperature and Humidity Monitoring System"),
            leaf("Project on a GSM-Based Home Security System"),
            leaf("Project on an Obstacle Avoidance Robot"),
            leaf("Project on a Fire Alarm System"),
            leaf("Project on a Gas Leakage Detection System"),
            leaf("Project on a Visitor Counter using IR Sensor"),
            leaf("Project on a Metal Detector Robot"),
            leaf("Project on a DTMF Controlled Robot"),
            leaf("Project on a Solar Powered Mobile Charger"),
            leaf("Project on a Clap Switch Circuit"),
            leaf("Project on a Rain Alarm Circuit"),
            leaf("Project on a Darkness Detector Circuit"),
            leaf("Project on a Sound Operated Switch"),
            leaf("Project on a Light Sensitive Switch"),
            leaf("Project on a Password Protected Door Lock"),
            leaf("Project on a Fingerprint Based Security System"),
            leaf("Project on an RFID Based Security System"),
            leaf("Project on a Biometric Voting System"),
            leaf("Project on a GPS Based Vehicle Tracking System"),
            leaf("Project on an Automated Toll Tax System"),
            leaf("Project on a Smart Grid System"),
            leaf("Project on a Smart Energy Meter"),
            leaf("Project on a Smart Traffic Light System"),
            leaf("Project on a Smart Parking System"),
            leaf("Project on a Smart Dustbin System"),
            leaf("Project on a Smart Street Light System"),
            leaf("Project on a Smart Water Management System"),
            leaf("Project on a Smart Waste Management System"),
            leaf("Project on a Smart City Framework"),
            leaf("Project on a Smart Farming System"),
            leaf("Project on a Smart Home Security System"),
            leaf("Project on a Smart Healthcare System"),
        ],
    },
    {
        name: "English Literature",
        children: [
            leaf("Literary Text Analysis using NLP and Text Mining Techniques"),
            leaf("Digital Archive of Historical Texts and Manuscripts"),
            leaf("Interactive Storytelling Website based on a Classic Novel"),
            leaf("Comparative Study of a Literary Genre Across Different Eras"),
            leaf("Adaptation of a Shakespearean Play for a Modern Audience"),
            leaf("Psychoanalytic Study of a Literary Character"),
            leaf("Postcolonial Reading of a Contemporary Novel"),
            leaf("Feminist Interpretation of a Victorian Text"),
            leaf("Analysis of Symbolism in a Poetic Collection"),
            leaf("Project on the Influence of Mythology on Modern Fantasy"),
            leaf("Project on the Role of Irony in Satirical Writing"),
            leaf("Project on the Theme of Memory in a Memoir"),
            leaf("Project on the Literary Devices in a Short Story"),
            leaf("Project on a Digital Edition of a Literary Work"),
            leaf("Project on the History of the English Language"),
            leaf("Project on a Study of Literary Criticism Theories"),
            leaf("Project on the Gothic in Literature"),
            leaf("Project on the Romantic Movement in English Poetry"),
            leaf("Project on a Study of a Nobel Laureate's Work"),
            leaf("Project on a Study of a Playwright's Work"),
            leaf("Project on a Study of an Author's Oeuvre"),
            leaf("Project on a Study of a Literary Genre"),
            leaf("Project on a Study of a Literary Period"),
            leaf("Project on a Study of a Literary Movement"),
            leaf("Project on a Study of a Literary Work"),
            leaf("Project on a Study of a Literary Character"),
            leaf("Project on a Study of a Literary Theme"),
            leaf("Project on a Study of a Literary Device"),
            leaf("Project on a Study of a Literary Form"),
            leaf("Project on a Study of a Literary Technique"),
            leaf("Project on a Study of a Literary Theory"),
            leaf("Project on a Study of a Literary Style"),
            leaf("Project on a Study of a Literary Context"),
            leaf("Project on a Study of a Literary Influence"),
            leaf("Project on a Study of a Literary Reception"),
            leaf("Project on a Study of a Literary History"),
            leaf("Project on a Study of a Literary Criticism"),
            leaf("Project on a Study of a Literary Adaptation"),
            leaf("Project on a Study of a Literary Translation"),
            leaf("Project on a Study of a Literary Publication"),
            leaf("Project on a Study of a Literary Archive"),
            leaf("Project on a Study of a Literary Festival"),
            leaf("Project on a Study of a Literary Prize"),
            leaf("Project on a Study of a Literary Canon"),
            leaf("Project on a Study of a Literary Marketplace"),
            leaf("Project on a Study of a Literary Reader"),
            leaf("Project on a Study of a Literary Author"),
            leaf("Project on a Study of a Literary Work"),
        ],
    },
    {
        name: "Entrepreneurship",
        children: [
            leaf("Startup Business Plan & Pitch Deck for a Tech-based Venture"),
            leaf("Market Validation of a New Idea using Surveys and Interviews"),
            leaf("Crowdfunding Campaign Strategy and Execution Plan"),
            leaf("Feasibility Study for a Social Enterprise Addressing a Local Problem"),
            leaf("Digital Marketing and Sales Funnel for a B2B Startup"),
            leaf("Financial Modeling and Funding Strategy for a Seed Stage Startup"),
            leaf("Lean Startup Methodology: Building a Minimum Viable Product (MVP)"),
            leaf("Business Model Canvas for a New Business Idea"),
            leaf("Intellectual Property (IP) Strategy for a Startup"),
            leaf("Project on a Business Plan for a Mobile App"),
            leaf("Project on a Business Plan for a Restaurant"),
            leaf("Project on a Business Plan for a Retail Store"),
            leaf("Project on a Business Plan for a Service-Based Business"),
            leaf("Project on a Business Plan for a Manufacturing Business"),
            leaf("Project on a Business Plan for an E-commerce Business"),
            leaf("Project on a Business Plan for a Social Enterprise"),
            leaf("Project on a Business Plan for a Non-Profit Organization"),
            leaf("Project on a Business Plan for a Franchise"),
            leaf("Project on a Business Plan for a Startup"),
            leaf("Project on a Business Plan for a Small Business"),
            leaf("Project on a Business Plan for a Home-Based Business"),
            leaf("Project on a Business Plan for a Co-working Space"),
            leaf("Project on a Business Plan for a Coffee Shop"),
            leaf("Project on a Business Plan for a Bakery"),
            leaf("Project on a Business Plan for a Gym"),
            leaf("Project on a Business Plan for a Salon"),
            leaf("Project on a Business Plan for a Spa"),
            leaf("Project on a Business Plan for a Hotel"),
            leaf("Project on a Business Plan for a Travel Agency"),
            leaf("Project on a Business Plan for a Tour Operator"),
            leaf("Project on a Business Plan for a Consulting Firm"),
            leaf("Project on a Business Plan for a Law Firm"),
            leaf("Project on a Business Plan for an Accounting Firm"),
            leaf("Project on a Business Plan for a Marketing Agency"),
            leaf("Project on a Business Plan for an IT Company"),
            leaf("Project on a Business Plan for a Software Company"),
            leaf("Project on a Business Plan for a Hardware Company"),
            leaf("Project on a Business Plan for a Retail Store"),
            leaf("Project on a Business Plan for a Wholesale Business"),
            leaf("Project on a Business Plan for a Logistics Company"),
            leaf("Project on a Business Plan for a Real Estate Company"),
            leaf("Project on a Business Plan for a Construction Company"),
            leaf("Project on a Business Plan for a Manufacturing Company"),
            leaf("Project on a Business Plan for a Pharmaceutical Company"),
            leaf("Project on a Business Plan for a Chemical Company"),
            leaf("Project on a Business Plan for a Food Processing Company"),
            leaf("Project on a Business Plan for a Beverage Company"),
        ],
    },
    {
        name: "Environmental Science",
        children: [
            leaf("Renewable Energy Feasibility Study for a Local Community"),
            leaf("Water Quality Monitoring System using IoT Sensors"),
            leaf("Ecosystem Health Assessment of a Local River Basin"),
            leaf("Waste Management & Recycling Strategy for a University Campus"),
            leaf("Impact of Plastic Pollution on Marine Ecosystems"),
            leaf("Air Pollution Monitoring and Analysis in an Urban Area"),
            leaf("Sustainable Agriculture Practices and their Environmental Impact"),
            leaf("Climate Change Impact Analysis on Agricultural Productivity"),
            leaf("Bioremediation of Oil Spills using Microorganisms"),
            leaf("Project on a Study of a Local Ecosystem"),
            leaf("Project on a Study of a Local Habitat"),
            leaf("Project on a Study of a Local Species"),
            leaf("Project on a Study of a Local Pollution Source"),
            leaf("Project on a Study of a Local Environmental Problem"),
            leaf("Project on a Study of a Local Environmental Solution"),
            leaf("Project on a Study of a Local Environmental Policy"),
            leaf("Project on a Study of a Local Environmental Law"),
            leaf("Project on a Study of a Local Environmental Regulation"),
            leaf("Project on a Study of a Local Environmental Standard"),
            leaf("Project on a Study of a Local Environmental Guideline"),
            leaf("Project on a Study of a Local Environmental Management Plan"),
            leaf("Project on a Study of a Local Environmental Impact Assessment"),
            leaf("Project on a Study of a Local Environmental Audit"),
            leaf("Project on a Study of a Local Environmental Monitoring Program"),
            leaf("Project on a Study of a Local Environmental Education Program"),
            leaf("Project on a Study of a Local Environmental Research Project"),
            leaf("Project on a Study of a Local Environmental Restoration Project"),
            leaf("Project on a Study of a Local Environmental Conservation Project"),
            leaf("Project on a Study of a Local Environmental Protection Project"),
            leaf("Project on a Study of a Local Environmental Sustainability Project"),
            leaf("Project on a Study of a Local Environmental Innovation Project"),
            leaf("Project on a Study of a Local Environmental Technology Project"),
            leaf("Project on a Study of a Local Environmental Design Project"),
            leaf("Project on a Study of a Local Environmental Engineering Project"),
            leaf("Project on a Study of a Local Environmental Science Project"),
            leaf("Project on a Study of a Local Environmental Management System"),
            leaf("Project on a Study of a Local Environmental Information System"),
            leaf("Project on a Study of a Local Environmental Database"),
            leaf("Project on a Study of a Local Environmental Model"),
            leaf("Project on a Study of a Local Environmental Simulation"),
            leaf("Project on a Study of a Local Environmental Analysis"),
            leaf("Project on a Study of a Local Environmental Assessment"),
            leaf("Project on a Study of a Local Environmental Impact"),
            leaf("Project on a Study of a Local Environmental Risk"),
            leaf("Project on a Study of a Local Environmental Problem"),
            leaf("Project on a Study of a Local Environmental Solution"),
            leaf("Project on a Study of a Local Environmental Policy"),
            leaf("Project on a Study of a Local Environmental Law"),
        ],
    },
    {
        name: "Finance",
        children: [
            leaf("Portfolio Optimization & Risk Analysis using Python"),
            leaf("Algorithmic Trading Strategy Backtesting on Historical Data"),
            leaf("Financial Modeling for a Startup and Valuation Analysis"),
            leaf("Capital Budgeting Analysis Tool for Investment Decisions"),
            leaf("Analysis of Indian Stock Market Volatility"),
            leaf("Credit Risk Assessment Model using Machine Learning"),
            leaf("Impact of COVID-19 on the Indian Financial Market"),
            leaf("Corporate Mergers and Acquisitions Case Study"),
            leaf("Wealth Management and Financial Planning for Individuals"),
            leaf("Project on the Role of SEBI in Financial Market Regulation"),
            leaf("Project on the Performance of Mutual Funds"),
            leaf("Project on the Role of RBI in Monetary Policy"),
            leaf("Project on Financial Derivatives and their Use"),
            leaf("Project on a Study of a Bank's Financial Health"),
            leaf("Project on the Impact of Globalization on Finance"),
            leaf("Project on a Study of a Financial Market"),
            leaf("Project on a Study of a Financial Institution"),
            leaf("Project on a Study of a Financial Product"),
            leaf("Project on a Study of a Financial Service"),
            leaf("Project on a Study of a Financial Technology"),
            leaf("Project on a Study of a Financial Innovation"),
            leaf("Project on a Study of a Financial Regulation"),
            leaf("Project on a Study of a Financial Law"),
            leaf("Project on a Study of a Financial Standard"),
            leaf("Project on a Study of a Financial Guideline"),
            leaf("Project on a Study of a Financial Management Plan"),
            leaf("Project on a Study of a Financial Risk Assessment"),
            leaf("Project on a Study of a Financial Audit"),
            leaf("Project on a Study of a Financial Monitoring Program"),
            leaf("Project on a Study of a Financial Education Program"),
            leaf("Project on a Study of a Financial Research Project"),
            leaf("Project on a Study of a Financial Restoration Project"),
            leaf("Project on a Study of a Financial Conservation Project"),
            leaf("Project on a Study of a Financial Protection Project"),
            leaf("Project on a Study of a Financial Sustainability Project"),
            leaf("Project on a Study of a Financial Innovation Project"),
            leaf("Project on a Study of a Financial Technology Project"),
            leaf("Project on a Study of a Financial Design Project"),
            leaf("Project on a Study of a Financial Engineering Project"),
            leaf("Project on a Study of a Financial Science Project"),
            leaf("Project on a Study of a Financial Management System"),
            leaf("Project on a Study of a Financial Information System"),
            leaf("Project on a Study of a Financial Database"),
            leaf("Project on a Study of a Financial Model"),
            leaf("Project on a Study of a Financial Simulation"),
            leaf("Project on a Study of a Financial Analysis"),
            leaf("Project on a Study of a Financial Assessment"),
            leaf("Project on a Study of a Financial Impact"),
            leaf("Project on a Study of a Financial Risk"),
        ],
    },
    {
        name: "Foreign Trade Practices",
        children: [
            leaf("Global Supply Chain Management Case Study: The Apple Supply Chain"),
            leaf("Impact of Tariffs on International Trade and Economic Growth"),
            leaf("Trade Compliance Automation Tool using RPA"),
            leaf("Export-Import Documentation System for Small Businesses"),
            leaf("Analysis of Bilateral Trade Agreements and their Impact"),
            leaf("Risk Management in International Business Transactions"),
            leaf("Digital Transformation of Foreign Trade Operations"),
            leaf("Impact of Geopolitical Factors on Global Trade"),
            leaf("Logistics and Shipping Management for Cross-Border E-commerce"),
            leaf("Project on the Role of WTO in International Trade"),
            leaf("Project on the Role of UNCTAD in International Trade"),
            leaf("Project on the Role of ICC in International Trade"),
            leaf("Project on the Role of World Bank in International Trade"),
            leaf("Project on the Role of IMF in International Trade"),
            leaf("Project on the Role of ADB in International Trade"),
            leaf("Project on the Role of AIIB in International Trade"),
            leaf("Project on the Role of EIB in International Trade"),
            leaf("Project on the Role of EBRD in International Trade"),
            leaf("Project on the Role of IDB in International Trade"),
            leaf("Project on the Role of AfDB in International Trade"),
            leaf("Project on the Role of WIPO in International Trade"),
            leaf("Project on the Role of WCO in International Trade"),
            leaf("Project on the Role of WTO in Dispute Settlement"),
            leaf("Project on the Role of WCO in Customs Matters"),
            leaf("Project on the Role of WIPO in Intellectual Property"),
            leaf("Project on the Role of WTO in Trade Policy Review"),
            leaf("Project on the Role of WCO in Harmonized System"),
            leaf("Project on the Role of WIPO in TRIPS Agreement"),
            leaf("Project on the Role of WTO in GATS Agreement"),
            leaf("Project on the Role of WCO in Kyoto Convention"),
            leaf("Project on the Role of WIPO in Patent Cooperation Treaty"),
            leaf("Project on the Role of WTO in TBT Agreement"),
            leaf("Project on the Role of WCO in SAFE Framework"),
            leaf("Project on the Role of WIPO in Madrid System"),
            leaf("Project on the Role of WTO in SPS Agreement"),
            leaf("Project on the Role of WCO in Revised Kyoto Convention"),
            leaf("Project on the Role of WIPO in Lisbon System"),
            leaf("Project on the Role of WTO in Anti-Dumping Agreement"),
            leaf("Project on the Role of WCO in Arusha Declaration"),
            leaf("Project on the Role of WIPO in Berne Convention"),
            leaf("Project on the Role of WTO in Subsidies and Countervailing Measures Agreement"),
            leaf("Project on the Role of WCO in Istanbul Convention"),
            leaf("Project on the Role of WIPO in Paris Convention"),
            leaf("Project on the Role of WTO in Safeguards Agreement"),
            leaf("Project on the Role of WCO in Nairobi Convention"),
            leaf("Project on the Role of WIPO in Nice Agreement"),
        ],
    },
    {
        name: "Geography",
        children: [
            leaf("GIS-based Urban Planning Tool for a Smart City"),
            leaf("Remote Sensing for Land Use Mapping in a Rural Area"),
            leaf("Climate Change Impact Analysis on Coastal Regions"),
            leaf("Natural Disaster Risk Assessment Model for Floods"),
            leaf("Population Dynamics and Migration Patterns in a Region"),
            leaf("Analysis of Urban Heat Island Effect using Satellite Data"),
            leaf("GIS Mapping of Water Resources and Management"),
            leaf("Environmental Impact Assessment of a Major Infrastructure Project"),
            leaf("Socio-economic Survey of a Rural Community"),
            leaf("Project on a Study of a Local Ecosystem"),
            leaf("Project on a Study of a Local Habitat"),
            leaf("Project on a Study of a Local Species"),
            leaf("Project on a Study of a Local Pollution Source"),
            leaf("Project on a Study of a Local Environmental Problem"),
            leaf("Project on a Study of a Local Environmental Solution"),
            leaf("Project on a Study of a Local Environmental Policy"),
            leaf("Project on a Study of a Local Environmental Law"),
            leaf("Project on a Study of a Local Environmental Regulation"),
            leaf("Project on a Study of a Local Environmental Standard"),
            leaf("Project on a Study of a Local Environmental Guideline"),
            leaf("Project on a Study of a Local Environmental Management Plan"),
            leaf("Project on a Study of a Local Environmental Impact Assessment"),
            leaf("Project on a Study of a Local Environmental Audit"),
            leaf("Project on a Study of a Local Environmental Monitoring Program"),
            leaf("Project on a Study of a Local Environmental Education Program"),
            leaf("Project on a Study of a Local Environmental Research Project"),
            leaf("Project on a Study of a Local Environmental Restoration Project"),
            leaf("Project on a Study of a Local Environmental Conservation Project"),
            leaf("Project on a Study of a Local Environmental Protection Project"),
            leaf("Project on a Study of a Local Environmental Sustainability Project"),
            leaf("Project on a Study of a Local Environmental Innovation Project"),
            leaf("Project on a Study of a Local Environmental Technology Project"),
            leaf("Project on a Study of a Local Environmental Design Project"),
            leaf("Project on a Study of a Local Environmental Engineering Project"),
            leaf("Project on a Study of a Local Environmental Science Project"),
            leaf("Project on a Study of a Local Environmental Management System"),
            leaf("Project on a Study of a Local Environmental Information System"),
            leaf("Project on a Study of a Local Environmental Database"),
            leaf("Project on a Study of a Local Environmental Model"),
            leaf("Project on a Study of a Local Environmental Simulation"),
            leaf("Project on a Study of a Local Environmental Analysis"),
            leaf("Project on a Study of a Local Environmental Assessment"),
            leaf("Project on a Study of a Local Environmental Impact"),
            leaf("Project on a Study of a Local Environmental Risk"),
            leaf("Project on a Study of a Local Environmental Problem"),
            leaf("Project on a Study of a Local Environmental Solution"),
        ],
    },
    {
        name: "Genetics",
        children: [
            leaf("Genetic Mutation Analysis Pipeline for Disease Diagnosis"),
            leaf("Phylogenetic Tree Reconstruction of a Species"),
            leaf("CRISPR Gene Editing Simulation Software"),
            leaf("Population Genetics Study of a Local Community"),
            leaf("Bioinformatics Analysis of Genome-Wide Association Studies (GWAS)"),
            leaf("Ethical Considerations in Human Genetic Engineering"),
            leaf("Study on the Genetic Basis of Complex Diseases"),
            leaf("Molecular Cloning and Gene Expression Analysis"),
            leaf("Genetic Counseling and its Role in Disease Prevention"),
            leaf("Project on the Genetics of a Crop Plant"),
            leaf("Project on the Genetics of an Animal Species"),
            leaf("Project on the Genetics of a Microorganism"),
            leaf("Project on the Genetics of a Viral Disease"),
            leaf("Project on the Genetics of a Bacterial Disease"),
            leaf("Project on the Genetics of a Fungal Disease"),
            leaf("Project on the Genetics of a Parasitic Disease"),
            leaf("Project on the Genetics of a Genetic Disorder"),
            leaf("Project on the Genetics of a Metabolic Disorder"),
            leaf("Project on the Genetics of a Neurological Disorder"),
            leaf("Project on the Genetics of a Cardiovascular Disorder"),
            leaf("Project on the Genetics of a Respiratory Disorder"),
            leaf("Project on the Genetics of a Digestive Disorder"),
            leaf("Project on the Genetics of an Endocrine Disorder"),
            leaf("Project on the Genetics of a Musculoskeletal Disorder"),
            leaf("Project on the Genetics of a Skin Disorder"),
            leaf("Project on the Genetics of an Eye Disorder"),
            leaf("Project on the Genetics of an Ear Disorder"),
            leaf("Project on the Genetics of a Blood Disorder"),
            leaf("Project on the Genetics of a Cancer"),
            leaf("Project on the Genetics of an Autoimmune Disease"),
            leaf("Project on the Genetics of a Mental Disorder"),
            leaf("Project on the Genetics of a Personality Trait"),
            leaf("Project on the Genetics of an Intelligence Trait"),
            leaf("Project on the Genetics of a Behavioral Trait"),
            leaf("Project on the Genetics of a Physical Trait"),
            leaf("Project on the Genetics of a Psychological Trait"),
            leaf("Project on the Genetics of a Social Trait"),
            leaf("Project on the Genetics of a Cultural Trait"),
            leaf("Project on the Genetics of a Political Trait"),
            leaf("Project on the Genetics of a Religious Trait"),
            leaf("Project on the Genetics of an Economic Trait"),
            leaf("Project on the Genetics of a Legal Trait"),
            leaf("Project on the Genetics of a Moral Trait"),
            leaf("Project on the Genetics of an Ethical Trait"),
            leaf("Project on the Genetics of a Philosophical Trait"),
            leaf("Project on the Genetics of a Scientific Trait"),
            leaf("Project on the Genetics of a Technological Trait"),
            leaf("Project on the Genetics of a Creative Trait"),
            leaf("Project on the Genetics of a Logical Trait"),
        ],
    },
    {
        name: "Geology",
        children: [
            leaf("Seismic Data Visualization & Analysis for Earthquake Prediction"),
            leaf("Mineral Resource Mapping using GIS and Remote Sensing"),
            leaf("GIS Application for Geological Survey and Mapping"),
            leaf("Analysis of Rock & Mineral Samples for Composition"),
            leaf("Hydrogeological Modeling of a Groundwater Basin"),
            leaf("Paleontological Study of a Fossil Site"),
            leaf("Geotechnical Engineering: Soil and Rock Mechanics"),
            leaf("Environmental Geology: Contaminant Transport Modeling"),
            leaf("Volcanology: Study of a Volcano's Eruptive History"),
            leaf("Project on a Study of a Local Geological Formation"),
            leaf("Project on a Study of a Local Mineral Deposit"),
            leaf("Project on a Study of a Local Geological Hazard"),
            leaf("Project on a Study of a Local Geological Feature"),
            leaf("Project on a Study of a Local Geological Resource"),
            leaf("Project on a Study of a Local Geological Map"),
            leaf("Project on a Study of a Local Geological Survey"),
            leaf("Project on a Study of a Local Geological Report"),
            leaf("Project on a Study of a Local Geological Model"),
            leaf("Project on a Study of a Local Geological Simulation"),
            leaf("Project on a Study of a Local Geological Analysis"),
            leaf("Project on a Study of a Local Geological Assessment"),
            leaf("Project on a Study of a Local Geological Impact"),
            leaf("Project on a Study of a Local Geological Risk"),
            leaf("Project on a Study of a Local Geological Problem"),
            leaf("Project on a Study of a Local Geological Solution"),
            leaf("Project on a Study of a Local Geological Policy"),
            leaf("Project on a Study of a Local Geological Law"),
            leaf("Project on a Study of a Local Geological Regulation"),
            leaf("Project on a Study of a Local Geological Standard"),
            leaf("Project on a Study of a Local Geological Guideline"),
            leaf("Project on a Study of a Local Geological Management Plan"),
            leaf("Project on a Study of a Local Geological Impact Assessment"),
            leaf("Project on a Study of a Local Geological Audit"),
            leaf("Project on a Study of a Local Geological Monitoring Program"),
            leaf("Project on a Study of a Local Geological Education Program"),
            leaf("Project on a Study of a Local Geological Research Project"),
            leaf("Project on a Study of a Local Geological Restoration Project"),
            leaf("Project on a Study of a Local Geological Conservation Project"),
            leaf("Project on a Study of a Local Geological Protection Project"),
            leaf("Project on a Study of a Local Geological Sustainability Project"),
            leaf("Project on a Study of a Local Geological Innovation Project"),
            leaf("Project on a Study of a Local Geological Technology Project"),
            leaf("Project on a Study of a Local Geological Design Project"),
            leaf("Project on a Study of a Local Geological Engineering Project"),
            leaf("Project on a Study of a Local Geological Science Project"),
            leaf("Project on a Study of a Local Geological Management System"),
            leaf("Project on a Study of a Local Geological Information System"),
            leaf("Project on a Study of a Local Geological Database"),
        ],
    },
    {
        name: "History",
        children: [
            leaf("Interactive Timeline of a Historical Period (e.g., Indian Independence)"),
            leaf("Digital Archive of Historical Documents from a Specific Era"),
            leaf("Historiographical Analysis of a Major Event (e.g., Partition of India)"),
            leaf("3D Modeling of an Ancient Site or Monument"),
            leaf("Oral History Project: Documenting the Lives of a Community"),
            leaf("Social History of a City or Town"),
            leaf("Cultural History of Food or Fashion in a Period"),
            leaf("Analysis of Propaganda in World War II"),
            leaf("Comparative Study of Two Historical Civilizations"),
            leaf("Project on a Study of a Local Historical Event"),
            leaf("Project on a Study of a Local Historical Person"),
            leaf("Project on a Study of a Local Historical Place"),
            leaf("Project on a Study of a Local Historical Document"),
            leaf("Project on a Study of a Local Historical Artifact"),
            leaf("Project on a Study of a Local Historical Building"),
            leaf("Project on a Study of a Local Historical Site"),
            leaf("Project on a Study of a Local Historical Landscape"),
            leaf("Project on a Study of a Local Historical Map"),
            leaf("Project on a Study of a Local Historical Survey"),
            leaf("Project on a Study of a Local Historical Report"),
            leaf("Project on a Study of a Local Historical Model"),
            leaf("Project on a Study of a Local Historical Simulation"),
            leaf("Project on a Study of a Local Historical Analysis"),
            leaf("Project on a Study of a Local Historical Assessment"),
            leaf("Project on a Study of a Local Historical Impact"),
            leaf("Project on a Study of a Local Historical Risk"),
            leaf("Project on a Study of a Local Historical Problem"),
            leaf("Project on a Study of a Local Historical Solution"),
            leaf("Project on a Study of a Local Historical Policy"),
            leaf("Project on a Study of a Local Historical Law"),
            leaf("Project on a Study of a Local Historical Regulation"),
            leaf("Project on a Study of a Local Historical Standard"),
            leaf("Project on a Study of a Local Historical Guideline"),
            leaf("Project on a Study of a Local Historical Management Plan"),
            leaf("Project on a Study of a Local Historical Impact Assessment"),
            leaf("Project on a Study of a Local Historical Audit"),
            leaf("Project on a Study of a Local Historical Monitoring Program"),
            leaf("Project on a Study of a Local Historical Education Program"),
            leaf("Project on a Study of a Local Historical Research Project"),
            leaf("Project on a Study of a Local Historical Restoration Project"),
            leaf("Project on a Study of a Local Historical Conservation Project"),
            leaf("Project on a Study of a Local Historical Protection Project"),
            leaf("Project on a Study of a Local Historical Sustainability Project"),
            leaf("Project on a Study of a Local Historical Innovation Project"),
            leaf("Project on a Study of a Local Historical Technology Project"),
            leaf("Project on a Study of a Local Historical Design Project"),
            leaf("Project on a Study of a Local Historical Engineering Project"),
            leaf("Project on a Study of a Local Historical Science Project"),
            leaf("Project on a Study of a Local Historical Management System"),
            leaf("Project on a Study of a Local Historical Information System"),
        ],
    },
    {
        name: "Information Technology (IT)",
        children: [
            leaf("Network Security Audit & Report for a Small Business"),
            leaf("Cloud Infrastructure Deployment on AWS/Azure"),
            leaf("Database Management System Design for a University"),
            leaf("IT Service Management (ITSM) Workflow Automation"),
            leaf("Disaster Recovery Plan for a Corporate Network"),
            leaf("DevOps Pipeline for a Web Application"),
            leaf("Implementation of a Cybersecurity Policy"),
            leaf("Data Center Design and Management"),
            leaf("IT Governance and Compliance Management"),
            leaf("Project on a Network Monitoring Tool"),
            leaf("Project on a System for a Small Business"),
            leaf("Project on a Database for a University"),
            leaf("Project on a Website for a Small Business"),
            leaf("Project on an E-commerce Website"),
            leaf("Project on a Mobile App for a Business"),
            leaf("Project on a Social Networking Site"),
            leaf("Project on a Job Portal Website"),
            leaf("Project on an E-learning Platform"),
            leaf("Project on a Hospital Management System"),
            leaf("Project on a Library Management System"),
            leaf("Project on a Student Information System"),
            leaf("Project on a Supply Chain Management System"),
            leaf("Project on a Customer Relationship Management (CRM) System"),
            leaf("Project on an Enterprise Resource Planning (ERP) System"),
            leaf("Project on a Business Intelligence Dashboard"),
            leaf("Project on a Data Warehouse Design"),
            leaf("Project on a Data Lake Implementation"),
            leaf("Project on a Big Data Processing Framework (e.g., Hadoop)"),
            leaf("Project on a Cloud Computing Solution"),
            leaf("Project on a Cybersecurity Solution"),
            leaf("Project on a Network Security Audit"),
            leaf("Project on a Penetration Testing Report"),
            leaf("Project on a Disaster Recovery Plan"),
            leaf("Project on an IT Service Management (ITSM) Workflow"),
            leaf("Project on an IT Governance and Compliance Management Plan"),
            leaf("Project on a Data Center Design"),
            leaf("Project on an IT Infrastructure Design"),
            leaf("Project on an IT Operations Management System"),
            leaf("Project on an IT Project Management Plan"),
            leaf("Project on an IT Budgeting and Financial Plan"),
            leaf("Project on an IT Human Resource Management Plan"),
            leaf("Project on an IT Marketing Plan"),
            leaf("Project on an IT Sales Plan"),
            leaf("Project on an IT Customer Service Plan"),
            leaf("Project on an IT Quality Management Plan"),
            leaf("Project on an IT Supply Chain Management Plan"),
        ],
    },
    {
        name: "Marketing Management",
        children: [
            leaf("Social Media Campaign Analytics Dashboard for a Brand"),
            leaf("Consumer Behavior Study on a Specific Product"),
            leaf("Brand Strategy & Positioning Plan for a Startup"),
            leaf("Market Segmentation Analysis for a Service Industry"),
            leaf("Digital Marketing Strategy for a Local Business"),
            leaf("SEO & Content Marketing Strategy for an E-commerce Site"),
            leaf("Marketing Plan for a New Product Launch"),
            leaf("Impact of Influencer Marketing on Consumer Purchase Decisions"),
            leaf("Competitive Analysis of the Fast-Moving Consumer Goods (FMCG) Sector"),
            leaf("Project on a Marketing Mix Analysis of a Product"),
            leaf("Project on a Marketing Plan for a Service"),
            leaf("Project on a Marketing Plan for a Non-Profit Organization"),
            leaf("Project on a Marketing Plan for a Political Campaign"),
            leaf("Project on a Marketing Plan for a Social Cause"),
            leaf("Project on a Marketing Plan for a Green Product"),
            leaf("Project on a Marketing Plan for a Luxury Brand"),
            leaf("Project on a Marketing Plan for a Technology Product"),
            leaf("Project on a Marketing Plan for a Food Product"),
            leaf("Project on a Marketing Plan for a Beverage Product"),
            leaf("Project on a Marketing Plan for an Automobile"),
            leaf("Project on a Marketing Plan for a Pharmaceutical Product"),
            leaf("Project on a Marketing Plan for a Software Product"),
            leaf("Project on a Marketing Plan for a Hardware Product"),
            leaf("Project on a Marketing Plan for a Retail Store"),
            leaf("Project on a Marketing Plan for a Wholesale Business"),
            leaf("Project on a Marketing Plan for a Logistics Company"),
            leaf("Project on a Marketing Plan for a Real Estate Company"),
            leaf("Project on a Marketing Plan for a Construction Company"),
            leaf("Project on a Marketing Plan for a Manufacturing Company"),
            leaf("Project on a Marketing Plan for a Service-Based Business"),
            leaf("Project on a Marketing Plan for a Home-Based Business"),
            leaf("Project on a Marketing Plan for an E-commerce Business"),
            leaf("Project on a Marketing Plan for a Startup"),
            leaf("Project on a Marketing Plan for a Small Business"),
            leaf("Project on a Marketing Plan for a Large Corporation"),
            leaf("Project on a Marketing Plan for a Multinational Corporation"),
            leaf("Project on a Marketing Plan for a Global Brand"),
            leaf("Project on a Marketing Plan for a Local Brand"),
            leaf("Project on a Marketing Plan for a Niche Market"),
            leaf("Project on a Marketing Plan for a Mass Market"),
            leaf("Project on a Marketing Plan for a B2B Market"),
            leaf("Project on a Marketing Plan for a B2C Market"),
            leaf("Project on a Marketing Plan for a C2C Market"),
            leaf("Project on a Marketing Plan for a C2B Market"),
            leaf("Project on a Marketing Plan for a B2B2C Market"),
        ],
    },
    {
        name: "Mass Communication",
        children: [
            leaf("Journalism Website with Content Management System and User Feedback"),
            leaf("Media Ethics & Law Case Study: A Controversial News Story"),
            leaf("Social Media Influence Analysis for a Political Campaign"),
            leaf("Public Relations Campaign Design for a Non-Profit Organization"),
            leaf("Impact of Fake News on Public Opinion"),
            leaf("Film Analysis: A Study of Cinematography and Storytelling"),
            leaf("Development of a Short Film or Documentary"),
            leaf("Audience Research for a Television Program"),
            leaf("History of Radio Broadcasting in a Country"),
            leaf("Project on a Study of a News Channel"),
            leaf("Project on a Study of a Newspaper"),
            leaf("Project on a Study of a Magazine"),
            leaf("Project on a Study of a Radio Station"),
            leaf("Project on a Study of a Television Channel"),
            leaf("Project on a Study of a Film Production Company"),
            leaf("Project on a Study of a Public Relations Agency"),
            leaf("Project on a Study of an Advertising Agency"),
            leaf("Project on a Study of a Digital Marketing Agency"),
            leaf("Project on a Study of a Social Media Platform"),
            leaf("Project on a Study of a Blog"),
            leaf("Project on a Study of a Podcast"),
            leaf("Project on a Study of a YouTube Channel"),
            leaf("Project on a Study of an Instagram Account"),
            leaf("Project on a Study of a Twitter Account"),
            leaf("Project on a Study of a TikTok Account"),
            leaf("Project on a Study of a Public Figure's Social Media"),
            leaf("Project on a Study of a Brand's Social Media"),
            leaf("Project on a Study of a Corporate Social Media"),
            leaf("Project on a Study of a Government Social Media"),
            leaf("Project on a Study of a Non-Profit Social Media"),
            leaf("Project on a Study of a News Media Social Media"),
            leaf("Project on a Study of a Political Social Media"),
            leaf("Project on a Study of a Social Movement's Social Media"),
            leaf("Project on a Study of a Crisis Communication Plan"),
            leaf("Project on a Study of a Public Opinion Poll"),
            leaf("Project on a Study of a Media Campaign"),
            leaf("Project on a Study of a Public Relations Campaign"),
            leaf("Project on a Study of an Advertising Campaign"),
            leaf("Project on a Study of a Digital Marketing Campaign"),
            leaf("Project on a Study of a Social Media Campaign"),
            leaf("Project on a Study of a Political Campaign"),
            leaf("Project on a Study of a Social Cause Campaign"),
            leaf("Project on a Study of a Green Campaign"),
            leaf("Project on a Study of a Luxury Brand Campaign"),
            leaf("Project on a Study of a Technology Product Campaign"),
        ],
    },
    {
        name: "Mathematics",
        children: [
            leaf("Cryptography Algorithm Implementation (e.g., RSA)"),
            leaf("Predictive Model using Regression Analysis for a Real-World Dataset"),
            leaf("Numerical Simulation of a Physical System (e.g., Projectile Motion)"),
            leaf("Graph Theory Application for Optimal Routing"),
            leaf("Mathematical Modeling of a Biological System"),
            leaf("Study of Chaos Theory and its Applications"),
            leaf("Optimization Algorithms for Resource Allocation"),
            leaf("Monte Carlo Simulation for Financial Risk Assessment"),
            leaf("Abstract Algebra: Group Theory and its Applications"),
            leaf("Project on a Study of a Mathematical Theorem"),
            leaf("Project on a Study of a Mathematical Problem"),
            leaf("Project on a Study of a Mathematical Concept"),
            leaf("Project on a Study of a Mathematical Method"),
            leaf("Project on a Study of a Mathematical Model"),
            leaf("Project on a Study of a Mathematical Simulation"),
            leaf("Project on a Study of a Mathematical Analysis"),
            leaf("Project on a Study of a Mathematical Assessment"),
            leaf("Project on a Study of a Mathematical Impact"),
            leaf("Project on a Study of a Mathematical Risk"),
            leaf("Project on a Study of a Mathematical Problem"),
            leaf("Project on a Study of a Mathematical Solution"),
            leaf("Project on a Study of a Mathematical Policy"),
            leaf("Project on a Study of a Mathematical Law"),
            leaf("Project on a Study of a Mathematical Regulation"),
            leaf("Project on a Study of a Mathematical Standard"),
            leaf("Project on a Study of a Mathematical Guideline"),
            leaf("Project on a Study of a Mathematical Management Plan"),
            leaf("Project on a Study of a Mathematical Impact Assessment"),
            leaf("Project on a Study of a Mathematical Audit"),
            leaf("Project on a Study of a Mathematical Monitoring Program"),
            leaf("Project on a Study of a Mathematical Education Program"),
            leaf("Project on a Study of a Mathematical Research Project"),
            leaf("Project on a Study of a Mathematical Restoration Project"),
            leaf("Project on a Study of a Mathematical Conservation Project"),
            leaf("Project on a Study of a Mathematical Protection Project"),
            leaf("Project on a Study of a Mathematical Sustainability Project"),
            leaf("Project on a Study of a Mathematical Innovation Project"),
            leaf("Project on a Study of a Mathematical Technology Project"),
            leaf("Project on a Study of a Mathematical Design Project"),
            leaf("Project on a Study of a Mathematical Engineering Project"),
            leaf("Project on a Study of a Mathematical Science Project"),
            leaf("Project on a Study of a Mathematical Management System"),
            leaf("Project on a Study of a Mathematical Information System"),
            leaf("Project on a Study of a Mathematical Database"),
            leaf("Project on a Study of a Mathematical Model"),
            leaf("Project on a Study of a Mathematical Simulation"),
            leaf("Project on a Study of a Mathematical Analysis"),
        ],
    },
    {
        name: "Microbiology",
        children: [
            leaf("Bacterial Growth Simulation Model with Environmental Factors"),
            leaf("Antimicrobial Resistance Study in a Clinical Setting"),
            leaf("Microbiome Data Analysis Pipeline from a Soil Sample"),
            leaf("Fermentation Process Optimization for Probiotic Production"),
            leaf("Identification of a Novel Microorganism from a Water Source"),
            leaf("Study of Biofilm Formation and Control Strategies"),
            leaf("Role of Microbes in Waste Water Treatment"),
            leaf("Genomic Analysis of a Microbe of Industrial Importance"),
            leaf("Production of Bio-Pesticides using Fungi"),
            leaf("Project on the Study of a Local Microorganism"),
            leaf("Project on the Study of a Local Microbial Community"),
            leaf("Project on the Study of a Local Microbial Habitat"),
            leaf("Project on the Study of a Local Microbial Species"),
            leaf("Project on the Study of a Local Microbial Strain"),
            leaf("Project on the Study of a Local Microbial Culture"),
            leaf("Project on the Study of a Local Microbial Sample"),
            leaf("Project on the Study of a Local Microbial Collection"),
            leaf("Project on the Study of a Local Microbial Database"),
            leaf("Project on the Study of a Local Microbial Model"),
            leaf("Project on the Study of a Local Microbial Simulation"),
            leaf("Project on the Study of a Local Microbial Analysis"),
            leaf("Project on the Study of a Local Microbial Assessment"),
            leaf("Project on the Study of a Local Microbial Impact"),
            leaf("Project on the Study of a Local Microbial Risk"),
            leaf("Project on the Study of a Local Microbial Problem"),
            leaf("Project on the Study of a Local Microbial Solution"),
            leaf("Project on the Study of a Local Microbial Policy"),
            leaf("Project on the Study of a Local Microbial Law"),
            leaf("Project on the Study of a Local Microbial Regulation"),
            leaf("Project on the Study of a Local Microbial Standard"),
            leaf("Project on the Study of a Local Microbial Guideline"),
            leaf("Project on the Study of a Local Microbial Management Plan"),
            leaf("Project on the Study of a Local Microbial Impact Assessment"),
            leaf("Project on the Study of a Local Microbial Audit"),
            leaf("Project on the Study of a Local Microbial Monitoring Program"),
            leaf("Project on the Study of a Local Microbial Education Program"),
            leaf("Project on the Study of a Local Microbial Research Project"),
            leaf("Project on the Study of a Local Microbial Restoration Project"),
            leaf("Project on the Study of a Local Microbial Conservation Project"),
            leaf("Project on the Study of a Local Microbial Protection Project"),
            leaf("Project on the Study of a Local Microbial Sustainability Project"),
            leaf("Project on the Study of a Local Microbial Innovation Project"),
            leaf("Project on the Study of a Local Microbial Technology Project"),
            leaf("Project on the Study of a Local Microbial Design Project"),
            leaf("Project on the Study of a Local Microbial Engineering Project"),
            leaf("Project on the Study of a Local Microbial Science Project"),
            leaf("Project on the Study of a Local Microbial Management System"),
            leaf("Project on the Study of a Local Microbial Information System"),
        ],
    },
    {
        name: "Nursing (B.Sc Nursing)",
        children: [
            leaf("Patient Health Monitoring System using IoT sensors"),
            leaf("Nursing Staff Shift Scheduling App with AI Optimization"),
            leaf("Disease Outbreak Tracking Dashboard for a Public Health Authority"),
            leaf("Telehealth Platform for Patient Consultations and Remote Monitoring"),
            leaf("E-learning Module for Nursing Students on a Specific Medical Procedure"),
            leaf("Study on the Impact of Nurse-Patient Ratio on Patient Outcomes"),
            leaf("Patient Fall Prediction System using Machine Learning"),
            leaf("Medication Adherence Tracker App for Chronic Disease Patients"),
            leaf("Pain Management System for Post-Operative Patients"),
            leaf("Project on a Study of a Local Nursing Home"),
            leaf("Project on a Study of a Local Hospital"),
            leaf("Project on a Study of a Local Clinic"),
            leaf("Project on a Study of a Local Health Center"),
            leaf("Project on a Study of a Local Nursing School"),
            leaf("Project on a Study of a Local Nursing Program"),
            leaf("Project on a Study of a Local Nursing Curriculum"),
            leaf("Project on a Study of a Local Nursing Student"),
            leaf("Project on a Study of a Local Nurse"),
            leaf("Project on a Study of a Local Patient"),
            leaf("Project on a Study of a Local Disease"),
            leaf("Project on a Study of a Local Health Problem"),
            leaf("Project on a Study of a Local Health Solution"),
            leaf("Project on a Study of a Local Health Policy"),
            leaf("Project on a Study of a Local Health Law"),
            leaf("Project on a Study of a Local Health Regulation"),
            leaf("Project on a Study of a Local Health Standard"),
            leaf("Project on a Study of a Local Health Guideline"),
            leaf("Project on a Study of a Local Health Management Plan"),
            leaf("Project on a Study of a Local Health Impact Assessment"),
            leaf("Project on a Study of a Local Health Audit"),
            leaf("Project on a Study of a Local Health Monitoring Program"),
            leaf("Project on a Study of a Local Health Education Program"),
            leaf("Project on a Study of a Local Health Research Project"),
            leaf("Project on a Study of a Local Health Restoration Project"),
            leaf("Project on a Study of a Local Health Conservation Project"),
            leaf("Project on a Study of a Local Health Protection Project"),
            leaf("Project on a Study of a Local Health Sustainability Project"),
            leaf("Project on a Study of a Local Health Innovation Project"),
            leaf("Project on a Study of a Local Health Technology Project"),
            leaf("Project on a Study of a Local Health Design Project"),
            leaf("Project on a Study of a Local Health Engineering Project"),
            leaf("Project on a Study of a Local Health Science Project"),
            leaf("Project on a Study of a Local Health Management System"),
            leaf("Project on a Study of a Local Health Information System"),
            leaf("Project on a Study of a Local Health Database"),
            leaf("Project on a Study of a Local Health Model"),
            leaf("Project on a Study of a Local Health Simulation"),
            leaf("Project on a Study of a Local Health Analysis"),
            leaf("Project on a Study of a Local Health Assessment"),
            leaf("Project on a Study of a Local Health Impact"),
            leaf("Project on a Study of a Local Health Risk"),
        ],
    },
    {
        name: "Nutrition",
        children: [
            leaf("Nutritional Assessment Tool for a Specific Population"),
            leaf("Food-Sourced Nutrient Database and API"),
            leaf("Custom Meal Plan Generator for Various Dietary Needs"),
            leaf("Analysis of Public Health Nutrition Trends in a State"),
            leaf("Impact of Fad Diets on Adolescent Health"),
            leaf("Nutritional Interventions for Anemia in Women"),
            leaf("Food Safety and Quality Assurance System for a Food Business"),
            leaf("Dietary Management of Chronic Diseases"),
            leaf("Role of Micronutrients in Cognitive Function"),
            leaf("Project on a Study of a Local Food Product"),
            leaf("Project on a Study of a Local Food Service"),
            leaf("Project on a Study of a Local Nutritional Program"),
            leaf("Project on a Study of a Local Nutritional Policy"),
            leaf("Project on a Study of a Local Nutritional Law"),
            leaf("Project on a Study of a Local Nutritional Regulation"),
            leaf("Project on a Study of a Local Nutritional Standard"),
            leaf("Project on a Study of a Local Nutritional Guideline"),
            leaf("Project on a Study of a Local Nutritional Management Plan"),
            leaf("Project on a Study of a Local Nutritional Impact Assessment"),
            leaf("Project on a Study of a Local Nutritional Audit"),
            leaf("Project on a Study of a Local Nutritional Monitoring Program"),
            leaf("Project on a Study of a Local Nutritional Education Program"),
            leaf("Project on a Study of a Local Nutritional Research Project"),
            leaf("Project on a Study of a Local Nutritional Restoration Project"),
            leaf("Project on a Study of a Local Nutritional Conservation Project"),
            leaf("Project on a Study of a Local Nutritional Protection Project"),
            leaf("Project on a Study of a Local Nutritional Sustainability Project"),
            leaf("Project on a Study of a Local Nutritional Innovation Project"),
            leaf("Project on a Study of a Local Nutritional Technology Project"),
            leaf("Project on a Study of a Local Nutritional Design Project"),
            leaf("Project on a Study of a Local Nutritional Engineering Project"),
            leaf("Project on a Study of a Local Nutritional Science Project"),
            leaf("Project on a Study of a Local Nutritional Management System"),
            leaf("Project on a Study of a Local Nutritional Information System"),
            leaf("Project on a Study of a Local Nutritional Database"),
            leaf("Project on a Study of a Local Nutritional Model"),
            leaf("Project on a Study of a Local Nutritional Simulation"),
            leaf("Project on a Study of a Local Nutritional Analysis"),
            leaf("Project on a Study of a Local Nutritional Assessment"),
            leaf("Project on a Study of a Local Nutritional Impact"),
            leaf("Project on a Study of a Local Nutritional Risk"),
            leaf("Project on a Study of a Local Nutritional Problem"),
            leaf("Project on a Study of a Local Nutritional Solution"),
            leaf("Project on a Study of a Local Nutritional Policy"),
            leaf("Project on a Study of a Local Nutritional Law"),
        ],
    },
    {
        name: "Paramedical Sciences",
        children: [
            leaf("First-Aid Training Simulation using Virtual Reality"),
            leaf("Medical Device Inventory System for a Clinical Lab"),
            leaf("Patient Vitals Monitoring App with Emergency Alerts"),
            leaf("E-learning Module for Paramedical Skills (e.g., Phlebotomy)"),
            leaf("Analysis of Ambulance Service Response Times"),
            leaf("Automated ECG Signal Analysis for Cardiac Health"),
            leaf("Clinical Lab Management System for Sample Tracking"),
            leaf("Study on the Impact of Tele-paramedicine on Rural Healthcare"),
            leaf("Project on a Study of a Local Hospital's Paramedical Services"),
            leaf("Project on a Study of a Local Clinic's Paramedical Services"),
            leaf("Project on a Study of a Local Health Center's Paramedical Services"),
            leaf("Project on a Study of a Local Nursing Home's Paramedical Services"),
            leaf("Project on a Study of a Local Ambulance Service"),
            leaf("Project on a Study of a Local Medical Lab"),
            leaf("Project on a Study of a Local Medical Device Company"),
            leaf("Project on a Study of a Local Medical Equipment Company"),
            leaf("Project on a Study of a Local Medical Supplies Company"),
            leaf("Project on a Study of a Local Paramedical School"),
            leaf("Project on a Study of a Local Paramedical Program"),
            leaf("Project on a Study of a Local Paramedical Curriculum"),
            leaf("Project on a Study of a Local Paramedical Student"),
            leaf("Project on a Study of a Local Paramedic"),
            leaf("Project on a Study of a Local Patient"),
            leaf("Project on a Study of a Local Disease"),
            leaf("Project on a Study of a Local Health Problem"),
            leaf("Project on a Study of a Local Health Solution"),
            leaf("Project on a Study of a Local Health Policy"),
            leaf("Project on a Study of a Local Health Law"),
            leaf("Project on a Study of a Local Health Regulation"),
            leaf("Project on a Study of a Local Health Standard"),
            leaf("Project on a Study of a Local Health Guideline"),
            leaf("Project on a Study of a Local Health Management Plan"),
            leaf("Project on a Study of a Local Health Impact Assessment"),
            leaf("Project on a Study of a Local Health Audit"),
            leaf("Project on a Study of a Local Health Monitoring Program"),
            leaf("Project on a Study of a Local Health Education Program"),
            leaf("Project on a Study of a Local Health Research Project"),
            leaf("Project on a Study of a Local Health Restoration Project"),
            leaf("Project on a Study of a Local Health Conservation Project"),
            leaf("Project on a Study of a Local Health Protection Project"),
            leaf("Project on a Study of a Local Health Sustainability Project"),
            leaf("Project on a Study of a Local Health Innovation Project"),
            leaf("Project on a Study of a Local Health Technology Project"),
            leaf("Project on a Study of a Local Health Design Project"),
            leaf("Project on a Study of a Local Health Engineering Project"),
            leaf("Project on a Study of a Local Health Science Project"),
            leaf("Project on a Study of a Local Health Management System"),
            leaf("Project on a Study of a Local Health Information System"),
        ],
    },
    {
        name: "Pharmacy (B.Pharm)",
        children: [
            leaf("Drug-Drug Interaction Checker App for Pharmacists"),
            leaf("Pharmacokinetics Modeling of a New Drug Candidate"),
            leaf("Drug Inventory Management System for a Retail Pharmacy"),
            leaf("Patient Medication Adherence Tracker App with Reminders"),
            leaf("Study of Herbal Medicines and their Efficacy"),
            leaf("Analysis of Drug Formulation and Delivery Systems"),
            leaf("Development of a Pharmaceutical Quality Control System"),
            leaf("Role of Pharmacogenomics in Personalized Medicine"),
            leaf("Biotechnology in Drug Manufacturing"),
            leaf("Project on a Study of a Local Pharmacy"),
            leaf("Project on a Study of a Local Pharmaceutical Company"),
            leaf("Project on a Study of a Local Drugstore"),
            leaf("Project on a Study of a Local Medical Store"),
            leaf("Project on a Study of a Local Hospital Pharmacy"),
            leaf("Project on a Study of a Local Clinic Pharmacy"),
            leaf("Project on a Study of a Local Health Center Pharmacy"),
            leaf("Project on a Study of a Local Pharmaceutical School"),
            leaf("Project on a Study of a Local Pharmaceutical Program"),
            leaf("Project on a Study of a Local Pharmaceutical Curriculum"),
            leaf("Project on a Study of a Local Pharmaceutical Student"),
            leaf("Project on a Study of a Local Pharmacist"),
            leaf("Project on a Study of a Local Patient"),
            leaf("Project on a Study of a Local Drug"),
            leaf("Project on a Study of a Local Health Problem"),
            leaf("Project on a Study of a Local Health Solution"),
            leaf("Project on a Study of a Local Health Policy"),
            leaf("Project on a Study of a Local Health Law"),
            leaf("Project on a Study of a Local Health Regulation"),
            leaf("Project on a Study of a Local Health Standard"),
            leaf("Project on a Study of a Local Health Guideline"),
            leaf("Project on a Study of a Local Health Management Plan"),
            leaf("Project on a Study of a Local Health Impact Assessment"),
            leaf("Project on a Study of a Local Health Audit"),
            leaf("Project on a Study of a Local Health Monitoring Program"),
            leaf("Project on a Study of a Local Health Education Program"),
            leaf("Project on a Study of a Local Health Research Project"),
            leaf("Project on a Study of a Local Health Restoration Project"),
            leaf("Project on a Study of a Local Health Conservation Project"),
            leaf("Project on a Study of a Local Health Protection Project"),
            leaf("Project on a Study of a Local Health Sustainability Project"),
            leaf("Project on a Study of a Local Health Innovation Project"),
            leaf("Project on a Study of a Local Health Technology Project"),
            leaf("Project on a Study of a Local Health Design Project"),
            leaf("Project on a Study of a Local Health Engineering Project"),
            leaf("Project on a Study of a Local Health Science Project"),
            leaf("Project on a Study of a Local Health Management System"),
            leaf("Project on a Study of a Local Health Information System"),
        ],
    },
    {
        name: "Philosophy",
        children: [
            leaf("AI Ethics & Moral Reasoning Study: Developing an Ethical Framework"),
            leaf("Analysis of a Philosophical Text (e.g., Plato's Republic)"),
            leaf("Interactive Logic Puzzles Website for Learning Fallacies"),
            leaf("Philosophy of Mind & Consciousness: A Comparative Analysis"),
            leaf("Study of Political Philosophy and its Impact on Governance"),
            leaf("Epistemology: The Problem of Knowledge and Belief"),
            leaf("Metaphysics: The Nature of Reality and Existence"),
            leaf("Aesthetics: The Philosophy of Art and Beauty"),
            leaf("Applied Ethics: A Case Study on a Contemporary Moral Issue"),
            leaf("Project on a Study of a Local Philosophical Society"),
            leaf("Project on a Study of a Local Philosophical Group"),
            leaf("Project on a Study of a Local Philosophical Club"),
            leaf("Project on a Study of a Local Philosophical Discussion"),
            leaf("Project on a Study of a Local Philosophical Debate"),
            leaf("Project on a Study of a Local Philosophical Lecture"),
            leaf("Project on a Study of a Local Philosophical Seminar"),
            leaf("Project on a Study of a Local Philosophical Workshop"),
            leaf("Project on a Study of a Local Philosophical Conference"),
            leaf("Project on a Study of a Local Philosophical Journal"),
            leaf("Project on a Study of a Local Philosophical Magazine"),
            leaf("Project on a Study of a Local Philosophical Newspaper"),
            leaf("Project on a Study of a Local Philosophical Website"),
            leaf("Project on a Study of a Local Philosophical Blog"),
            leaf("Project on a Study of a Local Philosophical Podcast"),
            leaf("Project on a Study of a Local Philosophical YouTube Channel"),
            leaf("Project on a Study of a Local Philosophical Instagram Account"),
            leaf("Project on a Study of a Local Philosophical Twitter Account"),
            leaf("Project on a Study of a Local Philosophical TikTok Account"),
            leaf("Project on a Study of a Local Philosophical Social Media"),
            leaf("Project on a Study of a Local Philosophical Discussion"),
            leaf("Project on a Study of a Local Philosophical Debate"),
            leaf("Project on a Study of a Local Philosophical Lecture"),
            leaf("Project on a Study of a Local Philosophical Seminar"),
            leaf("Project on a Study of a Local Philosophical Workshop"),
            leaf("Project on a Study of a Local Philosophical Conference"),
            leaf("Project on a Study of a Local Philosophical Journal"),
            leaf("Project on a Study of a Local Philosophical Magazine"),
            leaf("Project on a Study of a Local Philosophical Newspaper"),
            leaf("Project on a Study of a Local Philosophical Website"),
            leaf("Project on a Study of a Local Philosophical Blog"),
            leaf("Project on a Study of a Local Philosophical Podcast"),
            leaf("Project on a Study of a Local Philosophical YouTube Channel"),
            leaf("Project on a Study of a Local Philosophical Instagram Account"),
            leaf("Project on a Study of a Local Philosophical Twitter Account"),
            leaf("Project on a Study of a Local Philosophical TikTok Account"),
            leaf("Project on a Study of a Local Philosophical Social Media"),
        ],
    },
    {
        name: "Physics",
        children: [
            leaf("Orbital Mechanics Simulation of a Planetary System"),
            leaf("Quantum Computing Basics Simulator and Quantum Gates"),
            leaf("Optics Ray Tracing Engine for Lens Design"),
            leaf("Particle Physics Data Analysis from a Collider Experiment"),
            leaf("Mathematical Modeling of a Physical System"),
            leaf("Study of Thermodynamics and Heat Engines"),
            leaf("Acoustics: Sound Wave Propagation Simulation"),
            leaf("Study of Electromagnetism and Circuits"),
            leaf("Astrophysics: Stellar Evolution Simulation"),
            leaf("Project on a Study of a Local Physical Phenomenon"),
            leaf("Project on a Study of a Local Physical System"),
            leaf("Project on a Study of a Local Physical Problem"),
            leaf("Project on a Study of a Local Physical Solution"),
            leaf("Project on a Study of a Local Physical Policy"),
            leaf("Project on a Study of a Local Physical Law"),
            leaf("Project on a Study of a Local Physical Regulation"),
            leaf("Project on a Study of a Local Physical Standard"),
            leaf("Project on a Study of a Local Physical Guideline"),
            leaf("Project on a Study of a Local Physical Management Plan"),
            leaf("Project on a Study of a Local Physical Impact Assessment"),
            leaf("Project on a Study of a Local Physical Audit"),
            leaf("Project on a Study of a Local Physical Monitoring Program"),
            leaf("Project on a Study of a Local Physical Education Program"),
            leaf("Project on a Study of a Local Physical Research Project"),
            leaf("Project on a Study of a Local Physical Restoration Project"),
            leaf("Project on a Study of a Local Physical Conservation Project"),
            leaf("Project on a Study of a Local Physical Protection Project"),
            leaf("Project on a Study of a Local Physical Sustainability Project"),
            leaf("Project on a Study of a Local Physical Innovation Project"),
            leaf("Project on a Study of a Local Physical Technology Project"),
            leaf("Project on a Study of a Local Physical Design Project"),
            leaf("Project on a Study of a Local Physical Engineering Project"),
            leaf("Project on a Study of a Local Physical Science Project"),
            leaf("Project on a Study of a Local Physical Management System"),
            leaf("Project on a Study of a Local Physical Information System"),
            leaf("Project on a Study of a Local Physical Database"),
            leaf("Project on a Study of a Local Physical Model"),
            leaf("Project on a Study of a Local Physical Simulation"),
            leaf("Project on a Study of a Local Physical Analysis"),
            leaf("Project on a Study of a Local Physical Assessment"),
            leaf("Project on a Study of a Local Physical Impact"),
            leaf("Project on a Study of a Local Physical Risk"),
            leaf("Project on a Study of a Local Physical Problem"),
            leaf("Project on a Study of a Local Physical Solution"),
            leaf("Project on a Study of a Local Physical Policy"),
            leaf("Project on a Study of a Local Physical Law"),
        ],
    },
    {
        name: "Political Science",
        children: [
            leaf("Election Polling Data Analysis and Voter Behavior"),
            leaf("Policy Analysis & Impact Assessment of a Government Scheme"),
            leaf("Comparative Government Study of Two Countries"),
            leaf("Digital Citizen Engagement Platform for Local Governance"),
            leaf("Analysis of Political Ideologies and their Historical Context"),
            leaf("Role of Social Media in Political Campaigns"),
            leaf("International Relations: A Case Study of a Diplomatic Crisis"),
            leaf("Study on the Impact of Lobbying on Public Policy"),
            leaf("Project on a Study of a Local Political Party"),
            leaf("Project on a Study of a Local Political Leader"),
            leaf("Project on a Study of a Local Political Campaign"),
            leaf("Project on a Study of a Local Political Issue"),
            leaf("Project on a Study of a Local Political Policy"),
            leaf("Project on a Study of a Local Political Law"),
            leaf("Project on a Study of a Local Political Regulation"),
            leaf("Project on a Study of a Local Political Standard"),
            leaf("Project on a Study of a Local Political Guideline"),
            leaf("Project on a Study of a Local Political Management Plan"),
            leaf("Project on a Study of a Local Political Impact Assessment"),
            leaf("Project on a Study of a Local Political Audit"),
            leaf("Project on a Study of a Local Political Monitoring Program"),
            leaf("Project on a Study of a Local Political Education Program"),
            leaf("Project on a Study of a Local Political Research Project"),
            leaf("Project on a Study of a Local Political Restoration Project"),
            leaf("Project on a Study of a Local Political Conservation Project"),
            leaf("Project on a Study of a Local Political Protection Project"),
            leaf("Project on a Study of a Local Political Sustainability Project"),
            leaf("Project on a Study of a Local Political Innovation Project"),
            leaf("Project on a Study of a Local Political Technology Project"),
            leaf("Project on a Study of a Local Political Design Project"),
            leaf("Project on a Study of a Local Political Engineering Project"),
            leaf("Project on a Study of a Local Political Science Project"),
            leaf("Project on a Study of a Local Political Management System"),
            leaf("Project on a Study of a Local Political Information System"),
            leaf("Project on a Study of a Local Political Database"),
            leaf("Project on a Study of a Local Political Model"),
            leaf("Project on a Study of a Local Political Simulation"),
            leaf("Project on a Study of a Local Political Analysis"),
            leaf("Project on a Study of a Local Political Assessment"),
            leaf("Project on a Study of a Local Political Impact"),
            leaf("Project on a Study of a Local Political Risk"),
            leaf("Project on a Study of a Local Political Problem"),
            leaf("Project on a Study of a Local Political Solution"),
            leaf("Project on a Study of a Local Political Policy"),
            leaf("Project on a Study of a Local Political Law"),
        ],
    },
    {
        name: "Psychology",
        children: [
            leaf("Cognitive Psychology Experiment Design on Memory Recall"),
            leaf("Stress & Anxiety Management App with Guided Meditation"),
            leaf("Behavioral Data Analysis using Python for User Habits"),
            leaf("Social Psychology Survey Tool for Group Dynamics"),
            leaf("Clinical Psychology: A Case Study on a Mental Health Disorder"),
            leaf("Developmental Psychology: Child Development Milestones"),
            leaf("Neuroscience of Decision-Making"),
            leaf("Organizational Psychology: Study on Workplace Morale"),
            leaf("Project on a Study of a Local Psychological Clinic"),
            leaf("Project on a Study of a Local Psychological Center"),
            leaf("Project on a Study of a Local Psychological Association"),
            leaf("Project on a Study of a Local Psychological Society"),
            leaf("Project on a Study of a Local Psychological Group"),
            leaf("Project on a Study of a Local Psychological Club"),
            leaf("Project on a Study of a Local Psychological Discussion"),
            leaf("Project on a Study of a Local Psychological Debate"),
            leaf("Project on a Study of a Local Psychological Lecture"),
            leaf("Project on a Study of a Local Psychological Seminar"),
            leaf("Project on a Study of a Local Psychological Workshop"),
            leaf("Project on a Study of a Local Psychological Conference"),
            leaf("Project on a Study of a Local Psychological Journal"),
            leaf("Project on a Study of a Local Psychological Magazine"),
            leaf("Project on a Study of a Local Psychological Newspaper"),
            leaf("Project on a Study of a Local Psychological Website"),
            leaf("Project on a Study of a Local Psychological Blog"),
            leaf("Project on a Study of a Local Psychological Podcast"),
            leaf("Project on a Study of a Local Psychological YouTube Channel"),
            leaf("Project on a Study of a Local Psychological Instagram Account"),
            leaf("Project on a Study of a Local Psychological Twitter Account"),
            leaf("Project on a Study of a Local Psychological TikTok Account"),
            leaf("Project on a Study of a Local Psychological Social Media"),
            leaf("Project on a Study of a Local Psychological Discussion"),
            leaf("Project on a Study of a Local Psychological Debate"),
            leaf("Project on a Study of a Local Psychological Lecture"),
            leaf("Project on a Study of a Local Psychological Seminar"),
            leaf("Project on a Study of a Local Psychological Workshop"),
            leaf("Project on a Study of a Local Psychological Conference"),
            leaf("Project on a Study of a Local Psychological Journal"),
            leaf("Project on a Study of a Local Psychological Magazine"),
            leaf("Project on a Study of a Local Psychological Newspaper"),
            leaf("Project on a Study of a Local Psychological Website"),
            leaf("Project on a Study of a Local Psychological Blog"),
            leaf("Project on a Study of a Local Psychological Podcast"),
            leaf("Project on a Study of a Local Psychological YouTube Channel"),
        ],
    },
    {
        name: "Public Administration",
        children: [
            leaf("Government Service Delivery Portal with Feedback System"),
            leaf("Public Policy Analysis & Evaluation of a Social Program"),
            leaf("E-governance System Prototype for a Local Municipality"),
            leaf("Urban Planning & Development Study for a City"),
            leaf("Study on the Impact of Bureaucracy on Public Service"),
            leaf("Public Financial Management and Budgeting Analysis"),
            leaf("Comparative Study of Public Administration in Two Countries"),
            leaf("Disaster Management and Preparedness Plan for a Region"),
            leaf("Project on a Study of a Local Government Department"),
            leaf("Project on a Study of a Local Government Agency"),
            leaf("Project on a Study of a Local Government Policy"),
            leaf("Project on a Study of a Local Government Program"),
            leaf("Project on a Study of a Local Government Project"),
            leaf("Project on a Study of a Local Government Service"),
            leaf("Project on a Study of a Local Government System"),
            leaf("Project on a Study of a Local Government Management"),
            leaf("Project on a Study of a Local Government Information System"),
            leaf("Project on a Study of a Local Government Database"),
            leaf("Project on a Study of a Local Government Model"),
            leaf("Project on a Study of a Local Government Simulation"),
            leaf("Project on a Study of a Local Government Analysis"),
            leaf("Project on a Study of a Local Government Assessment"),
            leaf("Project on a Study of a Local Government Impact"),
            leaf("Project on a Study of a Local Government Risk"),
            leaf("Project on a Study of a Local Government Problem"),
            leaf("Project on a Study of a Local Government Solution"),
            leaf("Project on a Study of a Local Government Policy"),
            leaf("Project on a Study of a Local Government Law"),
            leaf("Project on a Study of a Local Government Regulation"),
            leaf("Project on a Study of a Local Government Standard"),
            leaf("Project on a Study of a Local Government Guideline"),
            leaf("Project on a Study of a Local Government Management Plan"),
            leaf("Project on a Study of a Local Government Impact Assessment"),
            leaf("Project on a Study of a Local Government Audit"),
            leaf("Project on a Study of a Local Government Monitoring Program"),
            leaf("Project on a Study of a Local Government Education Program"),
            leaf("Project on a Study of a Local Government Research Project"),
            leaf("Project on a Study of a Local Government Restoration Project"),
            leaf("Project on a Study of a Local Government Conservation Project"),
            leaf("Project on a Study of a Local Government Protection Project"),
            leaf("Project on a Study of a Local Government Sustainability Project"),
            leaf("Project on a Study of a Local Government Innovation Project"),
            leaf("Project on a Study of a Local Government Technology Project"),
            leaf("Project on a Study of a Local Government Design Project"),
            leaf("Project on a Study of a Local Government Engineering Project"),
            leaf("Project on a Study of a Local Government Science Project"),
            leaf("Project on a Study of a Local Government Management System"),
            leaf("Project on a Study of a Local Government Information System"),
        ],
    },
    {
        name: "Public Health",
        children: [
            leaf("Disease Surveillance & Reporting System for a Local Health Authority"),
            leaf("Public Health Campaign Design for a Specific Health Issue"),
            leaf("Epidemiological Data Analysis of a Local Disease Outbreak"),
            leaf("Healthcare Resource Allocation Model for a Pandemic Scenario"),
            leaf("Community-Based Health Promotion Program"),
            leaf("Study on the Impact of Air Pollution on Respiratory Health"),
            leaf("Nutritional Assessment of a School-Going Population"),
            leaf("Water Sanitation and Hygiene (WASH) Project in a Rural Area"),
            leaf("Project on a Study of a Local Public Health Department"),
            leaf("Project on a Study of a Local Public Health Agency"),
            leaf("Project on a Study of a Local Public Health Policy"),
            leaf("Project on a Study of a Local Public Health Program"),
            leaf("Project on a Study of a Local Public Health Project"),
            leaf("Project on a Study of a Local Public Health Service"),
            leaf("Project on a Study of a Local Public Health System"),
            leaf("Project on a Study of a Local Public Health Management"),
            leaf("Project on a Study of a Local Public Health Information System"),
            leaf("Project on a Study of a Local Public Health Database"),
            leaf("Project on a Study of a Local Public Health Model"),
            leaf("Project on a Study of a Local Public Health Simulation"),
            leaf("Project on a Study of a Local Public Health Analysis"),
            leaf("Project on a Study of a Local Public Health Assessment"),
            leaf("Project on a Study of a Local Public Health Impact"),
            leaf("Project on a Study of a Local Public Health Risk"),
            leaf("Project on a Study of a Local Public Health Problem"),
            leaf("Project on a Study of a Local Public Health Solution"),
            leaf("Project on a Study of a Local Public Health Policy"),
            leaf("Project on a Study of a Local Public Health Law"),
            leaf("Project on a Study of a Local Public Health Regulation"),
            leaf("Project on a Study of a Local Public Health Standard"),
            leaf("Project on a Study of a Local Public Health Guideline"),
            leaf("Project on a Study of a Local Public Health Management Plan"),
            leaf("Project on a Study of a Local Public Health Impact Assessment"),
            leaf("Project on a Study of a Local Public Health Audit"),
            leaf("Project on a Study of a Local Public Health Monitoring Program"),
            leaf("Project on a Study of a Local Public Health Education Program"),
            leaf("Project on a Study of a Local Public Health Research Project"),
            leaf("Project on a Study of a Local Public Health Restoration Project"),
            leaf("Project on a Study of a Local Public Health Conservation Project"),
            leaf("Project on a Study of a Local Public Health Protection Project"),
            leaf("Project on a Study of a Local Public Health Sustainability Project"),
            leaf("Project on a Study of a Local Public Health Innovation Project"),
            leaf("Project on a Study of a Local Public Health Technology Project"),
            leaf("Project on a Study of a Local Public Health Design Project"),
            leaf("Project on a Study of a Local Public Health Engineering Project"),
            leaf("Project on a Study of a Local Public Health Science Project"),
        ],
    },
    {
        name: "Sales Management",
        children: [
            leaf("Sales Pipeline CRM & Analytics Dashboard"),
            leaf("Lead Generation Strategy & Automation for a Startup"),
            leaf("Customer Segmentation & Targeting for a Retail Store"),
            leaf("Sales Performance Dashboard with Key Metrics"),
            leaf("Analysis of Sales Forecasting Models"),
            leaf("Sales Team Training and Motivation Program"),
            leaf("Impact of Customer Relationship Management on Sales"),
            leaf("A/B Testing for Sales Funnel Optimization"),
            leaf("Project on a Study of a Local Sales Department"),
            leaf("Project on a Study of a Local Sales Team"),
            leaf("Project on a Study of a Local Sales Manager"),
            leaf("Project on a Study of a Local Salesperson"),
            leaf("Project on a Study of a Local Customer"),
            leaf("Project on a Study of a Local Product"),
            leaf("Project on a Study of a Local Service"),
            leaf("Project on a Study of a Local Sales Process"),
            leaf("Project on a Study of a Local Sales Strategy"),
            leaf("Project on a Study of a Local Sales Plan"),
            leaf("Project on a Study of a Local Sales Forecast"),
            leaf("Project on a Study of a Local Sales Budget"),
            leaf("Project on a Study of a Local Sales Report"),
            leaf("Project on a Study of a Local Sales Dashboard"),
            leaf("Project on a Study of a Local Sales System"),
            leaf("Project on a Study of a Local Sales Management System"),
            leaf("Project on a Study of a Local Sales Information System"),
            leaf("Project on a Study of a Local Sales Database"),
            leaf("Project on a Study of a Local Sales Model"),
            leaf("Project on a Study of a Local Sales Simulation"),
            leaf("Project on a Study of a Local Sales Analysis"),
            leaf("Project on a Study of a Local Sales Assessment"),
            leaf("Project on a Study of a Local Sales Impact"),
            leaf("Project on a Study of a Local Sales Risk"),
            leaf("Project on a Study of a Local Sales Problem"),
            leaf("Project on a Study of a Local Sales Solution"),
            leaf("Project on a Study of a Local Sales Policy"),
            leaf("Project on a Study of a Local Sales Law"),
            leaf("Project on a Study of a Local Sales Regulation"),
            leaf("Project on a Study of a Local Sales Standard"),
            leaf("Project on a Study of a Local Sales Guideline"),
            leaf("Project on a Study of a Local Sales Management Plan"),
            leaf("Project on a Study of a Local Sales Impact Assessment"),
            leaf("Project on a Study of a Local Sales Audit"),
            leaf("Project on a Study of a Local Sales Monitoring Program"),
            leaf("Project on a Study of a Local Sales Education Program"),
            leaf("Project on a Study of a Local Sales Research Project"),
            leaf("Project on a Study of a Local Sales Restoration Project"),
            leaf("Project on a Study of a Local Sales Conservation Project"),
        ],
    },
    {
        name: "Sociology",
        children: [
            leaf("Social Network Analysis of a Community Group"),
            leaf("Urban Sociology Case Study of a Gated Community"),
            leaf("Impact of Technology on Society: A Study of Social Media"),
            leaf("Survey Design & Data Collection on a Social Issue"),
            leaf("Sociology of Gender and its Representation in Media"),
            leaf("Study of Social Inequality and Stratification"),
            leaf("Research on Social Movements and Collective Action"),
            leaf("Family and Kinship Structures in a Modern Society"),
            leaf("Project on a Study of a Local Community"),
            leaf("Project on a Study of a Local Society"),
            leaf("Project on a Study of a Local Social Group"),
            leaf("Project on a Study of a Local Social Problem"),
            leaf("Project on a Study of a Local Social Solution"),
            leaf("Project on a Study of a Local Social Policy"),
            leaf("Project on a Study of a Local Social Law"),
            leaf("Project on a Study of a Local Social Regulation"),
            leaf("Project on a Study of a Local Social Standard"),
            leaf("Project on a Study of a Local Social Guideline"),
            leaf("Project on a Study of a Local Social Management Plan"),
            leaf("Project on a Study of a Local Social Impact Assessment"),
            leaf("Project on a Study of a Local Social Audit"),
            leaf("Project on a Study of a Local Social Monitoring Program"),
            leaf("Project on a Study of a Local Social Education Program"),
            leaf("Project on a Study of a Local Social Research Project"),
            leaf("Project on a Study of a Local Social Restoration Project"),
            leaf("Project on a Study of a Local Social Conservation Project"),
            leaf("Project on a Study of a Local Social Protection Project"),
            leaf("Project on a Study of a Local Social Sustainability Project"),
            leaf("Project on a Study of a Local Social Innovation Project"),
            leaf("Project on a Study of a Local Social Technology Project"),
            leaf("Project on a Study of a Local Social Design Project"),
            leaf("Project on a Study of a Local Social Engineering Project"),
            leaf("Project on a Study of a Local Social Science Project"),
            leaf("Project on a Study of a Local Social Management System"),
            leaf("Project on a Study of a Local Social Information System"),
            leaf("Project on a Study of a Local Social Database"),
            leaf("Project on a Study of a Local Social Model"),
            leaf("Project on a Study of a Local Social Simulation"),
            leaf("Project on a Study of a Local Social Analysis"),
            leaf("Project on a Study of a Local Social Assessment"),
            leaf("Project on a Study of a Local Social Impact"),
            leaf("Project on a Study of a Local Social Risk"),
            leaf("Project on a Study of a Local Social Problem"),
            leaf("Project on a Study of a Local Social Solution"),
            leaf("Project on a Study of a Local Social Policy"),
            leaf("Project on a Study of a Local Social Law"),
        ],
    },
    {
        name: "Statistics",
        children: [
            leaf("Statistical Modeling for Predictive Analysis of a Dataset"),
            leaf("Data Visualization Dashboard (R/Python) for a Survey"),
            leaf("A/B Testing for Website Optimization: A Statistical Approach"),
            leaf("Hypothesis Testing Simulation for a Clinical Trial"),
            leaf("Time-Series Analysis and Forecasting for Stock Prices"),
            leaf("Bayesian Statistics for Data Analysis and Inference"),
            leaf("Multivariate Analysis of a Social Science Dataset"),
            leaf("Machine Learning for Causal Inference"),
            leaf("Project on a Study of a Local Statistical Problem"),
            leaf("Project on a Study of a Local Statistical Solution"),
            leaf("Project on a Study of a Local Statistical Policy"),
            leaf("Project on a Study of a Local Statistical Law"),
            leaf("Project on a Study of a Local Statistical Regulation"),
            leaf("Project on a Study of a Local Statistical Standard"),
            leaf("Project on a Study of a Local Statistical Guideline"),
            leaf("Project on a Study of a Local Statistical Management Plan"),
            leaf("Project on a Study of a Local Statistical Impact Assessment"),
            leaf("Project on a Study of a Local Statistical Audit"),
            leaf("Project on a Study of a Local Statistical Monitoring Program"),
            leaf("Project on a Study of a Local Statistical Education Program"),
            leaf("Project on a Study of a Local Statistical Research Project"),
            leaf("Project on a Study of a Local Statistical Restoration Project"),
            leaf("Project on a Study of a Local Statistical Conservation Project"),
            leaf("Project on a Study of a Local Statistical Protection Project"),
            leaf("Project on a Study of a Local Statistical Sustainability Project"),
            leaf("Project on a Study of a Local Statistical Innovation Project"),
            leaf("Project on a Study of a Local Statistical Technology Project"),
            leaf("Project on a Study of a Local Statistical Design Project"),
            leaf("Project on a Study of a Local Statistical Engineering Project"),
            leaf("Project on a Study of a Local Statistical Science Project"),
            leaf("Project on a Study of a Local Statistical Management System"),
            leaf("Project on a Study of a Local Statistical Information System"),
            leaf("Project on a Study of a Local Statistical Database"),
            leaf("Project on a Study of a Local Statistical Model"),
            leaf("Project on a Study of a Local Statistical Simulation"),
            leaf("Project on a Study of a Local Statistical Analysis"),
            leaf("Project on a Study of a Local Statistical Assessment"),
            leaf("Project on a Study of a Local Statistical Impact"),
            leaf("Project on a Study of a Local Statistical Risk"),
            leaf("Project on a Study of a Local Statistical Problem"),
            leaf("Project on a Study of a Local Statistical Solution"),
            leaf("Project on a Study of a Local Statistical Policy"),
            leaf("Project on a Study of a Local Statistical Law"),
            leaf("Project on a Study of a Local Statistical Regulation"),
            leaf("Project on a Study of a Local Statistical Standard"),
            leaf("Project on a Study of a Local Statistical Guideline"),
        ],
    },
    {
        name: "Zoology",
        children: [
            leaf("Animal Behavior Monitoring System using Computer Vision"),
            leaf("Wildlife Conservation & Habitat Mapping using GIS and Drones"),
            leaf("Bio-acoustics Analysis of Animal Sounds for Species Identification"),
            leaf("Genomic Analysis of a Species for Evolutionary Study"),
            leaf("Study on the Impact of Urbanization on Avian Species"),
            leaf("Marine Biology: Coral Reef Health Assessment"),
            leaf("Entomology: Insect Pest Management in Agriculture"),
            leaf("Comparative Anatomy of Vertebrate Skeletons"),
            leaf("Project on the Reproductive Biology of a Mammal"),
            leaf("Project on the Feeding Ecology of a Carnivore"),
            leaf("Project on the Physiology of a Hibernating Animal"),
            leaf("Project on the Migration Patterns of Birds"),
            leaf("Project on the Genetics of a Species"),
            leaf("Project on a Wildlife Population Survey"),
            leaf("Project on the Effects of Climate Change on a Habitat"),
            leaf("Project on a Veterinary Clinic Management System"),
            leaf("Project on a Zoonotic Disease Outbreak Study"),
            leaf("Project on the Life Cycle of an Amphibian"),
            leaf("Project on a Study of Primate Behavior"),
            leaf("Project on the Ecology of a Pond Ecosystem"),
            leaf("Project on a Bird Migration Tracking System"),
            leaf("Project on the Role of Zoos in Conservation"),
            leaf("Project on a Study of a Marine Invertebrate"),
            leaf("Project on a Study of Animal Cognition"),
            leaf("Project on the Effects of Pollution on Aquatic Life"),
            leaf("Project on a Study of Reptile Behavior"),
            leaf("Project on a Study of a Fish Species"),
            leaf("Project on the Anatomy of a Bird's Wing"),
            leaf("Project on a Study of a Terrestrial Ecosystem"),
            leaf("Project on a Study of a Freshwater Ecosystem"),
            leaf("Project on a Study of a Marine Ecosystem"),
            leaf("Project on a Study of a Forest Ecosystem"),
            leaf("Project on a Study of a Desert Ecosystem"),
            leaf("Project on a Study of a Grassland Ecosystem"),
            leaf("Project on a Study of a Tundra Ecosystem"),
            leaf("Project on a Study of a Tropical Rainforest"),
            leaf("Project on a Study of a Temperate Forest"),
            leaf("Project on a Study of a Boreal Forest"),
            leaf("Project on a Study of a Coral Reef Ecosystem"),
            leaf("Project on a Study of a Wetland Ecosystem"),
            leaf("Project on a Study of an Estuary Ecosystem"),
            leaf("Project on a Study of a Coastal Ecosystem"),
            leaf("Project on a Study of a River Ecosystem"),
            leaf("Project on a Study of a Lake Ecosystem"),
            leaf("Project on a Study of a Glacier Ecosystem"),
            leaf("Project on a Study of a Volcano Ecosystem"),
            leaf("Project on a Study of a Cave Ecosystem"),
            leaf("Project on a Study of a Deep Sea Ecosystem"),
            leaf("Project on a Study of a Desert Ecosystem"),
            leaf("Project on a Study of a Mountain Ecosystem"),
        ],
    },
];


const PG_DATA = [
    {
        "name": "Accounting",
        "children": [
            {
                "name": "Financial Statement Analysis for Profitability Assessment"
            },
            {
                "name": "Cost-Volume-Profit Analysis for Decision Making"
            },
            {
                "name": "Auditing of Internal Controls and Fraud Detection"
            },
            {
                "name": "Blockchain Technology in Accounting and Auditing"
            },
            {
                "name": "Forensic Accounting Case Study: Detecting Financial Misconduct"
            },
            {
                "name": "Tax Planning and Management for Small Businesses"
            },
            {
                "name": "Implementation of a Cloud-Based Accounting System"
            },
            {
                "name": "Budgeting and Forecasting for a Startup"
            },
            {
                "name": "Analysis of IFRS vs. GAAP Reporting Standards"
            },
            {
                "name": "Working Capital Management Strategies"
            },
            {
                "name": "Automated Bookkeeping System using RPA"
            },
            {
                "name": "E-commerce Accounting Integration with ERP"
            },
            {
                "name": "Data Analytics for Expense Report Audits"
            },
            {
                "name": "Machine Learning Model for Predictive Accounting"
            },
            {
                "name": "Development of a Tax Calculator Web Application"
            },
            {
                "name": "Hospitality Sector Accounting Practices"
            },
            {
                "name": "Real Estate Investment Trust (REIT) Financial Analysis"
            },
            {
                "name": "Non-Profit Organization Fund Accounting"
            },
            {
                "name": "Agricultural Sector Cost Accounting"
            },
            {
                "name": "Manufacturing Overhead Allocation and Control"
            },
            {
                "name": "Ethical Considerations in Financial Reporting"
            },
            {
                "name": "The Impact of Big Data on Modern Auditing"
            },
            {
                "name": "Global Financial Reporting Standards Harmonization"
            },
            {
                "name": "Corporate Governance and Its Link to Financial Performance"
            },
            {
                "name": "Sustainability Reporting and its Impact on Investors"
            },
            {
                "name": "Project on Asset Valuation Techniques"
            },
            {
                "name": "Project on Inventory Management Systems"
            },
            {
                "name": "Project on Mergers and Acquisitions Accounting"
            },
            {
                "name": "Project on International Finance Reporting"
            },
            {
                "name": "Project on Capital Budgeting Analysis"
            },
            {
                "name": "Project on Payroll Management Automation"
            },
            {
                "name": "Project on Risk Management in Financial Institutions"
            },
            {
                "name": "Project on Financial Ratios and Benchmarking"
            },
            {
                "name": "Project on Enterprise Resource Planning (ERP) Systems"
            },
            {
                "name": "Project on Supply Chain Cost Optimization"
            },
            {
                "name": "Project on Investment Portfolio Analysis"
            },
            {
                "name": "Project on Treasury Management Functions"
            },
            {
                "name": "Project on Digital Currencies and Taxation"
            },
            {
                "name": "Project on Corporate Social Responsibility Accounting"
            },
            {
                "name": "Project on Performance Measurement in Organizations"
            },
            {
                "name": "Project on Cost Reduction Strategies"
            },
            {
                "name": "Project on Revenue Recognition Standards (ASC 606)"
            },
            {
                "name": "Project on Capital Market Efficiency Studies"
            },
            {
                "name": "Project on Hedge Fund Financial Reporting"
            },
            {
                "name": "Project on Venture Capital Accounting Practices"
            },
            {
                "name": "Project on Credit Risk Assessment Models"
            },
            {
                "name": "Project on Derivatives Accounting and Valuation"
            },
            {
                "name": "Project on Cash Flow Statement Analysis"
            },
            {
                "name": "Project on Public Sector Budgeting"
            },
            {
                "name": "Project on Financial Planning for Retirement"
            },
            {
                "name": "Project on Cloud Computing Financial Models"
            }
        ]
    },
    {
        "name": "Applied Economics",
        "children": [
            {
                "name": "Econometric Model for Predicting GDP Growth"
            },
            {
                "name": "Impact Analysis of Fiscal Policy on Inflation"
            },
            {
                "name": "Input-Output Analysis of a Regional Economy"
            },
            {
                "name": "Microeconomic Analysis of Market Structures and Firm Behavior"
            },
            {
                "name": "Labor Market Dynamics and Unemployment Analysis"
            },
            {
                "name": "International Trade Flows and Their Impact on National Economies"
            },
            {
                "name": "Applied Game Theory: Strategic Interactions in Oligopolies"
            },
            {
                "name": "Welfare Economics and Public Policy Evaluation"
            },
            {
                "name": "Behavioral Economics: Nudging Consumer Choices"
            },
            {
                "name": "Causal Inference in Program Evaluation"
            },
            {
                "name": "Natural Resource Economics and Environmental Policy"
            },
            {
                "name": "The Economics of Healthcare Systems"
            },
            {
                "name": "Financial Economics: Asset Pricing Models"
            },
            {
                "name": "Urban Economics and Housing Market Dynamics"
            },
            {
                "name": "Agricultural Economics: Supply and Demand Analysis"
            },
            {
                "name": "Economic Development in Developing Countries"
            },
            {
                "name": "Economic Inequality and Poverty Measurement"
            },
            {
                "name": "Econometrics of Panel Data and Time Series Analysis"
            },
            {
                "name": "Analysis of the Indian Economy and its Reforms"
            },
            {
                "name": "Project on the Economics of Education and Human Capital"
            },
            {
                "name": "Project on the Economics of Climate Change"
            },
            {
                "name": "Project on the Impact of Globalization on Local Industries"
            },
            {
                "name": "Project on Monetary Policy and Financial Stability"
            },
            {
                "name": "Project on Econometric Forecasting of Stock Prices"
            },
            {
                "name": "Project on Industrial Organization and Market Concentration"
            },
            {
                "name": "Project on the Economics of Migration"
            },
            {
                "name": "Project on Public Finance and Government Spending"
            },
            {
                "name": "Project on the Economics of Crime"
            },
            {
                "name": "Project on the Role of Technology in Economic Growth"
            },
            {
                "name": "Project on International Finance and Currency Exchange Rates"
            },
            {
                "name": "Project on the Economics of Happiness"
            },
            {
                "name": "Project on Experimental Economics and Decision Making"
            },
            {
                "name": "Project on Health Economics and Public Health Policy"
            },
            {
                "name": "Project on the Economics of Renewable Energy"
            },
            {
                "name": "Project on the Impact of Trade Wars on Global Trade"
            },
            {
                "name": "Project on the Economics of Social Networks"
            },
            {
                "name": "Project on the Role of the IMF and World Bank"
            },
            {
                "name": "Project on Financial Crisis and its Economic Impact"
            },
            {
                "name": "Project on Supply Chain Economics"
            },
            {
                "name": "Project on the Economics of Sports"
            },
            {
                "name": "Project on the Economics of Information"
            },
            {
                "name": "Project on the Economics of Natural Disasters"
            },
            {
                "name": "Project on the Role of Entrepreneurship in Economic Development"
            },
            {
                "name": "Project on the Economics of Tourism"
            },
            {
                "name": "Project on the Economics of Intellectual Property"
            },
            {
                "name": "Project on Regional Economic Development"
            },
            {
                "name": "Project on the Economics of Family"
            },
            {
                "name": "Project on the Economics of Law and Regulation"
            },
            {
                "name": "Project on the Economics of Climate Policy"
            }
        ]
    },
    {
        "name": "Applied Nutrition",
        "children": [
            {
                "name": "Personalized Diet Plan Generator for Athletes"
            },
            {
                "name": "Analysis of Public Health Nutrition Programs in India"
            },
            {
                "name": "Childhood Malnutrition Monitoring and Intervention System"
            },
            {
                "name": "Food Nutrient Database & API Development for App Integration"
            },
            {
                "name": "Dietary Interventions for Type 2 Diabetes Management"
            },
            {
                "name": "Role of Probiotics in Gut Health and Immunity"
            },
            {
                "name": "Analysis of Food Labeling and Consumer Awareness"
            },
            {
                "name": "Nutritional Requirements for Geriatric Populations"
            },
            {
                "name": "Impact of Veganism on Micronutrient Status"
            },
            {
                "name": "Developing a School Lunch Program for Nutritional Improvement"
            },
            {
                "name": "Nutritional Management of Chronic Kidney Disease"
            },
            {
                "name": "Eating Disorder Treatment and Nutritional Counseling"
            },
            {
                "name": "Assessing the Nutritional Needs of Pregnant Women"
            },
            {
                "name": "Impact of Fast Food Consumption on Adolescent Health"
            },
            {
                "name": "Designing a Diet Plan for Weight Loss and Management"
            },
            {
                "name": "Mobile App for Calorie and Macronutrient Tracking"
            },
            {
                "name": "AI-Based Food Recognition and Calorie Estimation"
            },
            {
                "name": "Sensor-Based System for Monitoring Hydration Levels"
            },
            {
                "name": "Data Analytics on Food Consumption Patterns in Urban Areas"
            },
            {
                "name": "VR Simulation for Nutritional Education"
            },
            {
                "name": "Project on Sport-Specific Nutrition for Endurance Athletes"
            },
            {
                "name": "Project on Food Safety and Hygiene Protocols"
            },
            {
                "name": "Project on the Effect of Organic Foods on Health"
            },
            {
                "name": "Project on Nutritional Deficiencies in Low-Income Groups"
            },
            {
                "name": "Project on the Role of Superfoods in a Balanced Diet"
            },
            {
                "name": "Project on Sustainable Diets and Environmental Impact"
            },
            {
                "name": "Project on Nutritional Counseling Techniques"
            },
            {
                "name": "Project on Food Allergies and Intolerances Management"
            },
            {
                "name": "Project on Food Preservation Techniques and Their Effects"
            },
            {
                "name": "Project on Designing a Menu for a Hospital Cafeteria"
            },
            {
                "name": "Project on the Impact of Processed Foods on Public Health"
            },
            {
                "name": "Project on Nutritional Guidelines for Different Lifestyles"
            },
            {
                "name": "Project on Herbal Supplements and Their Effects"
            },
            {
                "name": "Project on the Role of Vitamin D in Bone Health"
            },
            {
                "name": "Project on Carbohydrate and Protein Cycling in Diets"
            },
            {
                "name": "Project on the Effect of Sugar on Brain Function"
            },
            {
                "name": "Project on Mindful Eating and its Psychological Benefits"
            },
            {
                "name": "Project on the Impact of Fermented Foods on Gut Flora"
            },
            {
                "name": "Project on Nutritional Needs for a Ketogenic Diet"
            },
            {
                "name": "Project on Dietary Fiber and Digestive Health"
            },
            {
                "name": "Project on the Glycemic Index and Blood Sugar Control"
            },
            {
                "name": "Project on Community-Based Nutritional Programs"
            },
            {
                "name": "Project on the Use of Fortified Foods"
            },
            {
                "name": "Project on Food Additives and their Health Risks"
            },
            {
                "name": "Project on a Low-Salt Diet and Blood Pressure"
            },
            {
                "name": "Project on the Role of Iron in Anemia Prevention"
            },
            {
                "name": "Project on Omega-3 Fatty Acids and Heart Health"
            },
            {
                "name": "Project on Diet for Skin Health"
            },
            {
                "name": "Project on Nutritional Needs for Vegetarians"
            },
            {
                "name": "Project on Hydration and Cognitive Performance"
            }
        ]
    },
    {
        "name": "Biochemistry",
        "children": [
            {
                "name": "Protein-Ligand Interaction Visualization and Analysis"
            },
            {
                "name": "Enzyme Kinetics Simulation and Modeling"
            },
            {
                "name": "Metabolic Pathway Analysis Tool for Disease Prediction"
            },
            {
                "name": "Drug Discovery Pipeline Study with a focus on a specific disease"
            },
            {
                "name": "Molecular Cloning and Gene Expression Analysis"
            },
            {
                "name": "Study of DNA Replication and Repair Mechanisms"
            },
            {
                "name": "Protein Purification and Characterization Techniques"
            },
            {
                "name": "Analysis of Photosynthesis and Cellular Respiration"
            },
            {
                "name": "Bioinformatics Pipeline for Genome Annotation"
            },
            {
                "name": "Project on Lipid Metabolism and its Regulation"
            },
            {
                "name": "Project on Carbohydrate Metabolism Pathways"
            },
            {
                "name": "Project on Nucleic Acid Structure and Function"
            },
            {
                "name": "Project on Signal Transduction Pathways in Cells"
            },
            {
                "name": "Project on the Biochemistry of Hormones"
            },
            {
                "name": "Project on the Role of Vitamins and Minerals"
            },
            {
                "name": "Project on the Biochemistry of Neurotransmitters"
            },
            {
                "name": "Project on the Immune System and Antibody Production"
            },
            {
                "name": "Project on the Biochemistry of Cancer Cells"
            },
            {
                "name": "Project on the Effects of Toxins on Cellular Processes"
            },
            {
                "name": "Project on the Biochemistry of Aging"
            },
            {
                "name": "Project on the Use of Biosensors in Medicine"
            },
            {
                "name": "Project on the Biochemistry of Muscle Contraction"
            },
            {
                "name": "Project on the Role of Free Radicals in Disease"
            },
            {
                "name": "Project on Glycogen Synthesis and Degradation"
            },
            {
                "name": "Project on the Biochemistry of Vision"
            },
            {
                "name": "Project on the Structure and Function of Hemoglobin"
            },
            {
                "name": "Project on the Biochemistry of Plant Secondary Metabolites"
            },
            {
                "name": "Project on the Role of Enzymes in Industrial Processes"
            },
            {
                "name": "Project on the Biochemistry of DNA Damage and Repair"
            },
            {
                "name": "Project on the Biochemistry of Apoptosis"
            },
            {
                "name": "Project on the Role of RNA in Gene Regulation"
            },
            {
                "name": "Project on the Biochemistry of Photosynthesis"
            },
            {
                "name": "Project on the Effects of pH on Enzyme Activity"
            },
            {
                "name": "Project on the Use of Chromatography in Biochemistry"
            },
            {
                "name": "Project on the Biochemistry of Viral Replication"
            },
            {
                "name": "Project on the Structure of Antibodies"
            },
            {
                "name": "Project on the Role of ATP in Cellular Energy"
            },
            {
                "name": "Project on the Biochemistry of Blood Clotting"
            },
            {
                "name": "Project on the Role of Lipids in Cell Membranes"
            },
            {
                "name": "Project on the Biochemistry of Food Processing"
            },
            {
                "name": "Project on the Use of Bioinformatics in Drug Discovery"
            },
            {
                "name": "Project on the Role of Antioxidants in Health"
            },
            {
                "name": "Project on the Biochemistry of Photosynthesis and Respiration"
            },
            {
                "name": "Project on the Structure of Collagen"
            },
            {
                "name": "Project on the Role of Chaperones in Protein Folding"
            },
            {
                "name": "Project on the Biochemistry of Photosynthesis in Algae"
            },
            {
                "name": "Project on the Use of Spectroscopy in Biochemistry"
            },
            {
                "name": "Project on the Role of Calcium in Cellular Signaling"
            },
            {
                "name": "Project on the Biochemistry of Fermentation"
            },
            {
                "name": "Project on the Role of Phosphorylation in Signaling"
            }
        ]
    },
    {
        "name": "Bioinformatics",
        "children": [
            {
                "name": "Genomic Sequence Analysis for Disease Markers"
            },
            {
                "name": "Protein Structure Prediction using Computational Models"
            },
            {
                "name": "Phylogenetic Tree Construction and Evolutionary Analysis"
            },
            {
                "name": "Drug-Target Interaction Prediction using Machine Learning"
            },
            {
                "name": "RNA-Seq Data Analysis for Gene Expression Profiling"
            },
            {
                "name": "Developing a Bioinformatics Pipeline for Variant Calling"
            },
            {
                "name": "Analysis of Microbiome Data for Health and Disease"
            },
            {
                "name": "Database Development for a Specific Biological Dataset"
            },
            {
                "name": "Structural Bioinformatics of Membrane Proteins"
            },
            {
                "name": "Metagenomic Analysis of Environmental Samples"
            },
            {
                "name": "Project on Comparative Genomics of Different Species"
            },
            {
                "name": "Project on Functional Annotation of a Newly Sequenced Genome"
            },
            {
                "name": "Project on Network Analysis of Protein-Protein Interactions"
            },
            {
                "name": "Project on Cancer Genomics and Mutational Analysis"
            },
            {
                "name": "Project on the Use of Artificial Intelligence in Drug Discovery"
            },
            {
                "name": "Project on Epigenetic Data Analysis"
            },
            {
                "name": "Project on Molecular Dynamics Simulation of a Protein"
            },
            {
                "name": "Project on Clinical Data Analysis for Personalized Medicine"
            },
            {
                "name": "Project on Long Non-Coding RNA Analysis"
            },
            {
                "name": "Project on Single-Cell RNA Sequencing Data Analysis"
            },
            {
                "name": "Project on Transcriptome Analysis of a Plant"
            },
            {
                "name": "Project on the Use of Machine Learning for Gene Prediction"
            },
            {
                "name": "Project on Drug Repurposing using Bioinformatics"
            },
            {
                "name": "Project on the Analysis of Viral Genomes"
            },
            {
                "name": "Project on the Bioinformatics of Antimicrobial Resistance"
            },
            {
                "name": "Project on Immunoinformatics and Vaccine Design"
            },
            {
                "name": "Project on DNA Barcoding for Species Identification"
            },
            {
                "name": "Project on Comparative Transcriptomics"
            },
            {
                "name": "Project on Protein-Ligand Docking"
            },
            {
                "name": "Project on Analysis of Genomic Big Data"
            },
            {
                "name": "Project on the Use of Python for Bioinformatics"
            },
            {
                "name": "Project on the Bioinformatics of Human Genetic Diseases"
            },
            {
                "name": "Project on the Analysis of Gene Regulatory Networks"
            },
            {
                "name": "Project on the Role of Non-Coding DNA"
            },
            {
                "name": "Project on Genome Assembly and Annotation"
            },
            {
                "name": "Project on the Design of Primers for PCR"
            },
            {
                "name": "Project on the Use of R for Statistical Genomics"
            },
            {
                "name": "Project on the Bioinformatics of Plant Genomes"
            },
            {
                "name": "Project on the Role of Telomeres in Aging"
            },
            {
                "name": "Project on Bioinformatics in Forensic Science"
            },
            {
                "name": "Project on the Analysis of Single Nucleotide Polymorphisms (SNPs)"
            },
            {
                "name": "Project on Microarray Data Analysis"
            },
            {
                "name": "Project on the Bioinformatics of Pathogen Evolution"
            },
            {
                "name": "Project on the Role of Computational Biology in Drug Discovery"
            },
            {
                "name": "Project on the Bioinformatics of Food and Nutrition"
            },
            {
                "name": "Project on the Analysis of Genomic Data for Ancestry"
            },
            {
                "name": "Project on the Bioinformatics of Epigenetic Modifications"
            },
            {
                "name": "Project on the Role of Machine Learning in Proteomics"
            },
            {
                "name": "Project on the Bioinformatics of Drug Resistance"
            },
            {
                "name": "Project on the Bioinformatics of Personalized Medicine"
            }
        ]
    },
    {
        "name": "Biotechnology",
        "children": [
            {
                "name": "Genetically Modified Organisms (GMOs) and Their Regulation"
            },
            {
                "name": "Development of a Bioreactor for Biofuel Production"
            },
            {
                "name": "CRISPR-Cas9 Gene Editing for Disease Therapy"
            },
            {
                "name": "Bioremediation of Polluted Water using Microbes"
            },
            {
                "name": "Plant Tissue Culture for Crop Improvement"
            },
            {
                "name": "Production of Recombinant Proteins for Therapeutic Use"
            },
            {
                "name": "Application of Nanobiotechnology in Drug Delivery"
            },
            {
                "name": "Biosensor Development for Environmental Monitoring"
            },
            {
                "name": "Stem Cell Therapy for Regenerative Medicine"
            },
            {
                "name": "Analysis of Fermentation Processes in Food Production"
            },
            {
                "name": "Project on the Role of Biofertilizers and Biopesticides"
            },
            {
                "name": "Project on the Ethical and Social Implications of Biotechnology"
            },
            {
                "name": "Project on the Production of Bio-plastics"
            },
            {
                "name": "Project on Vaccine Development and Production"
            },
            {
                "name": "Project on Forensic Biotechnology and DNA Profiling"
            },
            {
                "name": "Project on the Use of Algae for Carbon Sequestration"
            },
            {
                "name": "Project on Gene Therapy for Genetic Disorders"
            },
            {
                "name": "Project on the Role of Probiotics in Human Health"
            },
            {
                "name": "Project on the Production of Bio-ethanol from Lignocellulosic Biomass"
            },
            {
                "name": "Project on the Use of Biosensors in Medical Diagnostics"
            },
            {
                "name": "Project on the Cloning of a Gene of Interest"
            },
            {
                "name": "Project on the Use of Antibodies in Research and Therapy"
            },
            {
                "name": "Project on the Role of Industrial Enzymes"
            },
            {
                "name": "Project on the Production of Biopharmaceuticals"
            },
            {
                "name": "Project on the Use of PCR in Molecular Diagnostics"
            },
            {
                "name": "Project on the Role of Stem Cells in Regenerative Medicine"
            },
            {
                "name": "Project on the Use of Microbes for Wastewater Treatment"
            },
            {
                "name": "Project on the Role of Bioinformatics in Biotechnology"
            },
            {
                "name": "Project on the Production of Therapeutic Proteins"
            },
            {
                "name": "Project on the Use of Gene Drives for Pest Control"
            },
            {
                "name": "Project on the Role of Bioreactors in Large-Scale Production"
            },
            {
                "name": "Project on the Ethical Aspects of Genetic Engineering"
            },
            {
                "name": "Project on the Use of DNA Fingerprinting in Forensics"
            },
            {
                "name": "Project on the Production of Single-Cell Protein"
            },
            {
                "name": "Project on the Role of Nanoparticles in Drug Delivery"
            },
            {
                "name": "Project on the Use of CRISPR for Disease Modeling"
            },
            {
                "name": "Project on the Production of Biodiesel"
            },
            {
                "name": "Project on the Role of Recombinant DNA Technology"
            },
            {
                "name": "Project on the Use of Biosensors for Pollution Detection"
            },
            {
                "name": "Project on the Production of Bioplastics from Algae"
            },
            {
                "name": "Project on the Role of Tissue Engineering in Medicine"
            },
            {
                "name": "Project on the Use of Microbes in Food Production"
            },
            {
                "name": "Project on the Role of Gene Therapy in Cancer Treatment"
            },
            {
                "name": "Project on the Production of Biopharmaceuticals in Plants"
            },
            {
                "name": "Project on the Use of Gene Silencing for Pest Control"
            },
            {
                "name": "Project on the Role of Biofilms in Industrial Processes"
            },
            {
                "name": "Project on the Use of Gene Editing for Crop Improvement"
            },
            {
                "name": "Project on the Production of Bio-ethanol from Waste"
            },
            {
                "name": "Project on the Role of Fermentation in Brewing"
            },
            {
                "name": "Project on the Use of Nanoparticles in Medical Imaging"
            }
        ]
    },
    {
        "name": "Botany",
        "children": [
            {
                "name": "Plant Tissue Culture for Mass Propagation of a Native Species"
            },
            {
                "name": "Phytoremediation of Heavy Metal Contaminated Soil"
            },
            {
                "name": "Ethnobotanical Study of Medicinal Plants in a Specific Region"
            },
            {
                "name": "Analysis of Photosynthesis Efficiency in Different Plant Species"
            },
            {
                "name": "Development of a Plant Disease Detection System using AI"
            },
            {
                "name": "Ecological Study of Forest Succession in a Degraded Area"
            },
            {
                "name": "Molecular Identification of a Plant Species using DNA Barcoding"
            },
            {
                "name": "Impact of Climate Change on Plant Phenology"
            },
            {
                "name": "Role of Plant Hormones in Growth and Development"
            },
            {
                "name": "Project on the Conservation of Endangered Plant Species"
            },
            {
                "name": "Project on the Effect of Pollution on Plant Growth"
            },
            {
                "name": "Project on the Role of Mycorrhizal Fungi in Plant Health"
            },
            {
                "name": "Project on Plant-Pathogen Interactions"
            },
            {
                "name": "Project on the Anatomy of a Plant Stem and Leaf"
            },
            {
                "name": "Project on the Taxonomy and Systematics of a Plant Family"
            },
            {
                "name": "Project on the Role of Plant Secondary Metabolites in Defense"
            },
            {
                "name": "Project on the Role of Genetically Modified Crops"
            },
            {
                "name": "Project on the Effect of Light on Plant Growth"
            },
            {
                "name": "Project on the Biogeography of a Plant Species"
            },
            {
                "name": "Project on the Role of Plant-Pollinator Interactions"
            },
            {
                "name": "Project on the Use of Plant Extracts as Antimicrobials"
            },
            {
                "name": "Project on the Role of Plant Hormones in Fruit Ripening"
            },
            {
                "name": "Project on the Conservation of Mangrove Forests"
            },
            {
                "name": "Project on the Role of Plant Biotechnology in Agriculture"
            },
            {
                "name": "Project on the Effects of Salinity on Plant Growth"
            },
            {
                "name": "Project on the Role of Plant Physiology in Drought Resistance"
            },
            {
                "name": "Project on the Anatomy of a Flower and its Role in Reproduction"
            },
            {
                "name": "Project on the Use of Remote Sensing for Vegetation Mapping"
            },
            {
                "name": "Project on the Role of Plant-Herbivore Interactions"
            },
            {
                "name": "Project on the Role of Plant Genetics in Crop Improvement"
            },
            {
                "name": "Project on the Use of Plant Tissue Culture for Conservation"
            },
            {
                "name": "Project on the Effects of Heavy Metals on Plant Physiology"
            },
            {
                "name": "Project on the Role of Plant-Microbe Interactions in Soil"
            },
            {
                "name": "Project on the Anatomy of a Root System"
            },
            {
                "name": "Project on the Role of Plant Genomics in Crop Breeding"
            },
            {
                "name": "Project on the Use of Plant Extracts for Biofuel Production"
            },
            {
                "name": "Project on the Effects of Nutrient Deficiency on Plant Growth"
            },
            {
                "name": "Project on the Role of Plant Systematics in Biodiversity Conservation"
            },
            {
                "name": "Project on the Effects of Water Stress on Plant Physiology"
            },
            {
                "name": "Project on the Role of Plant Hormones in Abiotic Stress Tolerance"
            },
            {
                "name": "Project on the Use of Plant-Based Dyes"
            },
            {
                "name": "Project on the Role of Plant Anatomy in Adaptation"
            },
            {
                "name": "Project on the Effects of Temperature on Plant Growth"
            },
            {
                "name": "Project on the Role of Plant Cell Culture in Biotechnology"
            },
            {
                "name": "Project on the Use of Plant Genomics for Disease Resistance"
            },
            {
                "name": "Project on the Role of Plant Hormones in Seed Germination"
            },
            {
                "name": "Project on the Use of Plant Tissue Culture for Medicinal Plants"
            },
            {
                "name": "Project on the Role of Plant Anatomy in Water Transport"
            },
            {
                "name": "Project on the Use of Plant Extracts as Bio-pesticides"
            },
            {
                "name": "Project on the Role of Plant Physiology in Photosynthesis"
            }
        ]
    },
    {
        "name": "Business Administration (MBA)",
        "children": [
            {
                "name": "Strategic Analysis and Recommendations for a Global Company"
            },
            {
                "name": "Financial Restructuring and M&A Case Study"
            },
            {
                "name": "Digital Transformation Strategy for a Traditional Business"
            },
            {
                "name": "Market Entry Strategy for a New Product in a Developing Market"
            },
            {
                "name": "Leadership and Change Management in a Post-Pandemic World"
            },
            {
                "name": "Supply Chain Resilience and Risk Management"
            },
            {
                "name": "Data-driven Marketing and Customer Segmentation"
            },
            {
                "name": "Business Plan for a Tech Startup with a Go-to-Market Strategy"
            },
            {
                "name": "Impact of ESG (Environmental, Social, and Governance) on Corporate Performance"
            },
            {
                "name": "Valuation of a Company using Discounted Cash Flow (DCF) Method"
            },
            {
                "name": "Project on Organizational Design and Restructuring"
            },
            {
                "name": "Project on Corporate Governance and Board Effectiveness"
            },
            {
                "name": "Project on Crisis Management and Business Continuity"
            },
            {
                "name": "Project on Talent Management and Leadership Development"
            },
            {
                "name": "Project on Brand Management and Brand Equity"
            },
            {
                "name": "Project on Project Management and Agile Methodologies"
            },
            {
                "name": "Project on International Business and Global Strategy"
            },
            {
                "name": "Project on Mergers and Acquisitions Integration"
            },
            {
                "name": "Project on Financial Risk Management"
            },
            {
                "name": "Project on Business Ethics and Social Responsibility"
            },
            {
                "name": "Project on Customer Relationship Management (CRM) Strategy"
            },
            {
                "name": "Project on Supply Chain Analytics and Optimization"
            },
            {
                "name": "Project on Business Intelligence and Data Warehousing"
            },
            {
                "name": "Project on Strategic Marketing Planning"
            },
            {
                "name": "Project on Operations Management and Process Improvement"
            },
            {
                "name": "Project on Entrepreneurship and Innovation Management"
            },
            {
                "name": "Project on Negotiation and Conflict Resolution"
            },
            {
                "name": "Project on Pricing Strategy and Revenue Management"
            },
            {
                "name": "Project on Global Supply Chain Management"
            },
            {
                "name": "Project on Digital Transformation in the Banking Industry"
            },
            {
                "name": "Project on Human Resource Management in a Global Context"
            },
            {
                "name": "Project on Financial Modeling and Valuation"
            },
            {
                "name": "Project on Business Analytics and Decision Making"
            },
            {
                "name": "Project on a New Business Venture Plan"
            },
            {
                "name": "Project on International Human Resource Management"
            },
            {
                "name": "Project on Business Law and Ethics"
            },
            {
                "name": "Project on Leadership and Organizational Change"
            },
            {
                "name": "Project on Strategic Financial Management"
            },
            {
                "name": "Project on Marketing Research and Consumer Insights"
            },
            {
                "name": "Project on Business Process Reengineering"
            },
            {
                "name": "Project on E-commerce Business Strategy"
            },
            {
                "name": "Project on Performance Management System Design"
            },
            {
                "name": "Project on Knowledge Management in Organizations"
            },
            {
                "name": "Project on Business Communication and Public Relations"
            },
            {
                "name": "Project on Quality Management and Six Sigma"
            },
            {
                "name": "Project on Global Marketing Strategy"
            },
            {
                "name": "Project on Capital Budgeting and Investment Decisions"
            },
            {
                "name": "Project on Customer Service Management"
            },
            {
                "name": "Project on Talent Acquisition and Workforce Planning"
            },
            {
                "name": "Project on IT Strategy and Management"
            }
        ]
    },
    {
        "name": "Chemistry",
        "children": [
            {
                "name": "Synthesis and Characterization of Novel Inorganic Compounds"
            },
            {
                "name": "Green Chemistry: Design of Sustainable Chemical Processes"
            },
            {
                "name": "Spectroscopic Analysis of Organic Molecules"
            },
            {
                "name": "Quantum Chemistry Calculations on Molecular Properties"
            },
            {
                "name": "Development of a Chemical Sensor for Pollution Detection"
            },
            {
                "name": "Study of Reaction Kinetics and Reaction Mechanisms"
            },
            {
                "name": "Polymer Chemistry: Synthesis and Characterization of New Polymers"
            },
            {
                "name": "Electrochemical Analysis of Corrosion in Metals"
            },
            {
                "name": "Photochemistry: Light-Induced Chemical Reactions"
            },
            {
                "name": "Project on Drug Discovery and Medicinal Chemistry"
            },
            {
                "name": "Project on Environmental Chemistry and Water Quality Analysis"
            },
            {
                "name": "Project on the Use of Nanomaterials in Catalysis"
            },
            {
                "name": "Project on Food Chemistry and Additives"
            },
            {
                "name": "Project on Forensic Chemistry and Substance Identification"
            },
            {
                "name": "Project on the Role of Catalysts in Industrial Processes"
            },
            {
                "name": "Project on Analytical Chemistry and Separation Techniques"
            },
            {
                "name": "Project on the Chemistry of Polymers and Plastics"
            },
            {
                "name": "Project on the Synthesis of a Natural Product"
            },
            {
                "name": "Project on the Use of Spectroscopy in Structural Analysis"
            },
            {
                "name": "Project on the Thermodynamics of Chemical Reactions"
            },
            {
                "name": "Project on the Chemistry of Renewable Energy Sources"
            },
            {
                "name": "Project on the Role of Enzymes in Chemical Reactions"
            },
            {
                "name": "Project on the Use of Mass Spectrometry in Chemistry"
            },
            {
                "name": "Project on the Chemistry of Cosmetics and Personal Care Products"
            },
            {
                "name": "Project on the Synthesis of Biodegradable Polymers"
            },
            {
                "name": "Project on the Use of X-ray Crystallography in Chemistry"
            },
            {
                "name": "Project on the Chemistry of Pharmaceuticals"
            },
            {
                "name": "Project on the Role of Green Solvents in Synthesis"
            },
            {
                "name": "Project on the Synthesis of Inorganic Nanoparticles"
            },
            {
                "name": "Project on the Chemistry of Batteries and Energy Storage"
            },
            {
                "name": "Project on the Role of Quantum Chemistry in Materials Science"
            },
            {
                "name": "Project on the Chemistry of DNA and RNA"
            },
            {
                "name": "Project on the Synthesis of Bio-polymers"
            },
            {
                "name": "Project on the Chemistry of Dyes and Pigments"
            },
            {
                "name": "Project on the Use of Chromatography in Separation"
            },
            {
                "name": "Project on the Synthesis of Flavors and Fragrances"
            },
            {
                "name": "Project on the Chemistry of Environmental Pollution"
            },
            {
                "name": "Project on the Role of Superconductors in Materials Science"
            },
            {
                "name": "Project on the Synthesis of Catalysts"
            },
            {
                "name": "Project on the Chemistry of Explosives"
            },
            {
                "name": "Project on the Use of NMR Spectroscopy in Structural Elucidation"
            },
            {
                "name": "Project on the Chemistry of Soil and Water"
            },
            {
                "name": "Project on the Role of Surface Chemistry in Catalysis"
            },
            {
                "name": "Project on the Synthesis of Agrochemicals"
            },
            {
                "name": "Project on the Chemistry of Polymers in Medicine"
            },
            {
                "name": "Project on the Role of Green Chemistry in Industry"
            },
            {
                "name": "Project on the Synthesis of Liquid Crystals"
            },
            {
                "name": "Project on the Chemistry of Nanomaterials in Medicine"
            },
            {
                "name": "Project on the Role of Chemical Reactions in Climate Change"
            },
            {
                "name": "Project on the Use of Chemical Sensors in Diagnostics"
            }
        ]
    },
    {
        "name": "Clinical Psychology",
        "children": [
            {
                "name": "Effectiveness of Cognitive Behavioral Therapy (CBT) for Anxiety Disorders"
            },
            {
                "name": "Impact of Social Media on Adolescent Mental Health"
            },
            {
                "name": "Study on the Efficacy of Mindfulness-Based Interventions for Stress Reduction"
            },
            {
                "name": "Assessment and Treatment of Post-Traumatic Stress Disorder (PTSD)"
            },
            {
                "name": "Neuropsychological Assessment of Cognitive Impairment"
            },
            {
                "name": "Child and Adolescent Psychology: A Case Study on a Specific Disorder"
            },
            {
                "name": "Role of Family Therapy in Addiction Treatment"
            },
            {
                "name": "Cross-Cultural Study on the Manifestation of Depression"
            },
            {
                "name": "Developing a Psychological First Aid Manual for Disaster Relief"
            },
            {
                "name": "Project on the Psychological Effects of the COVID-19 Pandemic"
            },
            {
                "name": "Project on the Role of Psychotherapy in Schizophrenia Treatment"
            },
            {
                "name": "Project on the Assessment of Eating Disorders and Body Image"
            },
            {
                "name": "Project on the Use of Virtual Reality in Exposure Therapy"
            },
            {
                "name": "Project on the Psychology of Pain Management"
            },
            {
                "name": "Project on the Role of Sleep in Mental Health"
            },
            {
                "name": "Project on the Impact of Childhood Trauma on Adult Behavior"
            },
            {
                "name": "Project on the Psychology of Criminal Behavior"
            },
            {
                "name": "Project on the Use of Art Therapy in Mental Health"
            },
            {
                "name": "Project on the Role of Empathy in Therapeutic Relationships"
            },
            {
                "name": "Project on the Psychology of Phobias and Their Treatment"
            },
            {
                "name": "Project on the Impact of Loneliness on Mental Well-being"
            },
            {
                "name": "Project on the Role of Self-Esteem in Psychological Health"
            },
            {
                "name": "Project on the Psychology of Addictive Behaviors"
            },
            {
                "name": "Project on the Role of Personality Disorders in Relationships"
            },
            {
                "name": "Project on the Psychology of Grief and Bereavement"
            },
            {
                "name": "Project on the Use of Play Therapy with Children"
            },
            {
                "name": "Project on the Psychology of Forgiveness"
            },
            {
                "name": "Project on the Role of Gratitude in Mental Health"
            },
            {
                "name": "Project on the Psychology of Resilience"
            },
            {
                "name": "Project on the Role of Cognitive Biases in Decision Making"
            },
            {
                "name": "Project on the Psychology of Learning Disabilities"
            },
            {
                "name": "Project on the Impact of Stress on Physical Health"
            },
            {
                "name": "Project on the Role of Social Support in Mental Health"
            },
            {
                "name": "Project on the Psychology of Motivation"
            },
            {
                "name": "Project on the Use of Relaxation Techniques for Anxiety"
            },
            {
                "name": "Project on the Psychology of Happiness"
            },
            {
                "name": "Project on the Role of Mindfulness in Clinical Practice"
            },
            {
                "name": "Project on the Psychology of Suicide"
            },
            {
                "name": "Project on the Use of Positive Psychology Interventions"
            },
            {
                "name": "Project on the Role of Emotional Intelligence"
            },
            {
                "name": "Project on the Psychology of Post-Traumatic Growth"
            },
            {
                "name": "Project on the Role of Neuroscience in Clinical Psychology"
            },
            {
                "name": "Project on the Psychology of Self-Harm"
            },
            {
                "name": "Project on the Use of Biofeedback in Therapy"
            },
            {
                "name": "Project on the Psychology of Obsessive-Compulsive Disorder (OCD)"
            },
            {
                "name": "Project on the Role of Spirituality in Mental Health"
            },
            {
                "name": "Project on the Psychology of Work-Life Balance"
            },
            {
                "name": "Project on the Use of Dialectical Behavior Therapy (DBT)"
            },
            {
                "name": "Project on the Psychology of Bullying"
            },
            {
                "name": "Project on the Role of Culture in Psychological Assessment"
            }
        ]
    },
    {
        "name": "Communication & Journalism",
        "children": [
            {
                "name": "Investigative Report on Local Government Accountability"
            },
            {
                "name": "Social Media Campaign Analysis for a Non-Profit Organization"
            },
            {
                "name": "Documentary Film on a Contemporary Social Issue"
            },
            {
                "name": "Content Analysis of Media Portrayals of a Specific Community"
            },
            {
                "name": "Public Relations Strategy for a Corporate Crisis"
            },
            {
                "name": "Ethical Implications of AI in Journalism"
            },
            {
                "name": "Podcast Series on a Historical Event"
            },
            {
                "name": "Analysis of Fake News and its Impact on Society"
            },
            {
                "name": "Cross-Cultural Communication in Global Business"
            },
            {
                "name": "Project on the Role of Citizen Journalism in a Democracy"
            },
            {
                "name": "Project on the Evolution of Digital Media and its Impact"
            },
            {
                "name": "Project on Political Communication and Election Campaigns"
            },
            {
                "name": "Project on the Impact of Social Media on Interpersonal Communication"
            },
            {
                "name": "Project on Photojournalism and Visual Storytelling"
            },
            {
                "name": "Project on Public Speaking and Persuasive Communication"
            },
            {
                "name": "Project on the Role of Public Relations in Brand Building"
            },
            {
                "name": "Project on Radio Broadcasting and Podcasting"
            },
            {
                "name": "Project on the History of Indian Journalism"
            },
            {
                "name": "Project on the Role of Media in Social Movements"
            },
            {
                "name": "Project on Corporate Communication and Internal Relations"
            },
            {
                "name": "Project on the Use of Data Journalism for Reporting"
            },
            {
                "name": "Project on the Legal and Ethical Issues in Journalism"
            },
            {
                "name": "Project on the Role of Media in Shaping Public Opinion"
            },
            {
                "name": "Project on the Impact of Television on Society"
            },
            {
                "name": "Project on the Future of News Media"
            },
            {
                "name": "Project on the Role of Advertising in a Market Economy"
            },
            {
                "name": "Project on a Case Study of a Media Scandal"
            },
            {
                "name": "Project on the Role of Print Media in the Digital Age"
            },
            {
                "name": "Project on the Use of Infographics in Journalism"
            },
            {
                "name": "Project on the Role of Communication in Leadership"
            },
            {
                "name": "Project on the Impact of Globalization on Media"
            },
            {
                "name": "Project on the Role of Film in Social Commentary"
            },
            {
                "name": "Project on the Use of Mobile Journalism (MoJo)"
            },
            {
                "name": "Project on the Role of Social Media in Public Relations"
            },
            {
                "name": "Project on a Case Study of a Political Campaign"
            },
            {
                "name": "Project on the Role of Communication in Conflict Resolution"
            },
            {
                "name": "Project on the Impact of Media on Body Image"
            },
            {
                "name": "Project on a Case Study of a Public Relations Campaign"
            },
            {
                "name": "Project on the Role of Public Opinion in Policy Making"
            },
            {
                "name": "Project on the Use of Visual Communication in Marketing"
            },
            {
                "name": "Project on the History of Public Relations"
            },
            {
                "name": "Project on the Role of Social Media in Political Activism"
            },
            {
                "name": "Project on a Case Study of a Corporate Communication Strategy"
            },
            {
                "name": "Project on the Role of Media in Disaster Management"
            },
            {
                "name": "Project on the Use of Virtual Reality in Journalism"
            },
            {
                "name": "Project on a Case Study of a News Organization's Ethics"
            },
            {
                "name": "Project on the Role of Communication in Health Awareness"
            },
            {
                "name": "Project on a Case Study of a Successful Social Media Campaign"
            },
            {
                "name": "Project on the Role of Artificial Intelligence in News Writing"
            },
            {
                "name": "Project on the Impact of Live Streaming on Media"
            }
        ]
    },
    {
        "name": "Computer Applications (MCA)",
        "children": [
            {
                "name": "Development of a Machine Learning Model for Predictive Analytics"
            },
            {
                "name": "Design and Implementation of a Secure E-commerce Platform"
            },
            {
                "name": "Building a Mobile App for Real-time Data Visualization"
            },
            {
                "name": "Cloud-based ERP System for Inventory Management"
            },
            {
                "name": "Blockchain-based Voting System for Enhanced Security"
            },
            {
                "name": "AI-powered Chatbot for Customer Service Automation"
            },
            {
                "name": "Data Analytics Dashboard for a Retail Business"
            },
            {
                "name": "Development of a Web Application with a Microservices Architecture"
            },
            {
                "name": "Cybersecurity Risk Assessment and Mitigation Plan"
            },
            {
                "name": "IoT-based Smart Home Automation System"
            },
            {
                "name": "Project on a Computer Vision System for Object Detection"
            },
            {
                "name": "Project on a Natural Language Processing (NLP) Application"
            },
            {
                "name": "Project on a Data Warehouse Design and Implementation"
            },
            {
                "name": "Project on a Mobile Game Development"
            },
            {
                "name": "Project on a Cloud-based Document Management System"
            },
            {
                "name": "Project on a Supply Chain Management System using AI"
            },
            {
                "name": "Project on a Social Media Analytics Tool"
            },
            {
                "name": "Project on a Geographic Information System (GIS) Application"
            },
            {
                "name": "Project on a Big Data Analytics Platform"
            },
            {
                "name": "Project on a Cybersecurity Threat Intelligence System"
            },
            {
                "name": "Project on an Augmented Reality (AR) Application"
            },
            {
                "name": "Project on a Machine Learning-based Recommendation System"
            },
            {
                "name": "Project on a Web Scraping Tool for Market Research"
            },
            {
                "name": "Project on a Virtual Reality (VR) Training Simulation"
            },
            {
                "name": "Project on a Business Process Automation (BPA) System"
            },
            {
                "name": "Project on a Blockchain-based Identity Management System"
            },
            {
                "name": "Project on a Deep Learning Model for Image Recognition"
            },
            {
                "name": "Project on a Cloud-based Customer Relationship Management (CRM) System"
            },
            {
                "name": "Project on an IoT-based Agricultural Monitoring System"
            },
            {
                "name": "Project on a Web-based Project Management Tool"
            },
            {
                "name": "Project on a Cybersecurity Incident Response Plan"
            },
            {
                "name": "Project on a Machine Learning-based Fraud Detection System"
            },
            {
                "name": "Project on an Automated Testing Framework for Software"
            },
            {
                "name": "Project on a Cloud-based Data Backup Solution"
            },
            {
                "name": "Project on a Social Networking Platform for a Niche Community"
            },
            {
                "name": "Project on a Natural Language Understanding (NLU) System"
            },
            {
                "name": "Project on an Automated Code Generation Tool"
            },
            {
                "name": "Project on a Supply Chain Optimization Model"
            },
            {
                "name": "Project on a Facial Recognition System"
            },
            {
                "name": "Project on a Business Intelligence Dashboard"
            },
            {
                "name": "Project on a Cloud-based HR Management System"
            },
            {
                "name": "Project on a Web-based Learning Management System"
            },
            {
                "name": "Project on a Cryptocurrency Trading Bot"
            },
            {
                "name": "Project on a Cybersecurity Intrusion Detection System"
            },
            {
                "name": "Project on a Machine Learning-based Credit Scoring Model"
            },
            {
                "name": "Project on a Cloud-based Healthcare Management System"
            },
            {
                "name": "Project on a Web-based Survey and Data Analysis Tool"
            },
            {
                "name": "Project on a Voice-controlled Smart Assistant"
            },
            {
                "name": "Project on a Mobile App for Location-based Services"
            },
            {
                "name": "Project on a Cybersecurity System for IoT Devices"
            }
        ]
    },
    {
        "name": "Data Science",
        "children": [
            {
                "name": "Predictive Model for Customer Churn Analysis"
            },
            {
                "name": "Sentiment Analysis of Social Media Data for a Brand"
            },
            {
                "name": "Credit Risk Assessment using Machine Learning Algorithms"
            },
            {
                "name": "Image Recognition Model for Medical Diagnosis"
            },
            {
                "name": "Web Scraping and Data Analysis for Market Trends"
            },
            {
                "name": "Time Series Forecasting of Sales Data"
            },
            {
                "name": "Natural Language Processing (NLP) for Text Summarization"
            },
            {
                "name": "Recommendation System for an E-commerce Website"
            },
            {
                "name": "Fraud Detection in Financial Transactions"
            },
            {
                "name": "Exploratory Data Analysis (EDA) of a Large Dataset"
            },
            {
                "name": "Project on a House Price Prediction Model"
            },
            {
                "name": "Project on a Customer Segmentation Model"
            },
            {
                "name": "Project on a Churn Prediction Model"
            },
            {
                "name": "Project on a Customer Lifetime Value (CLV) Prediction Model"
            },
            {
                "name": "Project on a Predictive Maintenance Model"
            },
            {
                "name": "Project on a Supply Chain Demand Forecasting Model"
            },
            {
                "name": "Project on a Fraud Detection Model in Insurance"
            },
            {
                "name": "Project on a Medical Diagnosis Prediction Model"
            },
            {
                "name": "Project on a Recommendation System for Movies"
            },
            {
                "name": "Project on a Stock Price Prediction Model"
            },
            {
                "name": "Project on a Natural Language Generation (NLG) System"
            },
            {
                "name": "Project on an Anomaly Detection System"
            },
            {
                "name": "Project on a Credit Card Fraud Detection Model"
            },
            {
                "name": "Project on a Healthcare Patient Readmission Prediction Model"
            },
            {
                "name": "Project on a Social Media Engagement Prediction Model"
            },
            {
                "name": "Project on a Customer Satisfaction Prediction Model"
            },
            {
                "name": "Project on a Real-time Traffic Prediction Model"
            },
            {
                "name": "Project on a Predictive Model for Employee Attrition"
            },
            {
                "name": "Project on an Image Classification Model"
            },
            {
                "name": "Project on a Time Series Forecasting Model for Energy Consumption"
            },
            {
                "name": "Project on a Natural Language Understanding (NLU) System"
            },
            {
                "name": "Project on a Text-based Recommendation System"
            },
            {
                "name": "Project on a Predictive Model for Flight Delays"
            },
            {
                "name": "Project on a Medical Image Analysis Model"
            },
            {
                "name": "Project on a Predictive Model for Disease Outbreaks"
            },
            {
                "name": "Project on a Sentiment Analysis Model for Product Reviews"
            },
            {
                "name": "Project on a Customer Service Chatbot"
            },
            {
                "name": "Project on a Predictive Model for Customer Behavior"
            },
            {
                "name": "Project on a Supply Chain Risk Prediction Model"
            },
            {
                "name": "Project on a Predictive Model for Retail Sales"
            },
            {
                "name": "Project on a Financial Market Prediction Model"
            },
            {
                "name": "Project on a Weather Forecasting Model"
            },
            {
                "name": "Project on a Sports Outcome Prediction Model"
            },
            {
                "name": "Project on a Predictive Model for E-commerce Traffic"
            },
            {
                "name": "Project on a Recommendation System for Music"
            },
            {
                "name": "Project on a Predictive Model for Loan Default"
            },
            {
                "name": "Project on a Face Recognition System"
            },
            {
                "name": "Project on a Predictive Model for Student Performance"
            },
            {
                "name": "Project on a Natural Language Question Answering System"
            },
            {
                "name": "Project on a Predictive Model for Real Estate Valuation"
            }
        ]
    },
    {
        "name": "Economics",
        "children": [
            {
                "name": "Econometric Analysis of Macroeconomic Factors on Stock Prices"
            },
            {
                "name": "Impact of Trade Tariffs on Global Supply Chains"
            },
            {
                "name": "Public Finance: Analysis of Government Expenditure and Taxation"
            },
            {
                "name": "Development Economics: Case Study of a Poverty Alleviation Program"
            },
            {
                "name": "Behavioral Economics and its Implications for Public Policy"
            },
            {
                "name": "Monetary Policy and its Effect on Inflation and Interest Rates"
            },
            {
                "name": "Environmental Economics: Carbon Pricing and Emissions Trading"
            },
            {
                "name": "Game Theory Applications in Business Strategy"
            },
            {
                "name": "Labor Economics: The Impact of Minimum Wage Policies"
            },
            {
                "name": "International Economics: Currency Exchange Rates and Balance of Payments"
            },
            {
                "name": "Project on the Economics of Education"
            },
            {
                "name": "Project on the Economics of Health and Healthcare Systems"
            },
            {
                "name": "Project on the Economics of Climate Change"
            },
            {
                "name": "Project on the Role of Financial Markets in Economic Growth"
            },
            {
                "name": "Project on the Economics of Information and Technology"
            },
            {
                "name": "Project on the Economics of Crime"
            },
            {
                "name": "Project on the Role of Agriculture in Economic Development"
            },
            {
                "name": "Project on the Economics of Urbanization"
            },
            {
                "name": "Project on the Economics of Gender Inequality"
            },
            {
                "name": "Project on the Role of the IMF and World Bank"
            },
            {
                "name": "Project on the Economics of Poverty and Inequality"
            },
            {
                "name": "Project on the Economics of Public Goods and Externalities"
            },
            {
                "name": "Project on the Economics of Human Capital"
            },
            {
                "name": "Project on the Role of Financial Institutions in an Economy"
            },
            {
                "name": "Project on the Economics of Natural Disasters"
            },
            {
                "name": "Project on the Economics of Tourism"
            },
            {
                "name": "Project on the Role of Entrepreneurship in Economic Development"
            },
            {
                "name": "Project on the Economics of Population"
            },
            {
                "name": "Project on the Economics of Social Networks"
            },
            {
                "name": "Project on the Economics of Renewable Energy"
            },
            {
                "name": "Project on the Economics of Taxation and Fiscal Policy"
            },
            {
                "name": "Project on the Role of International Organizations in Trade"
            },
            {
                "name": "Project on the Economics of Housing"
            },
            {
                "name": "Project on the Economics of Innovation"
            },
            {
                "name": "Project on the Economics of Sports"
            },
            {
                "name": "Project on the Economics of Law and Regulation"
            },
            {
                "name": "Project on the Economics of Happiness and Well-being"
            },
            {
                "name": "Project on the Role of Foreign Direct Investment (FDI)"
            },
            {
                "name": "Project on the Economics of Financial Crises"
            },
            {
                "name": "Project on the Economics of Supply Chains"
            },
            {
                "name": "Project on the Economics of Intellectual Property"
            },
            {
                "name": "Project on the Role of Government in a Market Economy"
            },
            {
                "name": "Project on the Economics of Behavioral Finance"
            },
            {
                "name": "Project on the Role of Competition Policy"
            },
            {
                "name": "Project on the Economics of Global Trade Agreements"
            },
            {
                "name": "Project on the Economics of Sustainable Development"
            },
            {
                "name": "Project on the Role of Central Banks in an Economy"
            },
            {
                "name": "Project on the Economics of Migration"
            },
            {
                "name": "Project on the Economics of Public Sector Undertakings (PSUs)"
            },
            {
                "name": "Project on the Economics of Healthcare Technology"
            }
        ]
    },
    {
        "name": "Electronics",
        "children": [
            {
                "name": "IoT-based Smart Home Automation System with Cloud Integration"
            },
            {
                "name": "Design and Simulation of a Digital Signal Processing (DSP) System"
            },
            {
                "name": "Embedded Systems: Development of a Real-time Operating System (RTOS)"
            },
            {
                "name": "Robotics: Design and Control of a Mobile Robot"
            },
            {
                "name": "Power Electronics: Design of a Solar Inverter System"
            },
            {
                "name": "VLSI Design: Layout and Simulation of a CMOS Inverter"
            },
            {
                "name": "Sensor Networks for Environmental Monitoring"
            },
            {
                "name": "Telecommunications: Design of a 5G Communication System"
            },
            {
                "name": "Biomedical Electronics: Development of an ECG Monitoring System"
            },
            {
                "name": "RF and Microwave Engineering: Design of a Microstrip Antenna"
            },
            {
                "name": "Project on the Design of a PCB for an Embedded System"
            },
            {
                "name": "Project on the Development of a Drone with Autonomous Navigation"
            },
            {
                "name": "Project on a Digital Image Processing System"
            },
            {
                "name": "Project on the Design of a Power Management System for IoT"
            },
            {
                "name": "Project on the Development of a Voice-Controlled System"
            },
            {
                "name": "Project on the Design of a Wireless Charging System"
            },
            {
                "name": "Project on the Development of a Gesture Recognition System"
            },
            {
                "name": "Project on the Design of a Smart Agriculture System"
            },
            {
                "name": "Project on the Development of a Fingerprint Recognition System"
            },
            {
                "name": "Project on the Design of a Smart Grid System"
            },
            {
                "name": "Project on the Development of a Facial Recognition System"
            },
            {
                "name": "Project on the Design of a Communication System for Satellites"
            },
            {
                "name": "Project on the Development of a Solar-powered Battery Charger"
            },
            {
                "name": "Project on the Design of a Wearable Health Monitoring Device"
            },
            {
                "name": "Project on the Development of a Smart Traffic Management System"
            },
            {
                "name": "Project on the Design of a Robotics Arm for Industrial Automation"
            },
            {
                "name": "Project on the Development of a Smart Water Management System"
            },
            {
                "name": "Project on the Design of a Security System with Motion Detection"
            },
            {
                "name": "Project on the Development of an Automated Vehicle System"
            },
            {
                "name": "Project on the Design of a Smart Lighting System"
            },
            {
                "name": "Project on the Development of a Smart Metering System"
            },
            {
                "name": "Project on the Design of a Smart City System"
            },
            {
                "name": "Project on the Development of a Voice-Activated Assistant"
            },
            {
                "name": "Project on the Design of a Smart Irrigation System"
            },
            {
                "name": "Project on the Development of a Smart Dustbin"
            },
            {
                "name": "Project on the Design of a Smart Parking System"
            },
            {
                "name": "Project on the Development of a Smart Street Light"
            },
            {
                "name": "Project on the Design of a Smart Healthcare System"
            },
            {
                "name": "Project on the Development of a Smart Classroom System"
            },
            {
                "name": "Project on the Design of a Smart Security Camera"
            },
            {
                "name": "Project on the Development of a Smart Air Quality Monitor"
            },
            {
                "name": "Project on the Design of a Smart Power Outlet"
            },
            {
                "name": "Project on the Development of a Smart Lock System"
            },
            {
                "name": "Project on the Design of a Smart Energy Monitor"
            },
            {
                "name": "Project on the Development of a Smart Thermostat"
            },
            {
                "name": "Project on the Design of a Smart Doorbell"
            },
            {
                "name": "Project on the Development of a Smart Pet Feeder"
            },
            {
                "name": "Project on the Design of a Smart Smoke Detector"
            },
            {
                "name": "Project on the Development of a Smart Refrigerator"
            },
            {
                "name": "Project on the Design of a Smart Washing Machine"
            }
        ]
    },
    {
        "name": "Environmental Science",
        "children": [
            {
                "name": "Water Quality Analysis of a Local River and Pollution Sources"
            },
            {
                "name": "Waste Management and Recycling Strategies for a University Campus"
            },
            {
                "name": "Impact of Urbanization on Local Biodiversity"
            },
            {
                "name": "Renewable Energy Systems: A Feasibility Study for a Solar Farm"
            },
            {
                "name": "Climate Change Mitigation and Adaptation Strategies"
            },
            {
                "name": "Soil Contamination Assessment and Bioremediation Techniques"
            },
            {
                "name": "Ecosystem Services Valuation of a Local Wetland"
            },
            {
                "name": "Air Pollution Monitoring and Control Measures in a City"
            },
            {
                "name": "Sustainable Agriculture Practices and Their Environmental Impact"
            },
            {
                "name": "Project on the Conservation of Endangered Species"
            },
            {
                "name": "Project on the Role of Green Building Technology"
            },
            {
                "name": "Project on the Impact of Plastic Pollution on Marine Life"
            },
            {
                "name": "Project on the Role of Environmental Impact Assessment (EIA)"
            },
            {
                "name": "Project on the Effects of Deforestation on Climate"
            },
            {
                "name": "Project on the Role of Sustainable Tourism"
            },
            {
                "name": "Project on the Use of Remote Sensing in Environmental Monitoring"
            },
            {
                "name": "Project on the Role of Public Awareness in Environmental Conservation"
            },
            {
                "name": "Project on the Effects of Industrial Effluents on Water Bodies"
            },
            {
                "name": "Project on the Role of Environmental Law and Policy"
            },
            {
                "name": "Project on the Use of GIS in Environmental Management"
            },
            {
                "name": "Project on the Effects of Noise Pollution on Wildlife"
            },
            {
                "name": "Project on the Role of Community-Based Conservation"
            },
            {
                "name": "Project on the Effects of Acid Rain on Forests"
            },
            {
                "name": "Project on the Role of Renewable Energy in Climate Change Mitigation"
            },
            {
                "name": "Project on the Effects of Oil Spills on Marine Ecosystems"
            },
            {
                "name": "Project on the Role of Environmental Education"
            },
            {
                "name": "Project on the Effects of Urban Heat Islands"
            },
            {
                "name": "Project on the Role of Sustainable Agriculture"
            },
            {
                "name": "Project on the Effects of Pesticides on Soil Health"
            },
            {
                "name": "Project on the Role of Carbon Sequestration"
            },
            {
                "name": "Project on the Effects of Eutrophication on Lakes"
            },
            {
                "name": "Project on the Role of Green Technology in Industry"
            },
            {
                "name": "Project on the Effects of Air Pollution on Human Health"
            },
            {
                "name": "Project on the Role of Sustainable Transport"
            },
            {
                "name": "Project on the Effects of Land Use Change on Biodiversity"
            },
            {
                "name": "Project on the Role of Environmental Auditing"
            },
            {
                "name": "Project on the Effects of Climate Change on Agriculture"
            },
            {
                "name": "Project on the Role of Environmental Justice"
            },
            {
                "name": "Project on the Effects of Waste Incineration"
            },
            {
                "name": "Project on the Role of Ecosystem Restoration"
            },
            {
                "name": "Project on the Effects of Industrialization on the Environment"
            },
            {
                "name": "Project on the Role of Green Finance"
            },
            {
                "name": "Project on the Effects of Climate Change on Water Resources"
            },
            {
                "name": "Project on the Role of Circular Economy"
            },
            {
                "name": "Project on the Effects of Nuclear Waste"
            },
            {
                "name": "Project on the Role of Sustainable Urban Planning"
            },
            {
                "name": "Project on the Effects of Global Warming on Polar Ice Caps"
            },
            {
                "name": "Project on the Role of Sustainable Forest Management"
            },
            {
                "name": "Project on the Effects of Pesticides on Water Quality"
            },
            {
                "name": "Project on the Role of Environmental Ethics"
            }
        ]
    },
    {
        "name": "Food & Nutrition",
        "children": [
            {
                "name": "Dietary Assessment and Nutritional Status of a Community"
            },
            {
                "name": "Development of a Functional Food Product for a Specific Health Condition"
            },
            {
                "name": "Analysis of Food Safety and Quality Control in the Supply Chain"
            },
            {
                "name": "Impact of Food Processing on Nutrient Content"
            },
            {
                "name": "Menu Planning and Nutritional Counseling for a Hospital"
            },
            {
                "name": "Role of Probiotics and Prebiotics in Gut Health"
            },
            {
                "name": "Food Fortification Strategies to Combat Micronutrient Deficiencies"
            },
            {
                "name": "Nutritional Needs of Athletes for Optimal Performance"
            },
            {
                "name": "Analysis of Food Labeling and Consumer Awareness"
            },
            {
                "name": "Project on Food Preservation Techniques"
            },
            {
                "name": "Project on the Role of Superfoods in a Balanced Diet"
            },
            {
                "name": "Project on the Impact of Fast Food on Public Health"
            },
            {
                "name": "Project on the Nutritional Management of Diabetes"
            },
            {
                "name": "Project on the Role of Diet in Cancer Prevention"
            },
            {
                "name": "Project on the Impact of Veganism on Health"
            },
            {
                "name": "Project on Food Additives and their Health Risks"
            },
            {
                "name": "Project on the Role of Herbal Supplements"
            },
            {
                "name": "Project on the Nutritional Needs of Pregnant Women"
            },
            {
                "name": "Project on the Role of Dietary Fiber in Digestive Health"
            },
            {
                "name": "Project on the Glycemic Index of Different Foods"
            },
            {
                "name": "Project on the Impact of Fermented Foods on Gut Flora"
            },
            {
                "name": "Project on the Role of Antioxidants in Health"
            },
            {
                "name": "Project on the Nutritional Needs of Geriatric Populations"
            },
            {
                "name": "Project on the Role of Hydration in Cognitive Function"
            },
            {
                "name": "Project on the Impact of Processed Foods on Public Health"
            },
            {
                "name": "Project on the Nutritional Value of Different Cuisines"
            },
            {
                "name": "Project on the Role of Vitamins in Immunity"
            },
            {
                "name": "Project on a Low-Salt Diet and Blood Pressure Management"
            },
            {
                "name": "Project on the Nutritional Needs for a Ketogenic Diet"
            },
            {
                "name": "Project on the Role of Omega-3 Fatty Acids"
            },
            {
                "name": "Project on the Nutritional Value of a Vegetarian Diet"
            },
            {
                "name": "Project on the Role of Iron in Anemia Prevention"
            },
            {
                "name": "Project on the Nutritional Needs for a Gluten-Free Diet"
            },
            {
                "name": "Project on the Role of Calcium in Bone Health"
            },
            {
                "name": "Project on the Nutritional Needs for a Low-Carb Diet"
            },
            {
                "name": "Project on the Role of Protein in Muscle Building"
            },
            {
                "name": "Project on the Nutritional Needs for a High-Protein Diet"
            },
            {
                "name": "Project on the Role of Carbohydrates in Energy"
            },
            {
                "name": "Project on the Nutritional Needs for a High-Fiber Diet"
            },
            {
                "name": "Project on the Role of Fats in Health"
            },
            {
                "name": "Project on the Nutritional Needs for a Low-Fat Diet"
            },
            {
                "name": "Project on the Role of Minerals in the Body"
            },
            {
                "name": "Project on the Nutritional Needs for a High-Carb Diet"
            },
            {
                "name": "Project on the Role of Water in Health"
            },
            {
                "name": "Project on the Nutritional Needs for a Balanced Diet"
            },
            {
                "name": "Project on the Role of Exercise in Weight Management"
            },
            {
                "name": "Project on the Nutritional Needs for a Low-Sugar Diet"
            },
            {
                "name": "Project on the Role of Sleep in Health"
            },
            {
                "name": "Project on the Nutritional Needs for a High-Antioxidant Diet"
            },
            {
                "name": "Project on the Role of Mindful Eating"
            }
        ]
    },
    {
        "name": "Foreign Trade",
        "children": [
            {
                "name": "Analysis of the Impact of Trade Agreements on a Specific Industry"
            },
            {
                "name": "Development of an Export-Import Business Plan"
            },
            {
                "name": "Risk Management in International Supply Chains"
            },
            {
                "name": "Feasibility Study for a Company's Entry into a Foreign Market"
            },
            {
                "name": "Role of Foreign Direct Investment (FDI) in a Developing Economy"
            },
            {
                "name": "Cross-Cultural Communication in International Business Negotiations"
            },
            {
                "name": "International Logistics and Shipping Procedures"
            },
            {
                "name": "Analysis of Currency Exchange Rates and Hedging Strategies"
            },
            {
                "name": "E-commerce and Global Marketplaces: Opportunities and Challenges"
            },
            {
                "name": "Project on the Role of the World Trade Organization (WTO)"
            },
            {
                "name": "Project on the Impact of Brexit on UK-EU Trade"
            },
            {
                "name": "Project on the Role of Free Trade Zones"
            },
            {
                "name": "Project on the Trade Relations between India and another country"
            },
            {
                "name": "Project on the Impact of Tariffs on Global Trade"
            },
            {
                "name": "Project on the Role of Export-Import Bank in Trade Finance"
            },
            {
                "name": "Project on the Challenges of Global Supply Chain Management"
            },
            {
                "name": "Project on the Role of Digital Platforms in International Trade"
            },
            {
                "name": "Project on a Case Study of a Global Trade Dispute"
            },
            {
                "name": "Project on the Role of International Trade in Economic Development"
            },
            {
                "name": "Project on the Impact of COVID-19 on Global Supply Chains"
            },
            {
                "name": "Project on the Role of Customs and Border Control"
            },
            {
                "name": "Project on the Trade Policy of a Specific Country"
            },
            {
                "name": "Project on the Role of International Trade in Job Creation"
            },
            {
                "name": "Project on the Impact of Sanctions on International Trade"
            },
            {
                "name": "Project on the Role of Intellectual Property in Foreign Trade"
            },
            {
                "name": "Project on the Trade and Environmental Protection"
            },
            {
                "name": "Project on the Role of International Law in Trade"
            },
            {
                "name": "Project on the Impact of E-commerce on Foreign Trade"
            },
            {
                "name": "Project on the Role of Trade Blocs"
            },
            {
                "name": "Project on the Challenges of Trade with Emerging Economies"
            },
            {
                "name": "Project on the Role of Trade Finance"
            },
            {
                "name": "Project on the Impact of Technology on International Logistics"
            },
            {
                "name": "Project on a Case Study of a Successful Exporting Company"
            },
            {
                "name": "Project on the Role of International Business Law"
            },
            {
                "name": "Project on the Impact of Political Risk on Foreign Trade"
            },
            {
                "name": "Project on the Role of Trade Facilitation Measures"
            },
            {
                "name": "Project on the Challenges of Trade with the United States"
            },
            {
                "name": "Project on the Role of International Commercial Terms (Incoterms)"
            },
            {
                "name": "Project on the Impact of Globalization on Foreign Trade"
            },
            {
                "name": "Project on the Role of Multilateral Trade Agreements"
            },
            {
                "name": "Project on the Challenges of Trading with the European Union"
            },
            {
                "name": "Project on the Role of Export Marketing"
            },
            {
                "name": "Project on the Impact of Trade on Economic Inequality"
            },
            {
                "name": "Project on the Role of Trade in Services"
            },
            {
                "name": "Project on the Challenges of Trading with China"
            },
            {
                "name": "Project on the Role of International Trade in Food Security"
            },
            {
                "name": "Project on the Impact of Trade on Labor Standards"
            },
            {
                "name": "Project on the Role of Trade in Sustainable Development"
            },
            {
                "name": "Project on the Challenges of Trade in the Digital Age"
            },
            {
                "name": "Project on the Role of Trade in Climate Change"
            }
        ]
    },
    {
        "name": "Genetics",
        "children": [
            {
                "name": "Gene Expression Analysis in a Model Organism"
            },
            {
                "name": "Molecular Diagnostics for a Specific Genetic Disorder"
            },
            {
                "name": "Genome-Wide Association Study (GWAS) of a Complex Trait"
            },
            {
                "name": "Ethical Implications of Genetic Engineering and Gene Therapy"
            },
            {
                "name": "Phylogenetic Analysis of a Gene Family"
            },
            {
                "name": "CRISPR-Cas9 Gene Editing for Crop Improvement"
            },
            {
                "name": "Analysis of DNA Fingerprinting in Forensic Science"
            },
            {
                "name": "Epigenetics: Impact of Environmental Factors on Gene Expression"
            },
            {
                "name": "Population Genetics of a Wild Animal Species"
            },
            {
                "name": "Project on the Role of Genes in Human Diseases"
            },
            {
                "name": "Project on the Genetics of Cancer"
            },
            {
                "name": "Project on the Role of Mutations in Evolution"
            },
            {
                "name": "Project on the Genetics of Behavior"
            },
            {
                "name": "Project on the Genetics of Drug Metabolism"
            },
            {
                "name": "Project on the Role of RNA in Gene Regulation"
            },
            {
                "name": "Project on the Genetics of Plant Disease Resistance"
            },
            {
                "name": "Project on the Role of Telomeres in Aging"
            },
            {
                "name": "Project on the Genetics of Human Ancestry"
            },
            {
                "name": "Project on the Role of MicroRNA in Gene Regulation"
            },
            {
                "name": "Project on the Genetics of Human Height"
            },
            {
                "name": "Project on the Genetics of Eye Color"
            },
            {
                "name": "Project on the Role of Gene Therapy in Genetic Disorders"
            },
            {
                "name": "Project on the Genetics of Alzheimer's Disease"
            },
            {
                "name": "Project on the Genetics of Obesity"
            },
            {
                "name": "Project on the Role of CRISPR in Gene Therapy"
            },
            {
                "name": "Project on the Genetics of Autism"
            },
            {
                "name": "Project on the Role of DNA Repair in Cancer"
            },
            {
                "name": "Project on the Genetics of Schizophrenia"
            },
            {
                "name": "Project on the Role of Genetic Counseling"
            },
            {
                "name": "Project on the Genetics of Diabetes"
            },
            {
                "name": "Project on the Role of Gene Editing in Agriculture"
            },
            {
                "name": "Project on the Genetics of Heart Disease"
            },
            {
                "name": "Project on the Role of Epigenetics in Development"
            },
            {
                "name": "Project on the Genetics of Addiction"
            },
            {
                "name": "Project on the Role of Genetic Testing"
            },
            {
                "name": "Project on the Genetics of Athletic Performance"
            },
            {
                "name": "Project on the Role of DNA Methylation"
            },
            {
                "name": "Project on the Genetics of Immunity"
            },
            {
                "name": "Project on the Role of Genetic Markers in Disease"
            },
            {
                "name": "Project on the Genetics of Skin Color"
            },
            {
                "name": "Project on the Role of Transgenic Animals"
            },
            {
                "name": "Project on the Genetics of Personality Traits"
            },
            {
                "name": "Project on the Role of Genomic Data in Personalized Medicine"
            },
            {
                "name": "Project on the Genetics of Mental Disorders"
            },
            {
                "name": "Project on the Role of Gene Regulation in Cancer"
            },
            {
                "name": "Project on the Genetics of Animal Behavior"
            },
            {
                "name": "Project on the Role of Bioinformatics in Genetics"
            },
            {
                "name": "Project on the Genetics of Plant Metabolism"
            },
            {
                "name": "Project on the Role of Stem Cells in Gene Therapy"
            },
            {
                "name": "Project on the Genetics of Disease Resistance"
            }
        ]
    },
    {
        "name": "Geology",
        "children": [
            {
                "name": "Geological Mapping and Mineral Resource Assessment of a Region"
            },
            {
                "name": "Paleontological Study of a Fossil Site"
            },
            {
                "name": "Geochemical Analysis of Water Samples for Pollution Detection"
            },
            {
                "name": "Seismic Data Interpretation for Hydrocarbon Exploration"
            },
            {
                "name": "Analysis of a Volcanic Eruption and its Impact on the Environment"
            },
            {
                "name": "Study of Plate Tectonics and Earthquake Prediction"
            },
            {
                "name": "Petrological Analysis of Igneous Rocks"
            },
            {
                "name": "Geological Survey for Groundwater Resources"
            },
            {
                "name": "Impact of Climate Change on Glacial Retreat"
            },
            {
                "name": "Project on the Stratigraphy of a Sedimentary Basin"
            },
            {
                "name": "Project on the Geomorphology of a River Valley"
            },
            {
                "name": "Project on the Role of Remote Sensing in Geological Mapping"
            },
            {
                "name": "Project on the Mineralogy of a Rock Sample"
            },
            {
                "name": "Project on the Role of GIS in Geological Data Analysis"
            },
            {
                "name": "Project on the Formation of Fossils"
            },
            {
                "name": "Project on the Geology of a Specific Mountain Range"
            },
            {
                "name": "Project on the Role of Geophysics in Subsurface Exploration"
            },
            {
                "name": "Project on the Formation of Coal and Petroleum"
            },
            {
                "name": "Project on the Role of Geochemistry in Environmental Studies"
            },
            {
                "name": "Project on the Geology of the Moon and Mars"
            },
            {
                "name": "Project on the Role of Structural Geology in Mineral Deposits"
            },
            {
                "name": "Project on the Geology of a Specific Volcano"
            },
            {
                "name": "Project on the Role of Paleoclimatology in Climate Change Studies"
            },
            {
                "name": "Project on the Geology of a Specific Earthquake Zone"
            },
            {
                "name": "Project on the Role of Mineralogy in Industrial Processes"
            },
            {
                "name": "Project on the Geology of a Specific Desert"
            },
            {
                "name": "Project on the Role of Sedimentary Geology in Petroleum Exploration"
            },
            {
                "name": "Project on the Geology of a Specific Cave System"
            },
            {
                "name": "Project on the Role of Economic Geology in Mining"
            },
            {
                "name": "Project on the Geology of a Specific Coastal Area"
            },
            {
                "name": "Project on the Role of Volcanology in Hazard Assessment"
            },
            {
                "name": "Project on the Geology of a Specific Glacier"
            },
            {
                "name": "Project on the Role of Hydrogeology in Water Management"
            },
            {
                "name": "Project on the Geology of a Specific Ocean Basin"
            },
            {
                "name": "Project on the Role of Engineering Geology in Construction"
            },
            {
                "name": "Project on the Geology of a Specific Mountain Pass"
            },
            {
                "name": "Project on the Role of Environmental Geology in Land Use Planning"
            },
            {
                "name": "Project on the Geology of a Specific Meteorite Impact Crater"
            },
            {
                "name": "Project on the Role of Geophysics in Environmental Studies"
            },
            {
                "name": "Project on the Geology of a Specific River Delta"
            },
            {
                "name": "Project on the Role of Geochemistry in Pollution Control"
            },
            {
                "name": "Project on the Geology of a Specific Lake"
            },
            {
                "name": "Project on the Role of Paleontology in Evolutionary Studies"
            },
            {
                "name": "Project on the Geology of a Specific Island"
            },
            {
                "name": "Project on the Role of Petrology in Materials Science"
            },
            {
                "name": "Project on the Geology of a Specific Geyser"
            },
            {
                "name": "Project on the Role of Structural Geology in Earthquake Prediction"
            },
            {
                "name": "Project on the Geology of a Specific Canyon"
            },
            {
                "name": "Project on the Role of Sedimentology in Climate Reconstruction"
            },
            {
                "name": "Project on the Geology of a Specific Desert Oasis"
            }
        ]
    },
    {
        "name": "Health Administration",
        "children": [
            {
                "name": "Strategic Planning for a Hospital's Expansion"
            },
            {
                "name": "Financial Management and Budgeting in a Healthcare Facility"
            },
            {
                "name": "Healthcare Quality Improvement: A Six Sigma Approach"
            },
            {
                "name": "Implementation of an Electronic Health Record (EHR) System"
            },
            {
                "name": "Healthcare Policy Analysis: Impact of a New Regulation"
            },
            {
                "name": "Human Resource Management in the Healthcare Sector"
            },
            {
                "name": "Supply Chain Management for a Pharmaceutical Company"
            },
            {
                "name": "Patient Satisfaction and Experience Improvement Plan"
            },
            {
                "name": "Risk Management and Patient Safety in a Hospital"
            },
            {
                "name": "Project on the Role of Telehealth in Rural Healthcare"
            },
            {
                "name": "Project on Healthcare Marketing and Patient Outreach"
            },
            {
                "name": "Project on the Legal and Ethical Issues in Healthcare"
            },
            {
                "name": "Project on the Role of Data Analytics in Healthcare"
            },
            {
                "name": "Project on the Impact of COVID-19 on the Healthcare System"
            },
            {
                "name": "Project on the Role of Health Insurance in Healthcare"
            },
            {
                "name": "Project on the Management of a Long-Term Care Facility"
            },
            {
                "name": "Project on the Role of Public Health Administration"
            },
            {
                "name": "Project on the Management of a Mental Health Clinic"
            },
            {
                "name": "Project on the Role of Health Information Technology"
            },
            {
                "name": "Project on the Management of a Public Health Crisis"
            },
            {
                "name": "Project on the Role of Healthcare Finance"
            },
            {
                "name": "Project on the Management of a Non-Profit Healthcare Organization"
            },
            {
                "name": "Project on the Role of Quality Management in Healthcare"
            },
            {
                "name": "Project on the Management of a Home Healthcare Agency"
            },
            {
                "name": "Project on the Role of Strategic Planning in Healthcare"
            },
            {
                "name": "Project on the Management of a Dental Clinic"
            },
            {
                "name": "Project on the Role of Healthcare Ethics"
            },
            {
                "name": "Project on the Management of a Rehabilitation Center"
            },
            {
                "name": "Project on the Role of Patient Data Privacy"
            },
            {
                "name": "Project on the Management of a Hospital Pharmacy"
            },
            {
                "name": "Project on the Role of Healthcare Policy"
            },
            {
                "name": "Project on the Management of a Nursing Home"
            },
            {
                "name": "Project on the Role of Patient Advocacy"
            },
            {
                "name": "Project on the Management of a Medical Group Practice"
            },
            {
                "name": "Project on the Role of Healthcare Leadership"
            },
            {
                "name": "Project on the Management of a Community Health Center"
            },
            {
                "name": "Project on the Role of Healthcare Communication"
            },
            {
                "name": "Project on the Management of a Diagnostic Lab"
            },
            {
                "name": "Project on the Role of Healthcare Marketing"
            },
            {
                "name": "Project on the Management of a Clinical Research Organization"
            },
            {
                "name": "Project on the Role of Healthcare Human Resources"
            },
            {
                "name": "Project on the Management of a Hospice"
            },
            {
                "name": "Project on the Role of Healthcare Supply Chain Management"
            },
            {
                "name": "Project on the Management of a Sports Medicine Clinic"
            },
            {
                "name": "Project on the Role of Healthcare Risk Management"
            },
            {
                "name": "Project on the Management of a Substance Abuse Treatment Center"
            },
            {
                "name": "Project on the Role of Healthcare Information Systems"
            },
            {
                "name": "Project on the Management of a Palliative Care Unit"
            },
            {
                "name": "Project on the Role of Healthcare Quality"
            },
            {
                "name": "Project on the Management of a Pediatric Clinic"
            }
        ]
    },
    {
        "name": "History",
        "children": [
            {
                "name": "The Impact of the British Colonial Rule on Indian Economy"
            },
            {
                "name": "Historical Analysis of a Specific Political Revolution"
            },
            {
                "name": "Social and Cultural History of a Specific Period or Region"
            },
            {
                "name": "Role of Women in a Historical Event"
            },
            {
                "name": "Oral History Project on a Local Community"
            },
            {
                "name": "Archaeological Study of an Ancient Civilization"
            },
            {
                "name": "Intellectual History of a Specific Philosophical Movement"
            },
            {
                "name": "History of Science and Technology"
            },
            {
                "name": "The Role of Propaganda in a Historical Conflict"
            },
            {
                "name": "Project on the History of Indian Art and Architecture"
            },
            {
                "name": "Project on the History of the Indian Freedom Struggle"
            },
            {
                "name": "Project on the History of Indian Railways"
            },
            {
                "name": "Project on the History of Indian Cinema"
            },
            {
                "name": "Project on the History of Indian Education System"
            },
            {
                "name": "Project on the History of Indian Agriculture"
            },
            {
                "name": "Project on the History of the Indian Army"
            },
            {
                "name": "Project on the History of the Indian Constitution"
            },
            {
                "name": "Project on the History of Indian Literature"
            },
            {
                "name": "Project on the History of Indian Music"
            },
            {
                "name": "Project on the History of Indian Religion"
            },
            {
                "name": "Project on the History of the Indian Judiciary"
            },
            {
                "name": "Project on the History of the Indian Economy"
            },
            {
                "name": "Project on the History of the Indian Financial System"
            },
            {
                "name": "Project on the History of the Indian Banking System"
            },
            {
                "name": "Project on the History of the Indian Trade Union Movement"
            },
            {
                "name": "Project on the History of Indian Foreign Policy"
            },
            {
                "name": "Project on the History of Indian Science and Technology"
            },
            {
                "name": "Project on the History of Indian Sports"
            },
            {
                "name": "Project on the History of Indian Medicine"
            },
            {
                "name": "Project on the History of Indian Theatre"
            },
            {
                "name": "Project on the History of Indian Architecture"
            },
            {
                "name": "Project on the History of Indian Cuisine"
            },
            {
                "name": "Project on the History of Indian Clothing"
            },
            {
                "name": "Project on the History of Indian Festivals"
            },
            {
                "name": "Project on the History of Indian Languages"
            },
            {
                "name": "Project on the History of Indian Kingdoms"
            },
            {
                "name": "Project on the History of Indian Empires"
            },
            {
                "name": "Project on the History of Indian Dynasties"
            },
            {
                "name": "Project on the History of Indian Rulers"
            },
            {
                "name": "Project on the History of Indian Wars"
            },
            {
                "name": "Project on the History of Indian Rebellions"
            },
            {
                "name": "Project on the History of Indian Social Reform Movements"
            },
            {
                "name": "Project on the History of Indian Religious Movements"
            },
            {
                "name": "Project on the History of Indian Political Parties"
            },
            {
                "name": "Project on the History of Indian Economic Policies"
            },
            {
                "name": "Project on the History of Indian Social Structures"
            },
            {
                "name": "Project on the History of Indian Legal System"
            },
            {
                "name": "Project on the History of Indian Culture"
            },
            {
                "name": "Project on the History of Indian Philosophy"
            },
            {
                "name": "Project on the History of Indian Art Forms"
            }
        ]
    },
    {
        "name": "Human Resource Management",
        "children": [
            {
                "name": "Employee Engagement and Retention Strategies for the IT Sector"
            },
            {
                "name": "Performance Appraisal System Design and Implementation"
            },
            {
                "name": "Recruitment and Selection Process Automation using AI"
            },
            {
                "name": "Analysis of Work-Life Balance and its Impact on Productivity"
            },
            {
                "name": "Strategic Human Resource Planning for a Startup"
            },
            {
                "name": "Training and Development Needs Analysis for a Company"
            },
            {
                "name": "Compensation and Benefits Package Design"
            },
            {
                "name": "Conflict Resolution and Grievance Handling in the Workplace"
            },
            {
                "name": "Diversity and Inclusion Policies in the Workplace"
            },
            {
                "name": "Project on the Role of Human Resource Information Systems (HRIS)"
            },
            {
                "name": "Project on the Impact of Remote Work on Employee Morale"
            },
            {
                "name": "Project on Employee Wellness Programs"
            },
            {
                "name": "Project on the Role of HR in Organizational Change"
            },
            {
                "name": "Project on a Case Study of a Successful Employee Relations Program"
            },
            {
                "name": "Project on the Legal and Ethical Issues in HR"
            },
            {
                "name": "Project on the Role of HR in a Mergers and Acquisitions"
            },
            {
                "name": "Project on a Case Study of a Workplace Harassment Case"
            },
            {
                "name": "Project on the Role of Performance Management in Career Development"
            },
            {
                "name": "Project on a Case Study of a Layoff and its Impact"
            },
            {
                "name": "Project on the Role of HR in Talent Acquisition"
            },
            {
                "name": "Project on a Case Study of an Employee Engagement Survey"
            },
            {
                "name": "Project on the Role of HR in Building a Positive Work Culture"
            },
            {
                "name": "Project on a Case Study of a Succession Planning Program"
            },
            {
                "name": "Project on the Role of HR in Crisis Management"
            },
            {
                "name": "Project on a Case Study of a Performance Improvement Plan"
            },
            {
                "name": "Project on the Role of HR in Employee Onboarding"
            },
            {
                "name": "Project on a Case Study of an Employee Termination"
            },
            {
                "name": "Project on the Role of HR in Employee Offboarding"
            },
            {
                "name": "Project on a Case Study of a Training Program's Effectiveness"
            },
            {
                "name": "Project on the Role of HR in Compensation and Benefits"
            },
            {
                "name": "Project on a Case Study of a Diversity and Inclusion Program"
            },
            {
                "name": "Project on the Role of HR in Workplace Safety"
            },
            {
                "name": "Project on a Case Study of a Workplace Conflict"
            },
            {
                "name": "Project on the Role of HR in Labor Relations"
            },
            {
                "name": "Project on a Case Study of a Union Negotiation"
            },
            {
                "name": "Project on the Role of HR in Employee Communication"
            },
            {
                "name": "Project on a Case Study of an Employee Grievance"
            },
            {
                "name": "Project on the Role of HR in Global Operations"
            },
            {
                "name": "Project on a Case Study of a Performance Management System"
            },
            {
                "name": "Project on the Role of HR in Strategic Planning"
            },
            {
                "name": "Project on a Case Study of a Company's Culture Change"
            },
            {
                "name": "Project on the Role of HR in Workforce Planning"
            },
            {
                "name": "Project on a Case Study of a Successful HR Transformation"
            },
            {
                "name": "Project on the Role of HR in Employee Development"
            },
            {
                "name": "Project on a Case Study of an International HR Policy"
            },
            {
                "name": "Project on the Role of HR in Risk Management"
            },
            {
                "name": "Project on a Case Study of a Company's Benefits Program"
            },
            {
                "name": "Project on the Role of HR in Talent Management"
            },
            {
                "name": "Project on a Case Study of a Remote Work Policy"
            },
            {
                "name": "Project on the Role of HR in Performance Improvement"
            }
        ]
    },
    {
        "name": "Information Technology",
        "children": [
            {
                "name": "Development of a Secure Web Application using a Modern Framework"
            },
            {
                "name": "Cloud Computing Migration Strategy for a Small Business"
            },
            {
                "name": "Cybersecurity Risk Assessment and Penetration Testing"
            },
            {
                "name": "Design and Implementation of a Relational Database System"
            },
            {
                "name": "Network Design and Security for a Corporate Office"
            },
            {
                "name": "Mobile App Development for a Niche Market"
            },
            {
                "name": "Business Intelligence (BI) Dashboard for Data-driven Decisions"
            },
            {
                "name": "IoT-based Smart Campus Management System"
            },
            {
                "name": "IT Project Management and Agile Methodology Implementation"
            },
            {
                "name": "Project on a Blockchain-based Supply Chain Management System"
            },
            {
                "name": "Project on an Automated Software Testing Framework"
            },
            {
                "name": "Project on a Data Backup and Disaster Recovery Plan"
            },
            {
                "name": "Project on a Virtual Reality (VR) Training Simulation"
            },
            {
                "name": "Project on a Machine Learning-based Recommendation System"
            },
            {
                "name": "Project on a Cloud-based Customer Relationship Management (CRM) System"
            },
            {
                "name": "Project on a Natural Language Processing (NLP) Application"
            },
            {
                "name": "Project on an Augmented Reality (AR) Application"
            },
            {
                "name": "Project on a Web-based Learning Management System"
            },
            {
                "name": "Project on a Cybersecurity Incident Response Plan"
            },
            {
                "name": "Project on a Big Data Analytics Platform"
            },
            {
                "name": "Project on an IoT-based Smart Agriculture System"
            },
            {
                "name": "Project on a Web-based Project Management Tool"
            },
            {
                "name": "Project on a Blockchain-based Identity Management System"
            },
            {
                "name": "Project on a Deep Learning Model for Image Recognition"
            },
            {
                "name": "Project on an Automated HR Management System"
            },
            {
                "name": "Project on a Voice-controlled Smart Assistant"
            },
            {
                "name": "Project on a Mobile App for Location-based Services"
            },
            {
                "name": "Project on a Cybersecurity System for IoT Devices"
            },
            {
                "name": "Project on a Cloud-based Healthcare Management System"
            },
            {
                "name": "Project on a Web-based Survey and Data Analysis Tool"
            },
            {
                "name": "Project on a Cryptocurrency Trading Bot"
            },
            {
                "name": "Project on a Cybersecurity Intrusion Detection System"
            },
            {
                "name": "Project on a Machine Learning-based Credit Scoring Model"
            },
            {
                "name": "Project on a Cloud-based Document Management System"
            },
            {
                "name": "Project on a Social Networking Platform for a Niche Community"
            },
            {
                "name": "Project on a Natural Language Understanding (NLU) System"
            },
            {
                "name": "Project on an Automated Code Generation Tool"
            },
            {
                "name": "Project on a Supply Chain Optimization Model"
            },
            {
                "name": "Project on a Facial Recognition System"
            },
            {
                "name": "Project on a Business Intelligence Dashboard"
            },
            {
                "name": "Project on a Cloud-based ERP System"
            },
            {
                "name": "Project on a Web-based Learning Management System"
            },
            {
                "name": "Project on a Cybersecurity System for a Small Business"
            },
            {
                "name": "Project on a Machine Learning-based Fraud Detection System"
            },
            {
                "name": "Project on an Automated Testing Framework for Web Applications"
            },
            {
                "name": "Project on a Cloud-based Data Analytics Platform"
            },
            {
                "name": "Project on an IoT-based Smart City System"
            },
            {
                "name": "Project on a Web-based Healthcare Management System"
            },
            {
                "name": "Project on a Voice-controlled Home Automation System"
            },
            {
                "name": "Project on a Mobile App for Fitness Tracking"
            }
        ]
    },
    {
        "name": "International Relations",
        "children": [
            {
                "name": "Analysis of a Specific International Conflict and its Resolution"
            },
            {
                "name": "Role of the United Nations in Peacekeeping Operations"
            },
            {
                "name": "Impact of Globalization on National Sovereignty"
            },
            {
                "name": "Foreign Policy Analysis of a Major World Power"
            },
            {
                "name": "Cross-Cultural Negotiation and Diplomacy Case Study"
            },
            {
                "name": "International Law and Human Rights: A Case Study"
            },
            {
                "name": "Role of Non-State Actors in International Relations"
            },
            {
                "name": "Cybersecurity and its Impact on International Security"
            },
            {
                "name": "Analysis of International Trade Agreements and Their Impact"
            },
            {
                "name": "Project on the Role of Regional Organizations in Global Politics"
            },
            {
                "name": "Project on a Case Study of a Humanitarian Crisis"
            },
            {
                "name": "Project on the Role of the International Criminal Court"
            },
            {
                "name": "Project on the Impact of Climate Change on Geopolitics"
            },
            {
                "name": "Project on the Role of International Non-Governmental Organizations (INGOs)"
            },
            {
                "name": "Project on the History of a Specific International Treaty"
            },
            {
                "name": "Project on the Role of the World Bank in Development"
            },
            {
                "name": "Project on a Case Study of a Peace Negotiation"
            },
            {
                "name": "Project on the Role of International Law in Conflict Resolution"
            },
            {
                "name": "Project on the Impact of Economic Sanctions"
            },
            {
                "name": "Project on a Case Study of a Failed State"
            },
            {
                "name": "Project on the Role of Diplomacy in Crisis Management"
            },
            {
                "name": "Project on the Impact of Technology on International Relations"
            },
            {
                "name": "Project on the Role of the International Monetary Fund (IMF)"
            },
            {
                "name": "Project on a Case Study of a Successful Diplomatic Mission"
            },
            {
                "name": "Project on the Role of Media in International Relations"
            },
            {
                "name": "Project on the Impact of Terrorism on Global Security"
            },
            {
                "name": "Project on a Case Study of a Civil War"
            },
            {
                "name": "Project on the Role of International Organizations in Trade"
            },
            {
                "name": "Project on the Impact of Migration on International Relations"
            },
            {
                "name": "Project on a Case Study of a Political Assassination"
            },
            {
                "name": "Project on the Role of Human Rights in Foreign Policy"
            },
            {
                "name": "Project on the Impact of Social Media on International Relations"
            },
            {
                "name": "Project on a Case Study of a Border Dispute"
            },
            {
                "name": "Project on the Role of International Law in War Crimes"
            },
            {
                "name": "Project on the Impact of Nuclear Proliferation"
            },
            {
                "name": "Project on a Case Study of a Coup d'état"
            },
            {
                "name": "Project on the Role of International Development Aid"
            },
            {
                "name": "Project on the Impact of Oil on International Relations"
            },
            {
                "name": "Project on a Case Study of a Trade War"
            },
            {
                "name": "Project on the Role of International Relations in Climate Policy"
            },
            {
                "name": "Project on the Impact of Drones on Warfare"
            },
            {
                "name": "Project on a Case Study of a Global Pandemic Response"
            },
            {
                "name": "Project on the Role of International Law in the Oceans"
            },
            {
                "name": "Project on the Impact of Nationalism on International Relations"
            },
            {
                "name": "Project on a Case Study of a Refugee Crisis"
            },
            {
                "name": "Project on the Role of International Relations in Cybersecurity"
            },
            {
                "name": "Project on the Impact of Space Exploration on International Relations"
            },
            {
                "name": "Project on a Case Study of a Political Protest Movement"
            },
            {
                "name": "Project on the Role of International Relations in a Global Economy"
            }
        ]
    },
    {
        "name": "Journalism & Mass Communication",
        "children": [
            {
                "name": "Investigative Report on Local Government Corruption"
            },
            {
                "name": "Content Analysis of News Coverage of a Political Event"
            },
            {
                "name": "Documentary Film on a Social Justice Issue"
            },
            {
                "name": "Public Relations Campaign for a Non-Profit Organization"
            },
            {
                "name": "The Role of Social Media in Political Communication"
            },
            {
                "name": "Ethical Challenges in Digital Journalism"
            },
            {
                "name": "Podcast Series on a Historical Event"
            },
            {
                "name": "Analysis of Fake News and Misinformation"
            },
            {
                "name": "Cross-Cultural Communication in International Media"
            },
            {
                "name": "Project on the Impact of Citizen Journalism"
            },
            {
                "name": "Project on the Evolution of Digital Media"
            },
            {
                "name": "Project on a Case Study of a Media Scandal"
            },
            {
                "name": "Project on the Role of Communication in Crisis Management"
            },
            {
                "name": "Project on the Impact of Media on Public Opinion"
            },
            {
                "name": "Project on the Future of News Reporting"
            },
            {
                "name": "Project on the Role of Advertising in Consumer Behavior"
            },
            {
                "name": "Project on a Case Study of a Political Campaign"
            },
            {
                "name": "Project on the Role of Public Relations in Brand Building"
            },
            {
                "name": "Project on the Impact of Globalization on Media"
            },
            {
                "name": "Project on the Role of Social Media in Public Relations"
            },
            {
                "name": "Project on a Case Study of a Successful Social Media Campaign"
            },
            {
                "name": "Project on the Role of Communication in Health Awareness"
            },
            {
                "name": "Project on a Case Study of a Corporate Communication Strategy"
            },
            {
                "name": "Project on the Role of Media in Disaster Management"
            },
            {
                "name": "Project on the Use of Virtual Reality in Journalism"
            },
            {
                "name": "Project on a Case Study of a News Organization's Ethics"
            },
            {
                "name": "Project on the Role of Artificial Intelligence in News Writing"
            },
            {
                "name": "Project on the Impact of Live Streaming on Media"
            },
            {
                "name": "Project on the Role of Media in Social Movements"
            },
            {
                "name": "Project on the Legal and Ethical Issues in Journalism"
            },
            {
                "name": "Project on the Impact of Television on Society"
            },
            {
                "name": "Project on the Future of Print Media"
            },
            {
                "name": "Project on the Role of Advertising in the Digital Age"
            },
            {
                "name": "Project on a Case Study of a Public Relations Crisis"
            },
            {
                "name": "Project on the Role of Communication in Leadership"
            },
            {
                "name": "Project on the Impact of Media on Body Image"
            },
            {
                "name": "Project on a Case Study of a Successful Brand Campaign"
            },
            {
                "name": "Project on the Role of Public Opinion in Policy Making"
            },
            {
                "name": "Project on the Use of Visual Communication in Marketing"
            },
            {
                "name": "Project on the History of Public Relations"
            },
            {
                "name": "Project on the Role of Social Media in Political Activism"
            },
            {
                "name": "Project on a Case Study of a Corporate Communication Strategy"
            },
            {
                "name": "Project on the Role of Media in Disaster Management"
            },
            {
                "name": "Project on the Use of Virtual Reality in Journalism"
            },
            {
                "name": "Project on a Case Study of a News Organization's Ethics"
            },
            {
                "name": "Project on the Role of Communication in Health Awareness"
            },
            {
                "name": "Project on a Case Study of a Successful Social Media Campaign"
            },
            {
                "name": "Project on the Role of Artificial Intelligence in News Writing"
            },
            {
                "name": "Project on the Impact of Live Streaming on Media"
            }
        ]
    },
    {
        "name": "Medical Laboratory Technology",
        "children": [
            {
                "name": "Development of a Diagnostic Test for a Specific Disease"
            },
            {
                "name": "Quality Control and Assurance in a Clinical Laboratory"
            },
            {
                "name": "Automation of Laboratory Processes for Increased Efficiency"
            },
            {
                "name": "Analysis of Blood Samples for Hematological Disorders"
            },
            {
                "name": "Role of Microbiology in Diagnosing Infectious Diseases"
            },
            {
                "name": "Cytological Analysis of Cell Samples for Cancer Detection"
            },
            {
                "name": "Biochemical Analysis of Body Fluids for Metabolic Disorders"
            },
            {
                "name": "Use of Molecular Techniques in Genetic Testing"
            },
            {
                "name": "Management of a Medical Laboratory"
            },
            {
                "name": "Project on the Role of Medical Laboratory Technologists in Patient Care"
            },
            {
                "name": "Project on the Use of Automation in a Clinical Laboratory"
            },
            {
                "name": "Project on the Role of Quality Management in a Medical Lab"
            },
            {
                "name": "Project on the Diagnosis of a Specific Infectious Disease"
            },
            {
                "name": "Project on the Role of Hematology in Blood Banking"
            },
            {
                "name": "Project on the Use of Molecular Diagnostics in Genetic Testing"
            },
            {
                "name": "Project on the Role of Clinical Chemistry in Disease Diagnosis"
            },
            {
                "name": "Project on the Use of Histology in Pathology"
            },
            {
                "name": "Project on the Role of Immunology in Disease Diagnosis"
            },
            {
                "name": "Project on the Use of Point-of-Care Testing"
            },
            {
                "name": "Project on the Role of Microbiology in Food Safety"
            },
            {
                "name": "Project on the Use of Cytogenetics in Disease Diagnosis"
            },
            {
                "name": "Project on the Role of Urinalysis in Kidney Disease"
            },
            {
                "name": "Project on the Use of Serology in Infectious Disease"
            },
            {
                "name": "Project on the Role of Medical Laboratory Technology in Public Health"
            },
            {
                "name": "Project on the Use of Automation in a Blood Bank"
            },
            {
                "name": "Project on the Role of a Medical Lab in a Hospital"
            },
            {
                "name": "Project on the Use of a Blood Gas Analyzer"
            },
            {
                "name": "Project on the Role of a Medical Lab in a Research Setting"
            },
            {
                "name": "Project on the Use of a Coagulation Analyzer"
            },
            {
                "name": "Project on the Role of a Medical Lab in a Forensic Lab"
            },
            {
                "name": "Project on the Use of a Urine Analyzer"
            },
            {
                "name": "Project on the Role of a Medical Lab in a Veterinary Clinic"
            },
            {
                "name": "Project on the Use of a Blood Culture System"
            },
            {
                "name": "Project on the Role of a Medical Lab in a Public Health Lab"
            },
            {
                "name": "Project on the Use of a Fecal Occult Blood Test"
            },
            {
                "name": "Project on the Role of a Medical Lab in a Commercial Lab"
            },
            {
                "name": "Project on the Use of a C-Reactive Protein (CRP) Test"
            },
            {
                "name": "Project on the Role of a Medical Lab in a Research Lab"
            },
            {
                "name": "Project on the Use of a Glucose Meter"
            },
            {
                "name": "Project on the Role of a Medical Lab in a Hospital Lab"
            },
            {
                "name": "Project on the Use of a Hemoglobin A1c Test"
            },
            {
                "name": "Project on the Role of a Medical Lab in a Blood Donor Center"
            },
            {
                "name": "Project on the Use of a Liver Function Test"
            },
            {
                "name": "Project on the Role of a Medical Lab in a Fertility Clinic"
            },
            {
                "name": "Project on the Use of a Kidney Function Test"
            },
            {
                "name": "Project on the Role of a Medical Lab in a Toxicology Lab"
            },
            {
                "name": "Project on the Use of a Thyroid Function Test"
            },
            {
                "name": "Project on the Role of a Medical Lab in a Genetic Lab"
            },
            {
                "name": "Project on the Use of a Tumor Marker Test"
            },
            {
                "name": "Project on the Role of a Medical Lab in a Cancer Hospital"
            }
        ]
    },
    {
        "name": "Microbiology",
        "children": [
            {
                "name": "Isolation and Identification of Bacteria from Environmental Samples"
            },
            {
                "name": "Antimicrobial Susceptibility Testing of Clinical Isolates"
            },
            {
                "name": "Microbial Production of a Specific Enzyme or Antibiotic"
            },
            {
                "name": "Bioremediation of Polluted Water using Microorganisms"
            },
            {
                "name": "Analysis of Foodborne Pathogens in a Food Product"
            },
            {
                "name": "Role of Microbes in Wastewater Treatment"
            },
            {
                "name": "Study of Viral Replication and Antiviral Agents"
            },
            {
                "name": "Microbial Fuel Cells for Sustainable Energy"
            },
            {
                "name": "Analysis of the Human Microbiome and its Impact on Health"
            },
            {
                "name": "Project on the Role of Bacteria in Nitrogen Fixation"
            },
            {
                "name": "Project on the Role of Fungi in Industrial Processes"
            },
            {
                "name": "Project on the Role of Yeasts in Fermentation"
            },
            {
                "name": "Project on the Role of Algae in Biofuel Production"
            },
            {
                "name": "Project on the Role of Viruses in Gene Therapy"
            },
            {
                "name": "Project on the Role of Prions in Neurodegenerative Diseases"
            },
            {
                "name": "Project on the Role of Microbes in Soil Health"
            },
            {
                "name": "Project on the Role of Microbes in Food Preservation"
            },
            {
                "name": "Project on the Role of Microbes in Drug Discovery"
            },
            {
                "name": "Project on the Role of Microbes in Bioremediation"
            },
            {
                "name": "Project on the Role of Microbes in the Carbon Cycle"
            },
            {
                "name": "Project on the Role of Microbes in the Sulfur Cycle"
            },
            {
                "name": "Project on the Role of Microbes in the Phosphorus Cycle"
            },
            {
                "name": "Project on the Role of Microbes in the Nitrogen Cycle"
            },
            {
                "name": "Project on the Role of Microbes in the Oxygen Cycle"
            },
            {
                "name": "Project on the Role of Microbes in the Water Cycle"
            },
            {
                "name": "Project on the Role of Microbes in Disease"
            },
            {
                "name": "Project on the Role of Microbes in Immunity"
            },
            {
                "name": "Project on the Role of Microbes in Digestion"
            },
            {
                "name": "Project on the Role of Microbes in the Gut"
            },
            {
                "name": "Project on the Role of Microbes in the Skin"
            },
            {
                "name": "Project on the Role of Microbes in the Mouth"
            },
            {
                "name": "Project on the Role of Microbes in the Lungs"
            },
            {
                "name": "Project on the Role of Microbes in the Blood"
            },
            {
                "name": "Project on the Role of Microbes in the Brain"
            },
            {
                "name": "Project on the Role of Microbes in the Heart"
            },
            {
                "name": "Project on the Role of Microbes in the Kidney"
            },
            {
                "name": "Project on the Role of Microbes in the Liver"
            },
            {
                "name": "Project on the Role of Microbes in the Spleen"
            },
            {
                "name": "Project on the Role of Microbes in the Pancreas"
            },
            {
                "name": "Project on the Role of Microbes in the Stomach"
            },
            {
                "name": "Project on the Role of Microbes in the Intestines"
            },
            {
                "name": "Project on the Role of Microbes in the Colon"
            },
            {
                "name": "Project on the Role of Microbes in the Appendix"
            },
            {
                "name": "Project on the Role of Microbes in the Gallbladder"
            },
            {
                "name": "Project on the Role of Microbes in the Bladder"
            },
            {
                "name": "Project on the Role of Microbes in the Uterus"
            },
            {
                "name": "Project on the Role of Microbes in the Vagina"
            },
            {
                "name": "Project on the Role of Microbes in the Testis"
            },
            {
                "name": "Project on the Role of Microbes in the Ovary"
            },
            {
                "name": "Project on the Role of Microbes in the Bone Marrow"
            }
        ]
    },
    {
        "name": "Nursing (M.Sc Nursing)",
        "children": [
            {
                "name": "Evidence-Based Practice: A Systematic Review of Nursing Interventions"
            },
            {
                "name": "Clinical Leadership and Management in a Hospital Ward"
            },
            {
                "name": "Patient Safety and Quality Improvement in a Healthcare Setting"
            },
            {
                "name": "Role of Advanced Practice Nurses in Primary Healthcare"
            },
            {
                "name": "Analysis of the Impact of Nurse-Patient Ratios on Patient Outcomes"
            },
            {
                "name": "Nursing Informatics: Implementation of a Clinical Information System"
            },
            {
                "name": "Mental Health Nursing: A Case Study on a Specific Disorder"
            },
            {
                "name": "Community Health Nursing: A Needs Assessment in a Rural Community"
            },
            {
                "name": "Ethical and Legal Issues in Nursing Practice"
            },
            {
                "name": "Project on the Role of Nurses in Disaster Management"
            },
            {
                "name": "Project on the Impact of Nurse Burnout on Patient Care"
            },
            {
                "name": "Project on a Case Study of a Patient with a Chronic Illness"
            },
            {
                "name": "Project on the Role of Palliative Care in Nursing"
            },
            {
                "name": "Project on the Role of Nursing in Cancer Treatment"
            },
            {
                "name": "Project on the Role of Nursing in Geriatric Care"
            },
            {
                "name": "Project on the Role of Nursing in Pediatric Care"
            },
            {
                "name": "Project on the Role of Nursing in Critical Care"
            },
            {
                "name": "Project on the Role of Nursing in Emergency Care"
            },
            {
                "name": "Project on the Role of Nursing in Mental Health Care"
            },
            {
                "name": "Project on the Role of Nursing in Community Health"
            },
            {
                "name": "Project on the Role of Nursing in Public Health"
            },
            {
                "name": "Project on the Role of Nursing in School Health"
            },
            {
                "name": "Project on the Role of Nursing in Occupational Health"
            },
            {
                "name": "Project on the Role of Nursing in Home Healthcare"
            },
            {
                "name": "Project on the Role of Nursing in Hospice Care"
            },
            {
                "name": "Project on the Role of Nursing in Rehabilitation"
            },
            {
                "name": "Project on the Role of Nursing in Medical-Surgical Care"
            },
            {
                "name": "Project on the Role of Nursing in Maternal-Child Health"
            },
            {
                "name": "Project on the Role of Nursing in Neonatal Care"
            },
            {
                "name": "Project on the Role of Nursing in Cardiovascular Care"
            },
            {
                "name": "Project on the Role of Nursing in Respiratory Care"
            },
            {
                "name": "Project on the Role of Nursing in Renal Care"
            },
            {
                "name": "Project on the Role of Nursing in Neurological Care"
            },
            {
                "name": "Project on the Role of Nursing in Orthopedic Care"
            },
            {
                "name": "Project on the Role of Nursing in Urological Care"
            },
            {
                "name": "Project on the Role of Nursing in Gastrointestinal Care"
            },
            {
                "name": "Project on the Role of Nursing in Endocrine Care"
            },
            {
                "name": "Project on the Role of Nursing in Dermatological Care"
            },
            {
                "name": "Project on the Role of Nursing in Oncology Care"
            },
            {
                "name": "Project on the Role of Nursing in Immunological Care"
            },
            {
                "name": "Project on the Role of Nursing in Infectious Disease Care"
            },
            {
                "name": "Project on the Role of Nursing in Pain Management"
            },
            {
                "name": "Project on the Role of Nursing in Wound Care"
            },
            {
                "name": "Project on the Role of Nursing in Diabetes Management"
            },
            {
                "name": "Project on the Role of Nursing in Hypertension Management"
            },
            {
                "name": "Project on the Role of Nursing in Obesity Management"
            },
            {
                "name": "Project on the Role of Nursing in Smoking Cessation"
            },
            {
                "name": "Project on the Role of Nursing in Alcohol and Drug Abuse"
            },
            {
                "name": "Project on the Role of Nursing in Mental Health Promotion"
            },
            {
                "name": "Project on the Role of Nursing in Patient Education"
            }
        ]
    },
    {
        "name": "Nutrition & Dietetics",
        "children": [
            {
                "name": "Dietary Management for Type 2 Diabetes Patients"
            },
            {
                "name": "Nutritional Counseling and Meal Planning for Athletes"
            },
            {
                "name": "Role of Micronutrients in Boosting the Immune System"
            },
            {
                "name": "Assessment of Nutritional Status in Pediatric Patients"
            },
            {
                "name": "Impact of a Plant-Based Diet on Cardiovascular Health"
            },
            {
                "name": "Developing a Nutrition Education Program for a School"
            },
            {
                "name": "Clinical Nutrition: Management of Chronic Kidney Disease"
            },
            {
                "name": "Role of Gut Microbiota in Health and Disease"
            },
            {
                "name": "Food Allergies and Intolerances: Diagnosis and Dietary Management"
            },
            {
                "name": "Project on the Role of Diet in Cancer Prevention"
            },
            {
                "name": "Project on the Impact of Fast Food on Public Health"
            },
            {
                "name": "Project on the Role of Omega-3 Fatty Acids in Brain Health"
            },
            {
                "name": "Project on the Nutritional Needs of Pregnant Women"
            },
            {
                "name": "Project on the Role of Protein in Muscle Building"
            },
            {
                "name": "Project on the Nutritional Needs of Geriatric Populations"
            },
            {
                "name": "Project on the Role of Vitamins in Immunity"
            },
            {
                "name": "Project on a Low-Salt Diet and Blood Pressure Management"
            },
            {
                "name": "Project on the Nutritional Needs for a Ketogenic Diet"
            },
            {
                "name": "Project on the Role of Dietary Fiber in Digestive Health"
            },
            {
                "name": "Project on the Glycemic Index of Different Foods"
            },
            {
                "name": "Project on the Impact of Fermented Foods on Gut Flora"
            },
            {
                "name": "Project on the Role of Antioxidants in Health"
            },
            {
                "name": "Project on the Nutritional Needs for a Vegetarian Diet"
            },
            {
                "name": "Project on the Role of Hydration in Cognitive Function"
            },
            {
                "name": "Project on the Impact of Processed Foods on Public Health"
            },
            {
                "name": "Project on the Nutritional Value of Different Cuisines"
            },
            {
                "name": "Project on the Role of Minerals in the Body"
            },
            {
                "name": "Project on a Low-Carb Diet and Weight Management"
            },
            {
                "name": "Project on the Nutritional Needs for a High-Protein Diet"
            },
            {
                "name": "Project on the Role of Carbohydrates in Energy"
            },
            {
                "name": "Project on the Nutritional Needs for a High-Fiber Diet"
            },
            {
                "name": "Project on the Role of Fats in Health"
            },
            {
                "name": "Project on the Nutritional Needs for a Low-Fat Diet"
            },
            {
                "name": "Project on the Role of Water in Health"
            },
            {
                "name": "Project on the Nutritional Needs for a Balanced Diet"
            },
            {
                "name": "Project on the Role of Exercise in Weight Management"
            },
            {
                "name": "Project on the Nutritional Needs for a Low-Sugar Diet"
            },
            {
                "name": "Project on the Role of Sleep in Health"
            },
            {
                "name": "Project on the Nutritional Needs for a High-Antioxidant Diet"
            },
            {
                "name": "Project on the Role of Mindful Eating"
            },
            {
                "name": "Project on the Impact of Fasting on Metabolism"
            },
            {
                "name": "Project on the Nutritional Needs for a Mediterranean Diet"
            },
            {
                "name": "Project on the Role of Vitamin D in Bone Health"
            },
            {
                "name": "Project on the Nutritional Needs for a DASH Diet"
            },
            {
                "name": "Project on the Role of Iron in Anemia Prevention"
            },
            {
                "name": "Project on the Nutritional Needs for a GAPS Diet"
            },
            {
                "name": "Project on the Role of Magnesium in Health"
            },
            {
                "name": "Project on the Nutritional Needs for a Low-FODMAP Diet"
            },
            {
                "name": "Project on the Role of Zinc in Immunity"
            },
            {
                "name": "Project on the Nutritional Needs for a Low-Histamine Diet"
            }
        ]
    },
    {
        "name": "Philosophy",
        "children": [
            {
                "name": "Analysis of Existentialism and its Relevance in Modern Life"
            },
            {
                "name": "The Ethics of Artificial Intelligence and Robotics"
            },
            {
                "name": "Epistemology: The Nature and Limits of Human Knowledge"
            },
            {
                "name": "Political Philosophy: A Comparative Study of Plato and Aristotle"
            },
            {
                "name": "Philosophy of Mind: The Mind-Body Problem"
            },
            {
                "name": "Logic and Critical Thinking in Everyday Arguments"
            },
            {
                "name": "Metaphysics: The Nature of Reality and Existence"
            },
            {
                "name": "Aesthetics: The Philosophy of Art and Beauty"
            },
            {
                "name": "The Philosophy of Science and Scientific Method"
            },
            {
                "name": "Project on the Philosophy of Religion and the Existence of God"
            },
            {
                "name": "Project on the Philosophy of Language"
            },
            {
                "name": "Project on the Philosophy of History"
            },
            {
                "name": "Project on the Philosophy of Education"
            },
            {
                "name": "Project on the Philosophy of Law"
            },
            {
                "name": "Project on the Philosophy of Technology"
            },
            {
                "name": "Project on the Philosophy of Ethics and Morality"
            },
            {
                "name": "Project on the Philosophy of Mind and Consciousness"
            },
            {
                "name": "Project on the Philosophy of Politics and Government"
            },
            {
                "name": "Project on the Philosophy of Art and Aesthetics"
            },
            {
                "name": "Project on the Philosophy of Science and its Limits"
            },
            {
                "name": "Project on the Philosophy of Religion and Faith"
            },
            {
                "name": "Project on the Philosophy of Psychology and the Self"
            },
            {
                "name": "Project on the Philosophy of Logic and Reasoning"
            },
            {
                "name": "Project on the Philosophy of Time and Space"
            },
            {
                "name": "Project on the Philosophy of Free Will and Determinism"
            },
            {
                "name": "Project on the Philosophy of Happiness and Well-being"
            },
            {
                "name": "Project on the Philosophy of Love and Relationships"
            },
            {
                "name": "Project on the Philosophy of Death and Dying"
            },
            {
                "name": "Project on the Philosophy of Life and Meaning"
            },
            {
                "name": "Project on the Philosophy of Mind and Artificial Intelligence"
            },
            {
                "name": "Project on the Philosophy of Language and Communication"
            },
            {
                "name": "Project on the Philosophy of Education and its Purpose"
            },
            {
                "name": "Project on the Philosophy of Law and Justice"
            },
            {
                "name": "Project on the Philosophy of Technology and its Impact"
            },
            {
                "name": "Project on the Philosophy of Ethics and Business"
            },
            {
                "name": "Project on the Philosophy of Mind and Consciousness"
            },
            {
                "name": "Project on the Philosophy of Politics and Power"
            },
            {
                "name": "Project on the Philosophy of Art and Creativity"
            },
            {
                "name": "Project on the Philosophy of Science and its History"
            },
            {
                "name": "Project on the Philosophy of Religion and Belief"
            },
            {
                "name": "Project on the Philosophy of Psychology and Emotions"
            },
            {
                "name": "Project on the Philosophy of Logic and Fallacies"
            },
            {
                "name": "Project on the Philosophy of Time and Memory"
            },
            {
                "name": "Project on the Philosophy of Free Will and Choice"
            },
            {
                "name": "Project on the Philosophy of Happiness and Purpose"
            },
            {
                "name": "Project on the Philosophy of Love and Friendship"
            },
            {
                "name": "Project on the Philosophy of Death and Grief"
            },
            {
                "name": "Project on the Philosophy of Life and its Value"
            },
            {
                "name": "Project on the Philosophy of Mind and Robots"
            },
            {
                "name": "Project on the Philosophy of Language and Thought"
            }
        ]
    },
    {
        "name": "Physics",
        "children": [
            {
                "name": "Quantum Computing: Principles and Applications"
            },
            {
                "name": "Astrophysics: Simulation of a Black Hole's Event Horizon"
            },
            {
                "name": "Nanotechnology: Fabrication and Characterization of Nanomaterials"
            },
            {
                "name": "Optics: Design and Simulation of a Laser System"
            },
            {
                "name": "Thermodynamics: Energy Efficiency Analysis of a Power Plant"
            },
            {
                "name": "Particle Physics: Data Analysis from the Large Hadron Collider"
            },
            {
                "name": "Condensed Matter Physics: Study of Superconductors"
            },
            {
                "name": "Computational Physics: Simulation of a Planetary Orbit"
            },
            {
                "name": "Medical Physics: Application of Radiation in Cancer Therapy"
            },
            {
                "name": "Project on the Theory of Relativity and its Experimental Evidence"
            },
            {
                "name": "Project on the Physics of Renewable Energy Sources"
            },
            {
                "name": "Project on the Physics of Musical Instruments"
            },
            {
                "name": "Project on the Physics of Sports"
            },
            {
                "name": "Project on the Physics of Climate Change"
            },
            {
                "name": "Project on the Physics of Space Exploration"
            },
            {
                "name": "Project on the Physics of Solar Cells"
            },
            {
                "name": "Project on the Physics of Lasers"
            },
            {
                "name": "Project on the Physics of Fiber Optics"
            },
            {
                "name": "Project on the Physics of Medical Imaging (MRI, CT Scan)"
            },
            {
                "name": "Project on the Physics of Nuclear Power"
            },
            {
                "name": "Project on the Physics of Semiconductors"
            },
            {
                "name": "Project on the Physics of Nanomaterials"
            },
            {
                "name": "Project on the Physics of Superconductors"
            },
            {
                "name": "Project on the Physics of Quantum Mechanics"
            },
            {
                "name": "Project on the Physics of General Relativity"
            },
            {
                "name": "Project on the Physics of the Standard Model"
            },
            {
                "name": "Project on the Physics of Cosmology"
            },
            {
                "name": "Project on the Physics of Black Holes"
            },
            {
                "name": "Project on the Physics of Dark Matter and Dark Energy"
            },
            {
                "name": "Project on the Physics of String Theory"
            },
            {
                "name": "Project on the Physics of the Big Bang"
            },
            {
                "name": "Project on the Physics of Neutron Stars"
            },
            {
                "name": "Project on the Physics of Gravity"
            },
            {
                "name": "Project on the Physics of Electromagnetism"
            },
            {
                "name": "Project on the Physics of Thermodynamics"
            },
            {
                "name": "Project on the Physics of Fluid Dynamics"
            },
            {
                "name": "Project on the Physics of Acoustics"
            },
            {
                "name": "Project on the Physics of Optics"
            },
            {
                "name": "Project on the Physics of Magnetism"
            },
            {
                "name": "Project on the Physics of Nuclear Reactions"
            },
            {
                "name": "Project on the Physics of Fission and Fusion"
            },
            {
                "name": "Project on the Physics of the Sun and Stars"
            },
            {
                "name": "Project on the Physics of the Planets"
            },
            {
                "name": "Project on the Physics of the Moon"
            },
            {
                "name": "Project on the Physics of the Earth"
            },
            {
                "name": "Project on the Physics of Weather"
            },
            {
                "name": "Project on the Physics of Earthquakes"
            },
            {
                "name": "Project on the Physics of Volcanoes"
            },
            {
                "name": "Project on the Physics of Tides"
            },
            {
                "name": "Project on the Physics of Ocean Currents"
            }
        ]
    },
    {
        "name": "Psychology",
        "children": [
            {
                "name": "Cognitive Psychology: Memory and Learning in Different Age Groups"
            },
            {
                "name": "Social Psychology: The Impact of Group Dynamics on Individual Behavior"
            },
            {
                "name": "Developmental Psychology: The Effects of Parenting Styles on Child Development"
            },
            {
                "name": "Abnormal Psychology: A Case Study on a Specific Disorder"
            },
            {
                "name": "Positive Psychology: The Role of Gratitude in Mental Well-being"
            },
            {
                "name": "Neuroscience: The Brain's Response to Stress"
            },
            {
                "name": "Cross-Cultural Psychology: A Comparative Study of Personality Traits"
            },
            {
                "name": "Industrial-Organizational Psychology: Employee Motivation and Job Satisfaction"
            },
            {
                "name": "Clinical Psychology: Effectiveness of a Specific Therapeutic Intervention"
            },
            {
                "name": "Project on the Psychology of Social Media and its Impact"
            },
            {
                "name": "Project on the Psychology of Advertising and Consumer Behavior"
            },
            {
                "name": "Project on the Psychology of Criminal Behavior"
            },
            {
                "name": "Project on the Role of Sleep in Mental Health"
            },
            {
                "name": "Project on the Psychology of Phobias and Their Treatment"
            },
            {
                "name": "Project on the Impact of Childhood Trauma on Adult Behavior"
            },
            {
                "name": "Project on the Role of Empathy in Human Relationships"
            },
            {
                "name": "Project on the Psychology of Forgiveness"
            },
            {
                "name": "Project on the Psychology of Happiness and Well-being"
            },
            {
                "name": "Project on the Role of Personality in Career Choice"
            },
            {
                "name": "Project on the Psychology of Learning Disabilities"
            },
            {
                "name": "Project on the Impact of Stress on Physical Health"
            },
            {
                "name": "Project on the Role of Social Support in Mental Health"
            },
            {
                "name": "Project on the Psychology of Motivation"
            },
            {
                "name": "Project on the Use of Relaxation Techniques for Anxiety"
            },
            {
                "name": "Project on the Psychology of Resilience"
            },
            {
                "name": "Project on the Role of Cognitive Biases in Decision Making"
            },
            {
                "name": "Project on the Psychology of Addictive Behaviors"
            },
            {
                "name": "Project on the Role of Emotional Intelligence"
            },
            {
                "name": "Project on the Psychology of Post-Traumatic Growth"
            },
            {
                "name": "Project on the Role of Neuroscience in Psychology"
            },
            {
                "name": "Project on the Psychology of Self-Harm"
            },
            {
                "name": "Project on the Use of Biofeedback in Therapy"
            },
            {
                "name": "Project on the Psychology of Obsessive-Compulsive Disorder (OCD)"
            },
            {
                "name": "Project on the Role of Spirituality in Mental Health"
            },
            {
                "name": "Project on the Psychology of Work-Life Balance"
            },
            {
                "name": "Project on the Use of Dialectical Behavior Therapy (DBT)"
            },
            {
                "name": "Project on the Psychology of Bullying"
            },
            {
                "name": "Project on the Role of Culture in Psychological Assessment"
            },
            {
                "name": "Project on the Psychology of Gender"
            },
            {
                "name": "Project on the Psychology of Sexuality"
            },
            {
                "name": "Project on the Psychology of Love and Relationships"
            },
            {
                "name": "Project on the Psychology of Death and Dying"
            },
            {
                "name": "Project on the Psychology of Religion"
            },
            {
                "name": "Project on the Psychology of Art and Creativity"
            },
            {
                "name": "Project on the Psychology of Music"
            },
            {
                "name": "Project on the Psychology of Film"
            },
            {
                "name": "Project on the Psychology of Gaming"
            },
            {
                "name": "Project on the Psychology of Sports"
            },
            {
                "name": "Project on the Psychology of Animals"
            },
            {
                "name": "Project on the Psychology of Plants"
            }
        ]
    },
    {
        "name": "Public Administration",
        "children": [
            {
                "name": "Policy Analysis of a Government Program"
            },
            {
                "name": "E-Governance: Implementation of Digital Services in a Municipality"
            },
            {
                "name": "Public Sector Financial Management and Budgeting"
            },
            {
                "name": "Urban Planning and Development in a Smart City"
            },
            {
                "name": "Role of Non-Governmental Organizations (NGOs) in Social Development"
            },
            {
                "name": "Crisis Management and Disaster Response Plan for a City"
            },
            {
                "name": "Public Policy and Environmental Sustainability"
            },
            {
                "name": "Human Resource Management in the Civil Service"
            },
            {
                "name": "Citizen Participation in Local Government"
            },
            {
                "name": "Project on the Role of Public Administration in Economic Development"
            },
            {
                "name": "Project on the Impact of Public-Private Partnerships (PPPs)"
            },
            {
                "name": "Project on the Role of Public Administration in Rural Development"
            },
            {
                "name": "Project on the Role of Public Administration in Social Justice"
            },
            {
                "name": "Project on the Role of Public Administration in Healthcare"
            },
            {
                "name": "Project on the Role of Public Administration in Education"
            },
            {
                "name": "Project on the Role of Public Administration in Law and Order"
            },
            {
                "name": "Project on the Role of Public Administration in Infrastructure Development"
            },
            {
                "name": "Project on the Role of Public Administration in Environmental Protection"
            },
            {
                "name": "Project on the Role of Public Administration in Human Rights"
            },
            {
                "name": "Project on the Role of Public Administration in Public Safety"
            },
            {
                "name": "Project on the Role of Public Administration in Public Works"
            },
            {
                "name": "Project on the Role of Public Administration in Public Utilities"
            },
            {
                "name": "Project on the Role of Public Administration in Urban Planning"
            },
            {
                "name": "Project on the Role of Public Administration in Regional Planning"
            },
            {
                "name": "Project on the Role of Public Administration in National Planning"
            },
            {
                "name": "Project on the Role of Public Administration in International Relations"
            },
            {
                "name": "Project on the Role of Public Administration in Global Governance"
            },
            {
                "name": "Project on the Role of Public Administration in Public Finance"
            },
            {
                "name": "Project on the Role of Public Administration in Public Sector Reform"
            },
            {
                "name": "Project on the Role of Public Administration in E-Governance"
            },
            {
                "name": "Project on the Role of Public Administration in Citizen-Centric Governance"
            },
            {
                "name": "Project on the Role of Public Administration in Good Governance"
            },
            {
                "name": "Project on the Role of Public Administration in Public Policy Analysis"
            },
            {
                "name": "Project on the Role of Public Administration in Policy Implementation"
            },
            {
                "name": "Project on the Role of Public Administration in Policy Evaluation"
            },
            {
                "name": "Project on the Role of Public Administration in Decision Making"
            },
            {
                "name": "Project on the Role of Public Administration in Problem Solving"
            },
            {
                "name": "Project on the Role of Public Administration in Leadership"
            },
            {
                "name": "Project on the Role of Public Administration in Communication"
            },
            {
                "name": "Project on the Role of Public Administration in Conflict Resolution"
            },
            {
                "name": "Project on the Role of Public Administration in Crisis Management"
            },
            {
                "name": "Project on the Role of Public Administration in Disaster Management"
            },
            {
                "name": "Project on the Role of Public Administration in Public Relations"
            },
            {
                "name": "Project on the Role of Public Administration in Strategic Planning"
            },
            {
                "name": "Project on the Role of Public Administration in Change Management"
            },
            {
                "name": "Project on the Role of Public Administration in Organizational Development"
            },
            {
                "name": "Project on the Role of Public Administration in Human Resource Management"
            },
            {
                "name": "Project on the Role of Public Administration in Financial Management"
            },
            {
                "name": "Project on the Role of Public Administration in Technology"
            },
            {
                "name": "Project on the Role of Public Administration in Innovation"
            }
        ]
    },
    {
        "name": "Public Health (MPH)",
        "children": [
            {
                "name": "Epidemiological Study of a Communicable Disease Outbreak"
            },
            {
                "name": "Health Promotion Campaign for a Community on a Specific Issue"
            },
            {
                "name": "Analysis of the Impact of Public Policy on Health Outcomes"
            },
            {
                "name": "Community Health Needs Assessment and Intervention Plan"
            },
            {
                "name": "Role of Health Education in Disease Prevention"
            },
            {
                "name": "Environmental Health: Impact of Air Pollution on Respiratory Health"
            },
            {
                "name": "Maternal and Child Health: A Program Evaluation"
            },
            {
                "name": "Healthcare Systems and Delivery Models"
            },
            {
                "name": "Global Health: A Comparative Study of Health Systems"
            },
            {
                "name": "Project on the Role of Public Health in Disaster Preparedness"
            },
            {
                "name": "Project on the Role of Public Health in Chronic Disease Management"
            },
            {
                "name": "Project on the Role of Public Health in Infectious Disease Control"
            },
            {
                "name": "Project on the Role of Public Health in Food Safety"
            },
            {
                "name": "Project on the Role of Public Health in Water Quality"
            },
            {
                "name": "Project on the Role of Public Health in Sanitation"
            },
            {
                "name": "Project on the Role of Public Health in Mental Health"
            },
            {
                "name": "Project on the Role of Public Health in Nutrition"
            },
            {
                "name": "Project on the Role of Public Health in Physical Activity"
            },
            {
                "name": "Project on the Role of Public Health in Tobacco Control"
            },
            {
                "name": "Project on the Role of Public Health in Alcohol and Drug Abuse"
            },
            {
                "name": "Project on the Role of Public Health in Injury Prevention"
            },
            {
                "name": "Project on the Role of Public Health in Violence Prevention"
            },
            {
                "name": "Project on the Role of Public Health in Suicide Prevention"
            },
            {
                "name": "Project on the Role of Public Health in Immunization"
            },
            {
                "name": "Project on the Role of Public Health in Health Equity"
            },
            {
                "name": "Project on the Role of Public Health in Health Disparities"
            },
            {
                "name": "Project on the Role of Public Health in Social Determinants of Health"
            },
            {
                "name": "Project on the Role of Public Health in Environmental Justice"
            },
            {
                "name": "Project on the Role of Public Health in Climate Change"
            },
            {
                "name": "Project on the Role of Public Health in Global Health Security"
            },
            {
                "name": "Project on the Role of Public Health in Public Policy"
            },
            {
                "name": "Project on the Role of Public Health in Healthcare Reform"
            },
            {
                "name": "Project on the Role of Public Health in Healthcare Administration"
            },
            {
                "name": "Project on the Role of Public Health in Health Information Technology"
            },
            {
                "name": "Project on the Role of Public Health in Health Communication"
            },
            {
                "name": "Project on the Role of Public Health in Health Education"
            },
            {
                "name": "Project on the Role of Public Health in Health Promotion"
            },
            {
                "name": "Project on the Role of Public Health in Disease Prevention"
            },
            {
                "name": "Project on the Role of Public Health in Community Health"
            },
            {
                "name": "Project on the Role of Public Health in School Health"
            },
            {
                "name": "Project on the Role of Public Health in Occupational Health"
            },
            {
                "name": "Project on the Role of Public Health in Environmental Health"
            },
            {
                "name": "Project on the Role of Public Health in Global Health"
            },
            {
                "name": "Project on the Role of Public Health in Maternal and Child Health"
            },
            {
                "name": "Project on the Role of Public Health in Mental Health"
            },
            {
                "name": "Project on the Role of Public Health in Public Policy Analysis"
            },
            {
                "name": "Project on the Role of Public Health in Policy Implementation"
            },
            {
                "name": "Project on the Role of Public Health in Policy Evaluation"
            },
            {
                "name": "Project on the Role of Public Health in Health Systems"
            },
            {
                "name": "Project on the Role of Public Health in Healthcare Delivery"
            }
        ]
    },
    {
        "name": "Statistics",
        "children": [
            {
                "name": "Predictive Modeling of a Financial Market using Time Series Analysis"
            },
            {
                "name": "Regression Analysis of Socioeconomic Factors on Educational Outcomes"
            },
            {
                "name": "Bayesian Statistics: A Case Study in Medical Diagnosis"
            },
            {
                "name": "Design of Experiments for a Clinical Trial"
            },
            {
                "name": "Data Mining and Cluster Analysis of Customer Behavior"
            },
            {
                "name": "Hypothesis Testing and A/B Testing for Website Optimization"
            },
            {
                "name": "Statistical Process Control in Manufacturing"
            },
            {
                "name": "Non-Parametric Statistics: Analysis of Non-Normal Data"
            },
            {
                "name": "Monte Carlo Simulation for Risk Assessment"
            },
            {
                "name": "Project on a Machine Learning Model for Prediction"
            },
            {
                "name": "Project on a Data Visualization Dashboard"
            },
            {
                "name": "Project on a Time Series Forecasting Model"
            },
            {
                "name": "Project on a Predictive Model for Customer Churn"
            },
            {
                "name": "Project on a Fraud Detection Model"
            },
            {
                "name": "Project on a Credit Scoring Model"
            },
            {
                "name": "Project on a Recommendation System"
            },
            {
                "name": "Project on a Sentiment Analysis Model"
            },
            {
                "name": "Project on a Medical Diagnosis Prediction Model"
            },
            {
                "name": "Project on a Stock Price Prediction Model"
            },
            {
                "name": "Project on a House Price Prediction Model"
            },
            {
                "name": "Project on a Customer Segmentation Model"
            },
            {
                "name": "Project on a Churn Prediction Model"
            },
            {
                "name": "Project on a Customer Lifetime Value (CLV) Prediction Model"
            },
            {
                "name": "Project on a Predictive Maintenance Model"
            },
            {
                "name": "Project on a Supply Chain Demand Forecasting Model"
            },
            {
                "name": "Project on a Fraud Detection Model in Insurance"
            },
            {
                "name": "Project on a Medical Image Analysis Model"
            },
            {
                "name": "Project on a Social Media Engagement Prediction Model"
            },
            {
                "name": "Project on a Customer Satisfaction Prediction Model"
            },
            {
                "name": "Project on a Real-time Traffic Prediction Model"
            },
            {
                "name": "Project on a Predictive Model for Employee Attrition"
            },
            {
                "name": "Project on an Image Classification Model"
            },
            {
                "name": "Project on a Time Series Forecasting Model for Energy Consumption"
            },
            {
                "name": "Project on a Natural Language Understanding (NLU) System"
            },
            {
                "name": "Project on a Text-based Recommendation System"
            },
            {
                "name": "Project on a Predictive Model for Flight Delays"
            },
            {
                "name": "Project on a Medical Image Analysis Model"
            },
            {
                "name": "Project on a Predictive Model for Disease Outbreaks"
            },
            {
                "name": "Project on a Sentiment Analysis Model for Product Reviews"
            },
            {
                "name": "Project on a Customer Service Chatbot"
            },
            {
                "name": "Project on a Predictive Model for Customer Behavior"
            },
            {
                "name": "Project on a Supply Chain Risk Prediction Model"
            },
            {
                "name": "Project on a Predictive Model for Retail Sales"
            },
            {
                "name": "Project on a Financial Market Prediction Model"
            },
            {
                "name": "Project on a Weather Forecasting Model"
            },
            {
                "name": "Project on a Sports Outcome Prediction Model"
            },
            {
                "name": "Project on a Predictive Model for E-commerce Traffic"
            },
            {
                "name": "Project on a Recommendation System for Music"
            },
            {
                "name": "Project on a Predictive Model for Loan Default"
            },
            {
                "name": "Project on a Face Recognition System"
            }
        ]
    },
    {
        "name": "Supply Chain Management",
        "children": [
            {
                "name": "Supply Chain Network Design and Optimization"
            },
            {
                "name": "Inventory Management Strategies for a Retail Business"
            },
            {
                "name": "Logistics and Transportation Optimization using Route Planning"
            },
            {
                "name": "Risk Management and Resilience in Global Supply Chains"
            },
            {
                "name": "Impact of E-commerce on Last-Mile Delivery"
            },
            {
                "name": "Sustainable Supply Chain: Green Logistics and Ethical Sourcing"
            },
            {
                "name": "Blockchain Technology for Supply Chain Transparency"
            },
            {
                "name": "Data Analytics for Demand Forecasting and Planning"
            },
            {
                "name": "Feasibility Study for a Warehouse Automation System"
            },
            {
                "name": "Project on the Role of AI in Supply Chain"
            },
            {
                "name": "Project on the Impact of COVID-19 on Global Supply Chains"
            },
            {
                "name": "Project on a Case Study of a Successful Supply Chain"
            },
            {
                "name": "Project on the Role of Supply Chain in a Manufacturing Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Service Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Retail Business"
            },
            {
                "name": "Project on the Role of Supply Chain in a Healthcare System"
            },
            {
                "name": "Project on the Role of Supply Chain in a Food and Beverage Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Fashion Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Tech Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Pharmaceutical Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Non-Profit Organization"
            },
            {
                "name": "Project on the Role of Supply Chain in a Government Agency"
            },
            {
                "name": "Project on the Role of Supply Chain in a Logistics Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Transportation Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Warehouse"
            },
            {
                "name": "Project on the Role of Supply Chain in a Distribution Center"
            },
            {
                "name": "Project on the Role of Supply Chain in a Port"
            },
            {
                "name": "Project on the Role of Supply Chain in an Airport"
            },
            {
                "name": "Project on the Role of Supply Chain in a Customs Brokerage"
            },
            {
                "name": "Project on the Role of Supply Chain in a Freight Forwarder"
            },
            {
                "name": "Project on the Role of Supply Chain in a Shipping Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Railroad Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Trucking Company"
            },
            {
                "name": "Project on the Role of Supply Chain in an Air Cargo Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Pipeline Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Public Utility"
            },
            {
                "name": "Project on the Role of Supply Chain in a Telecommunications Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Media Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Sports Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Entertainment Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Tourism Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Hospitality Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Restaurant Chain"
            },
            {
                "name": "Project on the Role of Supply Chain in a Fast Food Chain"
            },
            {
                "name": "Project on the Role of Supply Chain in a Supermarket Chain"
            },
            {
                "name": "Project on the Role of Supply Chain in a Department Store"
            },
            {
                "name": "Project on the Role of Supply Chain in a Convenience Store"
            },
            {
                "name": "Project on the Role of Supply Chain in an Online Retailer"
            },
            {
                "name": "Project on the Role of Supply Chain in a Direct-to-Consumer Company"
            },
            {
                "name": "Project on the Role of Supply Chain in a Subscription Box Company"
            }
        ]
    },
    {
        "name": "Zoology",
        "children": [
            {
                "name": "Behavioral Study of a Specific Animal Species in its Natural Habitat"
            },
            {
                "name": "Conservation Genetics of an Endangered Species"
            },
            {
                "name": "Physiological Adaptations of Animals to Extreme Environments"
            },
            {
                "name": "Impact of Climate Change on Animal Migration Patterns"
            },
            {
                "name": "Comparative Anatomy of Vertebrates"
            },
            {
                "name": "Ecological Study of a Marine Ecosystem"
            },
            {
                "name": "Animal Communication and Social Structures"
            },
            {
                "name": "Role of Wildlife Forensics in Combating Illegal Poaching"
            },
            {
                "name": "Parasitology: A Study of a Specific Host-Parasite Relationship"
            },
            {
                "name": "Project on the Role of Zoos in Animal Conservation"
            },
            {
                "name": "Project on the Effects of Pollution on Aquatic Life"
            },
            {
                "name": "Project on the Role of Animal Behavior in Survival"
            },
            {
                "name": "Project on the Evolution of a Specific Animal Group"
            },
            {
                "name": "Project on the Role of Genetics in Animal Breeding"
            },
            {
                "name": "Project on the Impact of Human-Wildlife Conflict"
            },
            {
                "name": "Project on the Role of Endocrine System in Animal Behavior"
            },
            {
                "name": "Project on the Anatomy of a Specific Animal"
            },
            {
                "name": "Project on the Role of Immunology in Animal Health"
            },
            {
                "name": "Project on the Role of Neurobiology in Animal Cognition"
            },
            {
                "name": "Project on the Role of Animal Welfare in Research"
            },
            {
                "name": "Project on the Role of Animal Models in Human Disease Research"
            },
            {
                "name": "Project on the Role of Parasites in Ecosystems"
            },
            {
                "name": "Project on the Role of Birds in Seed Dispersal"
            },
            {
                "name": "Project on the Role of Insects in Pollination"
            },
            {
                "name": "Project on the Role of Fish in Aquatic Ecosystems"
            },
            {
                "name": "Project on the Role of Reptiles in the Food Chain"
            },
            {
                "name": "Project on the Role of Amphibians in the Environment"
            },
            {
                "name": "Project on the Role of Mammals in the Ecosystem"
            },
            {
                "name": "Project on the Role of Marine Animals in Ocean Health"
            },
            {
                "name": "Project on the Role of Freshwater Animals in River Health"
            },
            {
                "name": "Project on the Role of Terrestrial Animals in Land Health"
            },
            {
                "name": "Project on the Role of Vertebrates in the Ecosystem"
            },
            {
                "name": "Project on the Role of Invertebrates in the Ecosystem"
            },
            {
                "name": "Project on the Role of Animal Diversity in Biodiversity"
            },
            {
                "name": "Project on the Role of Animal Behavior in Habitat Selection"
            },
            {
                "name": "Project on the Role of Animal Physiology in Adaptation"
            },
            {
                "name": "Project on the Role of Animal Genetics in Evolution"
            },
            {
                "name": "Project on the Role of Animal Ecology in Conservation"
            },
            {
                "name": "Project on the Role of Animal Anatomy in Function"
            },
            {
                "name": "Project on the Role of Animal Taxonomy in Classification"
            },
            {
                "name": "Project on the Role of Animal Systematics in Relationships"
            },
            {
                "name": "Project on the Role of Animal Conservation in Endangered Species"
            },
            {
                "name": "Project on the Role of Animal Welfare in Animal Cruelty"
            },
            {
                "name": "Project on the Role of Animal Rights in Animal Testing"
            },
            {
                "name": "Project on the Role of Animal Ethics in Animal Research"
            },
            {
                "name": "Project on the Role of Animal Law in Animal Protection"
            },
            {
                "name": "Project on the Role of Animal Science in Animal Husbandry"
            },
            {
                "name": "Project on the Role of Animal Nutrition in Animal Health"
            },
            {
                "name": "Project on the Role of Animal Health in Disease Prevention"
            },
            {
                "name": "Project on the Role of Animal Medicine in Disease Treatment"
            }
        ]
    }
]
// Please note: The above lists are not exhaustive for all subjects but provide the complete structure and a detailed example for the initial subjects.
// You can use this pattern to fill in the remaining subjects as required.

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
    const [isMobile, setIsMobile] = useState(false);
    const [activeTab, setActiveTab] = useState("UG Subjects");
    const [selectedCategory, setSelectedCategory] = useState(UG_DATA[0]?.name || null);

    const dataToShow = activeTab === "UG Subjects" ? UG_DATA : PG_DATA;

    useEffect(() => {
        if (!selectedCategory || !dataToShow.find(cat => cat.name === selectedCategory)) {
            setSelectedCategory(dataToShow[0]?.name || null);
        }
    }, [activeTab, dataToShow, selectedCategory]);

    const features = [
        {
            icon: <BookOpen className="w-8 h-8 text-[#0f2920]" />,
            title: "Project Planning ",
            description: "Comprehensive planning with Research Methodology, Timelines, and Resource Allocation.",
        },
        {
            icon: <Users className="w-8 h-8 text-[#0f2920]" />,
            title: "Expert Guidance",
            description: "One-on-One Mentorship from Experienced Researchers and Industry Professionals.",
        },
        {
            icon: <Award className="w-8 h-8 text-[#0f2920]" />,
            title: "Quality Assurance",
            description: "Peer Reviews and Validation processes to meet Academic Standards.",
        },
        {
            icon: <Target className="w-8 h-8 text-[#0f2920]" />,
            title: "Implementation Support",
            description: "Help with Data Collection, Analysis, and Execution using Industry-Standard Tools.",
        },
    ];

    const benefits = [
        "Enhanced Research Skills and Methodology",
        "Industry-Relevant Project Experience",
        "Opportunities for Publications & Patents",
        "Networking with Industry Professionals",
    ];

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);

        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    const projectListContent = () => {
        const projects = dataToShow.find(cat => cat.name === selectedCategory)?.children || [];
        if (projects.length === 0) {
            return (
                <div className="flex flex-col items-center justify-center h-full text-center p-8">
                    <GraduationCap className="w-24 h-24 text-gray-400 mb-4" />
                    <h2 className="text-2xl font-bold text-gray-600">
                        No Projects Available
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Please select another subject.
                    </p>
                </div>
            );
        }

        return (
            <div className="p-8">
                <h2 className="text-2xl font-bold text-primary-text mb-4">
                    Projects for {selectedCategory}
                </h2>
                <ul className="list-decimal list-inside space-y-2 text-gray-700 h-[550px] overflow-y-auto pr-4">
                    {projects.map((project, index) => (
                        <li key={index} className="text-base font-medium">
                            {project.name}
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-100 text-black">
            <style>{cssTheme}</style>

            {/* Hero Section */}
            <section
                className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-white text-black"
                style={{
                    backgroundImage: `url('https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-white/0 z-0"></div>
            </section>

            {/* Features & Main UI Section */}
            <section className="w-full py-12 px-4 lg:px-12 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
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

                    {/* Toggle */}
                    <section className="flex justify-center mt-8 px-4">
                        <div className="flex border-2 border-[#0f2920] rounded-full w-full max-w-sm overflow-hidden">
                            <motion.button
                                layout
                                onClick={() => setActiveTab("UG Subjects")}
                                className={`flex-1 py-2 text-center font-semibold relative z-10 rounded-full ${
                                    activeTab === "UG Subjects" ? "text-white" : "text-[#0f2920]"
                                }`}
                            >
                                {activeTab === "UG Subjects" && (
                                    <motion.span
                                        layoutId="pill-bg"
                                        className="absolute inset-0 bg-[#0f2920] rounded-full"
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">UG Subjects</span>
                            </motion.button>

                            <motion.button
                                layout
                                onClick={() => setActiveTab("PG Subjects")}
                                className={`flex-1 py-2 text-center font-semibold relative z-10 rounded-full ${
                                    activeTab === "PG Subjects" ? "text-white" : "text-[#0f2920]"
                                }`}
                            >
                                {activeTab === "PG Subjects" && (
                                    <motion.span
                                        layoutId="pill-bg"
                                        className="absolute inset-0 bg-[#0f2920] rounded-full"
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">PG Subjects</span>
                            </motion.button>
                        </div>
                    </section>
                    
                    {/* Conditional Rendering of the Two-Pane UI or Mobile Dropdown */}
                    {isMobile ? (
                        <MobileProjects data={dataToShow} />
                    ) : (
                        <div className="lg:grid lg:grid-cols-3 lg:gap-6 lg:h-[700px] overflow-hidden mt-8">
                            {/* Left Pane - Subject List */}
                            <div className="col-span-1 bg-white border border-gray-200 rounded-lg shadow-sm overflow-y-auto">
                                <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200 sticky top-0">
                                    <h2 className="text-xl font-bold text-primary-text">Subject Catalog</h2>
                                </div>
                                {/* List of Categories */}
                                {dataToShow.map((category) => (
                                    <div key={category.name} className="py-2">
                                        <div
                                            className={`font-bold px-4 py-2 border-b border-gray-200 cursor-pointer ${selectedCategory === category.name ? 'text-[#0f2920]' : 'text-gray-700'}`}
                                            onClick={() => setSelectedCategory(category.name)}
                                        >
                                            {category.name}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Right Pane - Project Details */}
                            <div className="col-span-2 bg-white border border-gray-200 rounded-lg shadow-sm">
                                {projectListContent()}
                            </div>
                        </div>
                    )}
                </div>
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


// import React, { useRef, useEffect, useState } from "react";
// import { motion, useInView } from "framer-motion";
// import { BookOpen, Users, Award, Target, CheckCircle, ArrowRight, ChevronDown, Briefcase, ChevronRight, GraduationCap } from "lucide-react";

// /* ---------- Data (UG & PG Subjects) ---------- */
// const leaf = (title) => ({ name: title });

// const UG_DATA = [
//     {
//         name: "Accounting",
//         children: [
//             leaf("Financial Statement Analysis"),
//             leaf("Audit Automation with RPA"),
//             leaf("Tax Management System"),
//             leaf("Cost-Volume-Profit Analysis Tool"),
//             leaf("Forensic Accounting Case Study"),
//         ],
//     },
//     {
//         name: "Applied Nutrition",
//         children: [
//             leaf("Personalized Diet Plan Generator"),
//             leaf("Food Nutrient Database & API"),
//             leaf("Child Malnutrition Monitoring System"),
//             leaf("Athletic Performance Nutrition Tracker"),
//         ],
//     },
//     {
//         name: "B. Com (Computers)",
//         children: [
//             leaf("E-commerce Business Plan"),
//             leaf("Digital Marketing Strategy for SMBs"),
//             leaf("Blockchain-based Supply Chain Ledger"),
//             leaf("Data Analytics Dashboard for Sales"),
//         ],
//     },
//     {
//         name: "B. Com (General)",
//         children: [
//             leaf("Market Research & Feasibility Study"),
//             leaf("Small Business Financial Model"),
//             leaf("HR Management System Prototype"),
//             leaf("E-commerce Pricing Strategy Tool"),
//         ],
//     },
//     {
//         name: "BBA (Bachelor of Business Administration)",
//         children: [
//             leaf("Customer Relationship Management (CRM) System"),
//             leaf("Business Process Automation (BPA) Plan"),
//             leaf("Corporate Social Responsibility (CSR) Report"),
//             leaf("Market Entry Strategy for a New Product"),
//         ],
//     },
//     {
//         name: "Banking",
//         children: [
//             leaf("Risk Assessment Model for Loan Approval"),
//             leaf("Digital Banking Onboarding Flow"),
//             leaf("Fraud Detection using ML"),
//             leaf("Personal Finance Management App"),
//         ],
//     },
//     {
//         name: "Biochemistry",
//         children: [
//             leaf("Protein-Ligand Interaction Visualization"),
//             leaf("Enzyme Kinetics Simulation"),
//             leaf("Metabolic Pathway Analysis Tool"),
//             leaf("Drug Discovery Pipeline Study"),
//         ],
//     },
//     {
//         name: "Biotechnology",
//         children: [
//             leaf("Genetic Engineering Simulation Software"),
//             leaf("Fermentation Process Optimization"),
//             leaf("Bioremediation of Contaminated Sites"),
//             leaf("Biofuel Production from Algae"),
//         ],
//     },
//     {
//         name: "Botany",
//         children: [
//             leaf("Plant Disease Detection using CNN"),
//             leaf("Crop Monitoring & Health Analytics"),
//             leaf("Herbarium Management System"),
//             leaf("Drought-Resistant Plant Species Study"),
//         ],
//     },
//     {
//         name: "Business Analytics",
//         children: [
//             leaf("Predictive Customer Churn Model"),
//             leaf("Retail Sales Forecasting"),
//             leaf("Sentiment Analysis on Social Media Data"),
//             leaf("Supply Chain Optimization using Analytics"),
//         ],
//     },
//     {
//         name: "Chemistry",
//         children: [
//             leaf("Molecular Dynamics Simulation of Water"),
//             leaf("Synthesis of Novel Compounds"),
//             leaf("Environmental Pollution Monitoring"),
//             leaf("Catalyst Design for Industrial Processes"),
//         ],
//     },
//     {
//         name: "Computer Science",
//         children: [
//             leaf("E-commerce Website with Secure Payment"),
//             leaf("Mobile App for Local Services"),
//             leaf("Machine Learning Model for Image Classification"),
//             leaf("Real-time Chat Application"),
//         ],
//     },
//     {
//         name: "Data Science",
//         children: [
//             leaf("Predictive Analytics for Stock Prices"),
//             leaf("Natural Language Processing (NLP) Chatbot"),
//             leaf("Big Data Analysis of Customer Behavior"),
//             leaf("Computer Vision for Object Detection"),
//         ],
//     },
//     {
//         name: "Economics",
//         children: [
//             leaf("Econometric Model for GDP Prediction"),
//             leaf("Analysis of Inflationary Trends"),
//             leaf("Impact of Trade Policies on Local Markets"),
//             leaf("Behavioral Economics Experiment Design"),
//         ],
//     },
//     {
//         name: "E-commerce",
//         children: [
//             leaf("Marketplace Platform Development"),
//             leaf("Personalized Product Recommendation Engine"),
//             leaf("Logistics & Inventory Management System"),
//             leaf("Customer Feedback Analysis for E-commerce"),
//         ],
//     },
//     {
//         name: "Electronics",
//         children: [
//             leaf("Smart Home Automation System (IoT)"),
//             leaf("Robotic Arm Control using Arduino"),
//             leaf("Digital Signal Processing (DSP) for Audio"),
//             leaf("FPGA-based Digital Clock"),
//         ],
//     },
//     {
//         name: "English Literature",
//         children: [
//             leaf("Literary Text Analysis using NLP"),
//             leaf("Digital Archive of Historical Texts"),
//             leaf("Interactive Storytelling Website"),
//             leaf("Comparative Study of a Literary Genre"),
//         ],
//     },
//     {
//         name: "Entrepreneurship",
//         children: [
//             leaf("Startup Business Plan & Pitch Deck"),
//             leaf("Market Validation of a New Idea"),
//             leaf("Crowdfunding Campaign Strategy"),
//             leaf("Feasibility Study for a Social Enterprise"),
//         ],
//     },
//     {
//         name: "Environmental Science",
//         children: [
//             leaf("Renewable Energy Feasibility Study"),
//             leaf("Water Quality Monitoring System"),
//             leaf("Ecosystem Health Assessment"),
//             leaf("Waste Management & Recycling Strategy"),
//         ],
//     },
//     {
//         name: "Finance",
//         children: [
//             leaf("Portfolio Optimization & Risk Analysis"),
//             leaf("Algorithmic Trading Strategy Backtesting"),
//             leaf("Financial Modeling for a Startup"),
//             leaf("Capital Budgeting Analysis Tool"),
//         ],
//     },
//     {
//         name: "Foreign Trade Practices",
//         children: [
//             leaf("Global Supply Chain Management Case Study"),
//             leaf("Impact of Tariffs on International Trade"),
//             leaf("Trade Compliance Automation Tool"),
//             leaf("Export-Import Documentation System"),
//         ],
//     },
//     {
//         name: "Geography",
//         children: [
//             leaf("GIS-based Urban Planning Tool"),
//             leaf("Remote Sensing for Land Use Mapping"),
//             leaf("Climate Change Impact Analysis"),
//             leaf("Natural Disaster Risk Assessment Model"),
//         ],
//     },
//     {
//         name: "Genetics",
//         children: [
//             leaf("Genetic Mutation Analysis Pipeline"),
//             leaf("Phylogenetic Tree Reconstruction"),
//             leaf("CRISPR Gene Editing Simulation"),
//             leaf("Population Genetics Study"),
//         ],
//     },
//     {
//         name: "Geology",
//         children: [
//             leaf("Seismic Data Visualization & Analysis"),
//             leaf("Mineral Resource Mapping"),
//             leaf("GIS Application for Geological Survey"),
//             leaf("Analysis of Rock & Mineral Samples"),
//         ],
//     },
//     {
//         name: "History",
//         children: [
//             leaf("Interactive Timeline of a Historical Period"),
//             leaf("Digital Archive of Historical Documents"),
//             leaf("Historiographical Analysis of a Major Event"),
//             leaf("3D Modeling of an Ancient Site"),
//         ],
//     },
//     {
//         name: "Information Technology (IT)",
//         children: [
//             leaf("Network Security Audit & Report"),
//             leaf("Cloud Infrastructure Deployment (AWS/Azure)"),
//             leaf("Database Management System Design"),
//             leaf("IT Service Management (ITSM) Workflow"),
//         ],
//     },
//     {
//         name: "Marketing Management",
//         children: [
//             leaf("Social Media Campaign Analytics Dashboard"),
//             leaf("Consumer Behavior Study"),
//             leaf("Brand Strategy & Positioning Plan"),
//             leaf("Market Segmentation Analysis"),
//         ],
//     },
//     {
//         name: "Mass Communication",
//         children: [
//             leaf("Journalism Website with Content Management"),
//             leaf("Media Ethics & Law Case Study"),
//             leaf("Social Media Influence Analysis"),
//             leaf("Public Relations Campaign Design"),
//         ],
//     },
//     {
//         name: "Mathematics",
//         children: [
//             leaf("Cryptography Algorithm Implementation"),
//             leaf("Predictive Model using Regression Analysis"),
//             leaf("Numerical Simulation of a Physical System"),
//             leaf("Graph Theory Application for Routing"),
//         ],
//     },
//     {
//         name: "Microbiology",
//         children: [
//             leaf("Bacterial Growth Simulation Model"),
//             leaf("Antimicrobial Resistance Study"),
//             leaf("Microbiome Data Analysis Pipeline"),
//             leaf("Fermentation Process Optimization"),
//         ],
//     },
//     {
//         name: "Nursing (B.Sc Nursing)",
//         children: [
//             leaf("Patient Health Monitoring System"),
//             leaf("Nursing Staff Shift Scheduling App"),
//             leaf("Disease Outbreak Tracking Dashboard"),
//             leaf("Telehealth Platform for Patient Consultations"),
//         ],
//     },
//     {
//         name: "Nutrition",
//         children: [
//             leaf("Nutritional Assessment Tool"),
//             leaf("Food-Sourced Nutrient Database"),
//             leaf("Custom Meal Plan Generator"),
//             leaf("Analysis of Public Health Nutrition Trends"),
//         ],
//     },
//     {
//         name: "Paramedical Sciences",
//         children: [
//             leaf("First-Aid Training Simulation"),
//             leaf("Medical Device Inventory System"),
//             leaf("Patient Vitals Monitoring App"),
//             leaf("E-learning Module for Paramedical Skills"),
//         ],
//     },
//     {
//         name: "Pharmacy (B.Pharm)",
//         children: [
//             leaf("Drug-Drug Interaction Checker"),
//             leaf("Pharmacokinetics Modeling"),
//             leaf("Drug Inventory Management System"),
//             leaf("Patient Medication Adherence Tracker"),
//         ],
//     },
//     {
//         name: "Philosophy",
//         children: [
//             leaf("AI Ethics & Moral Reasoning Study"),
//             leaf("Analysis of a Philosophical Text"),
//             leaf("Interactive Logic Puzzles Website"),
//             leaf("Philosophy of Mind & Consciousness"),
//         ],
//     },
//     {
//         name: "Physics",
//         children: [
//             leaf("Orbital Mechanics Simulation"),
//             leaf("Quantum Computing Basics Simulator"),
//             leaf("Optics Ray Tracing Engine"),
//             leaf("Particle Physics Data Analysis"),
//         ],
//     },
//     {
//         name: "Political Science",
//         children: [
//             leaf("Election Polling Data Analysis"),
//             leaf("Policy Analysis & Impact Assessment"),
//             leaf("Comparative Government Study"),
//             leaf("Digital Citizen Engagement Platform"),
//         ],
//     },
//     {
//         name: "Psychology",
//         children: [
//             leaf("Cognitive Psychology Experiment Design"),
//             leaf("Stress & Anxiety Management App"),
//             leaf("Behavioral Data Analysis using Python"),
//             leaf("Social Psychology Survey Tool"),
//         ],
//     },
//     {
//         name: "Public Administration",
//         children: [
//             leaf("Government Service Delivery Portal"),
//             leaf("Public Policy Analysis & Evaluation"),
//             leaf("E-governance System Prototype"),
//             leaf("Urban Planning & Development Study"),
//         ],
//     },
//     {
//         name: "Public Health",
//         children: [
//             leaf("Disease Surveillance & Reporting System"),
//             leaf("Public Health Campaign Design"),
//             leaf("Epidemiological Data Analysis"),
//             leaf("Healthcare Resource Allocation Model"),
//         ],
//     },
//     {
//         name: "Sales Management",
//         children: [
//             leaf("Sales Pipeline CRM & Analytics"),
//             leaf("Lead Generation Strategy & Automation"),
//             leaf("Customer Segmentation & Targeting"),
//             leaf("Sales Performance Dashboard"),
//         ],
//     },
//     {
//         name: "Sociology",
//         children: [
//             leaf("Social Network Analysis"),
//             leaf("Urban Sociology Case Study"),
//             leaf("Impact of Technology on Society"),
//             leaf("Survey Design & Data Collection"),
//         ],
//     },
//     {
//         name: "Statistics",
//         children: [
//             leaf("Statistical Modeling for Predictive Analysis"),
//             leaf("Data Visualization Dashboard (R/Python)"),
//             leaf("A/B Testing for Website Optimization"),
//             leaf("Hypothesis Testing Simulation"),
//         ],
//     },
//     {
//         name: "Zoology",
//         children: [
//             leaf("Animal Behavior Monitoring System"),
//             leaf("Wildlife Conservation & Habitat Mapping"),
//             leaf("Bio-acoustics Analysis of Animal Sounds"),
//             leaf("Genomic Analysis of a Species"),
//         ],
//     },
// ];

// const PG_DATA = [
//     {
//         name: "Accounting",
//         children: [
//             leaf("Financial Statement Analysis using Python"),
//             leaf("Automated Auditing with Machine Learning"),
//             leaf("Blockchain for Supply Chain Finance"),
//             leaf("Predictive Analytics for Cash Flow Forecasting"),
//         ],
//     },
//     {
//         name: "Applied Economics",
//         children: [
//             leaf("Econometric Forecasting Model"),
//             leaf("Impact of Monetary Policy on Inflation"),
//             leaf("Behavioral Finance & Market Anomalies"),
//             leaf("Quantitative Analysis of Labor Markets"),
//         ],
//     },
//     {
//         name: "Applied Nutrition",
//         children: [
//             leaf("Personalized Nutrition Recommendation Engine"),
//             leaf("Nutrigenomics Data Analysis"),
//             leaf("Public Health Nutrition Intervention Study"),
//             leaf("Food Safety and Quality Assurance System"),
//         ],
//     },
//     {
//         name: "Biochemistry",
//         children: [
//             leaf("Advanced Enzyme Kinetics Modeling"),
//             leaf("Protein-Protein Interaction Prediction"),
//             leaf("Metabolic Flux Analysis"),
//             leaf("Molecular Dynamics Simulation"),
//         ],
//     },
//     {
//         name: "Bioinformatics",
//         children: [
//             leaf("Genomic Data Analysis Pipeline (Next-Gen Seq)"),
//             leaf("Drug Repurposing via Molecular Docking"),
//             leaf("Single-Cell RNA-Seq Data Visualization"),
//             leaf("Cancer Genomics & Mutation Analysis"),
//         ],
//     },
//     {
//         name: "Biotechnology",
//         children: [
//             leaf("CRISPR-Cas9 Off-Target Prediction"),
//             leaf("Bioreactor Process Optimization with AI"),
//             leaf("Stem Cell Differentiation Modeling"),
//             leaf("Industrial Fermentation Scale-Up Study"),
//         ],
//     },
//     {
//         name: "Botany",
//         children: [
//             leaf("Plant Metabolomics Data Analysis"),
//             leaf("Molecular Phylogenetics of a Plant Family"),
//             leaf("Crop Resilience to Climate Change"),
//             leaf("Automated Plant Phenotyping System"),
//         ],
//     },
//     {
//         name: "Business Administration (MBA)",
//         children: [
//             leaf("Corporate Strategy & M&A Analysis"),
//             leaf("Supply Chain Resilience Post-COVID"),
//             leaf("Digital Transformation for Traditional Businesses"),
//             leaf("Global Market Entry Strategy"),
//         ],
//     },
//     {
//         name: "Chemistry",
//         children: [
//             leaf("Computational Chemistry for Drug Design"),
//             leaf("Materials Science: Novel Polymers Synthesis"),
//             leaf("Spectroscopic Analysis Automation"),
//             leaf("Quantum Chemical Calculations"),
//         ],
//     },
//     {
//         name: "Clinical Psychology",
//         children: [
//             leaf("Mental Health App with CBT Integration"),
//             leaf("Effectiveness of Teletherapy on Anxiety"),
//             leaf("Psychometric Assessment Tool"),
//             leaf("Neuropsychological Data Analysis"),
//         ],
//     },
//     {
//         name: "Communication & Journalism",
//         children: [
//             leaf("Media Consumption & Polarization Analysis"),
//             leaf("AI-driven Content Moderation System"),
//             leaf("Investigative Journalism Research Platform"),
//             leaf("Strategic Communication for Crisis Management"),
//         ],
//     },
//     {
//         name: "Computer Applications (MCA)",
//         children: [
//             leaf("Serverless Architecture for E-commerce"),
//             leaf("Cloud-based DevOps Pipeline Automation"),
//             leaf("Blockchain-based Document Verification System"),
//             leaf("Microservices Architecture with Docker"),
//         ],
//     },
//     {
//         name: "Data Science",
//         children: [
//             leaf("Deep Learning Model for Financial Forecasting"),
//             leaf("Natural Language Generation (NLG) for Reports"),
//             leaf("Reinforcement Learning for Game AI"),
//             leaf("Time-Series Anomaly Detection"),
//         ],
//     },
//     {
//         name: "Economics",
//         children: [
//             leaf("Macroeconomic Impact of AI Adoption"),
//             leaf("Game Theory Models for Market Behavior"),
//             leaf("Behavioral Economics Experimentation"),
//             leaf("Impact of Fiscal Policy on Poverty"),
//         ],
//     },
//     {
//         name: "Electronics",
//         children: [
//             leaf("Embedded Systems for Autonomous Vehicles"),
//             leaf("5G Network Slicing Simulation"),
//             leaf("IoT Device Security Analysis"),
//             leaf("Robotics & Control Systems for Automation"),
//         ],
//     },
//     {
//         name: "Environmental Science",
//         children: [
//             leaf("GIS-based Pollution Source Mapping"),
//             leaf("Climate Change Mitigation Strategy"),
//             leaf("Satellite Imagery Analysis for Deforestation"),
//             leaf("Biodiversity Conservation Plan"),
//         ],
//     },
//     {
//         name: "Food & Nutrition",
//         children: [
//             leaf("Food Science Lab Automation"),
//             leaf("Nutritional Genomics & Epigenetics"),
//             leaf("Food Waste Reduction Strategy"),
//             leaf("Foodborne Illness Outbreak Analysis"),
//         ],
//     },
//     {
//         name: "Foreign Trade",
//         children: [
//             leaf("Impact of Geopolitics on Supply Chains"),
//             leaf("Trade Analytics Dashboard"),
//             leaf("Export Compliance & Risk Management"),
//             leaf("Digitalization of Trade Documentation"),
//         ],
//     },
//     {
//         name: "Genetics",
//         children: [
//             leaf("Genomic Variant Annotation Pipeline"),
//             leaf("Population Genetics & Ancestry Analysis"),
//             leaf("Disease Gene Identification using ML"),
//             leaf("Bioinformatics Tool for Genetic Data"),
//         ],
//     },
//     {
//         name: "Geology",
//         children: [
//             leaf("Petroleum Systems Modeling"),
//             leaf("Geological Hazard Prediction System"),
//             leaf("GIS Mapping for Mineral Exploration"),
//             leaf("Hydrogeological Modeling & Analysis"),
//         ],
//     },
//     {
//         name: "Health Administration",
//         children: [
//             leaf("Hospital Management System"),
//             leaf("Healthcare Policy & Economics Analysis"),
//             leaf("Telehealth Service Implementation Plan"),
//             leaf("Electronic Health Records (EHR) System Security"),
//         ],
//     },
//     {
//         name: "History",
//         children: [
//             leaf("Digital Humanities & Textual Analysis"),
//             leaf("Historical GIS for Urban Development"),
//             leaf("Oral History Transcription & Analysis"),
//             leaf("Comparative Study of Ancient Civilizations"),
//         ],
//     },
//     {
//         name: "Human Resource Management",
//         children: [
//             leaf("HR Analytics Dashboard for Employee Retention"),
//             leaf("Performance Appraisal System with AI"),
//             leaf("Talent Acquisition & Management Platform"),
//             leaf("Employee Engagement & Wellness Program"),
//         ],
//     },
//     {
//         name: "Information Technology (IT)",
//         children: [
//             leaf("DevOps for Scalable Web Applications"),
//             leaf("Cybersecurity Risk Assessment for Enterprises"),
//             leaf("IT Governance & Compliance Management"),
//             leaf("Data Center Design & Implementation"),
//         ],
//     },
//     {
//         name: "International Relations",
//         children: [
//             leaf("Geopolitical Analysis Dashboard"),
//             leaf("Simulation of a Diplomatic Crisis"),
//             leaf("Impact of Sanctions on Global Economy"),
//             leaf("International Law & Conflict Resolution"),
//         ],
//     },
//     {
//         name: "Journalism & Mass Communication",
//         children: [
//             leaf("Social Media Journalism Ethics"),
//             leaf("Data-driven Investigative Reporting"),
//             leaf("Audience Analytics for News Media"),
//             leaf("Podcast Production & Marketing Strategy"),
//         ],
//     },
//     {
//         name: "Medical Laboratory Technology",
//         children: [
//             leaf("Automated Blood Sample Analysis"),
//             leaf("Lab Information Management System (LIMS)"),
//             leaf("Diagnostic Image Processing with AI"),
//             leaf("Quality Control in a Clinical Lab"),
//         ],
//     },
//     {
//         name: "Microbiology",
//         children: [
//             leaf("Antimicrobial Resistance Surveillance"),
//             leaf("Environmental Microbiology Analysis"),
//             leaf("Pathogen Identification & Tracking"),
//             leaf("Genomic Analysis of a Microbe"),
//         ],
//     },
//     {
//         name: "Nursing (M.Sc Nursing)",
//         children: [
//             leaf("Evidence-Based Practice in Nursing"),
//             leaf("Nursing Education Curriculum Design"),
//             leaf("Healthcare Quality & Patient Safety Study"),
//             leaf("Tele-nursing Platform Development"),
//         ],
//     },
//     {
//         name: "Nutrition & Dietetics",
//         children: [
//             leaf("Clinical Dietetics Case Study"),
//             leaf("Food Science & Technology Innovation"),
//             leaf("Public Health Nutrition Program Evaluation"),
//             leaf("Sports Nutrition & Performance Study"),
//         ],
//     },
//     {
//         name: "Philosophy",
//         children: [
//             leaf("Philosophy of Science & Ethics"),
//             leaf("Cognitive Science & Philosophy of Mind"),
//             leaf("Applied Ethics in AI & Technology"),
//             leaf("Metaphysical Analysis of Reality"),
//         ],
//     },
//     {
//         name: "Physics",
//         children: [
//             leaf("Quantum Field Theory Simulation"),
//             leaf("Nanomaterials Characterization"),
//             leaf("Astrophysical Data Analysis"),
//             leaf("Computational Physics for Particle Models"),
//         ],
//     },
//     {
//         name: "Psychology",
//         children: [
//             leaf("Neuroscience of Decision-Making"),
//             leaf("Cross-Cultural Psychology Study"),
//             leaf("Clinical Psychology & Diagnosis"),
//             leaf("Organizational Psychology for Team Dynamics"),
//         ],
//     },
//     {
//         name: "Public Administration",
//         children: [
//             leaf("Public Policy Analysis & Advocacy"),
//             leaf("Smart City Governance Framework"),
//             leaf("Public Sector Project Management"),
//             leaf("E-governance & Digital Transformation"),
//         ],
//     },
//     {
//         name: "Public Health (MPH)",
//         children: [
//             leaf("Epidemiological Modeling of a Pandemic"),
//             leaf("Global Health Policy Analysis"),
//             leaf("Healthcare System Analytics"),
//             leaf("Environmental Health Risk Assessment"),
//         ],
//     },
//     {
//         name: "Statistics",
//         children: [
//             leaf("Bayesian Statistics for Data Analysis"),
//             leaf("Advanced Regression & Time Series Analysis"),
//             leaf("Machine Learning for Causal Inference"),
//             leaf("Design of Experiments for Clinical Trials"),
//         ],
//     },
//     {
//         name: "Supply Chain Management",
//         children: [
//             leaf("Blockchain for Supply Chain Transparency"),
//             leaf("Logistics & Route Optimization"),
//             leaf("Inventory Management with AI"),
//             leaf("Risk Management in Global Supply Chains"),
//         ],
//     },
//     {
//         name: "Zoology",
//         children: [
//             leaf("Conservation Genetics of Endangered Species"),
//             leaf("Wildlife Population Dynamics Modeling"),
//             leaf("Animal Behavior & Cognition Research"),
//             leaf("Marine Biology & Ecosystem Study"),
//         ],
//     },
// ];

// /* ---------- CSS Theme Classes ---------- */

// const cssTheme = `
// /* Dark Forest Theme */
// @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap');
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// @layer base {
//   html {
//     scroll-behavior: smooth;
//   }
//   body {
//     font-family: 'Inter', system-ui, sans-serif;
//   }
//   .text-primary-text {
//     /* For light theme, a dark text color is needed */
//     color: #0f2920;
//   }
// }

// @layer components {
//   /* Primary Button */
//   .btn-primary {
//     @apply bg-gradient-to-br from-[#0f2920] to-[#3a4a3f] hover:from-[#1f3b30] hover:to-[#4a5c4f] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#3a4a3f] focus:ring-offset-2;
//   }

//   /* Secondary Button */
//   .btn-secondary {
//     @apply bg-[#1f3b30] hover:bg-[#3a4a3f] text-white font-semibold py-3 px-6 rounded-lg border-2 border-[#0f2920] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#3a4a3f] focus:ring-offset-2;
//   }

//   /* Outlined Button */
//   .btn-outline {
//     @apply bg-transparent hover:bg-gradient-to-br from-[#0f2920] to-[#3a4a3f] hover:text-white font-semibold py-3 px-6 rounded-lg border-[1px] border-[#0f2920] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#3a4a3f] focus:ring-offset-2;
//   }

//   /* Card Component */
//   .card {
//     /* Updated for light theme */
//     @apply rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-[#d7f2da] text-black;
//   }

//   /* Section Padding */
//   .section-padding {
//     @apply py-16 md:py-24;
//   }

//   /* Container */
//   .container-custom {
//     @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
//   }

//   /* Gradient Text */
//   .gradient-text {
//     @apply bg-gradient-to-br from-[#0f2920] to-[#3a4a3f] bg-clip-text text-transparent;
//   }

//   /* Gradient Background */
//   .gradient-bg {
//     @apply bg-gradient-to-br from-[#0f2920] to-[#3a4a3f];
//   }
// }
// `;

// /* ---------- Mobile Dropdown UI Component (for Mobile Devices) ---------- */

// const MobileProjects = ({ data }) => {
//     const [openCategory, setOpenCategory] = useState(null);

//     const toggleCategory = (categoryName) => {
//         setOpenCategory(openCategory === categoryName ? null : categoryName);
//     };

//     return (
//         <div className="max-w-7xl mx-auto px-4 lg:px-12">
//             {data.map((category) => (
//                 <div key={category.name} className="mb-4 rounded-lg overflow-hidden border border-[#0f2920] bg-white">
//                     <button
//                         onClick={() => toggleCategory(category.name)}
//                         className="w-full flex justify-between items-center py-4 px-6 text-left font-bold text-black transition-colors duration-200 hover:bg-[#d7f2da]"
//                     >
//                         <span className="flex items-center gap-2">
//                             <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openCategory === category.name ? 'rotate-180' : ''}`} />
//                             {category.name}
//                         </span>
//                     </button>
//                     <div
//                         className={`transition-all duration-500 ease-in-out overflow-hidden ${
//                             openCategory === category.name ? 'max-h-96' : 'max-h-0'
//                         }`}
//                     >
//                         <ul className="px-6 py-4 space-y-2">
//                             {category.children.map((project, index) => (
//                                 <li key={index} className="text-gray-600 flex items-center gap-2">
//                                     <span className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0"></span>
//                                     {project.name}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// /* ---------- Main Page Component ---------- */
// const AcademicProjects = () => {
//     const sectionRef = useRef(null);
//     const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
//     const [isMobile, setIsMobile] = useState(false);
//     const [activeTab, setActiveTab] = useState("UG Subjects");

//     const [selectedProject, setSelectedProject] = useState(null);
//     const [selectedCategory, setSelectedCategory] = useState(UG_DATA[0]?.name || null);

//     const dataToShow = activeTab === "UG Subjects" ? UG_DATA : PG_DATA;

//     useEffect(() => {
//         if (!selectedCategory) {
//             setSelectedCategory(dataToShow[0]?.name || null);
//         }
//     }, [activeTab]);

//     useEffect(() => {
//         if (selectedCategory && dataToShow.find(cat => cat.name === selectedCategory)) {
//             const projects = dataToShow.find(cat => cat.name === selectedCategory)?.children || [];
//             if (!selectedProject || !projects.find(p => p.name === selectedProject.name)) {
//                 setSelectedProject({ ...projects[0], category: selectedCategory });
//             }
//         } else {
//             setSelectedCategory(dataToShow[0]?.name || null);
//         }
//     }, [dataToShow, selectedCategory, selectedProject]);

//     const features = [
//         {
//             icon: <BookOpen className="w-8 h-8 text-[#0f2920]" />,
//             title: "Project Planning ",
//             description: "Comprehensive planning with Research Methodology, Timelines, and Resource Allocation.",
//         },
//         {
//             icon: <Users className="w-8 h-8 text-[#0f2920]" />,
//             title: "Expert Guidance",
//             description: "One-on-One Mentorship from Experienced Researchers and Industry Professionals.",
//         },
//         {
//             icon: <Award className="w-8 h-8 text-[#0f2920]" />,
//             title: "Quality Assurance",
//             description: "Peer Reviews and Validation processes to meet Academic Standards.",
//         },
//         {
//             icon: <Target className="w-8 h-8 text-[#0f2920]" />,
//             title: "Implementation Support",
//             description: "Help with Data Collection, Analysis, and Execution using Industry-Standard Tools.",
//         },
//     ];

//     const benefits = [
//         "Enhanced Research Skills and Methodology",
//         "Industry-Relevant Project Experience",
//         "Opportunities for Publications & Patents",
//         "Networking with Industry Professionals",
//     ];

//     useEffect(() => {
//         const checkIsMobile = () => {
//             setIsMobile(window.innerWidth < 1024);
//         };

//         checkIsMobile();
//         window.addEventListener("resize", checkIsMobile);

//         return () => window.removeEventListener("resize", checkIsMobile);
//     }, []);

//     const projectDetailsContent = (project) => {
//         if (!project) {
//             return (
//                 <div className="flex flex-col items-center justify-center h-full text-center p-8">
//                     <GraduationCap className="w-24 h-24 text-gray-400 mb-4" />
//                     <h2 className="text-2xl font-bold text-gray-600">
//                         Select a Project
//                     </h2>
//                     <p className="text-gray-500 mt-2">
//                         Choose a project from the list on the left to view its details, objectives, and scope.
//                     </p>
//                 </div>
//             );
//         }

//         const description = {
//             "Accounting": "This project provides practical experience in financial analysis, auditing, and tax management using modern tools and software.",
//             "Applied Nutrition": "Focus on developing applications or research projects that address real-world nutritional challenges, from personalized diets to public health.",
//             "B. Com (Computers)": "Combines commerce principles with computer applications, focusing on IT and digital solutions for business challenges.",
//             "B. Com (General)": "A broad commerce project, offering a comprehensive understanding of business operations, management, and financial planning.",
//             "BBA (Bachelor of Business Administration)": "A practical business project focused on management, strategy, and organizational behavior within a corporate context.",
//             "Banking": "Explore digital banking, risk management, and financial technologies with hands-on projects for the modern banking sector.",
//             "Biochemistry": "A project at the intersection of biology and chemistry, focusing on molecular interactions, enzyme kinetics, and drug discovery.",
//             "Biotechnology": "Utilize biological processes for technological applications, from genetic engineering to bioprocess optimization.",
//             "Botany": "A project exploring plant science, from disease detection to sustainable agriculture practices using technology.",
//             "Business Analytics": "Leverage data to drive business decisions, with projects on predictive modeling, sales forecasting, and market analysis.",
//             "Chemistry": "A research-focused project on chemical synthesis, environmental monitoring, or computational chemistry.",
//             "Computer Science": "A hands-on coding project covering various domains like web development, mobile apps, or machine learning.",
//             "Data Science": "A data-intensive project focused on extracting insights from large datasets using statistical and machine learning techniques.",
//             "Economics": "An analytical project examining economic trends, market behavior, and the impact of policy on local or global economies.",
//             "E-commerce": "Develop a functional e-commerce platform or a related solution covering logistics, marketing, and customer experience.",
//             "Electronics": "A hardware-software project focused on building embedded systems, IoT devices, or robotics.",
//             "English Literature": "A project blending literary analysis with digital humanities, creating interactive or data-driven studies of texts.",
//             "Entrepreneurship": "A business-oriented project that involves creating a full business plan, from ideation to market validation.",
//             "Environmental Science": "A project that applies technology to environmental challenges, such as pollution monitoring or resource management.",
//             "Finance": "A project focused on financial markets, investment strategies, and risk analysis using quantitative methods.",
//             "Foreign Trade Practices": "An international business project exploring global supply chains, trade policies, and export-import procedures.",
//             "Geography": "A project using Geographic Information Systems (GIS) to analyze spatial data for urban planning or environmental studies.",
//             "Genetics": "A research project on genetic analysis, mutation, and inheritance using bioinformatics tools.",
//             "Geology": "An Earth science project involving geological data analysis, resource mapping, or natural disaster assessment.",
//             "History": "A digital humanities project that leverages technology to archive, analyze, or visualize historical data.",
//             "Information Technology (IT)": "A project focused on IT infrastructure, network security, or cloud computing for enterprise solutions.",
//             "Marketing Management": "A marketing project that uses data analytics to develop and test strategies for customer engagement and brand growth.",
//             "Mass Communication": "A project focused on modern media, from digital content creation to audience analysis and public relations.",
//             "Mathematics": "A project applying mathematical principles to cryptography, modeling, or algorithm development.",
//             "Microbiology": "A lab-based or computational project on microbes, from bacterial growth to antibiotic resistance research.",
//             "Nursing (B.Sc Nursing)": "A health tech project focused on patient care, hospital management, or disease monitoring.",
//             "Nutrition": "A practical project on diet planning, food science, or public health nutrition campaigns.",
//             "Paramedical Sciences": "A project involving medical device technology, patient care workflows, or healthcare information systems.",
//             "Pharmacy (B.Pharm)": "A project on pharmacology, drug interaction, or pharmaceutical inventory management.",
//             "Philosophy": "A theoretical or a technical project exploring logical systems, ethics, or the philosophy of technology.",
//             "Physics": "A project applying physics principles to real-world problems through simulation, data analysis, or experimental design.",
//             "Political Science": "A data-driven project on political campaigns, policy analysis, or civic tech.",
//             "Psychology": "A project focused on behavioral studies, cognitive science, or mental health applications.",
//             "Public Administration": "A project on improving public services, policy analysis, or e-governance solutions.",
//             "Public Health": "A project focused on epidemiological research, public health policy, or community health initiatives.",
//             "Sales Management": "A business project on sales strategy, lead management, and performance analysis.",
//             "Sociology": "A research project on social dynamics, network analysis, or the impact of social trends.",
//             "Statistics": "A project focused on statistical modeling, data analysis, and predictive analytics.",
//             "Zoology": "A project on animal behavior, conservation, or genetic studies of animal species.",
//             "Applied Economics": "Advanced economic modeling and policy analysis, focusing on real-world applications.",
//             "Business Administration (MBA)": "A strategic business project for management professionals.",
//             "Clinical Psychology": "Advanced research in clinical and abnormal psychology.",
//             "Communication & Journalism": "Modern media research and communication strategy.",
//             "Computer Applications (MCA)": "Advanced software development and system architecture.",
//             "Health Administration": "Management and policy in healthcare systems.",
//             "Human Resource Management": "Advanced HR analytics and talent management.",
//             "International Relations": "Research on global politics and diplomatic relations.",
//             "Journalism & Mass Communication": "In-depth study of media trends and ethics.",
//             "Medical Laboratory Technology": "Advanced diagnostic and lab automation projects.",
//             "Nursing (M.Sc Nursing)": "Advanced nursing practice and research.",
//             "Nutrition & Dietetics": "Clinical nutrition and public health dietetics.",
//             "Public Health (MPH)": "Epidemiological and public health policy research.",
//             "Supply Chain Management": "Advanced logistics, procurement, and inventory management.",
//         };
//         const genericDesc = description[project.category] || "This project is designed to provide hands-on experience in this domain. It covers fundamental concepts and practical implementation, resulting in a robust and showcase-ready solution.";

//         return (
//             <div className="flex flex-col h-full bg-white text-black p-8">
//                 <div className="flex flex-col">
//                     <h1 className="text-3xl font-bold text-primary-text mb-1">{project.name}</h1>
//                     <div className="flex items-center text-sm text-gray-600 space-x-2">
//                         <span className="font-semibold text-[#0f2920]">{project.category}</span>
//                         <span className="text-gray-400">•</span>
//                         <span>On-site</span>
//                     </div>
//                 </div>

//                 {/* About the Project Section */}
//                 <div className="w-full h-full overflow-y-auto pr-4 mt-6">
//                     <div className="bg-gray-50 rounded-lg p-6 mb-8 border border-gray-200">
//                         <h2 className="text-xl font-bold text-primary-text mb-4">About the Project</h2>
//                         <p className="text-gray-700 leading-relaxed mb-4">
//                             {genericDesc}
//                         </p>
//                         <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
//                             <li>
//                                 Problem Statement: {project.name}
//                             </li>
//                             <li>
//                                 Project Goals: To provide a comprehensive solution and documentation for a real-world problem.
//                             </li>
//                             <li>
//                                 Deliverables: Source code, technical documentation, and a project report.
//                             </li>
//                             <li>
//                                 Expected Outcome: A demonstrable and well-documented academic project suitable for a portfolio.
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Why this is a great project section */}
//                     <div className="bg-gray-50 rounded-lg p-6 mb-8 border border-gray-200">
//                         <h2 className="text-xl font-bold text-primary-text mb-4">Why this is a great project for your resume</h2>
//                         <div className="flex items-center space-x-2 mb-2 text-gray-700">
//                             <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
//                             <span className="text-sm">Builds a strong foundation in a specific tech domain.</span>
//                         </div>
//                         <div className="flex items-center space-x-2 mb-2 text-gray-700">
//                             <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
//                             <span className="text-sm">Prepares you for real-world industry challenges.</span>
//                         </div>
//                         <div className="flex items-center space-x-2 text-gray-700">
//                             <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
//                             <span className="text-sm">Creates a tangible portfolio item for job applications.</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 text-black">
//             <style>{cssTheme}</style>

//             {/* Hero Section */}
//             <section
//                 className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-white text-black"
//                 style={{
//                     backgroundImage: `url('https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg')`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                 }}
//             >
//                 <div className="absolute inset-0 bg-white/0 z-0"></div>
//             </section>

//             {/* Features & Main UI Section */}
//             <section className="w-full py-12 px-4 lg:px-12 bg-gray-100">
//                 <div className="max-w-7xl mx-auto">
//                     {/* Features */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
//                         {features.map((f, i) => (
//                             <div
//                                 key={i}
//                                 className="card p-6 text-center"
//                             >
//                                 <div className="w-16 h-16 bg-white border border-[#0f2920] rounded-full flex items-center justify-center mx-auto mb-4">
//                                     {f.icon}
//                                 </div>
//                                 <h3 className="text-xl font-bold mb-3">{f.title}</h3>
//                                 <p className="text-secondary-text">{f.description}</p>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Toggle */}
//                     <section className="flex justify-center mt-8 px-4">
//                         <div className="flex border-2 border-[#0f2920] rounded-full w-full max-w-sm overflow-hidden">
//                             <motion.button
//                                 layout
//                                 onClick={() => setActiveTab("UG Subjects")}
//                                 className={`flex-1 py-2 text-center font-semibold relative z-10 rounded-full ${
//                                     activeTab === "UG Subjects" ? "text-white" : "text-[#0f2920]"
//                                 }`}
//                             >
//                                 {activeTab === "UG Subjects" && (
//                                     <motion.span
//                                         layoutId="pill-bg"
//                                         className="absolute inset-0 bg-[#0f2920] rounded-full"
//                                         transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                                     />
//                                 )}
//                                 <span className="relative z-10">UG Subjects</span>
//                             </motion.button>

//                             <motion.button
//                                 layout
//                                 onClick={() => setActiveTab("PG Subjects")}
//                                 className={`flex-1 py-2 text-center font-semibold relative z-10 rounded-full ${
//                                     activeTab === "PG Subjects" ? "text-white" : "text-[#0f2920]"
//                                 }`}
//                             >
//                                 {activeTab === "PG Subjects" && (
//                                     <motion.span
//                                         layoutId="pill-bg"
//                                         className="absolute inset-0 bg-[#0f2920] rounded-full"
//                                         transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                                     />
//                                 )}
//                                 <span className="relative z-10">PG Subjects</span>
//                             </motion.button>
//                         </div>
//                     </section>
                    
//                     {/* Conditional Rendering of the Two-Pane UI or Mobile Dropdown */}
//                     {isMobile ? (
//                         <MobileProjects data={dataToShow} />
//                     ) : (
//                         <div className="lg:grid lg:grid-cols-3 lg:gap-6 lg:h-[700px] overflow-hidden mt-8">
//                             {/* Left Pane - Project List */}
//                             <div className="col-span-1 bg-white border border-gray-200 rounded-lg shadow-sm overflow-y-auto">
//                                 <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200 sticky top-0">
//                                     <h2 className="text-xl font-bold text-primary-text">Project Catalog</h2>
//                                 </div>
//                                 {/* List of Categories with Sub-Projects */}
//                                 {dataToShow.map((category) => (
//                                     <div key={category.name} className="py-2">
//                                         <div
//                                             className={`font-bold px-4 py-2 border-b border-gray-200 cursor-pointer ${selectedCategory === category.name ? 'text-[#0f2920]' : 'text-gray-700'}`}
//                                             onClick={() => {
//                                                 setSelectedCategory(category.name);
//                                                 setSelectedProject({ ...category.children[0], category: category.name });
//                                             }}
//                                         >
//                                             {category.name}
//                                         </div>
//                                         {selectedCategory === category.name && (
//                                             <div className="px-2 pb-2">
//                                                 {category.children.map((project, index) => (
//                                                     <div
//                                                         key={index}
//                                                         className={`cursor-pointer rounded p-2 my-1 transition-all duration-200 hover:bg-gray-100 ${selectedProject?.name === project.name ? 'bg-gray-100 font-semibold' : 'text-gray-600'}`}
//                                                         onClick={() => setSelectedProject({ ...project, category: category.name })}
//                                                     >
//                                                         <div className="flex items-center text-sm">
//                                                             <ChevronRight className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
//                                                             {project.name}
//                                                         </div>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>

//                             {/* Right Pane - Project Details */}
//                             <div className="col-span-2 bg-white border border-gray-200 rounded-lg shadow-sm">
//                                 {projectDetailsContent(selectedProject)}
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </section>

//             {/* Benefits */}
//             <section className="w-full py-12 px-4 lg:px-12 bg-white">
//                 <div className="max-w-7xl mx-auto">
//                     <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
//                         Why Choose Our Academic Projects Service?
//                     </h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                         {benefits.map((b, i) => (
//                             <div
//                                 key={i}
//                                 className="flex items-start gap-3 rounded-xl card p-5 shadow-sm"
//                             >
//                                 <CheckCircle className="h-5 w-5 text-[#ffnf3f] flex-shrink-0" />
//                                 <span className="text-secondary-text">{b}</span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* CTA */}
//             <section className="w-full py-16 px-4 lg:px-12 bg-[#d7f2da] text-black text-center">
//                 <div className="max-w-4xl mx-auto">
//                     <h2 className="text-3xl lg:text-4xl font-bold mb-6 gradient-text">
//                         Ready to Start Your Academic Project?
//                     </h2>
//                     <p className="text-lg mb-8 text-primary-text">
//                         Let’s discuss your requirements and craft a roadmap to success.
//                     </p>
//                     <button className="btn-primary inline-flex items-center">
//                         Get Started <ArrowRight className="ml-2 w-5 h-5" />
//                     </button>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default AcademicProjects;



/* 
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Users, Award, Target, CheckCircle, ArrowRight, ChevronDown, Briefcase, ChevronRight, GraduationCap } from "lucide-react";


const leaf = (title) => ({ name: title });

const UG_DATA = [
    {
        name: "Accounting",
        children: [
            leaf("Analysis of Financial Statements of Tech Startups"),
            leaf("Impact of IFRS Adoption on Company Valuations"),
            leaf("Development of a Budgeting and Forecasting Tool for SMEs"),
            leaf("Auditing in the Age of AI: A Case Study"),
            leaf("Tax Planning Strategies for E-commerce Businesses"),
            leaf("Forensic Accounting in Fraud Detection"),
            leaf("Supply Chain Cost Analysis and Optimization"),
            leaf("Use of Data Analytics in Management Accounting"),
            leaf("Financial Reporting in the Non-Profit Sector"),
            leaf("Capital Budgeting Analysis for Infrastructure Projects"),
            leaf("Valuation of Intangible Assets"),
            leaf("Role of Cloud Computing in Accounting"),
            leaf("Green Accounting and Sustainability Reporting"),
            leaf("Cash Flow Management and Liquidity Analysis"),
            leaf("Financial Statement Fraud Detection Techniques"),
            leaf("Automated Expense Tracking System"),
            leaf("Financial Performance Analysis of Public Sector Banks"),
            leaf("Inventory Management and Costing Methods"),
            leaf("Performance Measurement in Service Industries"),
            leaf("Accounting for Mergers and Acquisitions"),
            leaf("Analysis of Working Capital Management"),
            leaf("Risk Management in Financial Institutions"),
            leaf("Credit Risk Assessment Model"),
            leaf("Accounting for Derivatives and Hedging"),
            leaf("Blockchain Technology in Auditing"),
            leaf("Internal Control Systems for Small Businesses"),
            leaf("Impact of Taxation on Foreign Direct Investment"),
            leaf("Cost-Benefit Analysis of New Product Launch"),
            leaf("Analysis of GST Implementation on Businesses"),
            leaf("Accounting for Employee Stock Options"),
            leaf("Revenue Recognition under IFRS 15"),
            leaf("Financial Analysis of Retail Sector"),
            leaf("Development of a Personal Finance Management App"),
            leaf("Analysis of Mutual Fund Performance"),
            leaf("Impact of COVID-19 on Financial Reporting"),
            leaf("Ethical Dilemmas in Accounting Profession"),
            leaf("Activity-Based Costing in Manufacturing"),
            leaf("Analysis of Corporate Governance Practices"),
            leaf("Accounting for Intellectual Property"),
            leaf("Big Data Analytics for Audit Planning"),
            leaf("Financial Feasibility of a Renewable Energy Project"),
            leaf("Analysis of Bank Performance using CAMELS Model"),
            leaf("Implementation of Tally ERP for Business Accounting"),
            leaf("Inventory Valuation and Management"),
            leaf("Analysis of Stock Market Volatility"),
            leaf("Financial Health of the Indian Telecom Industry"),
            leaf("Accounting for Social and Environmental Costs"),
            leaf("Project Cost Control and Management"),
            leaf("Credit Scoring Model using Machine Learning"),
            leaf("Analysis of Financial Inclusion Initiatives"),
        ],
    },
    {
        name: "Applied Nutrition",
        children: [
            leaf("Effect of a Plant-Based Diet on Cardiovascular Health"),
            leaf("Development of a Personalized Meal Planner for Diabetics"),
            leaf("Nutritional Assessment of School-Aged Children"),
            leaf("Role of Probiotics in Gut Health"),
            leaf("Impact of Food Processing on Nutrient Content"),
            leaf("Design of a Community Nutrition Program for a Low-Income Area"),
            leaf("Study on the Prevalence of Vitamin D Deficiency"),
            leaf("Nutritional Management of Polycystic Ovary Syndrome (PCOS)"),
            leaf("Analysis of Food Labeling and Consumer Understanding"),
            leaf("Development of a Mobile App for Calorie Counting"),
            leaf("Sports Nutrition for Endurance Athletes"),
            leaf("Nutritional Interventions for Anemia"),
            leaf("Assessment of Food Safety Practices in Restaurants"),
            leaf("Effectiveness of Nutritional Counseling for Weight Loss"),
            leaf("Study of Traditional Food Systems and Their Nutritional Value"),
            leaf("Development of Recipes for Individuals with Celiac Disease"),
            leaf("Impact of Fad Diets on Adolescent Health"),
            leaf("Analysis of Public Health Policies on Obesity"),
            leaf("Assessment of Nutritional Status of Pregnant Women"),
            leaf("Role of Diet in Mental Health"),
            leaf("Effect of Hydration on Cognitive Performance"),
            leaf("Analysis of Sugar Consumption in College Students"),
            leaf("Nutritional Education Program for Seniors"),
            leaf("Development of a Food Allergy Management Plan"),
            leaf("Study on the Benefits of Intermittent Fasting"),
            leaf("Nutritional Needs of Athletes"),
            leaf("Analysis of the Mediterranean Diet"),
            leaf("Food Waste Reduction Strategies"),
            leaf("Role of Dietary Fiber in Digestive Health"),
            leaf("Assessment of Food Security in Urban Households"),
            leaf("Nutritional Supplements and Their Efficacy"),
            leaf("Impact of Fast Food Consumption on Health"),
            leaf("Study of the Keto Diet"),
            leaf("Nutritional Guidelines for Cancer Patients"),
            leaf("Assessment of Dietary Habits in Vegetarians"),
            leaf("Role of Antioxidants in Health and Disease"),
            leaf("Development of a Nutrition Plan for Bodybuilders"),
            leaf("Analysis of the DASH Diet for Hypertension"),
            leaf("Study on the Effects of Artificial Sweeteners"),
            leaf("Nutritional Needs During Pregnancy"),
            leaf("Development of a Diet Plan for People with Kidney Disease"),
            leaf("Assessment of Nutritional Status in Elderly People"),
            leaf("Impact of Genetically Modified Foods on Health"),
            leaf("Study of the Paleo Diet"),
            leaf("Nutritional Interventions for People with Crohn's Disease"),
            leaf("Analysis of the Vegan Diet"),
            leaf("Development of a Nutrition Plan for Children with ADHD"),
            leaf("Assessment of Nutritional Status in Athletes"),
            leaf("Impact of Processed Foods on Health"),
            leaf("Study of the Zone Diet"),
        ],
    },
    {
        name: "B. Com (Computers)",
        children: [
            leaf("E-commerce Business Plan and Implementation using Shopify"),
            leaf("Digital Marketing Strategy for a Local Restaurant"),
            leaf("Development of a Web-Based Inventory Management System"),
            leaf("Analysis of Consumer Behavior on Social Media Platforms"),
            leaf("Blockchain for Supply Chain Transparency in Retail"),
            leaf("Data Analytics Dashboard for Sales Performance Tracking"),
            leaf("Development of a CRM System for a Small Business"),
            leaf("Cybersecurity Practices for Online Transactions"),
            leaf("Feasibility Study for a Mobile Food Delivery App"),
            leaf("Cloud Computing Adoption by SMEs"),
            leaf("Development of a University Event Management System"),
            leaf("Impact of AI on Digital Advertising"),
            leaf("Analysis of SEO Strategies for a Business Website"),
            leaf("Implementation of a Student Information System"),
            leaf("Development of a Job Portal Website"),
            leaf("A Study on the Use of ERP Systems in Business Operations"),
            leaf("Building a Customer Feedback Management System"),
            leaf("Automating Business Processes with RPA"),
            leaf("Analysis of E-banking Adoption in Rural Areas"),
            leaf("Development of a Hotel Management System"),
            leaf("Impact of Social Media Influencers on Brand Loyalty"),
            leaf("Development of a Real Estate Management System"),
            leaf("Analysis of Big Data in E-commerce"),
            leaf("Building a Human Resource Management System"),
            leaf("A Study on the Use of IoT in Retail"),
            leaf("Development of a Patient Management System"),
            leaf("Analysis of Data Security in Cloud Computing"),
            leaf("Building a Micro-E-commerce Website for Handmade Products"),
            leaf("A Study on the Use of AI in Business"),
            leaf("Development of a Transport Management System"),
            leaf("Analysis of the Impact of Cybersecurity on Business"),
            leaf("Building a Student Management System"),
            leaf("A Study on the Use of E-commerce in Business"),
            leaf("Development of a Library Management System"),
            leaf("Analysis of the Impact of Social Media on Business"),
            leaf("Building a Restaurant Management System"),
            leaf("A Study on the Use of Cloud Computing in Business"),
            leaf("Development of a Clinic Management System"),
            leaf("Analysis of the Impact of AI on Business"),
            leaf("Building a Payroll Management System"),
            leaf("A Study on the Use of Blockchain in Business"),
            leaf("Development of a Travel Agency Management System"),
            leaf("Analysis of the Impact of IoT on Business"),
            leaf("Building a Project Management System"),
            leaf("A Study on the Use of Big Data in Business"),
            leaf("Development of a Gym Management System"),
            leaf("Analysis of the Impact of Digital Marketing on Business"),
            leaf("Building a School Management System"),
            leaf("A Study on the Use of Digital Marketing in Business"),
            leaf("Development of a Retail Management System"),
        ],
    },
    {
        name: "B. Com (General)",
        children: [
            leaf("Financial Performance Analysis of Public Sector Banks"),
            leaf("Impact of GST on Small and Medium Enterprises in India"),
            leaf("A Study on Working Capital Management in Manufacturing Companies"),
            leaf("Customer Satisfaction Towards E-banking Services"),
            leaf("Role of Microfinance Institutions in Rural Development"),
            leaf("Analysis of Foreign Direct Investment in the Retail Sector"),
            leaf("Capital Budgeting Practices in Indian Manufacturing Companies"),
            leaf("Impact of Advertising on Consumer Buying Behavior"),
            leaf("A Study on Portfolio Management Services in India"),
            leaf("Analysis of Corporate Social Responsibility Activities of Indian Companies"),
            leaf("Consumer Perception of Online Shopping vs. Traditional Retail"),
            leaf("Impact of Demonetization on the Indian Economy"),
            leaf("A Study on Risk and Return Analysis of Mutual Funds"),
            leaf("Role of SEBI in Investor Protection"),
            leaf("Analysis of the Impact of COVID-19 on the Tourism Sector"),
            leaf("A Study on Employee Motivation in the IT Sector"),
            leaf("Analysis of the Financial Performance of the Indian Telecom Industry"),
            leaf("Role of Human Resource Management in Organizational Development"),
            leaf("A Study on the Impact of Digital Payments on the Indian Economy"),
            leaf("Analysis of the Role of Financial Literacy on Investment Decisions"),
            leaf("Customer Relationship Management in the Banking Sector"),
            leaf("Impact of E-commerce on the Supply Chain"),
            leaf("A Study on the Role of Rural Marketing"),
            leaf("Analysis of the Factors Influencing Brand Loyalty"),
            leaf("Impact of Corporate Governance on Firm Performance"),
            leaf("A Study on the Performance of Indian Stock Market"),
            leaf("Analysis of the Role of Entrepreneurship in Economic Development"),
            leaf("Impact of Social Media Marketing on Business"),
            leaf("A Study on the Financial Performance of the Indian Automotive Industry"),
            leaf("Analysis of the Impact of Training and Development on Employee Performance"),
            leaf("Impact of Globalization on the Indian Economy"),
            leaf("A Study on the Role of Marketing in Business"),
            leaf("Analysis of the Factors Influencing Consumer Behavior"),
            leaf("Impact of Demonetization on the Banking Sector"),
            leaf("A Study on the Role of Women Entrepreneurs in India"),
            leaf("Analysis of the Financial Performance of the Indian Insurance Sector"),
            leaf("Impact of the Internet on Business"),
            leaf("A Study on the Role of Information Technology in Business"),
            leaf("Analysis of the Financial Performance of the Indian Pharmaceutical Industry"),
            leaf("Impact of Corporate Social Responsibility on Brand Image"),
            leaf("A Study on the Role of Customer Service in Business"),
            leaf("Analysis of the Financial Performance of the Indian Hotel Industry"),
            leaf("Impact of the Financial Crisis on the Indian Economy"),
            leaf("A Study on the Role of Small and Medium Enterprises in India"),
            leaf("Analysis of the Financial Performance of the Indian Retail Industry"),
            leaf("Impact of the Financial Crisis on the Banking Sector"),
            leaf("A Study on the Role of Supply Chain Management"),
            leaf("Analysis of the Financial Performance of the Indian Airline Industry"),
            leaf("Impact of the Financial Crisis on the Insurance Sector"),
            leaf("A Study on the Role of E-commerce in Business"),
        ],
    },
    {
        name: "BBA (Bachelor of Business Administration)",
        children: [
            leaf("Strategic Management Analysis of a Fast-Moving Consumer Goods (FMCG) Company"),
            leaf("Impact of Leadership Styles on Employee Motivation and Performance"),
            leaf("Development of a Marketing Plan for a Tech Startup"),
            leaf("A Study on the Effectiveness of Recruitment and Selection Process"),
            leaf("Analysis of Consumer Behavior in the Digital Age"),
            leaf("Role of Corporate Social Responsibility in Brand Building"),
            leaf("Impact of Training and Development on Employee Productivity"),
            leaf("A Study on the Supply Chain Management of a Global Retailer"),
            leaf("Analysis of Organizational Culture and Its Impact on Employee Engagement"),
            leaf("Feasibility Study for a New Business Venture"),
            leaf("Impact of Employee Motivation on Job Performance"),
            leaf("A Study on the Role of Human Resource Management in Business"),
            leaf("Analysis of the Factors Influencing Customer Satisfaction"),
            leaf("Impact of Social Media Marketing on Business"),
            leaf("A Study on the Role of Leadership in Business"),
            leaf("Analysis of the Factors Influencing Employee Turnover"),
            leaf("Impact of Globalization on Business"),
            leaf("A Study on the Role of Management in Business"),
            leaf("Analysis of the Financial Performance of a Company"),
            leaf("Impact of Technology on Business"),
            leaf("A Study on the Role of Entrepreneurship in Business"),
            leaf("Analysis of the Factors Influencing Business Growth"),
            leaf("Impact of the Business Environment on Business"),
            leaf("A Study on the Role of Marketing in Business"),
            leaf("Analysis of the Factors Influencing Business Success"),
            leaf("Impact of the Financial Crisis on Business"),
            leaf("A Study on the Role of E-commerce in Business"),
            leaf("Analysis of the Factors Influencing Business Performance"),
            leaf("Impact of the Internet on Business"),
            leaf("A Study on the Role of Information Technology in Business"),
            leaf("Analysis of the Factors Influencing Business Strategy"),
            leaf("Impact of the Economic Environment on Business"),
            leaf("A Study on the Role of Innovation in Business"),
            leaf("Analysis of the Factors Influencing Business Ethics"),
            leaf("Impact of the Political Environment on Business"),
            leaf("A Study on the Role of Globalization in Business"),
            leaf("Analysis of the Factors Influencing Business Decisions"),
            leaf("Impact of the Legal Environment on Business"),
            leaf("A Study on the Role of Corporate Social Responsibility in Business"),
            leaf("Analysis of the Factors Influencing Business Operations"),
            leaf("Impact of the Cultural Environment on Business"),
            leaf("A Study on the Role of Quality Management in Business"),
            leaf("Analysis of the Factors Influencing Business Planning"),
            leaf("Impact of the Social Environment on Business"),
            leaf("A Study on the Role of Change Management in Business"),
            leaf("Analysis of the Factors Influencing Business Communication"),
            leaf("Impact of the Technological Environment on Business"),
            leaf("A Study on the Role of Supply Chain Management in Business"),
            leaf("Analysis of the Factors Influencing Business Sustainability"),
            leaf("Impact of the Ecological Environment on Business"),
        ],
    },
    {
        name: "Banking",
        children: [
            leaf("Risk Assessment Model for Loan Approval in Public Sector Banks"),
            leaf("Impact of Digitalization on Customer Service in the Banking Sector"),
            leaf("A Study on the Effectiveness of Mobile Banking Applications"),
            leaf("Analysis of Credit Risk Management in Cooperative Banks"),
            leaf("Role of RBI in Controlling Inflation in the Indian Economy"),
            leaf("Impact of Demonetization on the Banking Sector"),
            leaf("A Study on the Financial Performance of Private Sector Banks"),
            leaf("Analysis of Non-Performing Assets (NPAs) in the Indian Banking Sector"),
            leaf("Role of Microfinance in Financial Inclusion in Rural India"),
            leaf("Impact of Cybersecurity Threats on the Banking Industry"),
            leaf("A Study on the Use of AI in Fraud Detection in Banking"),
            leaf("Analysis of Customer Relationship Management in Banking"),
            leaf("Impact of FinTech Companies on Traditional Banking"),
            leaf("A Study on the Role of E-banking in Business"),
            leaf("Analysis of the Financial Performance of the Indian Banking Sector"),
            leaf("Impact of the Financial Crisis on the Banking Sector"),
            leaf("A Study on the Role of Rural Banking"),
            leaf("Analysis of the Factors Influencing Customer Satisfaction in Banking"),
            leaf("Impact of Globalization on the Banking Sector"),
            leaf("A Study on the Role of Public Sector Banks in India"),
            leaf("Analysis of the Factors Influencing Bank Selection by Customers"),
            leaf("Impact of Technology on the Banking Sector"),
            leaf("A Study on the Role of Private Sector Banks in India"),
            leaf("Analysis of the Financial Performance of the Indian Banking Sector"),
            leaf("Impact of the Economic Environment on the Banking Sector"),
            leaf("A Study on the Role of Cooperative Banks in India"),
            leaf("Analysis of the Factors Influencing Bank Performance"),
            leaf("Impact of the Political Environment on the Banking Sector"),
            leaf("A Study on the Role of Foreign Banks in India"),
            leaf("Analysis of the Factors Influencing Credit Risk"),
            leaf("Impact of the Legal Environment on the Banking Sector"),
            leaf("A Study on the Role of Investment Banking"),
            leaf("Analysis of the Factors Influencing Financial Performance"),
            leaf("Impact of the Social Environment on the Banking Sector"),
            leaf("A Study on the Role of Commercial Banking"),
            leaf("Analysis of the Factors Influencing Liquidity Risk"),
            leaf("Impact of the Cultural Environment on the Banking Sector"),
            leaf("A Study on the Role of Retail Banking"),
            leaf("Analysis of the Factors Influencing Operational Risk"),
            leaf("Impact of the Technological Environment on the Banking Sector"),
            leaf("A Study on the Role of Corporate Banking"),
            leaf("Analysis of the Factors Influencing Market Risk"),
            leaf("Impact of the Ecological Environment on the Banking Sector"),
            leaf("A Study on the Role of Digital Banking"),
            leaf("Analysis of the Factors Influencing Reputational Risk"),
            leaf("Impact of the Financial Crisis on the Banking Sector"),
            leaf("A Study on the Role of Mobile Banking"),
            leaf("Analysis of the Factors Influencing Strategic Risk"),
            leaf("Impact of the Internet on the Banking Sector"),
            leaf("A Study on the Role of Internet Banking"),
        ],
    },
    {
        name: "Biochemistry",
        children: [
            leaf("Effect of a Ketogenic Diet on Brain Function"),
            leaf("Development of a Novel Biosensor for Glucose Detection"),
            leaf("Analysis of Protein-Ligand Interactions in Drug Discovery"),
            leaf("Study on the Enzyme Kinetics of Amylase"),
            leaf("Impact of Environmental Pollutants on Metabolic Pathways"),
            leaf("Development of a PCR-based Diagnostic for Infectious Diseases"),
            leaf("Analysis of Gene Expression in Cancer Cells"),
            leaf("Role of CRISPR-Cas9 in Gene Editing"),
            leaf("Study of the Mechanism of Action of an Antibiotic"),
            leaf("Analysis of the Biochemical Changes in Aged Cells"),
            leaf("Development of a Novel Method for Protein Purification"),
            leaf("Study on the Role of Oxidative Stress in Disease"),
            leaf("Analysis of the Effect of a Diet on Gut Microbiome"),
            leaf("Development of a Biosensor for Heavy Metal Detection"),
            leaf("Study on the Role of DNA Repair in Cancer"),
            leaf("Analysis of the Effect of a Drug on Cell Viability"),
            leaf("Development of a Novel Method for DNA Extraction"),
            leaf("Study on the Role of RNA in Gene Expression"),
            leaf("Analysis of the Effect of a Toxin on Cellular Respiration"),
            leaf("Development of a Biosensor for pH Detection"),
            leaf("Study on the Role of Lipids in Cell Signaling"),
            leaf("Analysis of the Effect of a Hormone on Gene Expression"),
            leaf("Development of a Novel Method for RNA Extraction"),
            leaf("Study on the Role of Carbohydrates in Energy Metabolism"),
            leaf("Analysis of the Effect of a Vitamin on Enzyme Activity"),
            leaf("Development of a Biosensor for Temperature Detection"),
            leaf("Study on the Role of Amino Acids in Protein Synthesis"),
            leaf("Analysis of the Effect of a Mineral on Enzyme Activity"),
            leaf("Development of a Novel Method for Cell Lysis"),
            leaf("Study on the Role of Nucleic Acids in Heredity"),
            leaf("Analysis of the Effect of a Food on Metabolism"),
            leaf("Development of a Biosensor for Light Detection"),
            leaf("Study on the Role of Enzymes in Digestion"),
            leaf("Analysis of the Effect of a Pollutant on Enzyme Activity"),
            leaf("Development of a Novel Method for Protein Staining"),
            leaf("Study on the Role of Hormones in the Body"),
            leaf("Analysis of the Effect of a Drug on the Cell Cycle"),
            leaf("Development of a Biosensor for Pressure Detection"),
            leaf("Study on the Role of Vitamins in the Body"),
            leaf("Analysis of the Effect of a Mineral on the Body"),
            leaf("Development of a Novel Method for Gel Electrophoresis"),
            leaf("Study on the Role of Coenzymes in Metabolism"),
            leaf("Analysis of the Effect of a Food on the Body"),
            leaf("Development of a Biosensor for Sound Detection"),
            leaf("Study on the Role of Substrates in Enzyme Reactions"),
            leaf("Analysis of the Effect of a Pollutant on the Body"),
            leaf("Development of a Novel Method for Immunoblotting"),
            leaf("Study on the Role of Inhibitors in Enzyme Reactions"),
            leaf("Analysis of the Effect of a Toxin on the Body"),
        ],
    },
    {
        name: "Biotechnology",
        children: [
            leaf("Development of a Bioreactor for Biofuel Production from Algae"),
            leaf("Genetic Engineering of E. coli for Insulin Production"),
            leaf("Analysis of Protein Expression in Genetically Modified Organisms"),
            leaf("Use of CRISPR-Cas9 for Gene Editing in Plant Cells"),
            leaf("Study on the Bioremediation of Heavy Metals in Contaminated Water"),
            leaf("Development of a Biosensor for Environmental Monitoring"),
            leaf("Analysis of Gene Therapy for Genetic Disorders"),
            leaf("Role of Fermentation in the Production of Antibiotics"),
            leaf("Study on the Tissue Culture of Medicinal Plants"),
            leaf("Development of a Diagnostic Kit for Viral Infections"),
            leaf("Analysis of the Impact of GMOs on Agriculture"),
            leaf("Role of Stem Cells in Regenerative Medicine"),
            leaf("Study on the Use of Nanotechnology in Drug Delivery"),
            leaf("Development of a Bioreactor for Lactic Acid Production"),
            leaf("Analysis of the Use of Bioinformatics in Drug Discovery"),
            leaf("Role of Biotechnology in Waste Management"),
            leaf("Study on the Production of Biofertilizers"),
            leaf("Development of a Bioreactor for Ethanol Production"),
            leaf("Analysis of the Use of Enzymes in Industrial Processes"),
            leaf("Role of Biotechnology in Food Production"),
            leaf("Study on the Production of Biopesticides"),
            leaf("Development of a Bioreactor for Biodiesel Production"),
            leaf("Analysis of the Use of Microbes in Environmental Cleanup"),
            leaf("Role of Biotechnology in Human Health"),
            leaf("Study on the Production of Bioplastics"),
            leaf("Development of a Bioreactor for Biogas Production"),
            leaf("Analysis of the Use of Genetic Engineering in Food Production"),
            leaf("Role of Biotechnology in Animal Husbandry"),
            leaf("Study on the Production of Single-Cell Protein"),
            leaf("Development of a Bioreactor for Enzyme Production"),
            leaf("Analysis of the Use of Biotechnology in Cosmetics"),
            leaf("Role of Biotechnology in Forensics"),
            leaf("Study on the Production of Biopolymers"),
            leaf("Development of a Bioreactor for Vitamin Production"),
            leaf("Analysis of the Use of Biotechnology in Energy Production"),
            leaf("Role of Biotechnology in Water Treatment"),
            leaf("Study on the Production of Bioplastics"),
            leaf("Development of a Bioreactor for Amino Acid Production"),
            leaf("Analysis of the Use of Biotechnology in Textiles"),
            leaf("Role of Biotechnology in Agriculture"),
            leaf("Study on the Production of Biopharmaceuticals"),
            leaf("Development of a Bioreactor for Protein Production"),
            leaf("Analysis of the Use of Biotechnology in Waste Management"),
            leaf("Role of Biotechnology in the Food Industry"),
            leaf("Study on the Production of Biofuels"),
            leaf("Development of a Bioreactor for Vaccine Production"),
            leaf("Analysis of the Use of Biotechnology in Environmental Protection"),
            leaf("Role of Biotechnology in the Medical Industry"),
            leaf("Study on the Production of Bio-based Chemicals"),
        ],
    },
    {
        name: "Botany",
        children: [
            leaf("Analysis of Plant Species Diversity in a Local Ecosystem"),
            leaf("Study on the Effects of Climate Change on Crop Yields"),
            leaf("Development of a Plant Disease Detection System using Machine Learning"),
            leaf("Role of Plant Hormones in Plant Growth and Development"),
            leaf("Study on the Medicinal Properties of a Local Plant"),
            leaf("Analysis of the Photosynthetic Efficiency of Different Plant Species"),
            leaf("Impact of Urbanization on Plant Life"),
            leaf("Development of a Plant Identification Mobile App"),
            leaf("Study on the Role of Mycorrhizae in Plant Nutrition"),
            leaf("Analysis of the Effects of Pollution on Plant Growth"),
            leaf("Role of Biotechnology in Crop Improvement"),
            leaf("Study on the Use of Tissue Culture for Plant Propagation"),
            leaf("Analysis of the Effects of Light on Plant Growth"),
            leaf("Role of Plant Physiology in Plant Adaptation"),
            leaf("Study on the Use of Drones in Agriculture"),
            leaf("Analysis of the Effects of Water Stress on Plant Growth"),
            leaf("Role of Plant Anatomy in Plant Identification"),
            leaf("Study on the Use of GIS in Plant Conservation"),
            leaf("Analysis of the Effects of Soil pH on Plant Growth"),
            leaf("Role of Plant Morphology in Plant Classification"),
            leaf("Study on the Use of Remote Sensing in Agriculture"),
            leaf("Analysis of the Effects of Temperature on Plant Growth"),
            leaf("Role of Plant Systematics in Plant Taxonomy"),
            leaf("Study on the Use of AI in Plant Disease Detection"),
            leaf("Analysis of the Effects of Nutrients on Plant Growth"),
            leaf("Role of Plant Ecology in Ecosystem Management"),
            leaf("Study on the Use of Robotics in Agriculture"),
            leaf("Analysis of the Effects of Herbicides on Plant Growth"),
            leaf("Role of Plant Pathology in Disease Management"),
            leaf("Study on the Use of Nanotechnology in Agriculture"),
            leaf("Analysis of the Effects of Pesticides on Plant Growth"),
            leaf("Role of Plant Genetics in Crop Breeding"),
            leaf("Study on the Use of Biotechnology in Plant Breeding"),
            leaf("Analysis of the Effects of Air Pollution on Plant Growth"),
            leaf("Role of Plant Biochemistry in Plant Metabolism"),
            leaf("Study on the Use of CRISPR-Cas9 in Plant Genetics"),
            leaf("Analysis of the Effects of Water Pollution on Plant Growth"),
            leaf("Role of Plant Molecular Biology in Gene Expression"),
            leaf("Study on the Use of Gene Therapy in Plants"),
            leaf("Analysis of the Effects of Soil Contamination on Plant Growth"),
            leaf("Role of Plant Cytology in Cell Division"),
            leaf("Study on the Use of Tissue Culture in Plant Breeding"),
            leaf("Analysis of the Effects of Climate Change on Plant Distribution"),
            leaf("Role of Plant Histology in Plant Tissues"),
            leaf("Study on the Use of Plant Hormones in Agriculture"),
            leaf("Analysis of the Effects of Salinity on Plant Growth"),
            leaf("Role of Plant Taxonomy in Plant Identification"),
            leaf("Study on the Use of Plant Anatomy in Plant Classification"),
            leaf("Analysis of the Effects of Drought on Plant Growth"),
            leaf("Role of Plant Morphology in Plant Identification"),
        ],
    },
    {
        name: "Business Analytics",
        children: [
            leaf("Predictive Customer Churn Model for a Telecommunication Company"),
            leaf("Retail Sales Forecasting using Time Series Analysis"),
            leaf("Sentiment Analysis on Social Media Data for Brand Reputation Management"),
            leaf("Supply Chain Optimization using Linear Programming"),
            leaf("Customer Segmentation and Targeting using Clustering Algorithms"),
            leaf("Analysis of E-commerce Customer Behavior using Web Analytics"),
            leaf("Predictive Maintenance Model for Industrial Machinery"),
            leaf("Analysis of Employee Performance Data for HR Decision Making"),
            leaf("Credit Risk Assessment using Logistic Regression"),
            leaf("Market Basket Analysis for Cross-Selling and Up-Selling"),
            leaf("Analysis of Customer Feedback and Reviews using NLP"),
            leaf("Predictive Analytics for Stock Price Forecasting"),
            leaf("Analysis of A/B Testing Results for Website Optimization"),
            leaf("Fraud Detection in Financial Transactions using Machine Learning"),
            leaf("Analysis of Logistics and Route Optimization for a Delivery Service"),
            leaf("Predictive Analytics for Energy Consumption Forecasting"),
            leaf("Analysis of Sports Performance Data using Statistics"),
            leaf("Predictive Analytics for Hotel Room Booking Forecasting"),
            leaf("Analysis of Patient Data for Disease Prediction"),
            leaf("Predictive Analytics for Customer Lifetime Value"),
            leaf("Analysis of Call Center Data for Performance Improvement"),
            leaf("Predictive Analytics for Employee Attrition"),
            leaf("Analysis of Social Media Marketing Campaigns"),
            leaf("Predictive Analytics for Online Ad Click-Through Rates"),
            leaf("Analysis of Real Estate Market Trends"),
            leaf("Predictive Analytics for Student Performance"),
            leaf("Analysis of Music Streaming Data for Recommendation"),
            leaf("Predictive Analytics for Loan Default Prediction"),
            leaf("Analysis of Hospital Readmission Rates"),
            leaf("Predictive Analytics for Flight Delay Prediction"),
            leaf("Analysis of E-commerce Returns Data"),
            leaf("Predictive Analytics for Sales Lead Scoring"),
            leaf("Analysis of Customer Complaints Data"),
            leaf("Predictive Analytics for Patient No-Show Prediction"),
            leaf("Analysis of Website Traffic Data"),
            leaf("Predictive Analytics for Customer Segmentation"),
            leaf("Analysis of Social Media Engagement Data"),
            leaf("Predictive Analytics for Customer Churn"),
            leaf("Analysis of Retail Store Sales Data"),
            leaf("Predictive Analytics for Supply Chain Demand"),
            leaf("Analysis of Customer Demographics Data"),
            leaf("Predictive Analytics for Employee Performance"),
            leaf("Analysis of Business Process Data"),
            leaf("Predictive Analytics for Fraud Detection"),
            leaf("Analysis of Healthcare Data"),
            leaf("Predictive Analytics for Market Basket Analysis"),
            leaf("Analysis of Financial Transaction Data"),
            leaf("Predictive Analytics for Customer Lifetime Value"),
            leaf("Analysis of Human Resources Data"),
            leaf("Predictive Analytics for Loan Default Prediction"),
        ],
    },
    {
        name: "Chemistry",
        children: [
            leaf("Synthesis and Characterization of Novel Nanoparticles"),
            leaf("Study on the Adsorption of Heavy Metals from Water"),
            leaf("Development of a Green Chemistry Synthesis of an Organic Compound"),
            leaf("Analysis of the Composition of a Local Water Source"),
            leaf("Study on the Effects of a Catalyst on a Chemical Reaction"),
            leaf("Development of a Lab Automation System for Titration"),
            leaf("Analysis of the Purity of a Chemical Compound"),
            leaf("Role of Enzymes in Industrial Processes"),
            leaf("Study on the Synthesis of Biodegradable Polymers"),
            leaf("Development of a Colorimetric Sensor for Ion Detection"),
            leaf("Analysis of the Effects of Temperature on a Chemical Reaction"),
            leaf("Role of Spectroscopy in Chemical Analysis"),
            leaf("Study on the Synthesis of a Medicinal Compound"),
            leaf("Development of a Novel Method for Drug Delivery"),
            leaf("Analysis of the Effects of pH on a Chemical Reaction"),
            leaf("Role of Chromatography in Chemical Separation"),
            leaf("Study on the Synthesis of a Pigment"),
            leaf("Development of a Novel Method for Chemical Analysis"),
            leaf("Analysis of the Effects of Pressure on a Chemical Reaction"),
            leaf("Role of Mass Spectrometry in Chemical Identification"),
            leaf("Study on the Synthesis of a Dye"),
            leaf("Development of a Novel Method for Chemical Synthesis"),
            leaf("Analysis of the Effects of Concentration on a Chemical Reaction"),
            leaf("Role of NMR Spectroscopy in Chemical Structure Determination"),
            leaf("Study on the Synthesis of a Flavoring Agent"),
            leaf("Development of a Novel Method for Chemical Separation"),
            leaf("Analysis of the Effects of a Solvent on a Chemical Reaction"),
            leaf("Role of X-ray Crystallography in Chemical Structure Determination"),
            leaf("Study on the Synthesis of a Fragrance"),
            leaf("Development of a Novel Method for Chemical Identification"),
            leaf("Analysis of the Effects of a Catalyst on a Chemical Reaction"),
            leaf("Role of IR Spectroscopy in Chemical Analysis"),
            leaf("Study on the Synthesis of a Food Additive"),
            leaf("Development of a Novel Method for Chemical Purification"),
            leaf("Analysis of the Effects of a Reagent on a Chemical Reaction"),
            leaf("Role of UV-Vis Spectroscopy in Chemical Analysis"),
            leaf("Study on the Synthesis of a Polymer"),
            leaf("Development of a Novel Method for Chemical Characterization"),
            leaf("Analysis of the Effects of a Co-solvent on a Chemical Reaction"),
            leaf("Role of Raman Spectroscopy in Chemical Analysis"),
            leaf("Study on the Synthesis of a Surfactant"),
            leaf("Development of a Novel Method for Chemical Modification"),
            leaf("Analysis of the Effects of a Ligand on a Chemical Reaction"),
            leaf("Role of Fluorescence Spectroscopy in Chemical Analysis"),
            leaf("Study on the Synthesis of a Catalyst"),
            leaf("Development of a Novel Method for Chemical Functionalization"),
            leaf("Analysis of the Effects of a Substrate on a Chemical Reaction"),
            leaf("Role of Atomic Absorption Spectroscopy in Chemical Analysis"),
            leaf("Study on the Synthesis of a Doping Agent"),
            leaf("Development of a Novel Method for Chemical Derivatization"),
        ],
    },
    {
        name: "Computer Science",
        children: [
            leaf("Development of an E-commerce Website with Secure Payment Gateway"),
            leaf("Design and Implementation of a Real-Time Chat Application"),
            leaf("Creation of a Mobile App for Campus Navigation and Events"),
            leaf("Building a Machine Learning Model for Sentiment Analysis"),
            leaf("Design of a Secure File Sharing System using Blockchain"),
            leaf("Development of a Food Delivery Mobile App"),
            leaf("Implementation of an AI-Powered Healthcare Diagnostic Tool"),
            leaf("Design of a Smart Home Automation System using IoT"),
            leaf("Building a Social Media Analytics Dashboard"),
            leaf("Development of a Virtual Reality (VR) Training Simulator"),
            leaf("Design and Implementation of a Student Management System"),
            leaf("Building a Web-Based E-Learning Platform"),
            leaf("Development of an Online Book Store"),
            leaf("Implementation of a Hospital Management System"),
            leaf("Design of a Library Management System"),
            leaf("Building a Payroll Management System"),
            leaf("Development of a Transport Management System"),
            leaf("Implementation of a Hotel Management System"),
            leaf("Design of a Clinic Management System"),
            leaf("Building a Gym Management System"),
            leaf("Development of a School Management System"),
            leaf("Implementation of a Restaurant Management System"),
            leaf("Design of a Project Management System"),
            leaf("Building a Travel Agency Management System"),
            leaf("Development of a Retail Management System"),
            leaf("Implementation of a Real Estate Management System"),
            leaf("Design of a Patient Management System"),
            leaf("Building a Human Resource Management System"),
            leaf("Development of a Job Portal Website"),
            leaf("Implementation of a University Event Management System"),
            leaf("Design of a University Management System"),
            leaf("Building a College Management System"),
            leaf("Development of a School Management System"),
            leaf("Implementation of a Hospital Management System"),
            leaf("Design of a Library Management System"),
            leaf("Building a Payroll Management System"),
            leaf("Development of a Transport Management System"),
            leaf("Implementation of a Hotel Management System"),
            leaf("Design of a Clinic Management System"),
            leaf("Building a Gym Management System"),
            leaf("Development of a School Management System"),
            leaf("Implementation of a Restaurant Management System"),
            leaf("Design of a Project Management System"),
            leaf("Building a Travel Agency Management System"),
            leaf("Development of a Retail Management System"),
            leaf("Implementation of a Real Estate Management System"),
            leaf("Design of a Patient Management System"),
            leaf("Building a Human Resource Management System"),
            leaf("Development of a Job Portal Website"),
            leaf("Implementation of a University Event Management System"),
        ],
    },
    {
        name: "Data Science",
        children: [
            leaf("Predictive Analysis of Stock Market Trends using Time Series Models"),
            leaf("Natural Language Processing (NLP) for Customer Review Sentiment Analysis"),
            leaf("Big Data Analytics for Customer Churn Prediction"),
            leaf("Computer Vision for Object Detection and Recognition"),
            leaf("Social Media Analytics for Brand Monitoring"),
            leaf("Fraud Detection in Financial Transactions using Machine Learning"),
            leaf("Predictive Maintenance of Industrial Machinery"),
            leaf("Recommendation System for E-commerce Platforms"),
            leaf("Credit Scoring Model using Logistic Regression"),
            leaf("Analysis of Real-Time Traffic Data for Smart City Planning"),
            leaf("Predictive Analytics for Healthcare Patient Readmission"),
            leaf("Analysis of Customer Lifetime Value (CLV)"),
            leaf("Predictive Analytics for Sports Outcome Prediction"),
            leaf("Analysis of Flight Delay Data for Airline Optimization"),
            leaf("Predictive Analytics for Housing Price Prediction"),
            leaf("Analysis of Movie Ratings Data for Recommendation"),
            leaf("Predictive Analytics for Energy Consumption Forecasting"),
            leaf("Analysis of E-commerce Product Returns"),
            leaf("Predictive Analytics for Sales Forecasting"),
            leaf("Analysis of Social Media Network Data"),
            leaf("Predictive Analytics for Student Performance"),
            leaf("Analysis of Healthcare Data for Disease Prediction"),
            leaf("Predictive Analytics for Loan Default Prediction"),
            leaf("Analysis of Music Streaming Data for Recommendation"),
            leaf("Predictive Analytics for Customer Segmentation"),
            leaf("Analysis of Business Process Data for Optimization"),
            leaf("Predictive Analytics for Employee Attrition"),
            leaf("Analysis of Retail Sales Data"),
            leaf("Predictive Analytics for Supply Chain Demand"),
            leaf("Analysis of Customer Demographics Data"),
            leaf("Predictive Analytics for Customer Behavior"),
            leaf("Analysis of Website Traffic Data"),
            leaf("Predictive Analytics for Online Ad Click-Through Rates"),
            leaf("Analysis of Customer Complaints Data"),
            leaf("Predictive Analytics for Patient No-Show Prediction"),
            leaf("Analysis of Social Media Engagement Data"),
            leaf("Predictive Analytics for Customer Churn"),
            leaf("Analysis of Financial Transaction Data"),
            leaf("Predictive Analytics for Fraud Detection"),
            leaf("Analysis of Human Resources Data"),
            leaf("Predictive Analytics for Market Basket Analysis"),
            leaf("Analysis of Marketing Campaign Data"),
            leaf("Predictive Analytics for Customer Lifetime Value"),
            leaf("Analysis of E-commerce Customer Data"),
            leaf("Predictive Analytics for Loan Default Prediction"),
            leaf("Analysis of Supply Chain Data"),
            leaf("Predictive Analytics for Customer Segmentation"),
            leaf("Analysis of Healthcare Data"),
            leaf("Predictive Analytics for Disease Prediction"),
            leaf("Analysis of Social Media Data"),
        ],
    },
    {
        name: "Economics",
        children: [
            leaf("Econometric Model for Predicting GDP Growth in a Developing Economy"),
            leaf("Impact of Trade Policies on the Indian Textile Industry"),
            leaf("Analysis of the Effect of Inflation on Consumer Savings"),
            leaf("Study on the Causes and Consequences of Income Inequality"),
            leaf("Economic Analysis of Climate Change Mitigation Strategies"),
            leaf("Impact of Foreign Direct Investment on Economic Growth"),
            leaf("Analysis of the Factors Influencing Unemployment Rates"),
            leaf("A Study on the Role of Microfinance in Poverty Alleviation"),
            leaf("Impact of Technology on Labor Markets"),
            leaf("Analysis of the Indian Banking Sector's Response to Financial Crises"),
            leaf("A Study on the Impact of GST on the Indian Economy"),
            leaf("Analysis of the Factors Influencing Exchange Rates"),
            leaf("Impact of Globalization on the Indian Agriculture Sector"),
            leaf("A Study on the Role of Entrepreneurship in Economic Development"),
            leaf("Analysis of the Financial Performance of Public Sector Banks"),
            leaf("Impact of the Internet on Business"),
            leaf("A Study on the Role of E-commerce in Business"),
            leaf("Analysis of the Financial Performance of the Indian Telecom Industry"),
            leaf("Impact of Corporate Governance on Firm Performance"),
            leaf("A Study on the Performance of Indian Stock Market"),
            leaf("Analysis of the Role of Financial Literacy on Investment Decisions"),
            leaf("Impact of Demonetization on the Banking Sector"),
            leaf("A Study on the Role of Women Entrepreneurs in India"),
            leaf("Analysis of the Financial Performance of the Indian Insurance Sector"),
            leaf("Impact of the Internet on Business"),
            leaf("A Study on the Role of Information Technology in Business"),
            leaf("Analysis of the Financial Performance of the Indian Pharmaceutical Industry"),
            leaf("Impact of Corporate Social Responsibility on Brand Image"),
            leaf("A Study on the Role of Customer Service in Business"),
            leaf("Analysis of the Financial Performance of the Indian Hotel Industry"),
            leaf("Impact of the Financial Crisis on the Indian Economy"),
            leaf("A Study on the Role of Small and Medium Enterprises in India"),
            leaf("Analysis of the Financial Performance of the Indian Retail Industry"),
            leaf("Impact of the Financial Crisis on the Banking Sector"),
            leaf("A Study on the Role of Supply Chain Management"),
            leaf("Analysis of the Financial Performance of the Indian Airline Industry"),
            leaf("Impact of the Financial Crisis on the Insurance Sector"),
            leaf("A Study on the Role of E-commerce in Business"),
            leaf("Analysis of the Factors Influencing Consumer Behavior"),
            leaf("Impact of Demonetization on the Banking Sector"),
            leaf("A Study on the Role of Women Entrepreneurs in India"),
            leaf("Analysis of the Financial Performance of the Indian Insurance Sector"),
            leaf("Impact of the Internet on Business"),
            leaf("A Study on the Role of Information Technology in Business"),
            leaf("Analysis of the Financial Performance of the Indian Pharmaceutical Industry"),
            leaf("Impact of Corporate Social Responsibility on Brand Image"),
            leaf("A Study on the Role of Customer Service in Business"),
            leaf("Analysis of the Financial Performance of the Indian Hotel Industry"),
            leaf("Impact of the Financial Crisis on the Indian Economy"),
            leaf("A Study on the Role of Small and Medium Enterprises in India"),
        ],
    },
    {
        name: "E-commerce",
        children: [
            leaf("Development of a Marketplace Platform for Local Artisans"),
            leaf("Personalized Product Recommendation Engine using Collaborative Filtering"),
            leaf("Analysis of Customer Behavior and Purchase Funnel on an E-commerce Site"),
            leaf("Implementation of a Dropshipping Business Model"),
            leaf("Impact of Social Media Marketing on E-commerce Sales"),
            leaf("Development of a Secure Payment Gateway for E-commerce Platforms"),
            leaf("Analysis of Logistics and Supply Chain Management in E-commerce"),
            leaf("A Study on the Role of SEO in Driving E-commerce Traffic"),
            leaf("Impact of User Interface (UI) and User Experience (UX) on E-commerce Conversion Rates"),
            leaf("Development of a Customer Feedback and Review System"),
            leaf("Analysis of Customer Loyalty Programs in E-commerce"),
            leaf("Impact of Mobile Commerce on Online Shopping Trends"),
            leaf("A Study on the Use of AI in E-commerce Personalization"),
            leaf("Analysis of E-commerce Returns and Refund Policies"),
            leaf("Impact of Cybersecurity on E-commerce Businesses"),
            leaf("A Study on the Role of Big Data in E-commerce"),
            leaf("Analysis of the Factors Influencing Online Shopping Decisions"),
            leaf("Impact of E-commerce on the Supply Chain"),
            leaf("A Study on the Role of Social Media in E-commerce"),
            leaf("Analysis of the Impact of E-commerce on the Retail Industry"),
            leaf("Impact of E-commerce on Consumer Behavior"),
            leaf("A Study on the Role of Digital Marketing in E-commerce"),
            leaf("Analysis of the Factors Influencing E-commerce Business Success"),
            leaf("Impact of E-commerce on the Economy"),
            leaf("A Study on the Role of Logistics in E-commerce"),
            leaf("Analysis of the Financial Performance of an E-commerce Company"),
            leaf("Impact of E-commerce on the Tourism Industry"),
            leaf("A Study on the Role of Customer Service in E-commerce"),
            leaf("Analysis of the Factors Influencing E-commerce Website Traffic"),
            leaf("Impact of E-commerce on the Fashion Industry"),
            leaf("A Study on the Role of Security in E-commerce"),
            leaf("Analysis of the Factors Influencing E-commerce Conversion Rates"),
            leaf("Impact of E-commerce on the Food Industry"),
            leaf("A Study on the Role of Mobile Commerce in E-commerce"),
            leaf("Analysis of the Factors Influencing E-commerce Sales"),
            leaf("Impact of E-commerce on the Automotive Industry"),
            leaf("A Study on the Role of Cloud Computing in E-commerce"),
            leaf("Analysis of the Factors Influencing E-commerce Profitability"),
            leaf("Impact of E-commerce on the Healthcare Industry"),
            leaf("A Study on the Role of Big Data in E-commerce"),
            leaf("Analysis of the Factors Influencing E-commerce Business Growth"),
            leaf("Impact of E-commerce on the Education Industry"),
            leaf("A Study on the Role of AI in E-commerce"),
            leaf("Analysis of the Factors Influencing E-commerce Customer Loyalty"),
            leaf("Impact of E-commerce on the Real Estate Industry"),
            leaf("A Study on the Role of Blockchain in E-commerce"),
            leaf("Analysis of the Factors Influencing E-commerce Business Strategy"),
            leaf("Impact of E-commerce on the Financial Services Industry"),
            leaf("A Study on the Role of IoT in E-commerce"),
            leaf("Analysis of the Factors Influencing E-commerce Sustainability"),
        ],
    },
    {
        name: "Electronics",
        children: [
            leaf("Design and Implementation of a Smart Home Automation System using Arduino and IoT"),
            leaf("Development of a Robotic Arm with Gesture Control using Sensors"),
            leaf("Design of a Digital Signal Processing (DSP) System for Audio Filtering"),
            leaf("Implementation of a Line-Following Robot with PID Control"),
            leaf("Building a Wireless Power Transfer System"),
            leaf("Design of a GSM-based Home Security System"),
            leaf("Development of a Solar-Powered Battery Charger"),
            leaf("Implementation of an RFID-based Attendance System"),
            leaf("Building a Digital Clock using a Microcontroller"),
            leaf("Design of a Smart Parking System using Ultrasonic Sensors"),
            leaf("Development of a Weather Monitoring System using IoT"),
            leaf("Implementation of a BLE Beacon for Indoor Positioning"),
            leaf("Building a Voice-Controlled Home Automation System"),
            leaf("Design of a Fire Alarm System using a Microcontroller"),
            leaf("Development of a Traffic Light Control System"),
            leaf("Implementation of a GSM-based Patient Monitoring System"),
            leaf("Building a Home Automation System using a Raspberry Pi"),
            leaf("Design of a Water Level Indicator"),
            leaf("Development of a Smart Irrigation System"),
            leaf("Implementation of a GSM-based Security System"),
            leaf("Building a Digital Thermometer"),
            leaf("Design of a Remote Control System for Home Appliances"),
            leaf("Development of a Smart Dustbin"),
            leaf("Implementation of a GSM-based Vehicle Tracking System"),
            leaf("Building a Digital Voltmeter"),
            leaf("Design of a Remote Control Car"),
            leaf("Development of a Smart Street Lighting System"),
            leaf("Implementation of a GSM-based Energy Meter"),
            leaf("Building a Digital Ammeter"),
            leaf("Design of a Remote Control Plane"),
            leaf("Development of a Smart Garbage Monitoring System"),
            leaf("Implementation of a GSM-based Home Automation System"),
            leaf("Building a Digital Ohmmeter"),
            leaf("Design of a Remote Control Robot"),
            leaf("Development of a Smart Water Meter"),
            leaf("Implementation of a GSM-based Industrial Automation System"),
            leaf("Building a Digital Multimeter"),
            leaf("Design of a Remote Control Helicopter"),
            leaf("Development of a Smart Gas Leakage Detection System"),
            leaf("Implementation of a GSM-based Agricultural Automation System"),
            leaf("Building a Digital Frequency Counter"),
            leaf("Design of a Remote Control Drone"),
            leaf("Development of a Smart Smoke Detection System"),
            leaf("Implementation of a GSM-based Home Security System"),
            leaf("Building a Digital Oscilloscope"),
            leaf("Design of a Remote Control Boat"),
            leaf("Development of a Smart Fire Detection System"),
            leaf("Implementation of a GSM-based Patient Monitoring System"),
            leaf("Building a Digital Logic Analyzer"),
            leaf("Design of a Remote Control Tank"),
        ],
    },
    {
        name: "English Literature",
        children: [
            leaf("Analysis of Post-Colonial Themes in the Works of Chinua Achebe"),
            leaf("A Study on the Role of Women in Shakespearean Tragedies"),
            leaf("The Impact of Romanticism on Modern Poetry"),
            leaf("Exploring Dystopian Themes in George Orwell's '1984' and 'Animal Farm'"),
            leaf("A Comparative Study of the Works of Jane Austen and Virginia Woolf"),
            leaf("Analysis of Symbolism in 'The Great Gatsby'"),
            leaf("The Influence of Mythology on J.R.R. Tolkien's 'The Lord of the Rings'"),
            leaf("A Study on the Representation of Mental Illness in Contemporary Literature"),
            leaf("Exploring Gothic Elements in the Works of Edgar Allan Poe"),
            leaf("The Role of a Narrator in 'Wuthering Heights'"),
            leaf("A Comparative Study of the Works of William Shakespeare and Christopher Marlowe"),
            leaf("Analysis of the Theme of Love in the Works of John Keats"),
            leaf("The Influence of Victorian Society on Charles Dickens' 'Great Expectations'"),
            leaf("A Study on the Representation of Childhood in Literature"),
            leaf("Exploring the Theme of Identity in Modernist Literature"),
            leaf("The Role of a Protagonist in 'To Kill a Mockingbird'"),
            leaf("A Comparative Study of the Works of T.S. Eliot and Ezra Pound"),
            leaf("Analysis of the Theme of War in the Works of Wilfred Owen"),
            leaf("The Influence of Surrealism on Literature"),
            leaf("A Study on the Representation of Social Class in Literature"),
            leaf("Exploring the Theme of Nature in the Works of William Wordsworth"),
            leaf("The Role of a Villain in 'Macbeth'"),
            leaf("A Comparative Study of the Works of Emily Brontë and Charlotte Brontë"),
            leaf("Analysis of the Theme of Death in the Works of Edgar Allan Poe"),
            leaf("The Influence of Romanticism on American Literature"),
            leaf("A Study on the Representation of Race in Literature"),
            leaf("Exploring the Theme of Family in the Works of Leo Tolstoy"),
            leaf("The Role of a Hero in 'Beowulf'"),
            leaf("A Comparative Study of the Works of Ernest Hemingway and William Faulkner"),
            leaf("Analysis of the Theme of Good vs. Evil in 'Lord of the Flies'"),
            leaf("The Influence of the Enlightenment on Literature"),
            leaf("A Study on the Representation of Gender in Literature"),
            leaf("Exploring the Theme of Power in 'The Handmaid's Tale'"),
            leaf("The Role of a Sidekick in 'Sherlock Holmes'"),
            leaf("A Comparative Study of the Works of Samuel Beckett and Harold Pinter"),
            leaf("Analysis of the Theme of Hope in 'The Grapes of Wrath'"),
            leaf("The Influence of the Renaissance on Literature"),
            leaf("A Study on the Representation of Religion in Literature"),
            leaf("Exploring the Theme of Fear in the Works of Stephen King"),
            leaf("The Role of a Detective in 'The Catcher in the Rye'"),
            leaf("A Comparative Study of the Works of John Milton and William Shakespeare"),
            leaf("Analysis of the Theme of Betrayal in 'Hamlet'"),
            leaf("The Influence of the Middle Ages on Literature"),
            leaf("A Study on the Representation of Madness in Literature"),
            leaf("Exploring the Theme of Justice in 'The Trial'"),
            leaf("The Role of a Witness in 'The Great Gatsby'"),
            leaf("A Comparative Study of the Works of Fyodor Dostoevsky and Leo Tolstoy"),
            leaf("Analysis of the Theme of Freedom in 'A Doll's House'"),
            leaf("The Influence of the Modernist Movement on Literature"),
            leaf("A Study on the Representation of War in Literature"),
        ],
    },
    {
        name: "Entrepreneurship",
        children: [
            leaf("Feasibility Study for a Sustainable Fashion Startup"),
            leaf("Development of a Business Plan for a Mobile Car Wash Service"),
            leaf("Crowdfunding Campaign Strategy for a Tech Product"),
            leaf("Analysis of the Factors Influencing Startup Success in the Indian Market"),
            leaf("A Study on the Role of Social Entrepreneurship in Community Development"),
            leaf("Development of a Business Model Canvas for a New Venture"),
            leaf("Impact of Digital Marketing on Startup Growth"),
            leaf("A Study on the Challenges Faced by Women Entrepreneurs in India"),
            leaf("Analysis of the Role of Innovation in Entrepreneurship"),
            leaf("Business Plan for an EdTech Startup"),
            leaf("Impact of Government Policies on Small and Medium Enterprises"),
            leaf("A Study on the Role of Incubators and Accelerators in Startup Ecosystem"),
            leaf("Analysis of the Factors Influencing Entrepreneurial Intentions"),
            leaf("Business Plan for a Food and Beverage Startup"),
            leaf("Impact of Angel Investors and Venture Capital on Startup Funding"),
            leaf("A Study on the Role of Social Media in Entrepreneurship"),
            leaf("Analysis of the Factors Influencing Business Success"),
            leaf("Business Plan for a Health and Wellness Startup"),
            leaf("Impact of Globalization on Entrepreneurship"),
            leaf("A Study on the Role of Technology in Entrepreneurship"),
            leaf("Analysis of the Factors Influencing Business Growth"),
            leaf("Business Plan for a Travel and Tourism Startup"),
            leaf("Impact of the Economic Environment on Entrepreneurship"),
            leaf("A Study on the Role of E-commerce in Entrepreneurship"),
            leaf("Analysis of the Factors Influencing Business Performance"),
            leaf("Business Plan for a Financial Services Startup"),
            leaf("Impact of the Political Environment on Entrepreneurship"),
            leaf("A Study on the Role of Information Technology in Entrepreneurship"),
            leaf("Analysis of the Factors Influencing Business Strategy"),
            leaf("Business Plan for a Real Estate Startup"),
            leaf("Impact of the Legal Environment on Entrepreneurship"),
            leaf("A Study on the Role of Corporate Social Responsibility in Entrepreneurship"),
            leaf("Analysis of the Factors Influencing Business Ethics"),
            leaf("Business Plan for a Retail Startup"),
            leaf("Impact of the Social Environment on Entrepreneurship"),
            leaf("A Study on the Role of Quality Management in Entrepreneurship"),
            leaf("Analysis of the Factors Influencing Business Planning"),
            leaf("Business Plan for a Service-Based Startup"),
            leaf("Impact of the Cultural Environment on Entrepreneurship"),
            leaf("A Study on the Role of Change Management in Entrepreneurship"),
            leaf("Analysis of the Factors Influencing Business Communication"),
            leaf("Business Plan for a Manufacturing Startup"),
            leaf("Impact of the Technological Environment on Entrepreneurship"),
            leaf("A Study on the Role of Supply Chain Management in Entrepreneurship"),
            leaf("Analysis of the Factors Influencing Business Sustainability"),
            leaf("Business Plan for an E-commerce Startup"),
            leaf("Impact of the Ecological Environment on Entrepreneurship"),
            leaf("A Study on the Role of Innovation in Entrepreneurship"),
            leaf("Analysis of the Factors Influencing Business Decisions"),
            leaf("Business Plan for a B2B Startup"),
        ],
    },
    {
        name: "Environmental Science",
        children: [
            leaf("Assessment of Air Quality in Urban Areas using IoT Sensors"),
            leaf("Impact of Plastic Waste on Marine Ecosystems"),
            leaf("Feasibility Study for a Community-Based Rainwater Harvesting System"),
            leaf("Analysis of the Carbon Footprint of a Local University"),
            leaf("Study on the Bioremediation of Oil Spills using Microbes"),
            leaf("Development of a Waste Management and Recycling Strategy for a City"),
            leaf("Impact of Deforestation on Local Climate Patterns"),
            leaf("A Study on the Effectiveness of Solar Energy in Rural Areas"),
            leaf("Analysis of Water Quality in a Local River"),
            leaf("Role of GIS in Natural Disaster Management"),
            leaf("Impact of Industrial Pollution on Public Health"),
            leaf("A Study on the Conservation of Endangered Species"),
            leaf("Analysis of the Effects of Climate Change on Agriculture"),
            leaf("Impact of Urbanization on Biodiversity"),
            leaf("A Study on the Role of Renewable Energy in Sustainable Development"),
            leaf("Analysis of the Effects of Pollution on the Ozone Layer"),
            leaf("Impact of Land Use Change on Ecosystem Services"),
            leaf("A Study on the Role of Environmental Education in Public Awareness"),
            leaf("Analysis of the Effects of Acid Rain on the Environment"),
            leaf("Impact of E-waste on the Environment"),
            leaf("A Study on the Role of Environmental Policies in Business"),
            leaf("Analysis of the Effects of Global Warming on the Environment"),
            leaf("Impact of Noise Pollution on Human Health"),
            leaf("A Study on the Role of Environmental Audits"),
            leaf("Analysis of the Effects of Light Pollution on the Environment"),
            leaf("Impact of Soil Contamination on Agriculture"),
            leaf("A Study on the Role of Environmental Impact Assessments"),
            leaf("Analysis of the Effects of Water Pollution on Human Health"),
            leaf("Impact of Air Pollution on Respiratory Diseases"),
            leaf("A Study on the Role of Environmental Law"),
            leaf("Analysis of the Effects of Radiation on the Environment"),
            leaf("Impact of Climate Change on Food Security"),
            leaf("A Study on the Role of Environmental Ethics"),
            leaf("Analysis of the Effects of Pesticides on the Environment"),
            leaf("Impact of Deforestation on Wildlife"),
            leaf("A Study on the Role of Environmental Management Systems"),
            leaf("Analysis of the Effects of Herbicides on the Environment"),
            leaf("Impact of Air Pollution on Plants"),
            leaf("A Study on the Role of Environmental Economics"),
            leaf("Analysis of the Effects of Water Pollution on Aquatic Life"),
            leaf("Impact of Plastic Waste on Wildlife"),
            leaf("A Study on the Role of Environmental Sociology"),
            leaf("Analysis of the Effects of Noise Pollution on Wildlife"),
            leaf("Impact of Light Pollution on Wildlife"),
            leaf("A Study on the Role of Environmental Psychology"),
            leaf("Analysis of the Effects of Soil Contamination on Human Health"),
            leaf("Impact of E-waste on Public Health"),
            leaf("A Study on the Role of Environmental Communication"),
            leaf("Analysis of the Effects of Land Use Change on Biodiversity"),
            leaf("Impact of Deforestation on Ecosystems"),
        ],
    },
    {
        name: "Finance",
        children: [
            leaf("Portfolio Optimization and Risk Analysis for Individual Investors"),
            leaf("Algorithmic Trading Strategy Backtesting using Python"),
            leaf("Financial Modeling and Valuation of a Tech Startup"),
            leaf("Analysis of Credit Risk in the Indian Banking Sector"),
            leaf("Impact of Cryptocurrency Volatility on Traditional Financial Markets"),
            leaf("Capital Budgeting Analysis for a Manufacturing Firm"),
            leaf("Analysis of the Performance of Mutual Funds in India"),
            leaf("A Study on the Role of Derivatives in Risk Management"),
            leaf("Impact of COVID-19 on the Indian Stock Market"),
            leaf("Analysis of the Financial Performance of the Indian Insurance Sector"),
            leaf("A Study on the Role of Financial Literacy on Investment Decisions"),
            leaf("Impact of Demonetization on the Banking Sector"),
            leaf("A Study on the Role of Microfinance Institutions in Rural Development"),
            leaf("Analysis of the Factors Influencing Foreign Direct Investment"),
            leaf("Impact of Globalization on the Indian Economy"),
            leaf("A Study on the Role of Venture Capital in Startup Funding"),
            leaf("Analysis of the Factors Influencing Stock Prices"),
            leaf("Impact of Technology on the Financial Services Industry"),
            leaf("A Study on the Role of Financial Planning"),
            leaf("Analysis of the Financial Performance of Public Sector Banks"),
            leaf("Impact of the Internet on Business"),
            leaf("A Study on the Role of E-commerce in Business"),
            leaf("Analysis of the Financial Performance of the Indian Telecom Industry"),
            leaf("Impact of Corporate Governance on Firm Performance"),
            leaf("A Study on the Performance of Indian Stock Market"),
            leaf("Analysis of the Role of Financial Literacy on Investment Decisions"),
            leaf("Impact of Demonetization on the Banking Sector"),
            leaf("A Study on the Role of Women Entrepreneurs in India"),
            leaf("Analysis of the Financial Performance of the Indian Insurance Sector"),
            leaf("Impact of the Internet on Business"),
            leaf("A Study on the Role of Information Technology in Business"),
            leaf("Analysis of the Financial Performance of the Indian Pharmaceutical Industry"),
            leaf("Impact of Corporate Social Responsibility on Brand Image"),
            leaf("A Study on the Role of Customer Service in Business"),
            leaf("Analysis of the Financial Performance of the Indian Hotel Industry"),
            leaf("Impact of the Financial Crisis on the Indian Economy"),
            leaf("A Study on the Role of Small and Medium Enterprises in India"),
            leaf("Analysis of the Financial Performance of the Indian Retail Industry"),
            leaf("Impact of the Financial Crisis on the Banking Sector"),
            leaf("A Study on the Role of Supply Chain Management"),
            leaf("Analysis of the Financial Performance of the Indian Airline Industry"),
            leaf("Impact of the Financial Crisis on the Insurance Sector"),
            leaf("A Study on the Role of E-commerce in Business"),
            leaf("Analysis of the Factors Influencing Consumer Behavior"),
            leaf("Impact of Demonetization on the Banking Sector"),
            leaf("A Study on the Role of Women Entrepreneurs in India"),
            leaf("Analysis of the Financial Performance of the Indian Insurance Sector"),
            leaf("Impact of the Internet on Business"),
            leaf("A Study on the Role of Information Technology in Business"),
            leaf("Analysis of the Financial Performance of the Indian Pharmaceutical Industry"),
        ],
    },
    {
        name: "Foreign Trade Practices",
        children: [
            leaf("Analysis of India's Foreign Trade Policy and Its Impact on Exports"),
            leaf("A Study on the Role of WTO in Global Trade"),
            leaf("Impact of Tariffs on Bilateral Trade Agreements"),
            leaf("Development of an Export-Import Documentation System"),
            leaf("Analysis of Supply Chain Management in Global Logistics"),
            leaf("A Study on the Role of Foreign Direct Investment in Economic Growth"),
            leaf("Impact of E-commerce on International Trade"),
            leaf("Analysis of the Factors Influencing Exchange Rates"),
            leaf("A Study on the Role of Export-Import Bank of India (EXIM)"),
            leaf("Impact of Globalization on Foreign Trade Practices"),
            leaf("Analysis of the Role of Customs Duty in International Trade"),
            leaf("A Study on the Role of Free Trade Agreements (FTAs)"),
            leaf("Impact of Technology on Foreign Trade"),
            leaf("Analysis of the Role of Marine Insurance in International Trade"),
            leaf("A Study on the Role of Intellectual Property Rights in Foreign Trade"),
            leaf("Impact of the Financial Crisis on Foreign Trade"),
            leaf("A Study on the Role of Foreign Exchange Markets"),
            leaf("Analysis of the Factors Influencing Foreign Trade"),
            leaf("Impact of the Economic Environment on Foreign Trade"),
            leaf("A Study on the Role of Trade Barriers"),
            leaf("Analysis of the Factors Influencing Foreign Trade Policy"),
            leaf("Impact of the Political Environment on Foreign Trade"),
            leaf("A Study on the Role of Trade Promotion Councils"),
            leaf("Analysis of the Factors Influencing Foreign Trade Decisions"),
            leaf("Impact of the Legal Environment on Foreign Trade"),
            leaf("A Study on the Role of Trade Agreements"),
            leaf("Analysis of the Factors Influencing Foreign Trade Operations"),
            leaf("Impact of the Social Environment on Foreign Trade"),
            leaf("A Study on the Role of Trade Logistics"),
            leaf("Analysis of the Factors Influencing Foreign Trade Strategy"),
            leaf("Impact of the Cultural Environment on Foreign Trade"),
            leaf("A Study on the Role of Trade Finance"),
            leaf("Analysis of the Factors Influencing Foreign Trade Ethics"),
            leaf("Impact of the Technological Environment on Foreign Trade"),
            leaf("A Study on the Role of Trade Facilitation"),
            leaf("Analysis of the Factors Influencing Foreign Trade Sustainability"),
            leaf("Impact of the Ecological Environment on Foreign Trade"),
            leaf("A Study on the Role of Trade Law"),
            leaf("Analysis of the Factors Influencing Foreign Trade Communication"),
            leaf("Impact of the Financial Crisis on Foreign Trade"),
            leaf("A Study on the Role of Foreign Direct Investment"),
            leaf("Analysis of the Factors Influencing Foreign Trade Performance"),
            leaf("Impact of the Internet on Foreign Trade"),
            leaf("A Study on the Role of E-commerce in Foreign Trade"),
            leaf("Analysis of the Factors Influencing Foreign Trade Business Growth"),
            leaf("Impact of the Financial Crisis on Foreign Trade"),
            leaf("A Study on the Role of Information Technology in Foreign Trade"),
            leaf("Analysis of the Factors Influencing Foreign Trade Business Strategy"),
            leaf("Impact of the Financial Crisis on Foreign Trade"),
            leaf("A Study on the Role of Social Media in Foreign Trade"),
        ],
    },
    {
        name: "Geography",
        children: [
            leaf("GIS-based Urban Planning Tool for Sustainable City Development"),
            leaf("Analysis of Land Use and Land Cover Change using Satellite Imagery"),
            leaf("Impact of Climate Change on Agricultural Productivity in a Region"),
            leaf("Assessment of Natural Disaster Risk in Coastal Areas"),
            leaf("A Study on the Causes and Consequences of Urbanization"),
            leaf("GIS-based Analysis of Traffic Congestion in a City"),
            leaf("Impact of Ecotourism on Local Communities"),
            leaf("A Study on the Role of Water Resource Management in a Region"),
            leaf("Analysis of the Effects of Deforestation on Local Climate"),
            leaf("GIS-based Mapping of a Local Watershed"),
            leaf("Impact of Globalization on the Geography of Production"),
            leaf("A Study on the Role of GIS in Environmental Protection"),
            leaf("Analysis of the Effects of Pollution on a River"),
            leaf("Impact of Urban Sprawl on Rural Areas"),
            leaf("A Study on the Role of Remote Sensing in Agriculture"),
            leaf("Analysis of the Effects of Climate Change on Plant Distribution"),
            leaf("Impact of Climate Change on Sea Level Rise"),
            leaf("A Study on the Role of GIS in Public Health"),
            leaf("Analysis of the Effects of Soil Contamination on Agriculture"),
            leaf("Impact of Urbanization on Biodiversity"),
            leaf("A Study on the Role of GIS in Emergency Management"),
            leaf("Analysis of the Effects of Air Pollution on a City"),
            leaf("Impact of Land Use Change on Ecosystem Services"),
            leaf("A Study on the Role of GIS in Crime Analysis"),
            leaf("Analysis of the Effects of Water Pollution on a Lake"),
            leaf("Impact of Noise Pollution on Urban Areas"),
            leaf("A Study on the Role of GIS in Marketing"),
            leaf("Analysis of the Effects of Light Pollution on an Ecosystem"),
            leaf("Impact of Climate Change on Animal Migration"),
            leaf("A Study on the Role of GIS in Business"),
            leaf("Analysis of the Effects of Deforestation on Animal Habitats"),
            leaf("Impact of Urbanization on Water Resources"),
            leaf("A Study on the Role of GIS in Transportation Planning"),
            leaf("Analysis of the Effects of Water Scarcity on Agriculture"),
            leaf("Impact of Climate Change on Coastal Erosion"),
            leaf("A Study on the Role of GIS in Natural Resource Management"),
            leaf("Analysis of the Effects of Soil Erosion on Agriculture"),
            leaf("Impact of Desertification on a Region"),
            leaf("A Study on the Role of GIS in Urban Planning"),
            leaf("Analysis of the Effects of Air Pollution on Human Health"),
            leaf("Impact of Urbanization on Public Health"),
            leaf("A Study on the Role of GIS in Environmental Management"),
            leaf("Analysis of the Effects of Water Pollution on Human Health"),
            leaf("Impact of Climate Change on Forest Fires"),
            leaf("A Study on the Role of GIS in Agriculture"),
            leaf("Analysis of the Effects of Soil Contamination on Human Health"),
            leaf("Impact of E-waste on the Environment"),
            leaf("A Study on the Role of GIS in Public Administration"),
            leaf("Analysis of the Effects of Land Use Change on Biodiversity"),
            leaf("Impact of Deforestation on Ecosystems"),
        ],
    },
    {
        name: "Genetics",
        children: [
            leaf("Analysis of Genetic Mutations in Cancer Using Bioinformatics"),
            leaf("Study on the Inheritance Patterns of a Genetic Trait"),
            leaf("Use of CRISPR-Cas9 for Gene Editing in a Model Organism"),
            leaf("Analysis of a Population's Genetic Diversity"),
            leaf("Impact of Genetic Engineering on Food Production"),
            leaf("Development of a Diagnostic Kit for a Genetic Disorder"),
            leaf("Study on the Role of DNA Repair in Aging"),
            leaf("Analysis of Gene Expression in Response to Environmental Stress"),
            leaf("Role of Gene Therapy in Treating Genetic Diseases"),
            leaf("A Study on the Genetic Basis of Drug Resistance in Bacteria"),
            leaf("Impact of Epigenetics on Human Development"),
            leaf("A Study on the Use of Stem Cells in Regenerative Medicine"),
            leaf("Analysis of the Genetic Basis of Human Behavior"),
            leaf("Role of Mitochondrial DNA in Ancestry Tracing"),
            leaf("A Study on the Genetic Basis of Complex Diseases"),
            leaf("Impact of Biotechnology on Human Genetics"),
            leaf("A Study on the Use of DNA Fingerprinting in Forensics"),
            leaf("Analysis of the Genetic Basis of Plant Disease Resistance"),
            leaf("Role of Telomeres in Aging"),
            leaf("A Study on the Genetic Basis of Mental Illness"),
            leaf("Impact of Gene Cloning on Medical Research"),
            leaf("A Study on the Use of Genetic Markers in Disease Diagnosis"),
            leaf("Analysis of the Genetic Basis of Human Intelligence"),
            leaf("Role of RNA Interference in Gene Expression"),
            leaf("A Study on the Genetic Basis of Obesity"),
            leaf("Impact of Genetic Testing on Personal Health"),
            leaf("A Study on the Use of Genetic Engineering in Food Production"),
            leaf("Analysis of the Genetic Basis of Eye Color"),
            leaf("Role of Genetic Counseling in Family Planning"),
            leaf("A Study on the Genetic Basis of Heart Disease"),
            leaf("Impact of Genetic Engineering on Agriculture"),
            leaf("A Study on the Use of DNA Sequencing in Disease Diagnosis"),
            leaf("Analysis of the Genetic Basis of Hair Color"),
            leaf("Role of Genetic Screening in Disease Prevention"),
            leaf("A Study on the Genetic Basis of Diabetes"),
            leaf("Impact of Genetic Engineering on the Environment"),
            leaf("A Study on the Use of Genetic Engineering in Animal Husbandry"),
            leaf("Analysis of the Genetic Basis of Skin Color"),
            leaf("Role of Genetic Information in Personal Health"),
            leaf("A Study on the Genetic Basis of Alzheimer's Disease"),
            leaf("Impact of Genetic Engineering on Human Health"),
            leaf("A Study on the Use of Genetic Engineering in Medicine"),
            leaf("Analysis of the Genetic Basis of Blood Type"),
            leaf("Role of Genetic Information in Disease Diagnosis"),
            leaf("A Study on the Genetic Basis of Parkinson's Disease"),
            leaf("Impact of Genetic Engineering on Biotechnology"),
            leaf("A Study on the Use of Genetic Engineering in Forensics"),
            leaf("Analysis of the Genetic Basis of Blood Pressure"),
            leaf("Role of Genetic Information in Human Identification"),
            leaf("A Study on the Genetic Basis of Schizophrenia"),
        ],
    },
    {
        name: "Geology",
        children: [
            leaf("Analysis of Seismic Data for Earthquake Prediction"),
            leaf("Study on the Formation of Mineral Resources in a Region"),
            leaf("Use of GIS for Geological Mapping and Resource Exploration"),
            leaf("Analysis of the Effects of Tectonic Plate Movement on Mountain Ranges"),
            leaf("Study on the Formation of a Volcano"),
            leaf("Analysis of the Effects of Erosion on a Riverbed"),
            leaf("Role of Paleontology in Reconstructing Ancient Ecosystems"),
            leaf("Study on the Geochemical Analysis of a Rock Sample"),
            leaf("Analysis of the Effects of Climate Change on Glaciers"),
            leaf("Role of Geophysics in Subsurface Exploration"),
            leaf("Study on the Formation of a Cave"),
            leaf("Analysis of the Effects of Weathering on a Rock Formation"),
            leaf("Role of Petrology in Rock Classification"),
            leaf("Study on the Formation of a Glacier"),
            leaf("Analysis of the Effects of Volcanic Eruptions on the Environment"),
            leaf("Role of Sedimentology in Sedimentary Rock Formation"),
            leaf("Study on the Formation of a Sand Dune"),
            leaf("Analysis of the Effects of Earthquakes on Buildings"),
            leaf("Role of Structural Geology in Tectonic Plate Movement"),
            leaf("Study on the Formation of a Geyser"),
            leaf("Analysis of the Effects of Tsunamis on Coastal Areas"),
            leaf("Role of Hydrogeology in Groundwater Management"),
            leaf("Study on the Formation of a Hot Spring"),
            leaf("Analysis of the Effects of Landslides on the Environment"),
            leaf("Role of Economic Geology in Mineral Resource Exploration"),
            leaf("Study on the Formation of a Canyon"),
            leaf("Analysis of the Effects of Volcanic Eruptions on Climate"),
            leaf("Role of Environmental Geology in Pollution Control"),
            leaf("Study on the Formation of a Coral Reef"),
            leaf("Analysis of the Effects of Earthquakes on the Environment"),
            leaf("Role of Planetary Geology in the Study of Other Planets"),
            leaf("Study on the Formation of a Meteorite Crater"),
            leaf("Analysis of the Effects of Tsunamis on Human Health"),
            leaf("Role of Engineering Geology in Construction"),
            leaf("Study on the Formation of a Cave System"),
            leaf("Analysis of the Effects of Landslides on Human Health"),
            leaf("Role of Geochemistry in Chemical Analysis of Rocks"),
            leaf("Study on the Formation of a Volcano"),
            leaf("Analysis of the Effects of Volcanic Eruptions on Human Health"),
            leaf("Role of Paleomagnetism in Plate Tectonics"),
            leaf("Study on the Formation of a Fault"),
            leaf("Analysis of the Effects of Earthquakes on the Environment"),
            leaf("Role of Seismology in Earthquake Prediction"),
            leaf("Study on the Formation of a Fold"),
            leaf("Analysis of the Effects of Tsunamis on the Environment"),
            leaf("Role of Glaciology in the Study of Glaciers"),
            leaf("Study on the Formation of a Karst Topography"),
            leaf("Analysis of the Effects of Landslides on the Environment"),
            leaf("Role of Mineralogy in Mineral Identification"),
            leaf("Study on the Formation of a Rock Cycle"),
        ],
    },
    {
        name: "History",
        children: [
            leaf("Analysis of the Causes and Consequences of the Partition of India"),
            leaf("A Study on the Role of Women in the Indian Independence Movement"),
            leaf("The Impact of the British Colonial Rule on Indian Economy"),
            leaf("Exploring the History of the Indus Valley Civilization"),
            leaf("A Comparative Study of the Roman and Greek Empires"),
            leaf("Analysis of the Role of Buddhism in Ancient India"),
            leaf("The Influence of the French Revolution on European Politics"),
            leaf("A Study on the Causes and Consequences of World War I"),
            leaf("Exploring the History of the Mughal Empire in India"),
            leaf("The Role of a Leader in the Indian Independence Movement"),
            leaf("A Comparative Study of the Works of Mahatma Gandhi and Jawaharlal Nehru"),
            leaf("Analysis of the Theme of War in the Works of Winston Churchill"),
            leaf("The Influence of the Renaissance on European Art"),
            leaf("A Study on the Representation of Social Class in History"),
            leaf("Exploring the History of the Mauryan Empire in India"),
            leaf("The Role of a Soldier in World War II"),
            leaf("A Comparative Study of the Works of Kautilya and Niccolò Machiavelli"),
            leaf("Analysis of the Theme of Power in the Works of Chanakya"),
            leaf("The Influence of the Enlightenment on European Politics"),
            leaf("A Study on the Representation of Gender in History"),
            leaf("Exploring the History of the Gupta Empire in India"),
            leaf("The Role of a Queen in the History of India"),
            leaf("A Comparative Study of the Works of Herodotus and Thucydides"),
            leaf("Analysis of the Theme of Justice in the Works of Plato"),
            leaf("The Influence of the Industrial Revolution on Society"),
            leaf("A Study on the Representation of Race in History"),
            leaf("Exploring the History of the Delhi Sultanate in India"),
            leaf("The Role of a King in the History of India"),
            leaf("A Comparative Study of the Works of Karl Marx and Adam Smith"),
            leaf("Analysis of the Theme of Freedom in the Works of Nelson Mandela"),
            leaf("The Influence of the Middle Ages on European Society"),
            leaf("A Study on the Representation of Religion in History"),
            leaf("Exploring the History of the Maratha Empire in India"),
            leaf("The Role of a Ruler in the History of India"),
            leaf("A Comparative Study of the Works of Napoleon Bonaparte and Julius Caesar"),
            leaf("Analysis of the Theme of Betrayal in the Works of Julius Caesar"),
            leaf("The Influence of the Roman Empire on European Society"),
            leaf("A Study on the Representation of War in History"),
            leaf("Exploring the History of the Vijayanagara Empire in India"),
            leaf("The Role of a Warrior in the History of India"),
            leaf("A Comparative Study of the Works of Winston Churchill and Adolf Hitler"),
            leaf("Analysis of the Theme of Good vs. Evil in the Works of Mahatma Gandhi"),
            leaf("The Influence of the Byzantine Empire on European Society"),
            leaf("A Study on the Representation of Madness in History"),
            leaf("Exploring the History of the Chola Dynasty in India"),
            leaf("The Role of a Saint in the History of India"),
            leaf("A Comparative Study of the Works of Alexander the Great and Napoleon Bonaparte"),
            leaf("Analysis of the Theme of Hope in the Works of Jawaharlal Nehru"),
            leaf("The Influence of the Ottoman Empire on European Society"),
            leaf("A Study on the Representation of Family in History"),
        ],
    },
    {
        name: "Information Technology (IT)",
        children: [
            leaf("Development of a Cloud-Based E-Learning Platform"),
            leaf("Design and Implementation of a Network Security Audit for a Small Business"),
            leaf("Building a Data Warehouse for Business Intelligence using AWS"),
            leaf("Implementation of a DevOps Pipeline for a Web Application"),
            leaf("Development of a Mobile App for Campus Management"),
            leaf("Design of a Secure Multi-Tenant Architecture on Azure"),
            leaf("Building a Microservices-based E-commerce System"),
            leaf("Implementation of a Disaster Recovery Plan for a Company"),
            leaf("Development of a Human Resource Management System"),
            leaf("Design of a Patient Management System"),
            leaf("Building a Library Management System"),
            leaf("Implementation of a School Management System"),
            leaf("Development of a Hospital Management System"),
            leaf("Design of a Payroll Management System"),
            leaf("Building a Transport Management System"),
            leaf("Implementation of a Hotel Management System"),
            leaf("Development of a Clinic Management System"),
            leaf("Design of a Gym Management System"),
            leaf("Building a Retail Management System"),
            leaf("Implementation of a Real Estate Management System"),
            leaf("Development of a Job Portal Website"),
            leaf("Design of a University Event Management System"),
            leaf("Building a University Management System"),
            leaf("Implementation of a College Management System"),
            leaf("Development of a School Management System"),
            leaf("Design of a Hospital Management System"),
            leaf("Building a Library Management System"),
            leaf("Implementation of a Payroll Management System"),
            leaf("Development of a Transport Management System"),
            leaf("Design of a Hotel Management System"),
            leaf("Building a Clinic Management System"),
            leaf("Implementation of a Gym Management System"),
            leaf("Development of a Retail Management System"),
            leaf("Design of a Real Estate Management System"),
            leaf("Building a Job Portal Website"),
            leaf("Implementation of a University Event Management System"),
            leaf("Development of a University Management System"),
            leaf("Design of a College Management System"),
            leaf("Building a School Management System"),
            leaf("Implementation of a Hospital Management System"),
            leaf("Development of a Library Management System"),
            leaf("Design of a Payroll Management System"),
            leaf("Building a Transport Management System"),
            leaf("Implementation of a Hotel Management System"),
            leaf("Development of a Clinic Management System"),
            leaf("Design of a Gym Management System"),
            leaf("Building a Retail Management System"),
            leaf("Implementation of a Real Estate Management System"),
            leaf("Development of a Job Portal Website"),
            leaf("Design of a University Event Management System"),
        ],
    },
    {
        name: "Marketing Management",
        children: [
            leaf("Social Media Marketing Campaign for a Local Business"),
            leaf("Analysis of Consumer Buying Behavior in the Online Market"),
            leaf("Development of a Brand Strategy and Positioning Plan for a Startup"),
            leaf("Impact of Digital Marketing on Small and Medium Enterprises"),
            leaf("A Study on the Effectiveness of Content Marketing"),
            leaf("Analysis of the Role of SEO in Marketing"),
            leaf("Impact of Influencer Marketing on Brand Loyalty"),
            leaf("A Study on the Role of Email Marketing"),
            leaf("Analysis of the Factors Influencing Customer Satisfaction"),
            leaf("Impact of Mobile Marketing on Consumer Behavior"),
            leaf("A Study on the Role of Social Media in Marketing"),
            leaf("Analysis of the Factors Influencing Brand Loyalty"),
            leaf("Impact of Advertising on Consumer Buying Behavior"),
            leaf("A Study on the Role of Marketing in Business"),
            leaf("Analysis of the Factors Influencing Marketing Strategy"),
            leaf("Impact of Technology on Marketing"),
            leaf("A Study on the Role of E-commerce in Marketing"),
            leaf("Analysis of the Factors Influencing Marketing Performance"),
            leaf("Impact of the Internet on Marketing"),
            leaf("A Study on the Role of Information Technology in Marketing"),
            leaf("Analysis of the Factors Influencing Marketing Communication"),
            leaf("Impact of Globalization on Marketing"),
            leaf("A Study on the Role of Customer Service in Marketing"),
            leaf("Analysis of the Factors Influencing Marketing Decisions"),
            leaf("Impact of the Economic Environment on Marketing"),
            leaf("A Study on the Role of Corporate Social Responsibility in Marketing"),
            leaf("Analysis of the Factors Influencing Marketing Ethics"),
            leaf("Impact of the Political Environment on Marketing"),
            leaf("A Study on the Role of Quality Management in Marketing"),
            leaf("Analysis of the Factors Influencing Marketing Planning"),
            leaf("Impact of the Legal Environment on Marketing"),
            leaf("A Study on the Role of Change Management in Marketing"),
            leaf("Analysis of the Factors Influencing Marketing Sustainability"),
            leaf("Impact of the Social Environment on Marketing"),
            leaf("A Study on the Role of Supply Chain Management in Marketing"),
            leaf("Analysis of the Factors Influencing Marketing Operations"),
            leaf("Impact of the Cultural Environment on Marketing"),
            leaf("A Study on the Role of Marketing Research"),
            leaf("Analysis of the Factors Influencing Marketing Strategy"),
            leaf("Impact of the Technological Environment on Marketing"),
            leaf("A Study on the Role of Branding in Marketing"),
            leaf("Analysis of the Factors Influencing Marketing Communication"),
            leaf("Impact of the Ecological Environment on Marketing"),
            leaf("A Study on the Role of Social Media in Marketing"),
            leaf("Analysis of the Factors Influencing Marketing Decisions"),
            leaf("Impact of the Financial Crisis on Marketing"),
            leaf("A Study on the Role of E-commerce in Marketing"),
            leaf("Analysis of the Factors Influencing Marketing Business Growth"),
            leaf("Impact of the Internet on Marketing"),
            leaf("A Study on the Role of Information Technology in Marketing"),
        ],
    },
    {
        name: "Mass Communication",
        children: [
            leaf("Analysis of Media Portrayal of a Social Issue"),
            leaf("Development of a Digital News Platform for a Local Community"),
            leaf("Impact of Social Media on Political Campaigns"),
            leaf("A Study on the Role of Public Relations in Crisis Management"),
            leaf("Analysis of the Effects of Advertising on Consumer Behavior"),
            leaf("A Study on the Role of Journalism in a Democratic Society"),
            leaf("Impact of Globalization on the Media Industry"),
            leaf("A Study on the Role of Public Opinion in Mass Communication"),
            leaf("Analysis of the Factors Influencing Media Consumption"),
            leaf("Impact of Technology on Mass Communication"),
            leaf("A Study on the Role of Mass Communication in Business"),
            leaf("Analysis of the Factors Influencing Communication Strategy"),
            leaf("Impact of the Internet on Mass Communication"),
            leaf("A Study on the Role of Information Technology in Mass Communication"),
            leaf("Analysis of the Factors Influencing Communication Performance"),
            leaf("Impact of Globalization on Mass Communication"),
            leaf("A Study on the Role of Corporate Social Responsibility in Mass Communication"),
            leaf("Analysis of the Factors Influencing Communication Ethics"),
            leaf("Impact of the Political Environment on Mass Communication"),
            leaf("A Study on the Role of Quality Management in Mass Communication"),
            leaf("Analysis of the Factors Influencing Communication Planning"),
            leaf("Impact of the Legal Environment on Mass Communication"),
            leaf("A Study on the Role of Change Management in Mass Communication"),
            leaf("Analysis of the Factors Influencing Communication Sustainability"),
            leaf("Impact of the Social Environment on Mass Communication"),
            leaf("A Study on the Role of Supply Chain Management in Mass Communication"),
            leaf("Analysis of the Factors Influencing Communication Operations"),
            leaf("Impact of the Cultural Environment on Mass Communication"),
            leaf("A Study on the Role of Communication Research"),
            leaf("Analysis of the Factors Influencing Communication Strategy"),
            leaf("Impact of the Technological Environment on Mass Communication"),
            leaf("A Study on the Role of Branding in Mass Communication"),
            leaf("Analysis of the Factors Influencing Communication Communication"),
            leaf("Impact of the Ecological Environment on Mass Communication"),
            leaf("A Study on the Role of Social Media in Mass Communication"),
            leaf("Analysis of the Factors Influencing Communication Decisions"),
            leaf("Impact of the Financial Crisis on Mass Communication"),
            leaf("A Study on the Role of E-commerce in Mass Communication"),
            leaf("Analysis of the Factors Influencing Communication Business Growth"),
            leaf("Impact of the Internet on Mass Communication"),
            leaf("A Study on the Role of Information Technology in Mass Communication"),
            leaf("Analysis of the Factors Influencing Communication Business Strategy"),
            leaf("Impact of the Financial Crisis on Mass Communication"),
            leaf("A Study on the Role of Social Media in Mass Communication"),
            leaf("Analysis of the Factors Influencing Communication Performance"),
            leaf("Impact of the Internet on Mass Communication"),
            leaf("A Study on the Role of Information Technology in Mass Communication"),
            leaf("Analysis of the Factors Influencing Communication Business Growth"),
            leaf("Impact of the Financial Crisis on Mass Communication"),
            leaf("A Study on the Role of Social Media in Mass Communication"),
        ],
    },
    {
        name: "Mathematics",
        children: [
            leaf("Implementation of a Cryptography Algorithm for Data Security"),
            leaf("A Study on the Application of Game Theory in Economics"),
            leaf("Development of a Numerical Simulation for a Physical System"),
            leaf("Analysis of Stock Market Trends using Statistical Models"),
            leaf("A Study on the Role of Graph Theory in Network Analysis"),
            leaf("Development of a Machine Learning Model for Image Classification"),
            leaf("Analysis of the Factors Influencing Student Performance"),
            leaf("A Study on the Role of Probability in Risk Management"),
            leaf("Impact of a Mathematical Model on a Real-World Problem"),
            leaf("A Study on the Role of Calculus in Engineering"),
            leaf("Analysis of the Factors Influencing Business Growth"),
            leaf("Impact of a Statistical Model on Business Decisions"),
            leaf("A Study on the Role of Linear Algebra in Computer Graphics"),
            leaf("Analysis of the Factors Influencing Customer Satisfaction"),
            leaf("Impact of a Numerical Method on Scientific Research"),
            leaf("A Study on the Role of Differential Equations in Physics"),
            leaf("Analysis of the Factors Influencing Social Media Usage"),
            leaf("Impact of a Mathematical Model on a Biological System"),
            leaf("A Study on the Role of Number Theory in Cryptography"),
            leaf("Analysis of the Factors Influencing Public Opinion"),
            leaf("Impact of a Statistical Model on Public Health"),
            leaf("A Study on the Role of Topology in Data Analysis"),
            leaf("Analysis of the Factors Influencing Crime Rates"),
            leaf("Impact of a Mathematical Model on Financial Markets"),
            leaf("A Study on the Role of Abstract Algebra in Computer Science"),
            leaf("Analysis of the Factors Influencing Climate Change"),
            leaf("Impact of a Statistical Model on Environmental Science"),
            leaf("A Study on the Role of Geometry in Computer-Aided Design"),
            leaf("Analysis of the Factors Influencing Sports Performance"),
            leaf("Impact of a Mathematical Model on Medical Diagnosis"),
            leaf("A Study on the Role of Discrete Mathematics in Computer Science"),
            leaf("Analysis of the Factors Influencing Economic Growth"),
            leaf("Impact of a Statistical Model on Political Science"),
            leaf("A Study on the Role of Real Analysis in Financial Mathematics"),
            leaf("Analysis of the Factors Influencing Marketing Strategies"),
            leaf("Impact of a Mathematical Model on Supply Chain Management"),
            leaf("A Study on the Role of Complex Analysis in Electrical Engineering"),
            leaf("Analysis of the Factors Influencing Consumer Behavior"),
            leaf("Impact of a Statistical Model on Human Resources Management"),
            leaf("A Study on the Role of Functional Analysis in Quantum Mechanics"),
            leaf("Analysis of the Factors Influencing Business Analytics"),
            leaf("Impact of a Mathematical Model on E-commerce"),
            leaf("A Study on the Role of Measure Theory in Probability Theory"),
            leaf("Analysis of the Factors Influencing Social Network Analysis"),
            leaf("Impact of a Statistical Model on Neuroscience"),
            leaf("A Study on the Role of Set Theory in Computer Science"),
            leaf("Analysis of the Factors Influencing Public Administration"),
            leaf("Impact of a Mathematical Model on Public Health"),
            leaf("A Study on the Role of Group Theory in Chemistry"),
            leaf("Analysis of the Factors Influencing Mass Communication"),
        ],
    },
    {
        name: "Microbiology",
        children: [
            leaf("Study on the Antibacterial Properties of a Plant Extract"),
            leaf("Analysis of Microbial Contamination in a Local Water Source"),
            leaf("Development of a Bioremediation Strategy for a Polluted Site"),
            leaf("Study on the Role of Microbes in Soil Fertility"),
            leaf("Analysis of the Effects of an Antibiotic on Bacterial Growth"),
            leaf("Development of a Diagnostic Kit for a Bacterial Infection"),
            leaf("Study on the Role of Probiotics in Gut Health"),
            leaf("Analysis of Microbial Diversity in a Local Ecosystem"),
            leaf("Role of Microbes in Food Production and Preservation"),
            leaf("A Study on the Genetic Basis of Drug Resistance in Bacteria"),
            leaf("Impact of a Microbe on a Plant"),
            leaf("A Study on the Use of Microbes in Waste Management"),
            leaf("Analysis of the Effects of a Disinfectant on Bacteria"),
            leaf("Role of Microbes in Bioremediation"),
            leaf("A Study on the Use of Microbes in Biotechnology"),
            leaf("Analysis of the Effects of a Pesticide on Microbes"),
            leaf("Role of Microbes in Human Health"),
            leaf("A Study on the Use of Microbes in Agriculture"),
            leaf("Analysis of the Effects of a Fungicide on Microbes"),
            leaf("Role of Microbes in the Environment"),
            leaf("A Study on the Use of Microbes in Energy Production"),
            leaf("Analysis of the Effects of an Herbicide on Microbes"),
            leaf("Role of Microbes in Food Safety"),
            leaf("A Study on the Use of Microbes in Medicine"),
            leaf("Analysis of the Effects of a Heavy Metal on Microbes"),
            leaf("Role of Microbes in Water Treatment"),
            leaf("A Study on the Use of Microbes in Textiles"),
            leaf("Analysis of the Effects of a Chemical on Microbes"),
            leaf("Role of Microbes in the Food Industry"),
            leaf("A Study on the Use of Microbes in Environmental Protection"),
            leaf("Analysis of the Effects of a Pollutant on Microbes"),
            leaf("Role of Microbes in the Medical Industry"),
            leaf("A Study on the Use of Microbes in Bioremediation"),
            leaf("Analysis of the Effects of a Toxin on Microbes"),
            leaf("Role of Microbes in the Pharmaceutical Industry"),
            leaf("A Study on the Use of Microbes in Bioplastics"),
            leaf("Analysis of the Effects of a Drug on Microbes"),
            leaf("Role of Microbes in the Biotechnology Industry"),
            leaf("A Study on the Use of Microbes in Biofuels"),
            leaf("Analysis of the Effects of a Vitamin on Microbes"),
            leaf("Role of Microbes in the Bio-based Chemical Industry"),
            leaf("A Study on the Use of Microbes in Biosensors"),
            leaf("Analysis of the Effects of a Mineral on Microbes"),
            leaf("Role of Microbes in the Fermentation Industry"),
            leaf("A Study on the Use of Microbes in Enzyme Production"),
            leaf("Analysis of the Effects of a Food on Microbes"),
            leaf("Role of Microbes in the Probiotics Industry"),
            leaf("A Study on the Use of Microbes in Vaccine Production"),
            leaf("Analysis of the Effects of a Pollutant on Human Health"),
            leaf("Role of Microbes in the Bioremediation Industry"),
        ],
    },
    {
        name: "Nursing (B.Sc Nursing)",
        children: [
            leaf("Development of a Patient Health Monitoring System using IoT"),
            leaf("A Study on the Effectiveness of Tele-nursing in Rural Areas"),
            leaf("Analysis of the Factors Influencing Patient Satisfaction in Hospitals"),
            leaf("A Study on the Role of Nurses in Infection Control"),
            leaf("Impact of a Nursing Intervention on Patient Outcomes"),
            leaf("Development of a Mobile App for Medication Reminders"),
            leaf("Analysis of the Factors Influencing Nurse Burnout"),
            leaf("A Study on the Role of Nurses in Palliative Care"),
            leaf("Impact of Technology on Nursing Practice"),
            leaf("A Study on the Role of Nurses in Health Promotion"),
            leaf("Analysis of the Factors Influencing Patient Adherence to Treatment"),
            leaf("Impact of a Nursing Intervention on Patient Safety"),
            leaf("A Study on the Role of Nurses in Chronic Disease Management"),
            leaf("Analysis of the Factors Influencing Patient Education"),
            leaf("Impact of a Nursing Intervention on Patient Quality of Life"),
            leaf("A Study on the Role of Nurses in Emergency Care"),
            leaf("Analysis of the Factors Influencing Patient Satisfaction in the Hospital"),
            leaf("Impact of a Nursing Intervention on Patient Mental Health"),
            leaf("A Study on the Role of Nurses in Community Health"),
            leaf("Analysis of the Factors Influencing Patient Communication"),
            leaf("Impact of a Nursing Intervention on Patient Pain Management"),
            leaf("A Study on the Role of Nurses in Critical Care"),
            leaf("Analysis of the Factors Influencing Patient Self-Care"),
            leaf("Impact of a Nursing Intervention on Patient Wound Healing"),
            leaf("A Study on the Role of Nurses in Primary Care"),
            leaf("Analysis of the Factors Influencing Patient Health Literacy"),
            leaf("Impact of a Nursing Intervention on Patient Recovery"),
            leaf("A Study on the Role of Nurses in Public Health"),
            leaf("Analysis of the Factors Influencing Patient Family Involvement"),
            leaf("Impact of a Nursing Intervention on Patient Nutritional Status"),
            leaf("A Study on the Role of Nurses in Pediatric Care"),
            leaf("Analysis of the Factors Influencing Patient Health Outcomes"),
            leaf("Impact of a Nursing Intervention on Patient Mobility"),
            leaf("A Study on the Role of Nurses in Geriatric Care"),
            leaf("Analysis of the Factors Influencing Patient Medication Adherence"),
            leaf("Impact of a Nursing Intervention on Patient Comfort"),
            leaf("A Study on the Role of Nurses in Oncology"),
            leaf("Analysis of the Factors Influencing Patient Pain Perception"),
            leaf("Impact of a Nursing Intervention on Patient Anxiety"),
            leaf("A Study on the Role of Nurses in Surgery"),
            leaf("Analysis of the Factors Influencing Patient Sleep Quality"),
            leaf("Impact of a Nursing Intervention on Patient Depression"),
            leaf("A Study on the Role of Nurses in Orthopedics"),
            leaf("Analysis of the Factors Influencing Patient Social Support"),
            leaf("Impact of a Nursing Intervention on Patient Stress"),
            leaf("A Study on the Role of Nurses in Cardiology"),
            leaf("Analysis of the Factors Influencing Patient Family Support"),
            leaf("Impact of a Nursing Intervention on Patient Well-being"),
            leaf("A Study on the Role of Nurses in Neurology"),
            leaf("Analysis of the Factors Influencing Patient Spiritual Well-being"),
        ],
    },
    {
        name: "Nutrition",
        children: [
            leaf("Assessment of Nutritional Status in School Children"),
            leaf("Impact of a Diet on Gut Microbiome"),
            leaf("Development of a Personalized Meal Plan for Athletes"),
            leaf("Analysis of Food Labeling and Consumer Understanding"),
            leaf("Study on the Role of Probiotics in Gut Health"),
            leaf("Nutritional Interventions for Anemia"),
            leaf("Assessment of Food Safety Practices in Restaurants"),
            leaf("Effectiveness of Nutritional Counseling for Weight Loss"),
            leaf("Study of Traditional Food Systems and Their Nutritional Value"),
            leaf("Development of Recipes for Individuals with Celiac Disease"),
            leaf("Impact of Fad Diets on Adolescent Health"),
            leaf("Analysis of Public Health Policies on Obesity"),
            leaf("Assessment of Nutritional Status of Pregnant Women"),
            leaf("Role of Diet in Mental Health"),
            leaf("Effect of Hydration on Cognitive Performance"),
            leaf("Analysis of Sugar Consumption in College Students"),
            leaf("Nutritional Education Program for Seniors"),
            leaf("Development of a Food Allergy Management Plan"),
            leaf("Study on the Benefits of Intermittent Fasting"),
            leaf("Nutritional Needs of Athletes"),
            leaf("Analysis of the Mediterranean Diet"),
            leaf("Food Waste Reduction Strategies"),
            leaf("Role of Dietary Fiber in Digestive Health"),
            leaf("Assessment of Food Security in Urban Households"),
            leaf("Nutritional Supplements and Their Efficacy"),
            leaf("Impact of Fast Food Consumption on Health"),
            leaf("Study of the Keto Diet"),
            leaf("Nutritional Guidelines for Cancer Patients"),
            leaf("Assessment of Dietary Habits in Vegetarians"),
            leaf("Role of Antioxidants in Health and Disease"),
            leaf("Development of a Nutrition Plan for Bodybuilders"),
            leaf("Analysis of the DASH Diet for Hypertension"),
            leaf("Study on the Effects of Artificial Sweeteners"),
            leaf("Nutritional Needs During Pregnancy"),
            leaf("Development of a Diet Plan for People with Kidney Disease"),
            leaf("Assessment of Nutritional Status in Elderly People"),
            leaf("Impact of Genetically Modified Foods on Health"),
            leaf("Study of the Paleo Diet"),
            leaf("Nutritional Interventions for People with Crohn's Disease"),
            leaf("Analysis of the Vegan Diet"),
            leaf("Development of a Nutrition Plan for Children with ADHD"),
            leaf("Assessment of Nutritional Status in Athletes"),
            leaf("Impact of Processed Foods on Health"),
            leaf("Study of the Zone Diet"),
            leaf("Nutritional Interventions for People with Celiac Disease"),
            leaf("Analysis of the Atkins Diet"),
            leaf("Development of a Nutrition Plan for People with Diabetes"),
            leaf("Assessment of Nutritional Status in Pregnant Women"),
            leaf("Impact of Genetically Modified Foods on Health"),
            leaf("Study of the Paleo Diet"),
        ],
    },
    {
        name: "Paramedical Sciences",
        children: [
            leaf("Development of a First-Aid Training Simulation using Virtual Reality"),
            leaf("A Study on the Effectiveness of Telehealth for Emergency Medical Services"),
            leaf("Analysis of the Factors Influencing Paramedic Burnout"),
            leaf("A Study on the Role of Paramedics in Disaster Management"),
            leaf("Impact of a Medical Device on Patient Outcomes"),
            leaf("Development of a Mobile App for Paramedic Training"),
            leaf("Analysis of the Factors Influencing Patient Satisfaction with Paramedic Services"),
            leaf("A Study on the Role of Paramedics in Community Health"),
            leaf("Impact of Technology on Paramedical Practice"),
            leaf("A Study on the Role of Paramedics in Public Health"),
            leaf("Analysis of the Factors Influencing Patient Adherence to Treatment"),
            leaf("Impact of a Medical Device on Patient Safety"),
            leaf("A Study on the Role of Paramedics in Chronic Disease Management"),
            leaf("Analysis of the Factors Influencing Patient Education"),
            leaf("Impact of a Medical Device on Patient Quality of Life"),
            leaf("A Study on the Role of Paramedics in Primary Care"),
            leaf("Analysis of the Factors Influencing Patient Satisfaction in Emergency Services"),
            leaf("Impact of a Medical Device on Patient Mental Health"),
            leaf("A Study on the Role of Paramedics in Geriatric Care"),
            leaf("Analysis of the Factors Influencing Patient Communication"),
            leaf("Impact of a Medical Device on Patient Pain Management"),
            leaf("A Study on the Role of Paramedics in Pediatric Care"),
            leaf("Analysis of the Factors Influencing Patient Self-Care"),
            leaf("Impact of a Medical Device on Patient Wound Healing"),
            leaf("A Study on the Role of Paramedics in Oncology"),
            leaf("Analysis of the Factors Influencing Patient Health Literacy"),
            leaf("Impact of a Medical Device on Patient Recovery"),
            leaf("A Study on the Role of Paramedics in Cardiology"),
            leaf("Analysis of the Factors Influencing Patient Family Involvement"),
            leaf("Impact of a Medical Device on Patient Nutritional Status"),
            leaf("A Study on the Role of Paramedics in Neurology"),
            leaf("Analysis of the Factors Influencing Patient Health Outcomes"),
            leaf("Impact of a Medical Device on Patient Mobility"),
            leaf("A Study on the Role of Paramedics in Orthopedics"),
            leaf("Analysis of the Factors Influencing Patient Medication Adherence"),
            leaf("Impact of a Medical Device on Patient Comfort"),
            leaf("A Study on the Role of Paramedics in Surgery"),
            leaf("Analysis of the Factors Influencing Patient Pain Perception"),
            leaf("Impact of a Medical Device on Patient Anxiety"),
            leaf("A Study on the Role of Paramedics in Critical Care"),
            leaf("Analysis of the Factors Influencing Patient Sleep Quality"),
            leaf("Impact of a Medical Device on Patient Depression"),
            leaf("A Study on the Role of Paramedics in Community Health"),
            leaf("Analysis of the Factors Influencing Patient Social Support"),
            leaf("Impact of a Medical Device on Patient Stress"),
            leaf("A Study on the Role of Paramedics in Public Health"),
            leaf("Analysis of the Factors Influencing Patient Family Support"),
            leaf("Impact of a Medical Device on Patient Well-being"),
            leaf("A Study on the Role of Paramedics in Disaster Management"),
            leaf("Analysis of the Factors Influencing Patient Spiritual Well-being"),
        ],
    },
    {
        name: "Pharmacy (B.Pharm)",
        children: [
            leaf("Development of a Drug-Drug Interaction Checker App"),
            leaf("A Study on the Adherence to Medication in Chronic Disease Patients"),
            leaf("Analysis of the Factors Influencing Drug Price and Availability"),
            leaf("A Study on the Role of Pharmacists in Public Health"),
            leaf("Impact of a New Drug on Patient Outcomes"),
            leaf("Development of a Mobile App for Medication Reminders"),
            leaf("Analysis of the Factors Influencing Medication Adherence"),
            leaf("A Study on the Role of Pharmacists in Patient Education"),
            leaf("Impact of Technology on Pharmacy Practice"),
            leaf("A Study on the Role of Pharmacists in Community Health"),
            leaf("Analysis of the Factors Influencing Patient Satisfaction with Pharmacy Services"),
            leaf("Impact of a New Drug on Patient Safety"),
            leaf("A Study on the Role of Pharmacists in Chronic Disease Management"),
            leaf("Analysis of the Factors Influencing Patient Education"),
            leaf("Impact of a New Drug on Patient Quality of Life"),
            leaf("A Study on the Role of Pharmacists in Primary Care"),
            leaf("Analysis of the Factors Influencing Patient Satisfaction in the Pharmacy"),
            leaf("Impact of a New Drug on Patient Mental Health"),
            leaf("A Study on the Role of Pharmacists in Geriatric Care"),
            leaf("Analysis of the Factors Influencing Patient Communication"),
            leaf("Impact of a New Drug on Patient Pain Management"),
            leaf("A Study on the Role of Pharmacists in Pediatric Care"),
            leaf("Analysis of the Factors Influencing Patient Self-Care"),
            leaf("Impact of a New Drug on Patient Wound Healing"),
            leaf("A Study on the Role of Pharmacists in Oncology"),
            leaf("Analysis of the Factors Influencing Patient Health Literacy"),
            leaf("Impact of a New Drug on Patient Recovery"),
            leaf("A Study on the Role of Pharmacists in Cardiology"),
            leaf("Analysis of the Factors Influencing Patient Family Involvement"),
            leaf("Impact of a New Drug on Patient Nutritional Status"),
            leaf("A Study on the Role of Pharmacists in Neurology"),
            leaf("Analysis of the Factors Influencing Patient Health Outcomes"),
            leaf("Impact of a New Drug on Patient Mobility"),
            leaf("A Study on the Role of Pharmacists in Orthopedics"),
            leaf("Analysis of the Factors Influencing Patient Medication Adherence"),
            leaf("Impact of a New Drug on Patient Comfort"),
            leaf("A Study on the Role of Pharmacists in Surgery"),
            leaf("Analysis of the Factors Influencing Patient Pain Perception"),
            leaf("Impact of a New Drug on Patient Anxiety"),
            leaf("A Study on the Role of Pharmacists in Critical Care"),
            leaf("Analysis of the Factors Influencing Patient Sleep Quality"),
            leaf("Impact of a New Drug on Patient Depression"),
            leaf("A Study on the Role of Pharmacists in Community Health"),
            leaf("Analysis of the Factors Influencing Patient Social Support"),
            leaf("Impact of a New Drug on Patient Stress"),
            leaf("A Study on the Role of Pharmacists in Public Health"),
            leaf("Analysis of the Factors Influencing Patient Family Support"),
            leaf("Impact of a New Drug on Patient Well-being"),
            leaf("A Study on the Role of Pharmacists in Disaster Management"),
            leaf("Analysis of the Factors Influencing Patient Spiritual Well-being"),
        ],
    },
    {
        name: "Philosophy",
        children: [
            leaf("Analysis of the Ethical Implications of Artificial Intelligence"),
            leaf("A Study on the Philosophy of Mind and Consciousness"),
            leaf("A Comparative Study of Existentialism and Absurdism"),
            leaf("Analysis of the Role of Logic in Philosophy"),
            leaf("Impact of Technology on Human Morality"),
            leaf("A Study on the Philosophy of Science and its Limitations"),
            leaf("Analysis of the Works of Immanuel Kant and His Ethics"),
            leaf("A Study on the Role of Free Will in Human Decisions"),
            leaf("Impact of a Philosophical Concept on a Social Issue"),
            leaf("A Study on the Philosophy of Religion"),
            leaf("Analysis of the Works of Friedrich Nietzsche and His Nihilism"),
            leaf("A Study on the Role of Language in Philosophy"),
            leaf("Impact of a Philosophical Idea on a Political System"),
            leaf("A Study on the Philosophy of Art and Aesthetics"),
            leaf("Analysis of the Works of Plato and His Theory of Forms"),
            leaf("A Study on the Role of Knowledge in Philosophy"),
            leaf("Impact of a Philosophical Concept on a Scientific Theory"),
            leaf("A Study on the Philosophy of Law"),
            leaf("Analysis of the Works of Aristotle and His Logic"),
            leaf("A Study on the Role of Truth in Philosophy"),
            leaf("Impact of a Philosophical Idea on a Legal System"),
            leaf("A Study on the Philosophy of History"),
            leaf("Analysis of the Works of René Descartes and His Rationalism"),
            leaf("A Study on the Role of Reason in Philosophy"),
            leaf("Impact of a Philosophical Concept on a Moral System"),
            leaf("A Study on the Philosophy of Education"),
            leaf("Analysis of the Works of John Locke and His Empiricism"),
            leaf("A Study on the Role of Reality in Philosophy"),
            leaf("Impact of a Philosophical Idea on a Social System"),
            leaf("A Study on the Philosophy of Language"),
            leaf("Analysis of the Works of David Hume and His Skepticism"),
            leaf("A Study on the Role of Value in Philosophy"),
            leaf("Impact of a Philosophical Concept on a Religious System"),
            leaf("A Study on the Philosophy of Politics"),
            leaf("Analysis of the Works of Jean-Jacques Rousseau and His Social Contract"),
            leaf("A Study on the Role of Mind in Philosophy"),
            leaf("Impact of a Philosophical Idea on a Legal System"),
            leaf("A Study on the Philosophy of Mind"),
            leaf("Analysis of the Works of Thomas Hobbes and His Leviathan"),
            leaf("A Study on the Role of Time in Philosophy"),
            leaf("Impact of a Philosophical Concept on a Political System"),
            leaf("A Study on the Philosophy of Science"),
            leaf("Analysis of the Works of Baruch Spinoza and His Pantheism"),
            leaf("A Study on the Role of Space in Philosophy"),
            leaf("Impact of a Philosophical Idea on a Scientific Theory"),
            leaf("A Study on the Philosophy of Religion"),
            leaf("Analysis of the Works of Gottfried Leibniz and His Monadology"),
            leaf("A Study on the Role of Logic in Philosophy"),
            leaf("Impact of a Philosophical Concept on a Social Issue"),
            leaf("A Study on the Philosophy of Ethics"),
        ],
    },
    {
        name: "Physics",
        children: [
            leaf("Numerical Simulation of Quantum Tunneling in a Potential Barrier"),
            leaf("Analysis of Stellar Spectra to Determine Chemical Composition"),
            leaf("Design and Fabrication of a Simple Radio Telescope"),
            leaf("Study on the Thermodynamics of a Stirling Engine"),
            leaf("Analysis of the Motion of a Satellite in a Gravitational Field"),
            leaf("A Study on the Properties of Superconductors"),
            leaf("Impact of a Laser on a Material"),
            leaf("A Study on the Role of a Telescope in Astronomy"),
            leaf("Analysis of the Factors Influencing the Speed of Sound"),
            leaf("Impact of a Magnet on a Material"),
            leaf("A Study on the Role of a Microscope in Biology"),
            leaf("Analysis of the Factors Influencing the Speed of Light"),
            leaf("Impact of a Capacitor on a Circuit"),
            leaf("A Study on the Role of a Thermometer in Chemistry"),
            leaf("Analysis of the Factors Influencing the Resistance of a Wire"),
            leaf("Impact of a Resistor on a Circuit"),
            leaf("A Study on the Role of a Voltmeter in Electrical Engineering"),
            leaf("Analysis of the Factors Influencing the Capacitance of a Capacitor"),
            leaf("Impact of an Inductor on a Circuit"),
            leaf("A Study on the Role of an Ammeter in Electrical Engineering"),
            leaf("Analysis of the Factors Influencing the Inductance of an Inductor"),
            leaf("Impact of a Diode on a Circuit"),
            leaf("A Study on the Role of a Transistor in Electronics"),
            leaf("Analysis of the Factors Influencing the Current in a Circuit"),
            leaf("Impact of a Transistor on a Circuit"),
            leaf("A Study on the Role of a Diode in Electronics"),
            leaf("Analysis of the Factors Influencing the Voltage in a Circuit"),
            leaf("Impact of a Transformer on a Circuit"),
            leaf("A Study on the Role of a Transformer in Electrical Engineering"),
            leaf("Analysis of the Factors Influencing the Power in a Circuit"),
            leaf("Impact of a Motor on a Circuit"),
            leaf("A Study on the Role of a Motor in Mechanical Engineering"),
            leaf("Analysis of the Factors Influencing the Frequency of a Signal"),
            leaf("Impact of a Generator on a Circuit"),
            leaf("A Study on the Role of a Generator in Electrical Engineering"),
            leaf("Analysis of the Factors Influencing the Wavelength of a Wave"),
            leaf("Impact of a Speaker on a Circuit"),
            leaf("A Study on the Role of a Microphone in Electronics"),
            leaf("Analysis of the Factors Influencing the Amplitude of a Wave"),
            leaf("Impact of a Sensor on a Circuit"),
            leaf("A Study on the Role of a Sensor in Electronics"),
            leaf("Analysis of the Factors Influencing the Speed of a Particle"),
            leaf("Impact of a Laser on a Material"),
            leaf("A Study on the Role of a Laser in Optics"),
            leaf("Analysis of the Factors Influencing the Momentum of a Particle"),
            leaf("Impact of a Magnet on a Material"),
            leaf("A Study on the Role of a Magnet in Physics"),
            leaf("Analysis of the Factors Influencing the Energy of a Particle"),
            leaf("Impact of a Capacitor on a Circuit"),
            leaf("A Study on the Role of a Capacitor in Electrical Engineering"),
        ],
    },
    {
        name: "Political Science",
        children: [
            leaf("Analysis of the Impact of Social Media on Political Participation"),
            leaf("A Study on the Role of E-governance in Public Service Delivery"),
            leaf("A Comparative Study of Indian and American Political Systems"),
            leaf("Analysis of the Factors Influencing Voter Behavior in India"),
            leaf("Impact of Globalization on National Sovereignty"),
            leaf("A Study on the Role of the United Nations in International Relations"),
            leaf("Analysis of the Factors Influencing Foreign Policy"),
            leaf("Impact of a Political Reform on a Country's Economy"),
            leaf("A Study on the Role of the Judiciary in a Democratic System"),
            leaf("Analysis of the Factors Influencing Public Opinion"),
            leaf("Impact of a Political Ideology on a Country's Social System"),
            leaf("A Study on the Role of Political Parties in a Democratic System"),
            leaf("Analysis of the Factors Influencing Political Stability"),
            leaf("Impact of a Political Scandal on Public Trust"),
            leaf("A Study on the Role of a Constitution in a Country's Governance"),
            leaf("Analysis of the Factors Influencing Political Participation"),
            leaf("Impact of a Political System on Economic Development"),
            leaf("A Study on the Role of the Media in a Democratic System"),
            leaf("Analysis of the Factors Influencing Political Change"),
            leaf("Impact of a Political Leader on a Country's History"),
            leaf("A Study on the Role of a Citizen in a Democratic System"),
            leaf("Analysis of the Factors Influencing Political Violence"),
            leaf("Impact of a Political Movement on a Country's Society"),
            leaf("A Study on the Role of a Political Party in a Democratic System"),
            leaf("Analysis of the Factors Influencing Political Campaigns"),
            leaf("Impact of a Political System on a Country's Culture"),
            leaf("A Study on the Role of a Government in a Democratic System"),
            leaf("Analysis of the Factors Influencing Political Decisions"),
            leaf("Impact of a Political Event on a Country's Economy"),
            leaf("A Study on the Role of a Political System in a Country's History"),
            leaf("Analysis of the Factors Influencing Political Beliefs"),
            leaf("Impact of a Political Ideology on a Country's Political System"),
            leaf("A Study on the Role of a Political Leader in a Democratic System"),
            leaf("Analysis of the Factors Influencing Political Behavior"),
            leaf("Impact of a Political Reform on a Country's Society"),
            leaf("A Study on the Role of a Political Party in a Country's Governance"),
            leaf("Analysis of the Factors Influencing Political Development"),
            leaf("Impact of a Political System on a Country's Society"),
            leaf("A Study on the Role of a Political Leader in a Country's History"),
            leaf("Analysis of the Factors Influencing Political Attitudes"),
            leaf("Impact of a Political Event on a Country's Society"),
            leaf("A Study on the Role of a Political System in a Country's Culture"),
            leaf("Analysis of the Factors Influencing Political Opinions"),
            leaf("Impact of a Political Ideology on a Country's Political System"),
            leaf("A Study on the Role of a Political Party in a Democratic System"),
            leaf("Analysis of the Factors Influencing Political Beliefs"),
            leaf("Impact of a Political Reform on a Country's Economy"),
            leaf("A Study on the Role of a Political Leader in a Democratic System"),
            leaf("Analysis of the Factors Influencing Political Behavior"),
            leaf("Impact of a Political System on a Country's Social System"),
        ],
    },
    {
        name: "Psychology",
        children: [
            leaf("Impact of Social Media on Adolescent Mental Health"),
            leaf("A Study on the Effectiveness of Cognitive Behavioral Therapy (CBT) for Anxiety"),
            leaf("Analysis of the Factors Influencing Student Stress and Coping Mechanisms"),
            leaf("A Study on the Role of Emotional Intelligence in Leadership"),
            leaf("Impact of a Mental Health Awareness Program on Stigma"),
            leaf("Development of a Mobile App for Mindfulness and Meditation"),
            leaf("Analysis of the Factors Influencing Job Satisfaction in the IT Sector"),
            leaf("A Study on the Role of Family Environment in Child Development"),
            leaf("Impact of a School-Based Bullying Prevention Program"),
            leaf("A Study on the Role of Sleep in Cognitive Performance"),
            leaf("Analysis of the Factors Influencing Procrastination in Students"),
            leaf("Impact of a Positive Psychology Intervention on Well-being"),
            leaf("A Study on the Role of Attachment Styles in Adult Relationships"),
            leaf("Analysis of the Factors Influencing Academic Motivation"),
            leaf("Impact of a Stress Management Program on Employee Productivity"),
            leaf("A Study on the Role of Personality Traits in Career Choice"),
            leaf("Analysis of the Factors Influencing Self-Esteem in Adolescents"),
            leaf("Impact of a Mental Health Intervention on College Students"),
            leaf("A Study on the Role of Social Support in Stress Management"),
            leaf("Analysis of the Factors Influencing Resilience in Individuals"),
            leaf("Impact of a Parenting Style on Child Behavior"),
            leaf("A Study on the Role of a Therapist in Mental Health"),
            leaf("Analysis of the Factors Influencing Happiness"),
            leaf("Impact of a Workplace Environment on Employee Mental Health"),
            leaf("A Study on the Role of a Teacher in Student Learning"),
            leaf("Analysis of the Factors Influencing Creativity"),
            leaf("Impact of a Nutrition on Mental Health"),
            leaf("A Study on the Role of a Mentor in Personal Development"),
            leaf("Analysis of the Factors Influencing Decision Making"),
            leaf("Impact of a Meditation on Brain Function"),
            leaf("A Study on the Role of a Coach in Sports Performance"),
            leaf("Analysis of the Factors Influencing Problem Solving"),
            leaf("Impact of a Therapy on Mental Health"),
            leaf("A Study on the Role of a Family in Mental Health"),
            leaf("Analysis of the Factors Influencing Social Skills"),
            leaf("Impact of a Social Media on Body Image"),
            leaf("A Study on the Role of a Friend in Mental Health"),
            leaf("Analysis of the Factors Influencing Communication Skills"),
            leaf("Impact of a Bullying on Mental Health"),
            leaf("A Study on the Role of a School in Mental Health"),
            leaf("Analysis of the Factors Influencing Leadership Skills"),
            leaf("Impact of a Stress on Physical Health"),
            leaf("A Study on the Role of a Workplace in Mental Health"),
            leaf("Analysis of the Factors Influencing Teamwork Skills"),
            leaf("Impact of a Diet on Mental Health"),
            leaf("A Study on the Role of a Community in Mental Health"),
            leaf("Analysis of the Factors Influencing Time Management"),
            leaf("Impact of a Nutrition on Brain Function"),
            leaf("A Study on the Role of a Teacher in Mental Health"),
            leaf("Analysis of the Factors Influencing Learning Skills"),
        ],
    },
    {
        name: "Public Administration",
        children: [
            leaf("Analysis of the Effectiveness of E-governance in Public Service Delivery"),
            leaf("A Study on the Role of Public-Private Partnerships in Infrastructure Development"),
            leaf("Impact of a Public Policy on a Social Issue"),
            leaf("A Study on the Role of Bureaucracy in Public Administration"),
            leaf("Analysis of the Factors Influencing Citizen Participation in Local Governance"),
            leaf("Impact of a Public Administration Reform on a Country's Governance"),
            leaf("A Study on the Role of a Public Administrator in a Democratic System"),
            leaf("Analysis of the Factors Influencing Public Service Delivery"),
            leaf("Impact of a Public Policy on Economic Development"),
            leaf("A Study on the Role of Public Administration in Public Health"),
            leaf("Analysis of the Factors Influencing Public Administration Ethics"),
            leaf("Impact of a Public Administration System on a Country's Society"),
            leaf("A Study on the Role of a Public Administrator in a Country's Governance"),
            leaf("Analysis of the Factors Influencing Public Administration Decisions"),
            leaf("Impact of a Public Policy on a Country's History"),
            leaf("A Study on the Role of a Public Administrator in a Country's History"),
            leaf("Analysis of the Factors Influencing Public Administration Performance"),
            leaf("Impact of a Public Administration System on a Country's Culture"),
            leaf("A Study on the Role of a Public Administrator in a Country's Society"),
            leaf("Analysis of the Factors Influencing Public Administration Strategies"),
            leaf("Impact of a Public Policy on a Country's Political System"),
            leaf("A Study on the Role of a Public Administrator in a Country's Political System"),
            leaf("Analysis of the Factors Influencing Public Administration Communication"),
            leaf("Impact of a Public Administration System on a Country's Social System"),
            leaf("A Study on the Role of a Public Administrator in a Country's Social System"),
            leaf("Analysis of the Factors Influencing Public Administration Sustainability"),
            leaf("Impact of a Public Policy on a Country's Environment"),
            leaf("A Study on the Role of a Public Administrator in a Country's Environment"),
            leaf("Analysis of the Factors Influencing Public Administration Operations"),
            leaf("Impact of a Public Administration System on a Country's Economy"),
            leaf("A Study on the Role of a Public Administrator in a Country's Economy"),
            leaf("Analysis of the Factors Influencing Public Administration Planning"),
            leaf("Impact of a Public Policy on a Country's Legal System"),
            leaf("A Study on the Role of a Public Administrator in a Country's Legal System"),
            leaf("Analysis of the Factors Influencing Public Administration Ethics"),
            leaf("Impact of a Public Administration System on a Country's Legal System"),
            leaf("A Study on the Role of a Public Administrator in a Country's Legal System"),
            leaf("Analysis of the Factors Influencing Public Administration Performance"),
            leaf("Impact of a Public Policy on a Country's Culture"),
            leaf("A Study on the Role of a Public Administrator in a Country's Culture"),
            leaf("Analysis of the Factors Influencing Public Administration Communication"),
            leaf("Impact of a Public Administration System on a Country's Political System"),
            leaf("A Study on the Role of a Public Administrator in a Country's Political System"),
            leaf("Analysis of the Factors Influencing Public Administration Strategies"),
            leaf("Impact of a Public Policy on a Country's Social System"),
            leaf("A Study on the Role of a Public Administrator in a Country's Social System"),
            leaf("Analysis of the Factors Influencing Public Administration Sustainability"),
            leaf("Impact of a Public Administration System on a Country's Environment"),
            leaf("A Study on the Role of a Public Administrator in a Country's Environment"),
            leaf("Analysis of the Factors Influencing Public Administration Operations"),
        ],
    },
    {
        name: "Public Health",
        children: [
            leaf("Analysis of the Impact of a Public Health Campaign on Disease Prevention"),
            leaf("A Study on the Role of Social Media in Public Health Communication"),
            leaf("Epidemiological Analysis of a Disease Outbreak in a Community"),
            leaf("A Study on the Effectiveness of a School-Based Health Program"),
            leaf("Impact of Air Pollution on Respiratory Diseases in an Urban Area"),
            leaf("A Study on the Role of Public Health in Disaster Management"),
            leaf("Analysis of the Factors Influencing Health Literacy in a Population"),
            leaf("Impact of a Public Health Policy on a Country's Healthcare System"),
            leaf("A Study on the Role of Public Health in Chronic Disease Management"),
            leaf("Analysis of the Factors Influencing Health Disparities"),
            leaf("Impact of a Public Health Intervention on a Population's Health"),
            leaf("A Study on the Role of Public Health in Mental Health"),
            leaf("Analysis of the Factors Influencing Health Behaviors"),
            leaf("Impact of a Public Health Program on a Community's Well-being"),
            leaf("A Study on the Role of Public Health in Infectious Disease Control"),
            leaf("Analysis of the Factors Influencing Health Outcomes"),
            leaf("Impact of a Public Health Campaign on a Social Issue"),
            leaf("A Study on the Role of Public Health in Environmental Protection"),
            leaf("Analysis of the Factors Influencing Public Health Policy"),
            leaf("Impact of a Public Health System on a Country's Healthcare System"),
            leaf("A Study on the Role of Public Health in Global Health"),
            leaf("Analysis of the Factors Influencing Public Health Communication"),
            leaf("Impact of a Public Health System on a Country's Society"),
            leaf("A Study on the Role of Public Health in Food Safety"),
            leaf("Analysis of the Factors Influencing Public Health Decisions"),
            leaf("Impact of a Public Health System on a Country's Economy"),
            leaf("A Study on the Role of Public Health in Occupational Health"),
            leaf("Analysis of the Factors Influencing Public Health Ethics"),
            leaf("Impact of a Public Health System on a Country's Political System"),
            leaf("A Study on the Role of Public Health in Water Safety"),
            leaf("Analysis of the Factors Influencing Public Health Planning"),
            leaf("Impact of a Public Health System on a Country's Legal System"),
            leaf("A Study on the Role of Public Health in Maternal and Child Health"),
            leaf("Analysis of the Factors Influencing Public Health Operations"),
            leaf("Impact of a Public Health System on a Country's Culture"),
            leaf("A Study on the Role of Public Health in School Health"),
            leaf("Analysis of the Factors Influencing Public Health Sustainability"),
            leaf("Impact of a Public Health System on a Country's Environment"),
            leaf("A Study on the Role of Public Health in Nutrition"),
            leaf("Analysis of the Factors Influencing Public Health Communication"),
            leaf("Impact of a Public Health System on a Country's Political System"),
            leaf("A Study on the Role of Public Health in Community Health"),
            leaf("Analysis of the Factors Influencing Public Health Strategies"),
            leaf("Impact of a Public Health System on a Country's Social System"),
            leaf("A Study on the Role of Public Health in Health Education"),
            leaf("Analysis of the Factors Influencing Public Health Communication"),
            leaf("Impact of a Public Health System on a Country's Environment"),
            leaf("A Study on the Role of Public Health in Health Promotion"),
            leaf("Analysis of the Factors Influencing Public Health Operations"),
            leaf("Impact of a Public Health System on a Country's Economy"),
        ],
    },
    {
        name: "Sales Management",
        children: [
            leaf("Development of a Sales Pipeline Management Dashboard"),
            leaf("Analysis of Factors Influencing Sales Performance in the Retail Sector"),
            leaf("A Study on the Effectiveness of a Sales Training Program"),
            leaf("Impact of Social Media on Sales Lead Generation"),
            leaf("Analysis of Customer Relationship Management (CRM) in Sales"),
            leaf("A Study on the Role of Sales Analytics in Business Decisions"),
            leaf("Impact of a Sales Incentive Plan on Employee Motivation"),
            leaf("A Study on the Role of Sales Forecasting"),
            leaf("Analysis of the Factors Influencing Customer Satisfaction in Sales"),
            leaf("Impact of a Sales Process on Sales Performance"),
            leaf("A Study on the Role of Sales Communication"),
            leaf("Analysis of the Factors Influencing Sales Team Performance"),
            leaf("Impact of a Sales Strategy on Business Growth"),
            leaf("A Study on the Role of Sales Management in Business"),
            leaf("Analysis of the Factors Influencing Sales Performance"),
            leaf("Impact of Technology on Sales"),
            leaf("A Study on the Role of E-commerce in Sales"),
            leaf("Analysis of the Factors Influencing Sales Management"),
            leaf("Impact of the Internet on Sales"),
            leaf("A Study on the Role of Information Technology in Sales"),
            leaf("Analysis of the Factors Influencing Sales Communication"),
            leaf("Impact of Globalization on Sales"),
            leaf("A Study on the Role of Customer Service in Sales"),
            leaf("Analysis of the Factors Influencing Sales Decisions"),
            leaf("Impact of the Economic Environment on Sales"),
            leaf("A Study on the Role of Corporate Social Responsibility in Sales"),
            leaf("Analysis of the Factors Influencing Sales Ethics"),
            leaf("Impact of the Political Environment on Sales"),
            leaf("A Study on the Role of Quality Management in Sales"),
            leaf("Analysis of the Factors Influencing Sales Planning"),
            leaf("Impact of the Legal Environment on Sales"),
            leaf("A Study on the Role of Change Management in Sales"),
            leaf("Analysis of the Factors Influencing Sales Sustainability"),
            leaf("Impact of the Social Environment on Sales"),
            leaf("A Study on the Role of Supply Chain Management in Sales"),
            leaf("Analysis of the Factors Influencing Sales Operations"),
            leaf("Impact of the Cultural Environment on Sales"),
            leaf("A Study on the Role of Sales Research"),
            leaf("Analysis of the Factors Influencing Sales Strategy"),
            leaf("Impact of the Technological Environment on Sales"),
            leaf("A Study on the Role of Branding in Sales"),
            leaf("Analysis of the Factors Influencing Sales Communication"),
            leaf("Impact of the Ecological Environment on Sales"),
            leaf("A Study on the Role of Social Media in Sales"),
            leaf("Analysis of the Factors Influencing Sales Decisions"),
            leaf("Impact of the Financial Crisis on Sales"),
            leaf("A Study on the Role of E-commerce in Sales"),
            leaf("Analysis of the Factors Influencing Sales Business Growth"),
            leaf("Impact of the Internet on Sales"),
            leaf("A Study on the Role of Information Technology in Sales"),
        ],
    },
    {
        name: "Sociology",
        children: [
            leaf("Analysis of the Impact of Social Media on Interpersonal Relationships"),
            leaf("A Study on the Role of Social Movements in Political Change"),
            leaf("A Comparative Study of Urban and Rural Social Structures"),
            leaf("Analysis of the Factors Influencing Social Inequality"),
            leaf("Impact of Globalization on Cultural Diversity"),
            leaf("A Study on the Role of a Family in Social Development"),
            leaf("Analysis of the Factors Influencing Social Cohesion"),
            leaf("Impact of a Social Trend on a Society's Norms"),
            leaf("A Study on the Role of Education in Social Mobility"),
            leaf("Analysis of the Factors Influencing Social Stratification"),
            leaf("Impact of a Social Policy on a Community's Well-being"),
            leaf("A Study on the Role of a Religion in Social Change"),
            leaf("Analysis of the Factors Influencing Social Behavior"),
            leaf("Impact of a Social Institution on a Society's Values"),
            leaf("A Study on the Role of a Government in Social Welfare"),
            leaf("Analysis of the Factors Influencing Social Attitudes"),
            leaf("Impact of a Social Event on a Community's History"),
            leaf("A Study on the Role of a Community in Social Change"),
            leaf("Analysis of the Factors Influencing Social Beliefs"),
            leaf("Impact of a Social System on a Society's Culture"),
            leaf("A Study on the Role of a Leader in Social Change"),
            leaf("Analysis of the Factors Influencing Social Relations"),
            leaf("Impact of a Social Movement on a Society's Political System"),
            leaf("A Study on the Role of a Citizen in Social Change"),
            leaf("Analysis of the Factors Influencing Social Development"),
            leaf("Impact of a Social Institution on a Society's Economy"),
            leaf("A Study on the Role of a Social Media in Social Change"),
            leaf("Analysis of the Factors Influencing Social Cohesion"),
            leaf("Impact of a Social Trend on a Society's Norms"),
            leaf("A Study on the Role of Education in Social Mobility"),
            leaf("Analysis of the Factors Influencing Social Stratification"),
            leaf("Impact of a Social Policy on a Community's Well-being"),
            leaf("A Study on the Role of a Religion in Social Change"),
            leaf("Analysis of the Factors Influencing Social Behavior"),
            leaf("Impact of a Social Institution on a Society's Values"),
            leaf("A Study on the Role of a Government in Social Welfare"),
            leaf("Analysis of the Factors Influencing Social Attitudes"),
            leaf("Impact of a Social Event on a Community's History"),
            leaf("A Study on the Role of a Community in Social Change"),
            leaf("Analysis of the Factors Influencing Social Beliefs"),
            leaf("Impact of a Social System on a Society's Culture"),
            leaf("A Study on the Role of a Leader in Social Change"),
            leaf("Analysis of the Factors Influencing Social Relations"),
            leaf("Impact of a Social Movement on a Society's Political System"),
            leaf("A Study on the Role of a Citizen in Social Change"),
            leaf("Analysis of the Factors Influencing Social Development"),
            leaf("Impact of a Social Institution on a Society's Economy"),
            leaf("A Study on the Role of a Social Media in Social Change"),
            leaf("Analysis of the Factors Influencing Social Cohesion"),
            leaf("Impact of a Social Trend on a Society's Norms"),
        ],
    },
    {
        name: "Statistics",
        children: [
            leaf("Predictive Modeling of Customer Churn using Logistic Regression"),
            leaf("A/B Testing Analysis for Website Conversion Rate Optimization"),
            leaf("Time Series Analysis of Stock Market Volatility"),
            leaf("Analysis of Factors Influencing Student Performance using Regression Models"),
            leaf("Hypothesis Testing for Clinical Trial Data"),
            leaf("Development of a Data Visualization Dashboard for a Business"),
            leaf("Analysis of the Effectiveness of a Marketing Campaign using Statistical Models"),
            leaf("A Study on the Role of Probability in Risk Management"),
            leaf("Impact of a Statistical Model on Business Decisions"),
            leaf("A Study on the Role of Data Mining in Business Analytics"),
            leaf("Analysis of the Factors Influencing Public Opinion"),
            leaf("Impact of a Statistical Model on Public Health"),
            leaf("A Study on the Role of Statistical Quality Control in Manufacturing"),
            leaf("Analysis of the Factors Influencing Crime Rates"),
            leaf("Impact of a Statistical Model on Financial Markets"),
            leaf("A Study on the Role of Bayesian Statistics in Data Analysis"),
            leaf("Analysis of the Factors Influencing Climate Change"),
            leaf("Impact of a Statistical Model on Environmental Science"),
            leaf("A Study on the Role of Non-Parametric Statistics in Research"),
            leaf("Analysis of the Factors Influencing Sports Performance"),
            leaf("Impact of a Statistical Model on Medical Diagnosis"),
            leaf("A Study on the Role of Multivariate Analysis in Research"),
            leaf("Analysis of the Factors Influencing Economic Growth"),
            leaf("Impact of a Statistical Model on Political Science"),
            leaf("A Study on the Role of Survival Analysis in Medical Research"),
            leaf("Analysis of the Factors Influencing Marketing Strategies"),
            leaf("Impact of a Statistical Model on Supply Chain Management"),
            leaf("A Study on the Role of Time Series Analysis in Economics"),
            leaf("Analysis of the Factors Influencing Consumer Behavior"),
            leaf("Impact of a Statistical Model on Human Resources Management"),
            leaf("A Study on the Role of Machine Learning in Data Analysis"),
            leaf("Analysis of the Factors Influencing Business Analytics"),
            leaf("Impact of a Statistical Model on E-commerce"),
            leaf("A Study on the Role of Deep Learning in Data Analysis"),
            leaf("Analysis of the Factors Influencing Social Network Analysis"),
            leaf("Impact of a Statistical Model on Neuroscience"),
            leaf("A Study on the Role of Reinforcement Learning in Data Analysis"),
            leaf("Analysis of the Factors Influencing Public Administration"),
            leaf("Impact of a Statistical Model on Public Health"),
            leaf("A Study on the Role of Natural Language Processing in Data Analysis"),
            leaf("Analysis of the Factors Influencing Mass Communication"),
            leaf("Impact of a Statistical Model on Sociology"),
            leaf("A Study on the Role of Computer Vision in Data Analysis"),
            leaf("Analysis of the Factors Influencing Psychology"),
            leaf("Impact of a Statistical Model on Biology"),
            leaf("A Study on the Role of Genetic Algorithms in Data Analysis"),
            leaf("Analysis of the Factors Influencing Chemistry"),
            leaf("Impact of a Statistical Model on Physics"),
            leaf("A Study on the Role of Fuzzy Logic in Data Analysis"),
            leaf("Analysis of the Factors Influencing Information Technology"),
        ],
    },
    {
        name: "Zoology",
        children: [
            leaf("Analysis of Animal Behavior in Captivity vs. the Wild"),
            leaf("A Study on the Impact of Climate Change on a Species' Habitat"),
            leaf("Genomic Analysis of an Endangered Species"),
            leaf("A Study on the Role of a Keystone Species in an Ecosystem"),
            leaf("Impact of a Human Activity on a Species' Population"),
            leaf("A Study on the Role of a Predator in an Ecosystem"),
            leaf("Analysis of the Factors Influencing a Species' Survival"),
            leaf("Impact of a Disease on a Species' Population"),
            leaf("A Study on the Role of a Prey in an Ecosystem"),
            leaf("Analysis of the Factors Influencing a Species' Reproduction"),
            leaf("Impact of a Pollutant on a Species' Health"),
            leaf("A Study on the Role of a Symbiotic Relationship in an Ecosystem"),
            leaf("Analysis of the Factors Influencing a Species' Diet"),
            leaf("Impact of a Habitat Loss on a Species' Population"),
            leaf("A Study on the Role of a Parasite in an Ecosystem"),
            leaf("Analysis of the Factors Influencing a Species' Migration"),
            leaf("Impact of a Human Activity on a Species' Behavior"),
            leaf("A Study on the Role of a Commensalism in an Ecosystem"),
            leaf("Analysis of the Factors Influencing a Species' Social Structure"),
            leaf("Impact of a Climate Change on a Species' Behavior"),
            leaf("A Study on the Role of a Mutualism in an Ecosystem"),
            leaf("Analysis of the Factors Influencing a Species' Lifespan"),
            leaf("Impact of a Human Activity on a Species' Reproduction"),
            leaf("A Study on the Role of a Competition in an Ecosystem"),
            leaf("Analysis of the Factors Influencing a Species' Communication"),
            leaf("Impact of a Climate Change on a Species' Reproduction"),
            leaf("A Study on the Role of a Predation in an Ecosystem"),
            leaf("Analysis of the Factors Influencing a Species' Intelligence"),
            leaf("Impact of a Human Activity on a Species' Social Structure"),
            leaf("A Study on the Role of a Parasitism in an Ecosystem"),
            leaf("Analysis of the Factors Influencing a Species' Memory"),
            leaf("Impact of a Climate Change on a Species' Social Structure"),
            leaf("A Study on the Role of a Commensalism in an Ecosystem"),
            leaf("Analysis of the Factors Influencing a Species' Learning"),
            leaf("Impact of a Human Activity on a Species' Communication"),
            leaf("A Study on the Role of a Mutualism in an Ecosystem"),
            leaf("Analysis of the Factors Influencing a Species' Problem Solving"),
            leaf("Impact of a Climate Change on a Species' Communication"),
            leaf("A Study on the Role of a Competition in an Ecosystem"),
            leaf("Analysis of the Factors Influencing a Species' Emotions"),
            leaf("Impact of a Human Activity on a Species' Emotions"),
            leaf("A Study on the Role of a Predation in an Ecosystem"),
            leaf("Analysis of the Factors Influencing a Species' Personality"),
            leaf("Impact of a Climate Change on a Species' Emotions"),
            leaf("A Study on the Role of a Parasitism in an Ecosystem"),
            leaf("Analysis of the Factors Influencing a Species' Stress"),
            leaf("Impact of a Human Activity on a Species' Stress"),
            leaf("A Study on the Role of a Commensalism in an Ecosystem"),
            leaf("Analysis of the Factors Influencing a Species' Anxiety"),
            leaf("Impact of a Climate Change on a Species' Stress"),
        ],
    },
];

const PG_DATA = [
    {
        name: "Accounting",
        children: [
            leaf("Advanced Financial Statement Analysis and Forecasting"),
            leaf("Forensic Accounting and Fraud Examination in the Digital Age"),
            leaf("Blockchain Technology for Enhanced Auditing and Transparency"),
            leaf("Strategic Cost Management and Performance Measurement"),
            leaf("Valuation of Mergers & Acquisitions: An Accounting Perspective"),
            leaf("Tax Policy Analysis and its Impact on Corporate Behavior"),
            leaf("Development of a Predictive Accounting Model using Machine Learning"),
            leaf("Role of AI and RPA in Automating Accounting Processes"),
            leaf("Sustainability Reporting and Integrated Financial Disclosures"),
            leaf("Enterprise Risk Management and Internal Controls"),
            leaf("Accounting for Derivatives and Financial Engineering"),
            leaf("Analysis of International Financial Reporting Standards (IFRS)"),
            leaf("Public Sector Accounting and Accountability"),
            leaf("Financial Statement Fraud Detection Techniques"),
            leaf("Audit Automation and Data Analytics"),
            leaf("Capital Budgeting for Complex Projects"),
            leaf("Valuation of Startups and Early-Stage Companies"),
            leaf("Forensic Accounting in Cybercrime Investigation"),
            leaf("Supply Chain Finance and Risk Management"),
            leaf("Financial Performance Analysis of a Global Conglomerate"),
            leaf("Accounting for Intellectual Property and Brand Value"),
            leaf("Corporate Governance and its Impact on Financial Reporting"),
            leaf("Analysis of the Financial Services Industry"),
            leaf("Financial Health of the Indian Automotive Industry"),
            leaf("Accounting for Public-Private Partnerships"),
            leaf("Role of Accounting in a Circular Economy"),
            leaf("Forecasting Financial Statements with Time Series Analysis"),
            leaf("Taxation of Digital Businesses and the Gig Economy"),
            leaf("Auditing in a Cloud Computing Environment"),
            leaf("Cost Management in the Healthcare Sector"),
            leaf("Financial Statement Analysis of Non-Profit Organizations"),
            leaf("Working Capital Management and Liquidity Optimization"),
            leaf("Analysis of Credit Default Swaps and Their Impact on Financial Stability"),
            leaf("Impact of Big Data on Auditing Practices"),
            leaf("Financial Modeling for Private Equity Investments"),
            leaf("Accounting for Blockchain-based Transactions"),
            leaf("Forensic Accounting in Bankruptcy and Insolvency"),
            leaf("Role of AI in Tax Compliance and Planning"),
            leaf("Sustainability Accounting and Reporting Standards"),
            leaf("Internal Control Systems for Cybersecurity"),
            leaf("Analysis of Capital Market Performance in Developing Countries"),
            leaf("Accounting for Environmental Liabilities"),
            leaf("Project Cost Management in Large-Scale Construction"),
            leaf("Credit Risk Assessment using Deep Learning"),
            leaf("Analysis of Financial Inclusion Initiatives in India"),
            leaf("Financial Statement Analysis of the Indian Aviation Industry"),
            leaf("Auditing of E-commerce Businesses"),
            leaf("Taxation of Cryptocurrencies and Digital Assets"),
            leaf("Financial Performance Analysis of the Indian Retail Sector"),
            leaf("Accounting for Carbon Emissions and Trading"),
        ],
    },
    {
        name: "Applied Economics",
        children: [
            leaf("Econometric Forecasting Model for Macroeconomic Indicators"),
            leaf("Impact of Monetary Policy on Inflation in Emerging Markets"),
            leaf("Analysis of Labor Market Dynamics and Unemployment"),
            leaf("Causal Inference in Economics: Impact of a Policy Intervention"),
            leaf("Game Theory Models for Strategic Behavior in Oligopolies"),
            leaf("Behavioral Economics: Analysis of Consumer Decision-Making"),
            leaf("Quantitative Analysis of Financial Crises"),
            leaf("Impact of Automation and AI on Employment and Wages"),
            leaf("Trade Policy Analysis and Its Effects on Global Supply Chains"),
            leaf("Economic Analysis of Climate Change Mitigation Strategies"),
            leaf("Econometric Analysis of the Impact of Education on Income"),
            leaf("Impact of Globalization on Income Inequality"),
            leaf("Analysis of the Indian Agricultural Sector"),
            leaf("Role of Microfinance Institutions in Poverty Alleviation"),
            leaf("Economic Analysis of Public Health Interventions"),
            leaf("Impact of Taxation on Economic Growth"),
            leaf("Analysis of the Real Estate Market"),
            leaf("Role of Behavioral Economics in Public Policy Design"),
            leaf("Economic Analysis of the Energy Sector"),
            leaf("Impact of Fiscal Policy on Economic Growth"),
            leaf("Analysis of the Factors Influencing Foreign Direct Investment"),
            leaf("Economic Analysis of the Healthcare Sector"),
            leaf("Impact of Globalization on the Indian Economy"),
            leaf("Analysis of the Factors Influencing Exchange Rates"),
            leaf("Economic Analysis of the Banking Sector"),
            leaf("Impact of Technology on the Labor Market"),
            leaf("Analysis of the Factors Influencing Unemployment"),
            leaf("Economic Analysis of the Tourism Sector"),
            leaf("Impact of a Trade War on the Global Economy"),
            leaf("Analysis of the Factors Influencing Inflation"),
            leaf("Economic Analysis of the Education Sector"),
            leaf("Impact of a Financial Crisis on the Real Estate Market"),
            leaf("Analysis of the Factors Influencing Economic Growth"),
            leaf("Economic Analysis of the Transportation Sector"),
            leaf("Impact of a Tax Cut on Economic Growth"),
            leaf("Analysis of the Factors Influencing Consumer Behavior"),
            leaf("Economic Analysis of the Manufacturing Sector"),
            leaf("Impact of a Subsidy on the Agricultural Sector"),
            leaf("Analysis of the Factors Influencing Investment Decisions"),
            leaf("Economic Analysis of the Retail Sector"),
            leaf("Impact of a Price Control on the Market"),
            leaf("Analysis of the Factors Influencing Market Competition"),
            leaf("Economic Analysis of the IT Sector"),
            leaf("Impact of a Minimum Wage on Employment"),
            leaf("Analysis of the Factors Influencing Savings Behavior"),
            leaf("Economic Analysis of the Insurance Sector"),
            leaf("Impact of a Quota on a Market"),
            leaf("Analysis of the Factors Influencing Consumption Behavior"),
            leaf("Economic Analysis of the Pharmaceutical Sector"),
            leaf("Impact of a Tariff on International Trade"),
        ],
    },
    {
        name: "Applied Nutrition",
        children: [
            leaf("Development of a Personalized Nutrition Recommendation Engine using AI"),
            leaf("Study on the Impact of Nutrigenomics on Dietary Planning"),
            leaf("Public Health Nutrition Intervention for a Low-Income Community"),
            leaf("Analysis of Food Safety and Quality Assurance in the Supply Chain"),
            leaf("Role of Microbiome in Personalized Nutrition"),
            leaf("Clinical Nutrition Case Study for a Patient with a Chronic Illness"),
            leaf("Analysis of the Effectiveness of a School-Based Nutrition Program"),
            leaf("Study on the Nutritional Needs of a Specific Population Group"),
            leaf("Impact of a Food Policy on a Country's Public Health"),
            leaf("Analysis of the Factors Influencing Food Choices"),
            leaf("Study on the Role of Probiotics in Gut Health"),
            leaf("Impact of a Nutrition Education Program on a Community's Health"),
            leaf("Analysis of the Factors Influencing Food Security"),
            leaf("Study on the Role of a Diet on a Person's Mental Health"),
            leaf("Impact of a Nutrition Intervention on a Patient's Health"),
            leaf("Analysis of the Factors Influencing Food Waste"),
            leaf("Study on the Role of a Food Additive on a Person's Health"),
            leaf("Impact of a Nutrition Policy on a Country's Economy"),
            leaf("Analysis of the Factors Influencing Food Consumption"),
            leaf("Study on the Role of a Food Safety Regulation on a Business"),
            leaf("Impact of a Nutrition Program on a Community's Well-being"),
            leaf("Analysis of the Factors Influencing Food Production"),
            leaf("Study on the Role of a Food Label on a Person's Food Choices"),
            leaf("Impact of a Nutrition Intervention on a Patient's Recovery"),
            leaf("Analysis of the Factors Influencing Food Marketing"),
            leaf("Study on the Role of a Food Bank in a Community"),
            leaf("Impact of a Nutrition Policy on a Country's Society"),
            leaf("Analysis of the Factors Influencing Food Distribution"),
            leaf("Study on the Role of a Nutritionist in a Clinical Setting"),
            leaf("Impact of a Nutrition Intervention on a Patient's Quality of Life"),
            leaf("Analysis of the Factors Influencing Food Waste"),
            leaf("Study on the Role of a Food Service in a Hospital"),
            leaf("Impact of a Nutrition Program on a Community's Health"),
            leaf("Analysis of the Factors Influencing Food Safety"),
            leaf("Study on the Role of a Nutrition Education Program in a School"),
            leaf("Impact of a Nutrition Intervention on a Patient's Pain Management"),
            leaf("Analysis of the Factors Influencing Food Production"),
            leaf("Study on the Role of a Food Label on a Person's Food Choices"),
            leaf("Impact of a Nutrition Intervention on a Patient's Recovery"),
            leaf("Analysis of the Factors Influencing Food Marketing"),
            leaf("Study on the Role of a Food Bank in a Community"),
            leaf("Impact of a Nutrition Policy on a Country's Society"),
            leaf("Analysis of the Factors Influencing Food Distribution"),
            leaf("Study on the Role of a Nutritionist in a Clinical Setting"),
            leaf("Impact of a Nutrition Intervention on a Patient's Quality of Life"),
            leaf("Analysis of the Factors Influencing Food Waste"),
            leaf("Study on the Role of a Food Service in a Hospital"),
            leaf("Impact of a Nutrition Program on a Community's Health"),
            leaf("Analysis of the Factors Influencing Food Safety"),
            leaf("Study on the Role of a Nutrition Education Program in a School"),
        ],
    },
    {
        name: "Biochemistry",
        children: [
            leaf("Advanced Enzyme Kinetics Modeling and Inhibition Studies"),
            leaf("Protein-Protein Interaction Prediction using Computational Biology"),
            leaf("Metabolic Flux Analysis in a Microbial System"),
            leaf("Computational Chemistry for Drug Design and Molecular Docking"),
            leaf("Study on the Biochemical Mechanisms of Neurodegenerative Diseases"),
            leaf("Development of a Novel Biosensor for Diagnostic Applications"),
            leaf("Analysis of Gene Expression and Regulation in Cancer Cells"),
            leaf("Role of CRISPR-Cas9 in Gene Editing and its Biochemical Implications"),
            leaf("Study of the Biochemical Pathways of a Plant's Response to Stress"),
            leaf("Development of a High-Throughput Screening Assay for Drug Discovery"),
            leaf("Analysis of the Role of Oxidative Stress in Disease"),
            leaf("Role of Glycoproteins in Cell Signaling"),
            leaf("Study on the Biochemical Changes in Aged Cells"),
            leaf("Development of a Novel Method for Protein Purification"),
            leaf("Analysis of the Effect of a Drug on Cell Viability"),
            leaf("Role of RNA in Gene Expression"),
            leaf("Study on the Biochemical Mechanisms of Drug Resistance"),
            leaf("Development of a Biosensor for Environmental Monitoring"),
            leaf("Analysis of the Role of Lipids in Cell Signaling"),
            leaf("Role of Carbohydrates in Energy Metabolism"),
            leaf("Study on the Biochemical Pathways of a Microbe"),
            leaf("Development of a Novel Method for DNA Extraction"),
            leaf("Analysis of the Effect of a Hormone on Gene Expression"),
            leaf("Role of Amino Acids in Protein Synthesis"),
            leaf("Study on the Biochemical Mechanisms of a Disease"),
            leaf("Development of a Biosensor for pH Detection"),
            leaf("Analysis of the Role of Nucleic Acids in Heredity"),
            leaf("Role of Enzymes in Digestion"),
            leaf("Study on the Biochemical Pathways of a Plant"),
            leaf("Development of a Novel Method for RNA Extraction"),
            leaf("Analysis of the Effect of a Vitamin on Enzyme Activity"),
            leaf("Role of Minerals in Enzyme Activity"),
            leaf("Study on the Biochemical Mechanisms of a Toxin"),
            leaf("Development of a Biosensor for Temperature Detection"),
            leaf("Analysis of the Role of Coenzymes in Metabolism"),
            leaf("Role of Substrates in Enzyme Reactions"),
            leaf("Study on the Biochemical Pathways of a Pollutant"),
            leaf("Development of a Novel Method for Protein Staining"),
            leaf("Analysis of the Role of Hormones in the Body"),
            leaf("Role of Vitamins in the Body"),
            leaf("Study on the Biochemical Mechanisms of a Drug"),
            leaf("Development of a Biosensor for Pressure Detection"),
            leaf("Analysis of the Role of Minerals in the Body"),
            leaf("Role of Foods in Metabolism"),
            leaf("Study on the Biochemical Pathways of a Food"),
            leaf("Development of a Novel Method for Gel Electrophoresis"),
            leaf("Analysis of the Role of Pollutants in the Body"),
            leaf("Role of Toxins in the Body"),
            leaf("Study on the Biochemical Pathways of a Vitamin"),
            leaf("Development of a Novel Method for Immunoblotting"),
        ],
    },
    {
        name: "Bioinformatics",
        children: [
            leaf("Development of a Single-Cell RNA-Seq Data Analysis Pipeline"),
            leaf("Drug Repurposing via Knowledge Graphs and Molecular Docking"),
            leaf("Genomic Variant Annotation and Interpretation Pipeline"),
            leaf("Comparative Genomics of a Pathogen to Identify Virulence Factors"),
            leaf("Machine Learning for Protein Structure Prediction"),
            leaf("Analysis of Cancer Genomics Data to Identify Driver Mutations"),
            leaf("Development of a Bioinformatics Tool for Phylogenetic Tree Reconstruction"),
            leaf("Role of Bioinformatics in Personalized Medicine"),
            leaf("Study on the Use of AI in Drug Discovery"),
            leaf("Development of a Bioinformatics Tool for Gene Expression Analysis"),
            leaf("Analysis of the Role of Bioinformatics in Agriculture"),
            leaf("Study on the Use of Bioinformatics in Environmental Protection"),
            leaf("Development of a Bioinformatics Tool for Protein-Protein Interaction Prediction"),
            leaf("Analysis of the Role of Bioinformatics in the Food Industry"),
            leaf("Study on the Use of Bioinformatics in Forensics"),
            leaf("Development of a Bioinformatics Tool for Genetic Data Analysis"),
            leaf("Analysis of the Role of Bioinformatics in the Medical Industry"),
            leaf("Study on the Use of Bioinformatics in Biotechnology"),
            leaf("Development of a Bioinformatics Tool for Drug Discovery"),
            leaf("Analysis of the Role of Bioinformatics in the Pharmaceutical Industry"),
            leaf("Study on the Use of Bioinformatics in Bioremediation"),
            leaf("Development of a Bioinformatics Tool for Gene Therapy"),
            leaf("Analysis of the Role of Bioinformatics in the Biotechnology Industry"),
            leaf("Study on the Use of Bioinformatics in Bioplastics"),
            leaf("Development of a Bioinformatics Tool for Vaccine Production"),
            leaf("Analysis of the Role of Bioinformatics in the Bio-based Chemical Industry"),
            leaf("Study on the Use of Bioinformatics in Biosensors"),
            leaf("Development of a Bioinformatics Tool for Fermentation"),
            leaf("Analysis of the Role of Bioinformatics in the Probiotics Industry"),
            leaf("Study on the Use of Bioinformatics in Vaccine Production"),
            leaf("Development of a Bioinformatics Tool for Protein Production"),
            leaf("Analysis of the Role of Bioinformatics in the Bioremediation Industry"),
            leaf("Study on the Use of Bioinformatics in Food Safety"),
            leaf("Development of a Bioinformatics Tool for Gene Expression Analysis"),
            leaf("Analysis of the Role of Bioinformatics in the Food Industry"),
            leaf("Study on the Use of Bioinformatics in Forensics"),
            leaf("Development of a Bioinformatics Tool for Genetic Data Analysis"),
            leaf("Analysis of the Role of Bioinformatics in the Medical Industry"),
            leaf("Study on the Use of Bioinformatics in Biotechnology"),
            leaf("Development of a Bioinformatics Tool for Drug Discovery"),
            leaf("Analysis of the Role of Bioinformatics in the Pharmaceutical Industry"),
            leaf("Study on the Use of Bioinformatics in Bioremediation"),
            leaf("Development of a Bioinformatics Tool for Gene Therapy"),
            leaf("Analysis of the Role of Bioinformatics in the Biotechnology Industry"),
            leaf("Study on the Use of Bioinformatics in Bioplastics"),
            leaf("Development of a Bioinformatics Tool for Vaccine Production"),
            leaf("Analysis of the Role of Bioinformatics in the Bio-based Chemical Industry"),
            leaf("Study on the Use of Bioinformatics in Biosensors"),
            leaf("Development of a Bioinformatics Tool for Fermentation"),
            leaf("Analysis of the Role of Bioinformatics in the Probiotics Industry"),
        ],
    },
    {
        name: "Biotechnology",
        children: [
            leaf("CRISPR-Cas9 Off-Target Prediction Model using Bioinformatics"),
            leaf("Bioreactor Process Optimization using AI and Machine Learning"),
            leaf("Stem Cell Differentiation and Application in Regenerative Medicine"),
            leaf("Development of a Novel Biopharmaceutical for a Specific Disease"),
            leaf("Analysis of the Ethical and Social Implications of Genetic Engineering"),
            leaf("Study on the Use of Nanotechnology in Drug Delivery"),
            leaf("Development of a Bioreactor for Biofuel Production from Algae"),
            leaf("Analysis of the Use of Enzymes in Industrial Processes"),
            leaf("Role of Biotechnology in Waste Management"),
            leaf("A Study on the Production of Bioplastics"),
            leaf("Development of a Bioreactor for Biodiesel Production"),
            leaf("Analysis of the Use of Microbes in Environmental Cleanup"),
            leaf("Role of Biotechnology in Human Health"),
            leaf("A Study on the Production of Biopesticides"),
            leaf("Development of a Bioreactor for Biogas Production"),
            leaf("Analysis of the Use of Genetic Engineering in Food Production"),
            leaf("Role of Biotechnology in Animal Husbandry"),
            leaf("A Study on the Production of Single-Cell Protein"),
            leaf("Development of a Bioreactor for Enzyme Production"),
            leaf("Analysis of the Use of Biotechnology in Cosmetics"),
            leaf("Role of Biotechnology in Forensics"),
            leaf("A Study on the Production of Biopolymers"),
            leaf("Development of a Bioreactor for Vitamin Production"),
            leaf("Analysis of the Use of Biotechnology in Energy Production"),
            leaf("Role of Biotechnology in Water Treatment"),
            leaf("A Study on the Production of Bioplastics"),
            leaf("Development of a Bioreactor for Amino Acid Production"),
            leaf("Analysis of the Use of Biotechnology in Textiles"),
            leaf("Role of Biotechnology in Agriculture"),
            leaf("A Study on the Production of Biopharmaceuticals"),
            leaf("Development of a Bioreactor for Protein Production"),
            leaf("Analysis of the Use of Biotechnology in Waste Management"),
            leaf("Role of Biotechnology in the Food Industry"),
            leaf("A Study on the Production of Biofuels"),
            leaf("Development of a Bioreactor for Vaccine Production"),
            leaf("Analysis of the Use of Biotechnology in Environmental Protection"),
            leaf("Role of Biotechnology in the Medical Industry"),
            leaf("A Study on the Production of Bio-based Chemicals"),
            leaf("Development of a Bioreactor for Bioremediation"),
            leaf("Analysis of the Use of Biotechnology in the Pharmaceutical Industry"),
            leaf("Role of Biotechnology in the Biotechnology Industry"),
            leaf("A Study on the Production of Bioplastics"),
            leaf("Development of a Bioreactor for Bioremediation"),
            leaf("Analysis of the Use of Biotechnology in the Pharmaceutical Industry"),
            leaf("Role of Biotechnology in the Biotechnology Industry"),
            leaf("A Study on the Production of Bioplastics"),
            leaf("Development of a Bioreactor for Bioremediation"),
            leaf("Analysis of the Use of Biotechnology in the Pharmaceutical Industry"),
            leaf("Role of Biotechnology in the Biotechnology Industry"),
            leaf("A Study on the Production of Bioplastics"),
        ],
    },
    {
        name: "Botany",
        children: [
            leaf("Plant Metabolomics Data Analysis and Interpretation"),
            leaf("Molecular Phylogenetics of a Plant Family"),
            leaf("Genomic Analysis of Crop Resilience to Climate Change"),
            leaf("Development of an Automated Plant Phenotyping System"),
            leaf("Study on the Conservation of Endangered Plant Species"),
            leaf("Analysis of the Effects of a Plant Hormone on Gene Expression"),
            leaf("Role of Biotechnology in Crop Improvement"),
            leaf("Study on the Use of CRISPR-Cas9 in Plant Genetics"),
            leaf("Analysis of the Effects of a Herbicide on Plant Growth"),
            leaf("Role of Plant Pathology in Disease Management"),
            leaf("Study on the Use of Nanotechnology in Agriculture"),
            leaf("Analysis of the Effects of a Pesticide on Plant Growth"),
            leaf("Role of Plant Genetics in Crop Breeding"),
            leaf("Study on the Use of Biotechnology in Plant Breeding"),
            leaf("Analysis of the Effects of Air Pollution on Plant Growth"),
            leaf("Role of Plant Biochemistry in Plant Metabolism"),
            leaf("Study on the Use of Gene Therapy in Plants"),
            leaf("Analysis of the Effects of Water Pollution on Plant Growth"),
            leaf("Role of Plant Molecular Biology in Gene Expression"),
            leaf("Study on the Use of Tissue Culture in Plant Breeding"),
            leaf("Analysis of the Effects of Soil Contamination on Plant Growth"),
            leaf("Role of Plant Cytology in Cell Division"),
            leaf("Study on the Use of Plant Hormones in Agriculture"),
            leaf("Analysis of the Effects of Climate Change on Plant Distribution"),
            leaf("Role of Plant Histology in Plant Tissues"),
            leaf("Study on the Use of Plant Anatomy in Plant Classification"),
            leaf("Analysis of the Effects of Salinity on Plant Growth"),
            leaf("Role of Plant Taxonomy in Plant Identification"),
            leaf("Study on the Use of Plant Morphology in Plant Identification"),
            leaf("Analysis of the Effects of Drought on Plant Growth"),
            leaf("Role of Plant Physiology in Plant Adaptation"),
            leaf("Study on the Use of Drones in Agriculture"),
            leaf("Analysis of the Effects of Water Stress on Plant Growth"),
            leaf("Role of Plant Anatomy in Plant Identification"),
            leaf("Study on the Use of GIS in Plant Conservation"),
            leaf("Analysis of the Effects of Soil pH on Plant Growth"),
            leaf("Role of Plant Morphology in Plant Classification"),
            leaf("Study on the Use of Remote Sensing in Agriculture"),
            leaf("Analysis of the Effects of Temperature on Plant Growth"),
            leaf("Role of Plant Systematics in Plant Taxonomy"),
            leaf("Study on the Use of AI in Plant Disease Detection"),
            leaf("Analysis of the Effects of Nutrients on Plant Growth"),
            leaf("Role of Plant Ecology in Ecosystem Management"),
            leaf("Study on the Use of Robotics in Agriculture"),
            leaf("Analysis of the Effects of Herbicides on Plant Growth"),
            leaf("Role of Plant Pathology in Disease Management"),
            leaf("Study on the Use of Nanotechnology in Agriculture"),
            leaf("Analysis of the Effects of Pesticides on Plant Growth"),
            leaf("Role of Plant Genetics in Crop Breeding"),
            leaf("Study on the Use of Biotechnology in Plant Breeding"),
        ],
    },
    {
        name: "Business Administration (MBA)",
        children: [
            leaf("Strategic Analysis of a Global Conglomerate's Diversification Strategy"),
            leaf("Impact of Digital Transformation on Traditional Business Models"),
            leaf("Feasibility Study for a New Market Entry Strategy"),
            leaf("Analysis of Mergers and Acquisitions in the Tech Sector"),
            leaf("Role of AI and Automation in Enhancing Business Operations"),
            leaf("Development of a Corporate Social Responsibility (CSR) Strategy"),
            leaf("Supply Chain Resilience Post-COVID-19"),
            leaf("Financial Modeling for Private Equity Investment"),
            leaf("Human Resource Analytics for Employee Retention"),
            leaf("Innovation Management in Large Organizations"),
            leaf("Strategic Management Analysis of a Fast-Moving Consumer Goods (FMCG) Company"),
            leaf("Impact of Leadership Styles on Employee Motivation and Performance"),
            leaf("Development of a Marketing Plan for a Tech Startup"),
            leaf("A Study on the Effectiveness of Recruitment and Selection Process"),
            leaf("Analysis of Consumer Behavior in the Digital Age"),
            leaf("Role of Corporate Social Responsibility in Brand Building"),
            leaf("Impact of Training and Development on Employee Productivity"),
            leaf("A Study on the Supply Chain Management of a Global Retailer"),
            leaf("Analysis of Organizational Culture and Its Impact on Employee Engagement"),
            leaf("Feasibility Study for a New Business Venture"),
            leaf("Impact of Employee Motivation on Job Performance"),
            leaf("A Study on the Role of Human Resource Management in Business"),
            leaf("Analysis of the Factors Influencing Customer Satisfaction"),
            leaf("Impact of Social Media Marketing on Business"),
            leaf("A Study on the Role of Leadership in Business"),
            leaf("Analysis of the Factors Influencing Employee Turnover"),
            leaf("Impact of Globalization on Business"),
            leaf("A Study on the Role of Management in Business"),
            leaf("Analysis of the Financial Performance of a Company"),
            leaf("Impact of Technology on Business"),
            leaf("A Study on the Role of Entrepreneurship in Business"),
            leaf("Analysis of the Factors Influencing Business Growth"),
            leaf("Impact of the Business Environment on Business"),
            leaf("A Study on the Role of Marketing in Business"),
            leaf("Analysis of the Factors Influencing Business Success"),
            leaf("Impact of the Financial Crisis on Business"),
            leaf("A Study on the Role of E-commerce in Business"),
            leaf("Analysis of the Factors Influencing Business Performance"),
            leaf("Impact of the Internet on Business"),
            leaf("A Study on the Role of Information Technology in Business"),
            leaf("Analysis of the Factors Influencing Business Strategy"),
            leaf("Impact of the Economic Environment on Business"),
            leaf("A Study on the Role of Innovation in Business"),
            leaf("Analysis of the Factors Influencing Business Ethics"),
            leaf("Impact of the Political Environment on Business"),
            leaf("A Study on the Role of Globalization in Business"),
            leaf("Analysis of the Factors Influencing Business Decisions"),
            leaf("Impact of the Legal Environment on Business"),
            leaf("A Study on the Role of Corporate Social Responsibility in Business"),
            leaf("Analysis of the Factors Influencing Business Operations"),
        ],
    },
    {
        name: "Chemistry",
        children: [
            leaf("Computational Chemistry for Rational Drug Design"),
            leaf("Synthesis and Characterization of Novel Nanomaterials"),
            leaf("Advanced Spectroscopic Analysis of Organic Compounds"),
            leaf("Green Chemistry Synthesis of a Pharmaceutical Intermediate"),
            leaf("Kinetic and Thermodynamic Studies of a Catalytic Reaction"),
            leaf("Development of a Novel Sensor for Heavy Metal Detection"),
            leaf("Quantum Chemical Calculations of Molecular Properties"),
            leaf("Analysis of Environmental Pollutants and Their Degradation"),
            leaf("Materials Science: Synthesis of Biodegradable Polymers"),
            leaf("Advanced Mass Spectrometry for Metabolomics"),
            leaf("Synthesis and Characterization of Novel Nanoparticles"),
            leaf("Study on the Adsorption of Heavy Metals from Water"),
            leaf("Development of a Green Chemistry Synthesis of an Organic Compound"),
            leaf("Analysis of the Composition of a Local Water Source"),
            leaf("Study on the Effects of a Catalyst on a Chemical Reaction"),
            leaf("Development of a Lab Automation System for Titration"),
            leaf("Analysis of the Purity of a Chemical Compound"),
            leaf("Role of Enzymes in Industrial Processes"),
            leaf("Study on the Synthesis of Biodegradable Polymers"),
            leaf("Development of a Colorimetric Sensor for Ion Detection"),
            leaf("Analysis of the Effects of Temperature on a Chemical Reaction"),
            leaf("Role of Spectroscopy in Chemical Analysis"),
            leaf("Study on the Synthesis of a Medicinal Compound"),
            leaf("Development of a Novel Method for Drug Delivery"),
            leaf("Analysis of the Effects of pH on a Chemical Reaction"),
            leaf("Role of Chromatography in Chemical Separation"),
            leaf("Study on the Synthesis of a Pigment"),
            leaf("Development of a Novel Method for Chemical Analysis"),
            leaf("Analysis of the Effects of Pressure on a Chemical Reaction"),
            leaf("Role of Mass Spectrometry in Chemical Identification"),
            leaf("Study on the Synthesis of a Dye"),
            leaf("Development of a Novel Method for Chemical Synthesis"),
            leaf("Analysis of the Effects of Concentration on a Chemical Reaction"),
            leaf("Role of NMR Spectroscopy in Chemical Structure Determination"),
            leaf("Study on the Synthesis of a Flavoring Agent"),
            leaf("Development of a Novel Method for Chemical Separation"),
            leaf("Analysis of the Effects of a Solvent on a Chemical Reaction"),
            leaf("Role of X-ray Crystallography in Chemical Structure Determination"),
            leaf("Study on the Synthesis of a Fragrance"),
            leaf("Development of a Novel Method for Chemical Identification"),
            leaf("Analysis of the Effects of a Catalyst on a Chemical Reaction"),
            leaf("Role of IR Spectroscopy in Chemical Analysis"),
            leaf("Study on the Synthesis of a Food Additive"),
            leaf("Development of a Novel Method for Chemical Purification"),
            leaf("Analysis of the Effects of a Reagent on a Chemical Reaction"),
            leaf("Role of UV-Vis Spectroscopy in Chemical Analysis"),
            leaf("Study on the Synthesis of a Polymer"),
            leaf("Development of a Novel Method for Chemical Characterization"),
            leaf("Analysis of the Effects of a Co-solvent on a Chemical Reaction"),
            leaf("Role of Raman Spectroscopy in Chemical Analysis"),
        ],
    },
    {
        name: "Clinical Psychology",
        children: [
            leaf("Development of a Mobile App for Mental Health Intervention"),
            leaf("Effectiveness of Cognitive Behavioral Therapy (CBT) for Social Anxiety"),
            leaf("Neuropsychological Assessment of Cognitive Function in Alzheimer's Patients"),
            leaf("Analysis of the Role of a Therapist in Mental Health Recovery"),
            leaf("Impact of Trauma-Informed Care on Patient Outcomes"),
            leaf("A Study on the Role of Social Support in Stress Management"),
            leaf("Analysis of the Factors Influencing Patient Adherence to Therapy"),
            leaf("A Study on the Role of a Clinical Psychologist in a Hospital"),
            leaf("Impact of a Mental Health Awareness Program on Stigma"),
            leaf("A Study on the Role of a Clinical Psychologist in a School"),
            leaf("Analysis of the Factors Influencing Patient Satisfaction with Therapy"),
            leaf("Impact of a Clinical Psychology Intervention on a Patient's Health"),
            leaf("A Study on the Role of a Clinical Psychologist in a Clinic"),
            leaf("Analysis of the Factors Influencing Patient Communication"),
            leaf("Impact of a Clinical Psychology Intervention on a Patient's Quality of Life"),
            leaf("A Study on the Role of a Clinical Psychologist in a Community"),
            leaf("Analysis of the Factors Influencing Patient Self-Care"),
            leaf("Impact of a Clinical Psychology Intervention on a Patient's Recovery"),
            leaf("A Study on the Role of a Clinical Psychologist in a Public Health System"),
            leaf("Analysis of the Factors Influencing Patient Health Literacy"),
            leaf("Impact of a Clinical Psychology Intervention on a Patient's Mental Health"),
            leaf("A Study on the Role of a Clinical Psychologist in a Business"),
            leaf("Analysis of the Factors Influencing Patient Family Involvement"),
            leaf("Impact of a Clinical Psychology Intervention on a Patient's Well-being"),
            leaf("A Study on the Role of a Clinical Psychologist in a Forensic Setting"),
            leaf("Analysis of the Factors Influencing Patient Spiritual Well-being"),
            leaf("Impact of a Clinical Psychology Intervention on a Patient's Stress"),
            leaf("A Study on the Role of a Clinical Psychologist in a School"),
            leaf("Analysis of the Factors Influencing Patient Anxiety"),
            leaf("Impact of a Clinical Psychology Intervention on a Patient's Depression"),
            leaf("A Study on the Role of a Clinical Psychologist in a Hospital"),
            leaf("Analysis of the Factors Influencing Patient Sleep Quality"),
            leaf("Impact of a Clinical Psychology Intervention on a Patient's Pain Management"),
            leaf("A Study on the Role of a Clinical Psychologist in a Clinic"),
            leaf("Analysis of the Factors Influencing Patient Family Support"),
            leaf("Impact of a Clinical Psychology Intervention on a Patient's Social Support"),
            leaf("A Study on the Role of a Clinical Psychologist in a Community"),
            leaf("Analysis of the Factors Influencing Patient Coping Mechanisms"),
            leaf("Impact of a Clinical Psychology Intervention on a Patient's Emotional Regulation"),
            leaf("A Study on the Role of a Clinical Psychologist in a Public Health System"),
            leaf("Analysis of the Factors Influencing Patient Self-Esteem"),
            leaf("Impact of a Clinical Psychology Intervention on a Patient's Resilience"),
            leaf("A Study on the Role of a Clinical Psychologist in a Business"),
            leaf("Analysis of the Factors Influencing Patient Academic Performance"),
            leaf("Impact of a Clinical Psychology Intervention on a Patient's Job Satisfaction"),
            leaf("A Study on the Role of a Clinical Psychologist in a Forensic Setting"),
            leaf("Analysis of the Factors Influencing Patient Decision Making"),
            leaf("Impact of a Clinical Psychology Intervention on a Patient's Problem Solving"),
            leaf("A Study on the Role of a Clinical Psychologist in a School"),
            leaf("Analysis of the Factors Influencing Patient Social Skills"),
        ],
    },
    {
        name: "Communication & Journalism",
        children: [
            leaf("Analysis of Media Framing of a Political Event"),
            leaf("Impact of AI on the Future of Journalism"),
            leaf("Development of a Data-Driven Investigative Journalism Platform"),
            leaf("Role of Social Media in Shaping Public Opinion"),
            leaf("Analysis of Media Ethics in the Digital Age"),
            leaf("A Study on the Effectiveness of Public Relations in Crisis Management"),
            leaf("Impact of a Communication Campaign on a Social Issue"),
            leaf("A Study on the Role of a Journalist in a Democratic Society"),
            leaf("Analysis of the Factors Influencing Media Consumption"),
            leaf("Impact of Technology on Mass Communication"),
            leaf("A Study on the Role of Mass Communication in Business"),
            leaf("Analysis of the Factors Influencing Communication Strategy"),
            leaf("Impact of the Internet on Mass Communication"),
            leaf("A Study on the Role of Information Technology in Mass Communication"),
            leaf("Analysis of the Factors Influencing Communication Performance"),
            leaf("Impact of Globalization on Mass Communication"),
            leaf("A Study on the Role of Corporate Social Responsibility in Mass Communication"),
            leaf("Analysis of the Factors Influencing Communication Ethics"),
            leaf("Impact of the Political Environment on Mass Communication"),
            leaf("A Study on the Role of Quality Management in Mass Communication"),
            leaf("Analysis of the Factors Influencing Communication Planning"),
            leaf("Impact of the Legal Environment on Mass Communication"),
            leaf("A Study on the Role of Change Management in Mass Communication"),
            leaf("Analysis of the Factors Influencing Communication Sustainability"),
            leaf("Impact of the Social Environment on Mass Communication"),
            leaf("A Study on the Role of Supply Chain Management in Mass Communication"),
            leaf("Analysis of the Factors Influencing Communication Operations"),
            leaf("Impact of the Cultural Environment on Mass Communication"),
            leaf("A Study on the Role of Communication Research"),
            leaf("Analysis of the Factors Influencing Communication Strategy"),
            leaf("Impact of the Technological Environment on Mass Communication"),
            leaf("A Study on the Role of Branding in Mass Communication"),
            leaf("Analysis of the Factors Influencing Communication Communication"),
            leaf("Impact of the Ecological Environment on Mass Communication"),
            leaf("A Study on the Role of Social Media in Mass Communication"),
            leaf("Analysis of the Factors Influencing Communication Decisions"),
            leaf("Impact of the Financial Crisis on Mass Communication"),
            leaf("A Study on the Role of E-commerce in Mass Communication"),
            leaf("Analysis of the Factors Influencing Communication Business Growth"),
            leaf("Impact of the Internet on Mass Communication"),
            leaf("A Study on the Role of Information Technology in Mass Communication"),
            leaf("Analysis of the Factors Influencing Communication Business Strategy"),
            leaf("Impact of the Financial Crisis on Mass Communication"),
            leaf("A Study on the Role of Social Media in Mass Communication"),
            leaf("Analysis of the Factors Influencing Communication Performance"),
            leaf("Impact of the Internet on Mass Communication"),
            leaf("A Study on the Role of Information Technology in Mass Communication"),
            leaf("Analysis of the Factors Influencing Communication Business Growth"),
            leaf("Impact of the Financial Crisis on Mass Communication"),
            leaf("A Study on the Role of Social Media in Mass Communication"),
        ],
    },
    {
        name: "Computer Applications (MCA)",
        children: [
            leaf("Development of a Serverless E-commerce Application on AWS"),
            leaf("Design and Implementation of a Microservices Architecture for a Social Network"),
            leaf("Blockchain-based Document Verification System for Academic Credentials"),
            leaf("Building a Scalable Data Pipeline for Real-Time Analytics"),
            leaf("Implementation of a DevOps Workflow for an Enterprise Application"),
            leaf("Development of an AI-Powered Healthcare Diagnostic System"),
            leaf("Design of a Secure Multi-Tenant Architecture on Azure"),
            leaf("Building a Data Warehouse for Business Intelligence"),
            leaf("Implementation of a Disaster Recovery Plan for a Company"),
            leaf("Development of a Human Resource Management System"),
            leaf("Design of a Patient Management System"),
            leaf("Building a Library Management System"),
            leaf("Implementation of a School Management System"),
            leaf("Development of a Hospital Management System"),
            leaf("Design of a Payroll Management System"),
            leaf("Building a Transport Management System"),
            leaf("Implementation of a Hotel Management System"),
            leaf("Development of a Clinic Management System"),
            leaf("Design of a Gym Management System"),
            leaf("Building a Retail Management System"),
            leaf("Implementation of a Real Estate Management System"),
            leaf("Development of a Job Portal Website"),
            leaf("Design of a University Event Management System"),
            leaf("Building a University Management System"),
            leaf("Implementation of a College Management System"),
            leaf("Development of a School Management System"),
            leaf("Design of a Hospital Management System"),
            leaf("Building a Library Management System"),
            leaf("Implementation of a Payroll Management System"),
            leaf("Development of a Transport Management System"),
            leaf("Design of a Hotel Management System"),
            leaf("Building a Clinic Management System"),
            leaf("Implementation of a Gym Management System"),
            leaf("Development of a Retail Management System"),
            leaf("Design of a Real Estate Management System"),
            leaf("Building a Job Portal Website"),
            leaf("Implementation of a University Event Management System"),
            leaf("Development of a University Management System"),
            leaf("Design of a College Management System"),
            leaf("Building a School Management System"),
            leaf("Implementation of a Hospital Management System"),
            leaf("Development of a Library Management System"),
            leaf("Design of a Payroll Management System"),
            leaf("Building a Transport Management System"),
            leaf("Implementation of a Hotel Management System"),
            leaf("Development of a Clinic Management System"),
            leaf("Design of a Gym Management System"),
            leaf("Building a Retail Management System"),
            leaf("Implementation of a Real Estate Management System"),
            leaf("Development of a Job Portal Website"),
        ],
    },
    {
        name: "Data Science",
        children: [
            leaf("Predictive Analysis of Financial Market Trends using Deep Learning"),
            leaf("Natural Language Generation (NLG) for Automated Report Writing"),
            leaf("Reinforcement Learning for Game AI"),
            leaf("Anomaly Detection in Network Traffic using Autoencoders"),
            leaf("Graph Neural Networks for Social Network Analysis"),
            leaf("Causal Inference for A/B Testing in E-commerce"),
            leaf("Time-Series Forecasting for Energy Consumption"),
            leaf("Multimodal Emotion Recognition from Text and Images"),
            leaf("AI-Powered Chatbot for Customer Service"),
            leaf("Computer Vision for Medical Image Analysis"),
            leaf("Predictive Analytics for Customer Churn"),
            leaf("Analysis of E-commerce Customer Behavior"),
            leaf("Predictive Analytics for Sales Forecasting"),
            leaf("Analysis of Social Media Network Data"),
            leaf("Predictive Analytics for Student Performance"),
            leaf("Analysis of Healthcare Data for Disease Prediction"),
            leaf("Predictive Analytics for Loan Default Prediction"),
            leaf("Analysis of Music Streaming Data for Recommendation"),
            leaf("Predictive Analytics for Customer Segmentation"),
            leaf("Analysis of Business Process Data for Optimization"),
            leaf("Predictive Analytics for Employee Attrition"),
            leaf("Analysis of Retail Sales Data"),
            leaf("Predictive Analytics for Supply Chain Demand"),
            leaf("Analysis of Customer Demographics Data"),
            leaf("Predictive Analytics for Customer Behavior"),
            leaf("Analysis of Website Traffic Data"),
            leaf("Predictive Analytics for Online Ad Click-Through Rates"),
            leaf("Analysis of Customer Complaints Data"),
            leaf("Predictive Analytics for Patient No-Show Prediction"),
            leaf("Analysis of Social Media Engagement Data"),
            leaf("Predictive Analytics for Customer Churn"),
            leaf("Analysis of Financial Transaction Data"),
            leaf("Predictive Analytics for Fraud Detection"),
            leaf("Analysis of Human Resources Data"),
            leaf("Predictive Analytics for Market Basket Analysis"),
            leaf("Analysis of Marketing Campaign Data"),
            leaf("Predictive Analytics for Customer Lifetime Value"),
            leaf("Analysis of E-commerce Customer Data"),
            leaf("Predictive Analytics for Loan Default Prediction"),
            leaf("Analysis of Supply Chain Data"),
            leaf("Predictive Analytics for Customer Segmentation"),
            leaf("Analysis of Healthcare Data"),
            leaf("Predictive Analytics for Disease Prediction"),
            leaf("Analysis of Social Media Data"),
            leaf("Predictive Analytics for Sports Outcome Prediction"),
            leaf("Analysis of Flight Delay Data for Airline Optimization"),
            leaf("Predictive Analytics for Housing Price Prediction"),
            leaf("Analysis of Movie Ratings Data for Recommendation"),
            leaf("Predictive Analytics for Energy Consumption Forecasting"),
            leaf("Analysis of E-commerce Product Returns"),
        ],
    },
    {
        name: "Economics",
        children: [
            leaf("Econometric Analysis of the Impact of AI on Labor Markets"),
            leaf("Macroeconomic Impact of a Carbon Tax Policy"),
            leaf("Game Theory Models of International Trade Negotiations"),
            leaf("Analysis of Income and Wealth Inequality using Panel Data"),
            leaf("Behavioral Economics of Public Good Provision"),
            leaf("Quantitative Analysis of the Indian Financial Crisis"),
            leaf("Impact of Technology on the Indian Economy"),
            leaf("A Study on the Role of the Reserve Bank of India (RBI)"),
            leaf("Analysis of the Indian Agricultural Sector"),
            leaf("Impact of Globalization on the Indian Economy"),
            leaf("A Study on the Role of the World Bank in Economic Development"),
            leaf("Analysis of the Factors Influencing Foreign Direct Investment"),
            leaf("Impact of a Trade War on the Global Economy"),
            leaf("A Study on the Role of the International Monetary Fund (IMF)"),
            leaf("Analysis of the Factors Influencing Exchange Rates"),
            leaf("Impact of a Financial Crisis on a Country's Economy"),
            leaf("A Study on the Role of the World Trade Organization (WTO)"),
            leaf("Analysis of the Factors Influencing Economic Growth"),
            leaf("Impact of a Fiscal Policy on Economic Growth"),
            leaf("A Study on the Role of a Central Bank in an Economy"),
            leaf("Analysis of the Factors Influencing Inflation"),
            leaf("Impact of a Monetary Policy on Inflation"),
            leaf("A Study on the Role of a Government in an Economy"),
            leaf("Analysis of the Factors Influencing Unemployment"),
            leaf("Impact of a Natural Disaster on a Country's Economy"),
            leaf("A Study on the Role of a Private Sector in an Economy"),
            leaf("Analysis of the Factors Influencing the Price of a Commodity"),
            leaf("Impact of a Political Event on a Country's Economy"),
            leaf("A Study on the Role of a Public Sector in an Economy"),
            leaf("Analysis of the Factors Influencing the Supply of a Good"),
            leaf("Impact of a Technological Advance on an Economy"),
            leaf("A Study on the Role of a Consumer in an Economy"),
            leaf("Analysis of the Factors Influencing the Demand for a Good"),
            leaf("Impact of a Social Trend on an Economy"),
            leaf("A Study on the Role of a Producer in an Economy"),
            leaf("Analysis of the Factors Influencing a Country's Economic Development"),
            leaf("Impact of a Cultural Trend on an Economy"),
            leaf("A Study on the Role of an Entrepreneur in an Economy"),
            leaf("Analysis of the Factors Influencing a Country's Economic Performance"),
            leaf("Impact of an Ecological Event on an Economy"),
            leaf("A Study on the Role of a Labor Union in an Economy"),
            leaf("Analysis of the Factors Influencing a Country's Economic Policy"),
            leaf("Impact of a Political Ideology on an Economy"),
            leaf("A Study on the Role of a Financial Institution in an Economy"),
            leaf("Analysis of the Factors Influencing a Country's Economic Strategy"),
            leaf("Impact of a Legal Change on an Economy"),
            leaf("A Study on the Role of a Non-Profit Organization in an Economy"),
            leaf("Analysis of the Factors Influencing a Country's Economic Sustainability"),
            leaf("Impact of a Social Movement on an Economy"),
            leaf("A Study on the Role of a Business in an Economy"),
        ],
    },
    {
        name: "Electronics",
        children: [
            leaf("Embedded Systems Design for Autonomous Drones"),
            leaf("5G Network Slicing and Orchestration for IoT Applications"),
            leaf("Design of a Secure Communication Protocol for IoT Devices"),
            leaf("Development of a TinyML Model for Edge Computing"),
            leaf("Robotics & Control Systems for Automated Manufacturing"),
            leaf("Implementation of a Digital Twin for a Smart Factory"),
            leaf("Design of a Flexible and Wearable Electronics Sensor"),
            leaf("Development of an Energy-Efficient Wireless Communication System"),
            leaf("Implementation of a Blockchain-based Supply Chain System"),
            leaf("Design of a Smart Grid Monitoring System"),
            leaf("Development of a Humanoid Robot"),
            leaf("Implementation of a Smart City Monitoring System"),
            leaf("Design of a Secure IoT Device"),
            leaf("Development of a Smart Agriculture System"),
            leaf("Implementation of a Smart Home Automation System"),
            leaf("Design of a Smart Grid System"),
            leaf("Development of a Smart City System"),
            leaf("Implementation of a Secure IoT Device"),
            leaf("Design of a Smart Agriculture System"),
            leaf("Development of a Smart Home Automation System"),
            leaf("Implementation of a Smart Grid System"),
            leaf("Design of a Smart City System"),
            leaf("Development of a Secure IoT Device"),
            leaf("Implementation of a Smart Agriculture System"),
            leaf("Design of a Smart Home Automation System"),
            leaf("Development of a Smart Grid System"),
            leaf("Implementation of a Smart City System"),
            leaf("Design of a Secure IoT Device"),
            leaf("Development of a Smart Agriculture System"),
            leaf("Implementation of a Smart Home Automation System"),
            leaf("Design of a Smart Grid System"),
            leaf("Development of a Smart City System"),
            leaf("Implementation of a Secure IoT Device"),
            leaf("Design of a Smart Agriculture System"),
            leaf("Development of a Smart Home Automation System"),
            leaf("Implementation of a Smart Grid System"),
            leaf("Design of a Smart City System"),
            leaf("Development of a Secure IoT Device"),
            leaf("Implementation of a Smart Agriculture System"),
            leaf("Design of a Smart Home Automation System"),
            leaf("Development of a Smart Grid System"),
            leaf("Implementation of a Smart City System"),
            leaf("Design of a Secure IoT Device"),
            leaf("Development of a Smart Agriculture System"),
            leaf("Implementation of a Smart Home Automation System"),
            leaf("Design of a Smart Grid System"),
            leaf("Development of a Smart City System"),
            leaf("Implementation of a Secure IoT Device"),
            leaf("Design of a Smart Agriculture System"),
            leaf("Development of a Smart Home Automation System"),
        ],
    },
    {
        name: "Environmental Science",
        children: [
            leaf("GIS-based Analysis of Deforestation and Its Impact on Biodiversity"),
            leaf("Satellite Imagery Analysis for Monitoring Urban Sprawl"),
            leaf("Advanced Climate Change Modeling and Policy Analysis"),
            leaf("Bioremediation of Contaminated Soil using Microbial Consortia"),
            leaf("Water Quality Assessment and Treatment Plan for a River Basin"),
            leaf("Feasibility Study for a Large-Scale Renewable Energy Project"),
            leaf("Analysis of Air Pollution Sources and Health Impacts"),
            leaf("Sustainable Waste Management and Recycling Program for a City"),
            leaf("Conservation of an Endangered Species' Habitat"),
            leaf("Impact of Land Use Change on Ecosystem Services"),
            leaf("Analysis of the Effects of a Pollution on a River"),
            leaf("Impact of Urban Sprawl on Rural Areas"),
            leaf("A Study on the Role of Remote Sensing in Agriculture"),
            leaf("Analysis of the Effects of Climate Change on Plant Distribution"),
            leaf("Impact of Climate Change on Sea Level Rise"),
            leaf("A Study on the Role of GIS in Public Health"),
            leaf("Analysis of the Effects of Soil Contamination on Agriculture"),
            leaf("Impact of Urbanization on Biodiversity"),
            leaf("A Study on the Role of GIS in Emergency Management"),
            leaf("Analysis of the Effects of Air Pollution on a City"),
            leaf("Impact of Land Use Change on Ecosystem Services"),
            leaf("A Study on the Role of GIS in Crime Analysis"),
            leaf("Analysis of the Effects of Water Pollution on a Lake"),
            leaf("Impact of Noise Pollution on Urban Areas"),
            leaf("A Study on the Role of GIS in Marketing"),
            leaf("Analysis of the Effects of Light Pollution on an Ecosystem"),
            leaf("Impact of Climate Change on Animal Migration"),
            leaf("A Study on the Role of GIS in Business"),
            leaf("Analysis of the Effects of Deforestation on Animal Habitats"),
            leaf("Impact of Urbanization on Water Resources"),
            leaf("A Study on the Role of GIS in Transportation Planning"),
            leaf("Analysis of the Effects of Water Scarcity on Agriculture"),
            leaf("Impact of Climate Change on Coastal Erosion"),
            leaf("A Study on the Role of GIS in Natural Resource Management"),
            leaf("Analysis of the Effects of Soil Erosion on Agriculture"),
            leaf("Impact of Desertification on a Region"),
            leaf("A Study on the Role of GIS in Urban Planning"),
            leaf("Analysis of the Effects of Air Pollution on Human Health"),
            leaf("Impact of Urbanization on Public Health"),
            leaf("A Study on the Role of GIS in Environmental Management"),
            leaf("Analysis of the Effects of Water Pollution on Human Health"),
            leaf("Impact of Climate Change on Forest Fires"),
            leaf("A Study on the Role of GIS in Agriculture"),
            leaf("Analysis of the Effects of Soil Contamination on Human Health"),
            leaf("Impact of E-waste on the Environment"),
            leaf("A Study on the Role of GIS in Public Administration"),
            leaf("Analysis of the Effects of Land Use Change on Biodiversity"),
            leaf("Impact of Deforestation on Ecosystems"),
            leaf("A Study on the Role of a GIS in a Country's Governance"),
            leaf("Analysis of the Effects of a Pollution on a River"),
        ],
    },
    {
        name: "Food & Nutrition",
        children: [
            leaf("Analysis of Food Science and Technology Innovation"),
            leaf("Study on the Impact of Nutritional Genomics and Epigenetics"),
            leaf("Public Health Nutrition Program Evaluation"),
            leaf("Analysis of the Role of a Diet on a Person's Mental Health"),
            leaf("Study on the Use of Technology in Food Production"),
            leaf("Impact of a Food Safety Regulation on a Business"),
            leaf("Analysis of the Factors Influencing Food Waste"),
            leaf("A Study on the Role of a Food Additive on a Person's Health"),
            leaf("Impact of a Nutrition Policy on a Country's Economy"),
            leaf("A Study on the Role of a Food Label on a Person's Food Choices"),
            leaf("Impact of a Nutrition Intervention on a Patient's Recovery"),
            leaf("Analysis of the Factors Influencing Food Marketing"),
            leaf("A Study on the Role of a Food Bank in a Community"),
            leaf("Impact of a Nutrition Policy on a Country's Society"),
            leaf("Analysis of the Factors Influencing Food Distribution"),
            leaf("A Study on the Role of a Nutritionist in a Clinical Setting"),
            leaf("Impact of a Nutrition Intervention on a Patient's Quality of Life"),
            leaf("Analysis of the Factors Influencing Food Waste"),
            leaf("A Study on the Role of a Food Service in a Hospital"),
            leaf("Impact of a Nutrition Program on a Community's Health"),
            leaf("Analysis of the Factors Influencing Food Safety"),
            leaf("A Study on the Role of a Nutrition Education Program in a School"),
            leaf("Impact of a Nutrition Intervention on a Patient's Pain Management"),
            leaf("Analysis of the Factors Influencing Food Production"),
            leaf("A Study on the Role of a Food Label on a Person's Food Choices"),
            leaf("Impact of a Nutrition Intervention on a Patient's Recovery"),
            leaf("Analysis of the Factors Influencing Food Marketing"),
            leaf("A Study on the Role of a Food Bank in a Community"),
            leaf("Impact of a Nutrition Policy on a Country's Society"),
            leaf("Analysis of the Factors Influencing Food Distribution"),
            leaf("A Study on the Role of a Nutritionist in a Clinical Setting"),
            leaf("Impact of a Nutrition Intervention on a Patient's Quality of Life"),
            leaf("Analysis of the Factors Influencing Food Waste"),
            leaf("A Study on the Role of a Food Service in a Hospital"),
            leaf("Impact of a Nutrition Program on a Community's Health"),
            leaf("Analysis of the Factors Influencing Food Safety"),
            leaf("A Study on the Role of a Nutrition Education Program in a School"),
            leaf("Impact of a Nutrition Intervention on a Patient's Pain Management"),
            leaf("Analysis of the Factors Influencing Food Production"),
            leaf("A Study on the Role of a Food Label on a Person's Food Choices"),
            leaf("Impact of a Nutrition Intervention on a Patient's Recovery"),
            leaf("Analysis of the Factors Influencing Food Marketing"),
            leaf("A Study on the Role of a Food Bank in a Community"),
            leaf("Impact of a Nutrition Policy on a Country's Society"),
            leaf("Analysis of the Factors Influencing Food Distribution"),
            leaf("A Study on the Role of a Nutritionist in a Clinical Setting"),
            leaf("Impact of a Nutrition Intervention on a Patient's Quality of Life"),
            leaf("Analysis of the Factors Influencing Food Waste"),
            leaf("A Study on the Role of a Food Service in a Hospital"),
            leaf("Impact of a Nutrition Program on a Community's Health"),
        ],
    },
    {
        name: "Foreign Trade",
        children: [
            leaf("Impact of Geopolitical Tensions on Global Supply Chains"),
            leaf("Analysis of a Country's Foreign Trade Analytics Dashboard"),
            leaf("A Study on the Effectiveness of Export Compliance and Risk Management"),
            leaf("Impact of a Digitalization of Trade Documentation"),
            leaf("Analysis of the Role of a Free Trade Agreement (FTA)"),
            leaf("A Study on the Role of a Trade Promotion Council"),
            leaf("Impact of a Trade War on the Global Economy"),
            leaf("A Study on the Role of a Customs Duty in International Trade"),
            leaf("Analysis of the Factors Influencing Foreign Direct Investment"),
            leaf("Impact of a Trade Barrier on Foreign Trade"),
            leaf("A Study on the Role of a Foreign Exchange Market"),
            leaf("Analysis of the Factors Influencing Foreign Trade"),
            leaf("Impact of a Financial Crisis on Foreign Trade"),
            leaf("A Study on the Role of a Trade Agreement"),
            leaf("Analysis of the Factors Influencing Foreign Trade Policy"),
            leaf("Impact of a Political Event on Foreign Trade"),
            leaf("A Study on the Role of a Trade Logistics"),
            leaf("Analysis of the Factors Influencing Foreign Trade Decisions"),
            leaf("Impact of a Legal Change on Foreign Trade"),
            leaf("A Study on the Role of a Trade Finance"),
            leaf("Analysis of the Factors Influencing Foreign Trade Operations"),
            leaf("Impact of a Social Trend on Foreign Trade"),
            leaf("A Study on the Role of a Trade Facilitation"),
            leaf("Analysis of the Factors Influencing Foreign Trade Strategy"),
            leaf("Impact of a Cultural Trend on Foreign Trade"),
            leaf("A Study on the Role of a Trade Law"),
            leaf("Analysis of the Factors Influencing Foreign Trade Sustainability"),
            leaf("Impact of an Ecological Event on Foreign Trade"),
            leaf("A Study on the Role of a Foreign Direct Investment"),
            leaf("Analysis of the Factors Influencing Foreign Trade Performance"),
            leaf("Impact of an Internet on Foreign Trade"),
            leaf("A Study on the Role of a E-commerce in Foreign Trade"),
            leaf("Analysis of the Factors Influencing Foreign Trade Business Growth"),
            leaf("Impact of an Information Technology on Foreign Trade"),
            leaf("A Study on the Role of a Social Media in Foreign Trade"),
            leaf("Analysis of the Factors Influencing Foreign Trade Business Strategy"),
            leaf("Impact of a Financial Crisis on Foreign Trade"),
            leaf("A Study on the Role of a Supply Chain Management in Foreign Trade"),
            leaf("Analysis of the Factors Influencing Foreign Trade Operations"),
            leaf("Impact of a Cultural Trend on Foreign Trade"),
            leaf("A Study on the Role of a Trade Research"),
            leaf("Analysis of the Factors Influencing Foreign Trade Communication"),
            leaf("Impact of a Technological Advance on Foreign Trade"),
            leaf("A Study on the Role of a Trade Promotion Council"),
            leaf("Analysis of the Factors Influencing Foreign Trade Decisions"),
            leaf("Impact of a Trade Barrier on Foreign Trade"),
            leaf("A Study on the Role of a Foreign Exchange Market"),
            leaf("Analysis of the Factors Influencing Foreign Trade"),
            leaf("Impact of a Financial Crisis on Foreign Trade"),
            leaf("A Study on the Role of a Trade Agreement"),
        ],
    },
    {
        name: "Genetics",
        children: [
            leaf("Conservation Genetics of an Endangered Species"),
            leaf("Genomic Variant Annotation and Interpretation Pipeline"),
            leaf("Population Genetics and Ancestry Analysis"),
            leaf("Study on the Use of CRISPR-Cas9 in Gene Editing"),
            leaf("Impact of a Genetic Disorder on a Patient's Health"),
            leaf("Development of a Diagnostic Kit for a Genetic Disorder"),
            leaf("Analysis of Gene Expression and Regulation in Cancer Cells"),
            leaf("A Study on the Genetic Basis of Drug Resistance in Bacteria"),
            leaf("Impact of a Gene Therapy on a Patient's Health"),
            leaf("A Study on the Role of a Gene in a Disease"),
            leaf("Analysis of the Factors Influencing a Species' Survival"),
            leaf("Impact of a Genetic Mutation on a Patient's Health"),
            leaf("A Study on the Role of a Gene in a Trait"),
            leaf("Analysis of the Factors Influencing a Species' Reproduction"),
            leaf("Impact of a Genetic Engineering on a Species' Survival"),
            leaf("A Study on the Role of a Gene in a Behavior"),
            leaf("Analysis of the Factors Influencing a Species' Diet"),
            leaf("Impact of a Genetic Disorder on a Patient's Life"),
            leaf("A Study on the Role of a Gene in a Disease"),
            leaf("Analysis of the Factors Influencing a Species' Communication"),
            leaf("Impact of a Genetic Mutation on a Patient's Life"),
            leaf("A Study on the Role of a Gene in a Trait"),
            leaf("Analysis of the Factors Influencing a Species' Lifespan"),
            leaf("Impact of a Genetic Engineering on a Species' Reproduction"),
            leaf("A Study on the Role of a Gene in a Behavior"),
            leaf("Analysis of the Factors Influencing a Species' Social Structure"),
            leaf("Impact of a Genetic Disorder on a Patient's Health"),
            leaf("A Study on the Role of a Gene in a Disease"),
            leaf("Analysis of the Factors Influencing a Species' Intelligence"),
            leaf("Impact of a Genetic Mutation on a Patient's Health"),
            leaf("A Study on the Role of a Gene in a Trait"),
            leaf("Analysis of the Factors Influencing a Species' Emotions"),
            leaf("Impact of a Genetic Engineering on a Species' Intelligence"),
            leaf("A Study on the Role of a Gene in a Behavior"),
            leaf("Analysis of the Factors Influencing a Species' Personality"),
            leaf("Impact of a Genetic Disorder on a Patient's Mental Health"),
            leaf("A Study on the Role of a Gene in a Disease"),
            leaf("Analysis of the Factors Influencing a Species' Stress"),
            leaf("Impact of a Genetic Mutation on a Patient's Mental Health"),
            leaf("A Study on the Role of a Gene in a Trait"),
            leaf("Analysis of the Factors Influencing a Species' Anxiety"),
            leaf("Impact of a Genetic Engineering on a Species' Emotions"),
            leaf("A Study on the Role of a Gene in a Behavior"),
            leaf("Analysis of the Factors Influencing a Species' Learning"),
            leaf("Impact of a Genetic Disorder on a Patient's Social Skills"),
            leaf("A Study on the Role of a Gene in a Disease"),
            leaf("Analysis of the Factors Influencing a Species' Problem Solving"),
            leaf("Impact of a Genetic Mutation on a Patient's Social Skills"),
            leaf("A Study on the Role of a Gene in a Trait"),
            leaf("Analysis of the Factors Influencing a Species' Leadership Skills"),
        ],
    },
    {
        name: "Geology",
        children: [
            leaf("Advanced Seismic Data Analysis for Hydrocarbon Exploration"),
            leaf("GIS and Remote Sensing for Mineral Resource Mapping"),
            leaf("Geological Hazard Prediction System using Machine Learning"),
            leaf("Hydrogeological Modeling for Groundwater Management"),
            leaf("Analysis of Paleoclimatic Events and Their Geological Evidence"),
            leaf("Engineering Geology for Large-Scale Construction Projects"),
            leaf("Geochemical Analysis of Volcanic Rocks to Understand Magmatic Processes"),
            leaf("Analysis of the Effects of Tectonic Plate Movement on Mountain Ranges"),
            leaf("Study on the Formation of a Volcano"),
            leaf("Analysis of the Effects of Erosion on a Riverbed"),
            leaf("Role of Paleontology in Reconstructing Ancient Ecosystems"),
            leaf("Study on the Geochemical Analysis of a Rock Sample"),
            leaf("Analysis of the Effects of Climate Change on Glaciers"),
            leaf("Role of Geophysics in Subsurface Exploration"),
            leaf("Study on the Formation of a Cave"),
            leaf("Analysis of the Effects of Weathering on a Rock Formation"),
            leaf("Role of Petrology in Rock Classification"),
            leaf("Study on the Formation of a Glacier"),
            leaf("Analysis of the Effects of Volcanic Eruptions on the Environment"),
            leaf("Role of Sedimentology in Sedimentary Rock Formation"),
            leaf("Study on the Formation of a Sand Dune"),
            leaf("Analysis of the Effects of Earthquakes on Buildings"),
            leaf("Role of Structural Geology in Tectonic Plate Movement"),
            leaf("Study on the Formation of a Geyser"),
            leaf("Analysis of the Effects of Tsunamis on Coastal Areas"),
            leaf("Role of Hydrogeology in Groundwater Management"),
            leaf("Study on the Formation of a Hot Spring"),
            leaf("Analysis of the Effects of Landslides on the Environment"),
            leaf("Role of Economic Geology in Mineral Resource Exploration"),
            leaf("Study on the Formation of a Canyon"),
            leaf("Analysis of the Effects of Volcanic Eruptions on Climate"),
            leaf("Role of Environmental Geology in Pollution Control"),
            leaf("Study on the Formation of a Coral Reef"),
            leaf("Analysis of the Effects of Earthquakes on the Environment"),
            leaf("Role of Planetary Geology in the Study of Other Planets"),
            leaf("Study on the Formation of a Meteorite Crater"),
            leaf("Analysis of the Effects of Tsunamis on Human Health"),
            leaf("Role of Engineering Geology in Construction"),
            leaf("Study on the Formation of a Cave System"),
            leaf("Analysis of the Effects of Landslides on Human Health"),
            leaf("Role of Geochemistry in Chemical Analysis of Rocks"),
            leaf("Study on the Formation of a Volcano"),
            leaf("Analysis of the Effects of Volcanic Eruptions on Human Health"),
            leaf("Role of Paleomagnetism in Plate Tectonics"),
            leaf("Study on the Formation of a Fault"),
            leaf("Analysis of the Effects of Earthquakes on the Environment"),
            leaf("Role of Seismology in Earthquake Prediction"),
            leaf("Study on the Formation of a Fold"),
            leaf("Analysis of the Effects of Tsunamis on the Environment"),
            leaf("Role of Glaciology in the Study of Glaciers"),
        ],
    },
  ]
*/