import React from 'react';

import {
  HeaderSection, ContactSection, AddressSection, SocialLinksSection,
  SkillsSection, LanguagesSection, CertificationsSection,
  ExperienceSection, EducationSection, ProjectsSection,
  AwardsSection, VolunteerSection, InterestsSection, SummarySection,
  PublicationsSection  
} from '../ResumeSections';

const SplitTemplate = ({ resume }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl flex flex-col md:flex-row">
      {/* Left - Color Section */}
      <div className="md:w-1/3 bg-teal-700 text-white p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-1">{resume.name?.split(' ')[0] || 'Your'}</h1>
          <h1 className="text-2xl font-bold mb-4">{resume.name?.split(' ')[1] || 'Name'}</h1>
          <p className="text-teal-200 text-sm">{resume.profession || 'Professional'}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xs font-semibold uppercase tracking-wider mb-3 text-teal-300">Contact</h2>
          {resume.email && <p className="text-sm mb-1">{resume.email}</p>}
          {resume.phone && <p className="text-sm">{resume.phone}</p>}
        </div>

        {resume.skills && resume.skills.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xs font-semibold uppercase tracking-wider mb-3 text-teal-300">Skills</h2>
            <div className="space-y-2">
              {resume.skills.map((skill, index) => (
                <div key={index}>
                  <p className="text-sm">{skill}</p>
                  <div className="bg-teal-600 h-1 rounded mt-1">
                    <div className="bg-teal-300 h-1 rounded" style={{ width: '85%' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right - White Section */}
      <div className="md:w-2/3 p-8">
        {resume.bio && (
          <div className="mb-8">
            <h2 className="text-sm font-bold text-teal-700 uppercase tracking-wider mb-3">Profile</h2>
            <p className="text-gray-700 text-sm">{resume.bio}</p>
          </div>
        )}

        {resume.experience && resume.experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-sm font-bold text-teal-700 uppercase tracking-wider mb-3">Experience</h2>
            {resume.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-bold text-gray-800">{exp.role}</h3>
                <p className="text-teal-600 text-sm">{exp.company}</p>
                <p className="text-gray-500 text-xs mb-1">{exp.duration}</p>
                <p className="text-gray-600 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {resume.education && resume.education.length > 0 && (
          <div>
            <h2 className="text-sm font-bold text-teal-700 uppercase tracking-wider mb-3">Education</h2>
            {resume.education.map((edu, index) => (
              <div key={index} className="mb-2">
                <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                <p className="text-gray-600 text-sm">{edu.institution}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SplitTemplate;