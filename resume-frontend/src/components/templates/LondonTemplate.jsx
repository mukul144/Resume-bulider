import React from 'react';

import {
  HeaderSection, ContactSection, AddressSection, SocialLinksSection,
  SkillsSection, LanguagesSection, CertificationsSection,
  ExperienceSection, EducationSection, ProjectsSection,
  AwardsSection, VolunteerSection, InterestsSection, SummarySection,
  PublicationsSection  
} from '../ResumeSections';

const LondonTemplate = ({ resume }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl p-8">
      {/* Header with Contact */}
      <div className="text-center mb-8 pb-6 border-b border-gray-200">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{resume.name || 'Your Name'}</h1>
        <p className="text-lg text-gray-600 mb-3">{resume.profession || 'Professional Title'}</p>
        <div className="text-sm text-gray-500 space-x-4">
          {resume.email && <span>{resume.email}</span>}
          {resume.phone && <span>| {resume.phone}</span>}
        </div>
      </div>

      {/* Profile */}
      {resume.bio && (
        <div className="mb-8">
          <h2 className="text-md font-bold text-gray-700 uppercase mb-3">PROFILE</h2>
          <p className="text-gray-700 text-sm leading-relaxed">{resume.bio}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          {resume.education && resume.education.length > 0 && (
            <div className="mb-8">
              <h2 className="text-md font-bold text-gray-700 uppercase mb-4">EDUCATION</h2>
              {resume.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <p className="font-bold text-gray-800">{edu.year}</p>
                  <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                  <p className="text-gray-600 text-sm">{edu.institution}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column */}
        <div>
          {resume.skills && resume.skills.length > 0 && (
            <div className="mb-8">
              <h2 className="text-md font-bold text-gray-700 uppercase mb-4">SKILLS</h2>
              <div className="space-y-2">
                {resume.skills.map((skill, index) => (
                  <div key={index}>
                    <p className="font-semibold text-gray-700">{skill}</p>
                    <div className="bg-gray-200 h-1.5 rounded">
                      <div className="bg-blue-600 h-1.5 rounded" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {resume.projects && resume.projects.length > 0 && (
            <div>
              <h2 className="text-md font-bold text-gray-700 uppercase mb-4">HOBBIES</h2>
              <div className="flex flex-wrap gap-2">
                {resume.projects.slice(0, 3).map((project, index) => (
                  <span key={index} className="text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded">
                    {project.title}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Experience */}
      {resume.experience && resume.experience.length > 0 && (
        <div className="mt-8">
          <h2 className="text-md font-bold text-gray-700 uppercase mb-4">EXPERIENCE</h2>
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
    </div>
  );
};

export default LondonTemplate;