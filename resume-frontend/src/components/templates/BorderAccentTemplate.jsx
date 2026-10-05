import React from 'react';

import {
  HeaderSection, ContactSection, AddressSection, SocialLinksSection,
  SkillsSection, LanguagesSection, CertificationsSection,
  ExperienceSection, EducationSection, ProjectsSection,
  AwardsSection, VolunteerSection, InterestsSection, SummarySection,
  PublicationsSection 
} from '../ResumeSections';

const BorderAccentTemplate = ({ resume }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl relative">
      {/* Left Color Border */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-500"></div>
      
      <div className="p-8 pl-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-1">{resume.name || 'Your Name'}</h1>
          <p className="text-lg text-blue-600 mb-3">{resume.profession || 'Professional Title'}</p>
          <div className="flex gap-4 text-sm text-gray-500">
            {resume.email && <span>{resume.email}</span>}
            {resume.phone && <span>| {resume.phone}</span>}
          </div>
        </div>

        {/* Summary */}
        {resume.bio && (
          <div className="mb-8 bg-gray-50 p-4 rounded">
            <p className="text-gray-700 text-sm">{resume.bio}</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            {resume.skills && resume.skills.length > 0 && (
              <div className="mb-6">
                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">Skills</h2>
                <div className="space-y-2">
                  {resume.skills.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-blue-500 mr-2">▹</span>
                      <span className="text-gray-700 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {resume.education && resume.education.length > 0 && (
              <div>
                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">Education</h2>
                {resume.education.map((edu, index) => (
                  <div key={index} className="mb-3">
                    <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                    <p className="text-gray-600 text-sm">{edu.institution}</p>
                    <p className="text-gray-500 text-xs">{edu.year}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column */}
          <div>
            {resume.experience && resume.experience.length > 0 && (
              <div>
                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">Experience</h2>
                {resume.experience.map((exp, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-semibold text-gray-800">{exp.role}</h3>
                    <p className="text-blue-600 text-sm">{exp.company}</p>
                    <p className="text-gray-500 text-xs mb-1">{exp.duration}</p>
                    <p className="text-gray-600 text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Projects */}
        {resume.projects && resume.projects.length > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">Projects</h2>
            <div className="flex flex-wrap gap-3">
              {resume.projects.map((project, index) => (
                <div key={index} className="bg-gray-50 px-3 py-2 rounded">
                  <h3 className="font-semibold text-gray-800 text-sm">{project.title}</h3>
                  <p className="text-gray-600 text-xs">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BorderAccentTemplate;