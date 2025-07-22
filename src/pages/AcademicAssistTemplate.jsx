import React from 'react';

const AcademicAssistTemplate = ({ title, description, heroImage, sections }) => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="w-full bg-blue-100 py-16 px-4 sm:px-8 lg:px-20 flex flex-col items-center text-center">
        {heroImage && (
          <img src={heroImage} alt={title} className="w-32 h-32 object-contain mb-6 rounded-xl shadow-lg" />
        )}
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">{title}</h1>
        <p className="text-lg text-blue-700 max-w-2xl mx-auto">{description}</p>
      </section>
      {/* Dynamic Sections */}
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-8 grid gap-12">
        {sections && sections.map((section, idx) => (
          <section key={idx} className="bg-white rounded-2xl shadow p-8 flex flex-col gap-4">
            {section.image && <img src={section.image} alt={section.title} className="w-full max-h-56 object-cover rounded-lg mb-4" />}
            <h2 className="text-2xl font-semibold text-blue-800">{section.title}</h2>
            <p className="text-gray-600">{section.content}</p>
          </section>
        ))}
      </div>
    </main>
  );
};

export default AcademicAssistTemplate; 