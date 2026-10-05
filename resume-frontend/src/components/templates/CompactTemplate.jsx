import React from 'react';

import {
  HeaderSection, ContactSection, AddressSection, SocialLinksSection,
  SkillsSection, LanguagesSection, CertificationsSection,
  ExperienceSection, EducationSection, ProjectsSection,
  AwardsSection, VolunteerSection, InterestsSection, SummarySection,
  PublicationsSection  
} from '../ResumeSections';

const CompactTemplate = ({ resume }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl p-6">
      {/* Header */}
      <div className="border-b-2 border-gray-800 pb-4 mb-4">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{resume.name || 'Your Name'}</h1>
            <p className="text-gray-600">{resume.profession || 'Professional Title'}</p>
          </div>
          <div className="text-right text-sm text-gray-500">
            {resume.email && <div>{resume.email}</div>}
            {resume.phone && <div>{resume.phone}</div>}
          </div>
        </div>
      </div>

      {/* Summary */}
      {resume.bio && (
        <div className="mb-4">
          <p className="text-gray-700 text-sm">{resume.bio}</p>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-4 mt-4">
        {/* Skills */}
        {resume.skills && resume.skills.length > 0 && (
          <div>
            <h2 className="text-xs font-bold text-gray-500 uppercase mb-2">Skills</h2>
            <div className="space-y-1">
              {resume.skills.map((skill, index) => (
                <p key={index} className="text-sm text-gray-700">{skill}</p>
              ))}
            </div>
          </div>
        )}

        {/* Experience */}
        {resume.experience && resume.experience.length > 0 && (
          <div className="md:col-span-2">
            <h2 className="text-xs font-bold text-gray-500 uppercase mb-2">Experience</h2>
            {resume.experience.map((exp, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-gray-800 text-sm">{exp.role}</h3>
                  <p className="text-gray-500 text-xs">{exp.duration}</p>
                </div>
                <p className="text-gray-600 text-xs">{exp.company}</p>
                <p className="text-gray-600 text-xs mt-1">{exp.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Education */}
      {resume.education && resume.education.length > 0 && (
        <div className="mt-4 pt-3 border-t border-gray-200">
          <h2 className="text-xs font-bold text-gray-500 uppercase mb-2">Education</h2>
          <div className="flex gap-6">
            {resume.education.map((edu, index) => (
              <div key={index}>
                <p className="font-semibold text-gray-800 text-sm">{edu.degree}</p>
                <p className="text-gray-600 text-xs">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CompactTemplate;