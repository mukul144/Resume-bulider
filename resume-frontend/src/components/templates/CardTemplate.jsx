import React from 'react';

import {
  HeaderSection, ContactSection, AddressSection, SocialLinksSection,
  SkillsSection, LanguagesSection, CertificationsSection,
  ExperienceSection, EducationSection, ProjectsSection,
  AwardsSection, VolunteerSection, InterestsSection, SummarySection,
  PublicationsSection  
} from '../ResumeSections';

const CardTemplate = ({ resume }) => {
  return (
    <div className="max-w-4xl mx-auto bg-gray-100 p-6 shadow-2xl">
      {/* Header Card */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white mb-6 shadow-lg">
        <h1 className="text-4xl font-bold mb-2">{resume.name || 'Your Name'}</h1>
        <p className="text-xl opacity-90">{resume.profession || 'Professional Title'}</p>
        <div className="flex gap-4 mt-4 text-sm opacity-80">
          {resume.email && <span>📧 {resume.email}</span>}
          {resume.phone && <span>📱 {resume.phone}</span>}
        </div>
      </div>

      {/* Bio Card */}
      {resume.bio && (
        <div className="bg-white rounded-lg p-6 mb-6 shadow">
          <p className="text-gray-700">{resume.bio}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Skills Card */}
        {resume.skills && resume.skills.length > 0 && (
          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-lg font-bold text-blue-600 mb-4 flex items-center gap-2">
              <span>⚡</span> Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {resume.skills.map((skill, index) => (
                <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Education Card */}
        {resume.education && resume.education.length > 0 && (
          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-lg font-bold text-blue-600 mb-4 flex items-center gap-2">
              <span>🎓</span> Education
            </h2>
            {resume.education.map((edu, index) => (
              <div key={index} className="mb-3">
                <h3 className="font-bold">{edu.degree}</h3>
                <p className="text-gray-600 text-sm">{edu.institution}</p>
                <p className="text-gray-500 text-xs">{edu.year}</p>
              </div>
            ))}
          </div>
        )}

        {/* Experience Card */}
        {resume.experience && resume.experience.length > 0 && (
          <div className="bg-white rounded-lg p-6 shadow md:col-span-2">
            <h2 className="text-lg font-bold text-blue-600 mb-4 flex items-center gap-2">
              <span>💼</span> Experience
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {resume.experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-bold">{exp.role}</h3>
                  <p className="text-gray-600 text-sm">{exp.company}</p>
                  <p className="text-gray-500 text-xs mb-2">{exp.duration}</p>
                  <p className="text-gray-600 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Card */}
        {resume.projects && resume.projects.length > 0 && (
          <div className="bg-white rounded-lg p-6 shadow md:col-span-2">
            <h2 className="text-lg font-bold text-blue-600 mb-4 flex items-center gap-2">
              <span>🚀</span> Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {resume.projects.map((project, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded">
                  <h3 className="font-bold">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardTemplate;