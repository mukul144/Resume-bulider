import React from 'react';

import {
  HeaderSection, ContactSection, AddressSection, SocialLinksSection,
  SkillsSection, LanguagesSection, CertificationsSection,
  ExperienceSection, EducationSection, ProjectsSection,
  AwardsSection, VolunteerSection, InterestsSection, SummarySection,
  PublicationsSection  
} from '../ResumeSections';

const BerlinTemplate = ({ resume }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl">
      <div className="grid md:grid-cols-[280px,1fr]">
        {/* Left Sidebar */}
        <div className="bg-gray-900 text-white p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-1">{resume.name?.split(' ')[0] || 'Your'}</h1>
            <h1 className="text-3xl font-bold mb-4">{resume.name?.split(' ')[1] || 'Name'}</h1>
            <p className="text-gray-400 text-sm uppercase tracking-wide">{resume.profession || 'Professional'}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">INFO</h2>
            <div className="space-y-3 text-sm">
              {resume.email && (
                <div>
                  <p className="text-gray-400 text-xs">EMAIL</p>
                  <p className="text-white">{resume.email}</p>
                </div>
              )}
              {resume.phone && (
                <div>
                  <p className="text-gray-400 text-xs">PHONE</p>
                  <p className="text-white">{resume.phone}</p>
                </div>
              )}
            </div>
          </div>

          {resume.skills && resume.skills.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">SKILLS</h2>
              <div className="space-y-2">
                {resume.skills.map((skill, index) => (
                  <p key={index} className="text-sm text-gray-300">{skill}</p>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="p-8">
          {resume.bio && (
            <div className="mb-8">
              <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b-2 border-gray-200 pb-2 mb-4">
                PROFILES
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">{resume.bio}</p>
            </div>
          )}

          {resume.experience && resume.experience.length > 0 && (
            <div className="mb-8">
              <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b-2 border-gray-200 pb-2 mb-4">
                EMPLOYMENT HISTORY
              </h2>
              {resume.experience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-gray-800">{exp.role}</h3>
                      <p className="text-gray-600 text-sm">{exp.company}</p>
                    </div>
                    <p className="text-gray-500 text-xs">{exp.duration}</p>
                  </div>
                  <p className="text-gray-600 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {resume.education && resume.education.length > 0 && (
            <div>
              <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b-2 border-gray-200 pb-2 mb-4">
                EDUCATION
              </h2>
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
      </div>
    </div>
  );
};

export default BerlinTemplate;