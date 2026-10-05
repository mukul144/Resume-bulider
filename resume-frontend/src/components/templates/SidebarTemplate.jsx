import React from 'react';

import {
  HeaderSection, ContactSection, AddressSection, SocialLinksSection,
  SkillsSection, LanguagesSection, CertificationsSection,
  ExperienceSection, EducationSection, ProjectsSection,
  AwardsSection, VolunteerSection, InterestsSection, SummarySection,
  PublicationsSection 
} from '../ResumeSections';

const SidebarTemplate = ({ resume }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl flex flex-col md:flex-row">
      {/* Sidebar - Colored */}
      <div className="md:w-1/3 bg-indigo-800 text-white p-6">
        <div className="text-center mb-6">
          <div className="w-32 h-32 bg-indigo-600 rounded-full mx-auto flex items-center justify-center mb-4">
            <span className="text-5xl">👤</span>
          </div>
          <h2 className="text-xl font-bold">{resume.name?.split(' ')[0] || 'Your'}</h2>
          <p className="text-indigo-200 text-sm">{resume.profession || 'Professional'}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 border-b border-indigo-600 pb-2">Contact</h3>
          {resume.email && <p className="text-sm mb-2">📧 {resume.email}</p>}
          {resume.phone && <p className="text-sm">📱 {resume.phone}</p>}
        </div>

        {resume.skills && resume.skills.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 border-b border-indigo-600 pb-2">Skills</h3>
            <div className="space-y-2">
              {resume.skills.map((skill, index) => (
                <div key={index}>
                  <p className="text-sm">{skill}</p>
                  <div className="bg-indigo-600 h-1 rounded mt-1">
                    <div className="bg-indigo-300 h-1 rounded" style={{ width: '85%' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="md:w-2/3 p-8">
        {resume.bio && (
          <div className="mb-8">
            <h3 className="text-lg font-bold text-indigo-800 mb-3">Profile</h3>
            <p className="text-gray-600 text-sm">{resume.bio}</p>
          </div>
        )}

        {resume.experience && resume.experience.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-bold text-indigo-800 mb-3">Work Experience</h3>
            {resume.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-bold text-gray-800">{exp.role}</h4>
                <p className="text-indigo-600 text-sm">{exp.company} | {exp.duration}</p>
                <p className="text-gray-600 text-sm mt-1">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {resume.projects && resume.projects.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-bold text-indigo-800 mb-3">Projects</h3>
            {resume.projects.map((project, index) => (
              <div key={index} className="mb-3">
                <h4 className="font-bold text-gray-800">{project.title}</h4>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        )}

        {resume.education && resume.education.length > 0 && (
          <div>
            <h3 className="text-lg font-bold text-indigo-800 mb-3">Education</h3>
            {resume.education.map((edu, index) => (
              <div key={index} className="mb-3">
                <h4 className="font-bold text-gray-800">{edu.degree}</h4>
                <p className="text-gray-600 text-sm">{edu.institution} ({edu.year})</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarTemplate;