import React from 'react';

import {
  HeaderSection, ContactSection, AddressSection, SocialLinksSection,
  SkillsSection, LanguagesSection, CertificationsSection,
  ExperienceSection, EducationSection, ProjectsSection,
  AwardsSection, VolunteerSection, InterestsSection, SummarySection,
  PublicationsSection  
} from '../ResumeSections';

const CorporateTemplate = ({ resume }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl">
      {/* Bold Header */}
      <div className="bg-gray-800 text-white p-8">
        <h1 className="text-5xl font-bold mb-2">{resume.name || 'Your Name'}</h1>
        <p className="text-xl text-gray-300">{resume.profession || 'Professional Title'}</p>
        <div className="flex gap-4 mt-4 text-sm text-gray-400">
          {resume.email && <span>{resume.email}</span>}
          {resume.phone && <span>| {resume.phone}</span>}
        </div>
      </div>

      <div className="p-8">
        {/* Profile */}
        {resume.bio && (
          <div className="mb-8">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Professional Profile</h2>
            <p className="text-gray-700 leading-relaxed">{resume.bio}</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left */}
          <div>
            {resume.skills && resume.skills.length > 0 && (
              <div className="mb-8">
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Core Competencies</h2>
                <ul className="list-disc list-inside space-y-1">
                  {resume.skills.map((skill, index) => (
                    <li key={index} className="text-gray-700 text-sm">{skill}</li>
                  ))}
                </ul>
              </div>
            )}

            {resume.education && resume.education.length > 0 && (
              <div>
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Education</h2>
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

          {/* Right */}
          <div>
            {resume.experience && resume.experience.length > 0 && (
              <div>
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Employment History</h2>
                {resume.experience.map((exp, index) => (
                  <div key={index} className="mb-5">
                    <h3 className="font-semibold text-gray-800">{exp.role}</h3>
                    <p className="text-gray-600 text-sm">{exp.company}</p>
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
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Key Achievements</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {resume.projects.map((project, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded">
                  <h3 className="font-semibold text-gray-800">{project.title}</h3>
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

export default CorporateTemplate;