import React from 'react';

import {
  HeaderSection, ContactSection, AddressSection, SocialLinksSection,
  SkillsSection, LanguagesSection, CertificationsSection,
  ExperienceSection, EducationSection, ProjectsSection,
  AwardsSection, VolunteerSection, InterestsSection, SummarySection,
  PublicationsSection  
} from '../ResumeSections';

const SpecialistTemplate = ({ resume }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{resume.name || 'Your Name'}</h1>
        <p className="text-lg text-blue-600 mb-4">{resume.profession || 'Professional Title'}</p>
        <div className="flex justify-center gap-4 text-sm text-gray-600">
          {resume.email && <span>{resume.email}</span>}
          {resume.phone && <span>• {resume.phone}</span>}
        </div>
      </div>

      {/* Summary */}
      {resume.bio && (
        <div className="mb-8">
          <p className="text-gray-700 text-sm leading-relaxed">{resume.bio}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          {resume.skills && resume.skills.length > 0 && (
            <div className="mb-8">
              <h2 className="text-sm font-bold text-gray-700 uppercase border-b-2 border-gray-300 pb-2 mb-4">
                Technical Proficiencies
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-700 text-sm">Skills:</p>
                  <p className="text-gray-600 text-sm">{resume.skills.join(', ')}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div>
          {resume.projects && resume.projects.length > 0 && (
            <div className="mb-8">
              <h2 className="text-sm font-bold text-gray-700 uppercase border-b-2 border-gray-300 pb-2 mb-4">
                Tools
              </h2>
              <p className="text-gray-600 text-sm">{resume.projects.map(p => p.title).join(', ')}</p>
            </div>
          )}
        </div>
      </div>

      {/* Experience */}
      {resume.experience && resume.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-bold text-gray-700 uppercase border-b-2 border-gray-300 pb-2 mb-4">
            Professional Experience
          </h2>
          {resume.experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-800">{exp.role}</h3>
                  <p className="text-blue-600 text-sm">{exp.company}</p>
                </div>
                <p className="text-gray-500 text-sm">{exp.duration}</p>
              </div>
              <p className="text-gray-600 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {resume.education && resume.education.length > 0 && (
        <div>
          <h2 className="text-sm font-bold text-gray-700 uppercase border-b-2 border-gray-300 pb-2 mb-4">
            Education
          </h2>
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

export default SpecialistTemplate;