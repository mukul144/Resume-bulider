import React from 'react';

import {
  HeaderSection, ContactSection, AddressSection, SocialLinksSection,
  SkillsSection, LanguagesSection, CertificationsSection,
  ExperienceSection, EducationSection, ProjectsSection,
  AwardsSection, VolunteerSection, InterestsSection, SummarySection,
  PublicationsSection  
} from '../ResumeSections';

const SantiagoTemplate = ({ resume }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{resume.name || 'Your Name'}</h1>
        <p className="text-lg text-gray-600 mb-3">{resume.profession || 'Professional Title'}</p>
        <div className="text-sm text-gray-500 space-y-1">
          {resume.email && <div>📧 {resume.email}</div>}
          {resume.phone && <div>📞 {resume.phone}</div>}
        </div>
      </div>

      {/* Profile */}
      {resume.bio && (
        <div className="mb-8">
          <h2 className="text-md font-bold text-gray-700 uppercase tracking-wide mb-3">PROFILE</h2>
          <p className="text-gray-700 text-sm leading-relaxed">{resume.bio}</p>
        </div>
      )}

      {/* Experience */}
      {resume.experience && resume.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-md font-bold text-gray-700 uppercase tracking-wide mb-4">EXPERIENCE</h2>
          {resume.experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-800">{exp.role} - {exp.company}</h3>
                <p className="text-gray-500 text-sm italic">{exp.duration}</p>
              </div>
              <p className="text-gray-600 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {resume.education && resume.education.length > 0 && (
        <div>
          <h2 className="text-md font-bold text-gray-700 uppercase tracking-wide mb-4">EDUCATION</h2>
          {resume.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold text-gray-800">{edu.degree}</h3>
              <p className="text-gray-600 text-sm">{edu.institution}</p>
              <p className="text-gray-500 text-sm">{edu.year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SantiagoTemplate;