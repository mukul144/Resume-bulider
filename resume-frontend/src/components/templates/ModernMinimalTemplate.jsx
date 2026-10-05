import React from 'react';

import {
  HeaderSection, ContactSection, AddressSection, SocialLinksSection,
  SkillsSection, LanguagesSection, CertificationsSection,
  ExperienceSection, EducationSection, ProjectsSection,
  AwardsSection, VolunteerSection, InterestsSection, SummarySection,
  PublicationsSection  
} from '../ResumeSections';

const ModernMinimalTemplate = ({ resume }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl p-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-light text-gray-800 mb-2">{resume.name || 'Your Name'}</h1>
        <p className="text-xl text-gray-500">{resume.profession || 'Professional Title'}</p>
        <div className="w-16 h-0.5 bg-gray-300 my-4"></div>
        <div className="flex gap-6 text-sm text-gray-500">
          {resume.email && <span>{resume.email}</span>}
          {resume.phone && <span>{resume.phone}</span>}
        </div>
      </div>

      {/* Summary */}
      {resume.bio && (
        <div className="mb-10">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">About Me</h2>
          <p className="text-gray-600 leading-relaxed">{resume.bio}</p>
        </div>
      )}

      {/* Skills */}
      {resume.skills && resume.skills.length > 0 && (
        <div className="mb-10">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {resume.skills.map((skill, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Experience */}
      {resume.experience && resume.experience.length > 0 && (
        <div className="mb-10">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Work Experience</h2>
          {resume.experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-gray-800">{exp.role}</h3>
                <p className="text-gray-400 text-sm">{exp.duration}</p>
              </div>
              <p className="text-gray-500 text-sm mb-1">{exp.company}</p>
              <p className="text-gray-600 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {resume.education && resume.education.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Education</h2>
          {resume.education.map((edu, index) => (
            <div key={index} className="mb-3">
              <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
              <p className="text-gray-500 text-sm">{edu.institution}</p>
              <p className="text-gray-400 text-xs">{edu.year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ModernMinimalTemplate;