import React from 'react';

import {
  HeaderSection, ContactSection, AddressSection, SocialLinksSection,
  SkillsSection, LanguagesSection, CertificationsSection,
  ExperienceSection, EducationSection, ProjectsSection,
  AwardsSection, VolunteerSection, InterestsSection, SummarySection,
  PublicationsSection  
} from '../ResumeSections';

const ElegantTemplate = ({ resume }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl p-10 font-serif">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-800 mb-2 tracking-wide">{resume.name || 'Your Name'}</h1>
        <p className="text-lg text-gray-500 italic">{resume.profession || 'Professional Title'}</p>
        <div className="w-24 h-px bg-gray-300 mx-auto my-4"></div>
        <div className="flex justify-center gap-6 text-sm text-gray-500">
          {resume.email && <span>{resume.email}</span>}
          {resume.phone && <span>{resume.phone}</span>}
        </div>
      </div>

      {/* Summary */}
      {resume.bio && (
        <div className="mb-10">
          <h2 className="text-md font-semibold text-gray-700 uppercase tracking-wider mb-3">Profile</h2>
          <p className="text-gray-600 leading-loose">{resume.bio}</p>
        </div>
      )}

      {/* Skills */}
      {resume.skills && resume.skills.length > 0 && (
        <div className="mb-10">
          <h2 className="text-md font-semibold text-gray-700 uppercase tracking-wider mb-3">Expertise</h2>
          <div className="grid grid-cols-2 gap-2">
            {resume.skills.map((skill, index) => (
              <div key={index} className="flex items-center">
                <span className="text-gray-400 mr-2">✦</span>
                <span className="text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Experience */}
      {resume.experience && resume.experience.length > 0 && (
        <div className="mb-10">
          <h2 className="text-md font-semibold text-gray-700 uppercase tracking-wider mb-4">Experience</h2>
          {resume.experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-800">{exp.role}</h3>
                  <p className="text-gray-500 italic">{exp.company}</p>
                </div>
                <p className="text-gray-400 text-sm">{exp.duration}</p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {resume.education && resume.education.length > 0 && (
        <div>
          <h2 className="text-md font-semibold text-gray-700 uppercase tracking-wider mb-3">Education</h2>
          {resume.education.map((edu, index) => (
            <div key={index} className="mb-3">
              <h3 className="font-bold text-gray-800">{edu.degree}</h3>
              <p className="text-gray-500">{edu.institution}</p>
              <p className="text-gray-400 text-sm">{edu.year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ElegantTemplate;