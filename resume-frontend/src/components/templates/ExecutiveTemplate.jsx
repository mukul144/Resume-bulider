import React from 'react';

import {
  HeaderSection, ContactSection, AddressSection, SocialLinksSection,
  SkillsSection, LanguagesSection, CertificationsSection,
  ExperienceSection, EducationSection, ProjectsSection,
  AwardsSection, VolunteerSection, InterestsSection, SummarySection,
  PublicationsSection  
} from '../ResumeSections';

const ExecutiveTemplate = ({ resume }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl">
      {/* Header - Professional & Premium */}
      <div className="bg-gray-900 text-white p-10">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-5xl font-light mb-2">{resume.name || 'Your Name'}</h1>
            <p className="text-xl text-gray-400">{resume.profession || 'Professional Title'}</p>
          </div>
          <div className="text-right text-sm text-gray-400">
            {resume.email && <div>{resume.email}</div>}
            {resume.phone && <div>{resume.phone}</div>}
          </div>
        </div>
      </div>

      <div className="p-10">
        {/* Summary - Achievement focused */}
        {resume.bio && (
          <div className="mb-10 bg-gray-50 p-6">
            <p className="text-gray-700 leading-relaxed">{resume.bio}</p>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - 1/3 */}
          <div className="md:col-span-1">
            {resume.skills && resume.skills.length > 0 && (
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Core Competencies</h2>
                <div className="space-y-2">
                  {resume.skills.map((skill, index) => (
                    <div key={index} className="text-gray-700">{skill}</div>
                  ))}
                </div>
              </div>
            )}

            {resume.education && resume.education.length > 0 && (
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Education</h2>
                {resume.education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-bold text-gray-800">{edu.degree}</h3>
                    <p className="text-gray-600 text-sm">{edu.institution}</p>
                    <p className="text-gray-500 text-xs">{edu.year}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - 2/3 */}
          <div className="md:col-span-2">
            {resume.experience && resume.experience.length > 0 && (
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Professional Experience</h2>
                {resume.experience.map((exp, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{exp.role}</h3>
                        <p className="text-gray-600 font-semibold">{exp.company}</p>
                      </div>
                      <p className="text-sm text-gray-500">{exp.duration}</p>
                    </div>
                    <p className="text-gray-600 text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            )}

            {resume.projects && resume.projects.length > 0 && (
              <div>
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Key Achievements</h2>
                {resume.projects.map((project, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-bold text-gray-800">{project.title}</h3>
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

export default ExecutiveTemplate;