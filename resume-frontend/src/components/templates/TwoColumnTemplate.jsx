import React from 'react';

import {
  HeaderSection, ContactSection, AddressSection, SocialLinksSection,
  SkillsSection, LanguagesSection, CertificationsSection,
  ExperienceSection, EducationSection, ProjectsSection,
  AwardsSection, VolunteerSection, InterestsSection, SummarySection,
  PublicationsSection 
} from '../ResumeSections';

const TwoColumnTemplate = ({ resume }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl">
      <div className="grid md:grid-cols-2">
        {/* Left Column - Dark */}
        <div className="bg-gray-800 text-white p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-1">{resume.name?.split(' ')[0] || 'Your'}</h1>
            <h1 className="text-3xl font-bold mb-2">{resume.name?.split(' ')[1] || 'Name'}</h1>
            <p className="text-gray-400 text-sm">{resume.profession || 'Professional Title'}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider mb-3 text-gray-400">Contact</h2>
            {resume.email && <p className="text-sm mb-1">{resume.email}</p>}
            {resume.phone && <p className="text-sm">{resume.phone}</p>}
          </div>

          {resume.skills && resume.skills.length > 0 && (
            <div className="mb-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider mb-3 text-gray-400">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {resume.skills.map((skill, index) => (
                  <span key={index} className="bg-gray-700 text-sm px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {resume.education && resume.education.length > 0 && (
            <div className="mb-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider mb-3 text-gray-400">Education</h2>
              {resume.education.map((edu, index) => (
                <div key={index} className="mb-3">
                  <p className="font-semibold">{edu.degree}</p>
                  <p className="text-sm text-gray-400">{edu.institution}</p>
                  <p className="text-xs text-gray-500">{edu.year}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column - Light */}
        <div className="bg-white p-8">
          {resume.bio && (
            <div className="mb-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider mb-3 text-gray-400 border-b pb-2">Profile</h2>
              <p className="text-gray-700 text-sm">{resume.bio}</p>
            </div>
          )}

          {resume.experience && resume.experience.length > 0 && (
            <div className="mb-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider mb-3 text-gray-400 border-b pb-2">Experience</h2>
              {resume.experience.map((exp, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-bold text-gray-800">{exp.role}</h3>
                  <p className="text-gray-600 text-sm">{exp.company}</p>
                  <p className="text-gray-500 text-xs mb-1">{exp.duration}</p>
                  <p className="text-gray-600 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {resume.projects && resume.projects.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider mb-3 text-gray-400 border-b pb-2">Projects</h2>
              {resume.projects.map((project, index) => (
                <div key={index} className="mb-3">
                  <h3 className="font-bold text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TwoColumnTemplate;