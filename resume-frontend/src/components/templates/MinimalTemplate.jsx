import React from 'react';

import {
  HeaderSection, ContactSection, AddressSection, SocialLinksSection,
  SkillsSection, LanguagesSection, CertificationsSection,
  ExperienceSection, EducationSection, ProjectsSection,
  AwardsSection, VolunteerSection, InterestsSection, SummarySection,
  PublicationsSection  
} from '../ResumeSections';

const MinimalTemplate = ({ resume }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl">
      <div className="p-12">
        {/* Header - Clean & Minimal */}
        <div className="text-center mb-10">
          <h1 className="text-6xl font-light text-gray-900 mb-2">{resume.name || 'Your Name'}</h1>
          <p className="text-lg text-gray-500 tracking-wide">{resume.profession || 'Professional Title'}</p>
          <div className="w-20 h-px bg-gray-300 mx-auto my-4"></div>
          <div className="flex justify-center gap-4 text-sm text-gray-500">
            {resume.email && <span>{resume.email}</span>}
            {resume.email && resume.phone && <span>|</span>}
            {resume.phone && <span>{resume.phone}</span>}
          </div>
        </div>

        {/* Summary */}
        {resume.bio && (
          <div className="mb-8">
            <p className="text-gray-600 text-center leading-relaxed">{resume.bio}</p>
          </div>
        )}

        <div className="border-t border-gray-200 my-6"></div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {/* Left */}
          <div>
            {resume.skills && resume.skills.length > 0 && (
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {resume.skills.map((skill, index) => (
                    <span key={index} className="text-gray-700 text-sm border border-gray-300 px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {resume.education && resume.education.length > 0 && (
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Education</h2>
                {resume.education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-medium text-gray-800">{edu.degree}</h3>
                    <p className="text-gray-500 text-sm">{edu.institution}</p>
                    <p className="text-gray-400 text-xs">{edu.year}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right */}
          <div>
            {resume.experience && resume.experience.length > 0 && (
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Experience</h2>
                {resume.experience.map((exp, index) => (
                  <div key={index} className="mb-5">
                    <h3 className="font-medium text-gray-800">{exp.role}</h3>
                    <p className="text-gray-500 text-sm">{exp.company}</p>
                    <p className="text-gray-400 text-xs mb-1">{exp.duration}</p>
                    <p className="text-gray-600 text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            )}

            {resume.projects && resume.projects.length > 0 && (
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Projects</h2>
                {resume.projects.map((project, index) => (
                  <div key={index} className="mb-3">
                    <h3 className="font-medium text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinimalTemplate;