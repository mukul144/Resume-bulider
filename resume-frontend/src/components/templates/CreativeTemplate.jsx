import React from 'react';

import {
  HeaderSection, ContactSection, AddressSection, SocialLinksSection,
  SkillsSection, LanguagesSection, CertificationsSection,
  ExperienceSection, EducationSection, ProjectsSection,
  AwardsSection, VolunteerSection, InterestsSection, SummarySection,
  PublicationsSection  
} from '../ResumeSections';

const CreativeTemplate = ({ resume }) => {
  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-pink-50 to-orange-50 shadow-2xl rounded-lg overflow-hidden">
      {/* Header - Bold & Creative */}
      <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white p-10 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>
        <div className="relative">
          <h1 className="text-6xl font-bold mb-2">{resume.name || 'Your Name'}</h1>
          <p className="text-2xl opacity-95">{resume.profession || 'Professional Title'}</p>
          <div className="flex gap-4 mt-4 text-sm">
            {resume.email && <span>✉️ {resume.email}</span>}
            {resume.phone && <span>📞 {resume.phone}</span>}
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Quote/Bio */}
        {resume.bio && (
          <div className="mb-8 italic text-gray-700 border-l-4 border-pink-400 pl-4">
            "{resume.bio}"
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {resume.skills && resume.skills.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-pink-500 mb-4 flex items-center gap-2">
                  <span>✦</span> Skills
                </h2>
                <div className="space-y-3">
                  {resume.skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill}</span>
                        <span className="text-pink-500">95%</span>
                      </div>
                      <div className="bg-pink-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-pink-500 to-orange-500 h-full rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {resume.education && resume.education.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-pink-500 mb-4 flex items-center gap-2">
                  <span>✦</span> Education
                </h2>
                {resume.education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-bold text-lg">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-orange-500">{edu.year}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {resume.experience && resume.experience.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-pink-500 mb-4 flex items-center gap-2">
                  <span>✦</span> Experience
                </h2>
                {resume.experience.map((exp, index) => (
                  <div key={index} className="mb-5 bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg">{exp.role}</h3>
                    <p className="text-orange-500 font-semibold">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
                    <p className="text-gray-600 text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            )}

            {resume.projects && resume.projects.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-pink-500 mb-4 flex items-center gap-2">
                  <span>✦</span> Projects
                </h2>
                {resume.projects.map((project, index) => (
                  <div key={index} className="mb-3">
                    <h3 className="font-bold">{project.title}</h3>
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

export default CreativeTemplate;