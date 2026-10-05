import React from 'react';

import {
  HeaderSection, ContactSection, AddressSection, SocialLinksSection,
  SkillsSection, LanguagesSection, CertificationsSection,
  ExperienceSection, EducationSection, ProjectsSection,
  AwardsSection, VolunteerSection, InterestsSection, SummarySection,
  PublicationsSection  
} from '../ResumeSections';

const TechTemplate = ({ resume }) => {
  return (
    <div className="max-w-4xl mx-auto bg-gray-900 text-white shadow-2xl rounded-lg overflow-hidden font-mono">
      {/* Header - Tech Style */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-5xl font-bold mb-2">&gt; {resume.name || 'Your Name'}</h1>
            <p className="text-xl text-cyan-200">{resume.profession || 'Professional Title'}</p>
          </div>
          <div className="text-right text-sm text-cyan-200">
            {resume.email && <div>{resume.email}</div>}
            {resume.phone && <div>{resume.phone}</div>}
          </div>
        </div>
      </div>

      <div className="p-8 bg-gray-800">
        {/* Bio as code comment */}
        {resume.bio && (
          <div className="mb-8 bg-gray-900 p-4 rounded border-l-4 border-cyan-500">
            <span className="text-green-400">// Summary</span>
            <p className="text-gray-300 mt-2">{resume.bio}</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            {resume.skills && resume.skills.length > 0 && (
              <div className="mb-8">
                <h2 className="text-cyan-400 text-sm uppercase tracking-wider mb-4">$ skills</h2>
                <div className="space-y-2">
                  {resume.skills.map((skill, index) => (
                    <div key={index} className="bg-gray-900 p-2 rounded">
                      <span className="text-green-400">▶</span> {skill}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {resume.education && resume.education.length > 0 && (
              <div className="mb-8">
                <h2 className="text-cyan-400 text-sm uppercase tracking-wider mb-4">$ education</h2>
                {resume.education.map((edu, index) => (
                  <div key={index} className="bg-gray-900 p-3 rounded mb-2">
                    <div className="font-bold text-cyan-300">{edu.degree}</div>
                    <div className="text-sm text-gray-400">{edu.institution}</div>
                    <div className="text-xs text-gray-500">{edu.year}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column */}
          <div>
            {resume.experience && resume.experience.length > 0 && (
              <div className="mb-8">
                <h2 className="text-cyan-400 text-sm uppercase tracking-wider mb-4">$ experience</h2>
                {resume.experience.map((exp, index) => (
                  <div key={index} className="bg-gray-900 p-3 rounded mb-3">
                    <div className="font-bold text-cyan-300">{exp.role}</div>
                    <div className="text-green-400 text-sm">{exp.company}</div>
                    <div className="text-xs text-gray-500 mb-2">{exp.duration}</div>
                    <p className="text-gray-400 text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            )}

            {resume.projects && resume.projects.length > 0 && (
              <div className="mb-8">
                <h2 className="text-cyan-400 text-sm uppercase tracking-wider mb-4">$ projects</h2>
                {resume.projects.map((project, index) => (
                  <div key={index} className="bg-gray-900 p-3 rounded mb-2">
                    <div className="font-bold text-cyan-300">{project.title}</div>
                    <p className="text-gray-400 text-sm">{project.description}</p>
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

export default TechTemplate;