import React from 'react';
import {
  HeaderSection, ContactSection, AddressSection, SocialLinksSection,
  SkillsSection, LanguagesSection, CertificationsSection,
  ExperienceSection, EducationSection, ProjectsSection,
  AwardsSection, VolunteerSection, InterestsSection, SummarySection,   PublicationsSection
} from '../ResumeSections';

const ModernTemplate = ({ resume }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-10 text-center">
        <h1 className="text-5xl font-bold mb-2">{resume.name || 'Your Name'}</h1>
        <p className="text-2xl opacity-95 mb-5">{resume.profession || 'Professional Title'}</p>
        <div className="flex justify-center gap-5 text-sm flex-wrap">
          {resume.email && <span>📧 {resume.email}</span>}
          {resume.phone && <span>📱 {resume.phone}</span>}
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr,2fr] gap-8 p-10">
        {/* Left Column */}
        <div className="bg-gray-50 p-5 rounded-lg">
          <ContactSection resume={resume} className="mb-6" />
          <AddressSection resume={resume} className="mb-6" />
          <SocialLinksSection resume={resume} className="mb-6" />
          <SkillsSection resume={resume} variant="bars" className="mb-6" />
          <LanguagesSection resume={resume} className="mb-6" />
          <CertificationsSection resume={resume} className="mb-6" />
          <AwardsSection resume={resume} className="mb-6" />
          <InterestsSection resume={resume} className="mb-6" />
        </div>

        {/* Right Column */}
        <div>
          <SummarySection resume={resume} className="mb-8" />
          <ExperienceSection resume={resume} className="mb-8" />
          <EducationSection resume={resume} className="mb-8" />
          <ProjectsSection resume={resume} className="mb-8" />
          <VolunteerSection resume={resume} className="mb-8" />
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;