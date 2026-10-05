import React from 'react';

import {
  HeaderSection, ContactSection, AddressSection, SocialLinksSection,
  SkillsSection, LanguagesSection, CertificationsSection,
  ExperienceSection, EducationSection, ProjectsSection,
  AwardsSection, VolunteerSection, InterestsSection, SummarySection,
  PublicationsSection  
} from '../ResumeSections';

const TimelineTemplate = ({ resume }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl p-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">{resume.name || 'Your Name'}</h1>
        <p className="text-xl text-teal-600">{resume.profession || 'Professional Title'}</p>
        <div className="w-24 h-1 bg-teal-500 mx-auto my-4"></div>
        <div className="flex justify-center gap-4 text-sm text-gray-600">
          {resume.email && <span>{resume.email}</span>}
          {resume.phone && <span>{resume.phone}</span>}
        </div>
      </div>

      {/* Summary */}
      {resume.bio && (
        <div className="mb-10 text-center">
          <p className="text-gray-700 max-w-2xl mx-auto">{resume.bio}</p>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-1">
          {resume.skills && resume.skills.length > 0 && (
            <div className="mb-8">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Skills</h2>
              {resume.skills.map((skill, index) => (
                <div key={index} className="mb-3">
                  <p className="font-medium text-gray-700">{skill}</p>
                  <div className="bg-gray-200 h-1.5 rounded">
                    <div className="bg-teal-500 h-1.5 rounded" style={{ width: '85%' }}></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {resume.education && resume.education.length > 0 && (
            <div>
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Education</h2>
              {resume.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-bold text-gray-800">{edu.degree}</h3>
                  <p className="text-gray-600 text-sm">{edu.institution}</p>
                  <p className="text-teal-600 text-xs">{edu.year}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column - Timeline */}
        <div className="md:col-span-2">
          {resume.experience && resume.experience.length > 0 && (
            <div className="mb-8">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Work Experience</h2>
              <div className="space-y-6">
                {resume.experience.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-teal-500">
                    <div className="absolute w-3 h-3 bg-teal-500 rounded-full -left-1.5 top-1"></div>
                    <div className="mb-2">
                      <h3 className="text-lg font-bold text-gray-800">{exp.role}</h3>
                      <p className="text-teal-600 font-semibold">{exp.company}</p>
                      <p className="text-gray-500 text-sm">{exp.duration}</p>
                    </div>
                    <p className="text-gray-600 text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {resume.projects && resume.projects.length > 0 && (
            <div>
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Projects</h2>
              <div className="space-y-4">
                {resume.projects.map((project, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-gray-300">
                    <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-1.5 top-1"></div>
                    <h3 className="font-bold text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineTemplate;