import React from 'react';
import {
  HeaderSection, ContactSection, AddressSection, SocialLinksSection,
  SkillsSection, LanguagesSection, CertificationsSection,
  ExperienceSection, EducationSection, ProjectsSection,
  AwardsSection, VolunteerSection, InterestsSection, SummarySection,   PublicationsSection
} from '../ResumeSections';

const ClassicTemplate = ({ resume }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl border border-gray-200">
      <div className="border-b-4 border-purple-600 p-8 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">{resume.name || 'Your Name'}</h1>
        <p className="text-xl text-purple-600 mb-4">{resume.profession || 'Professional Title'}</p>
        <div className="flex justify-center gap-6 text-sm text-gray-600 flex-wrap">
          {resume.email && <span>📧 {resume.email}</span>}
          {resume.phone && <span>📱 {resume.phone}</span>}
        </div>
      </div>

      <div className="p-8">
        <SummarySection resume={resume} className="mb-8" />

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <ContactSection resume={resume} className="mb-6" />
            <AddressSection resume={resume} className="mb-6" />
            <SkillsSection resume={resume} variant="tags" className="mb-6" />
            <LanguagesSection resume={resume} className="mb-6" />
            <CertificationsSection resume={resume} className="mb-6" />
            <AwardsSection resume={resume} className="mb-6" />
            <InterestsSection resume={resume} className="mb-6" />
          </div>
          <div>
            <ExperienceSection resume={resume} className="mb-8" />
            <EducationSection resume={resume} className="mb-8" />
            <ProjectsSection resume={resume} className="mb-8" />
            <VolunteerSection resume={resume} className="mb-8" />
            <SocialLinksSection resume={resume} className="mb-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassicTemplate;