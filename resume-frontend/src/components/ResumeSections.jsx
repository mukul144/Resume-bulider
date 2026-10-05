import React from 'react';

export const HeaderSection = ({ resume, layout = 'center', className = "" }) => {
  const layouts = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right'
  };
  
  return (
    <div className={`${layouts[layout]} ${className}`}>
      <h1 className="text-5xl font-bold text-gray-800 mb-2">{resume.name || 'Your Name'}</h1>
      <p className="text-xl text-purple-600 mb-4">{resume.profession || 'Professional Title'}</p>
    </div>
  );
};

export const ContactSection = ({ resume, className = "" }) => {
  const hasContact = resume.email || resume.phone;
  if (!hasContact) return null;
  
  return (
    <div className={className}>
      <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-gray-500">Contact</h3>
      <div className="space-y-2 text-sm">
        {resume.email && (
          <div className="flex items-center gap-2">
            <span>📧</span> {resume.email}
          </div>
        )}
        {resume.phone && (
          <div className="flex items-center gap-2">
            <span>📱</span> {resume.phone}
          </div>
        )}
      </div>
    </div>
  );
};

export const AddressSection = ({ resume, className = "" }) => {
  const { street, city, state, zipCode, country } = resume.address || {};
  const hasAddress = street || city || state || country;
  
  if (!hasAddress) return null;
  
  const addressLine = [city, state, zipCode].filter(Boolean).join(', ');
  
  return (
    <div className={className}>
      <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-gray-500">Address</h3>
      <div className="space-y-1 text-sm">
        {street && (
          <div className="flex items-start gap-2">
            <span>📍</span>
            <span>{street}</span>
          </div>
        )}
        {addressLine && (
          <div className="ml-6">{addressLine}</div>
        )}
        {country && (
          <div className="ml-6">{country}</div>
        )}
      </div>
    </div>
  );
};



export const SocialLinksSection = ({ resume, className = "" }) => {
  const { linkedin, github, portfolio, twitter } = resume.socialLinks || {};
  const hasLinks = linkedin || github || portfolio || twitter;
  
  if (!hasLinks) return null;
  
  return (
    <div className={className}>
      <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-gray-500">Connect</h3>
      <div className="space-y-2 text-sm">
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
            <span>🔗</span> LinkedIn
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:underline">
            <span>💻</span> GitHub
          </a>
        )}
        {portfolio && (
          <a href={portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple-600 hover:underline">
            <span>🌐</span> Portfolio
          </a>
        )}
        {twitter && (
          <a href={twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:underline">
            <span>🐦</span> Twitter
          </a>
        )}
      </div>
    </div>
  );
};



export const SkillsSection = ({ resume, variant = 'tags', className = "" }) => {
  if (!resume.skills || resume.skills.length === 0) return null;
  
  
  if (variant === 'tags') {
    return (
      <div className={className}>
        <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-gray-500">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {resume.skills.map((skill, i) => (
            <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  }
  
  
  if (variant === 'bars') {
    return (
      <div className={className}>
        <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-gray-500">Skills</h3>
        <div className="space-y-3">
          {resume.skills.map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">{skill}</span>
                <span className="text-gray-500">85%</span>
              </div>
              <div className="bg-gray-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 h-full rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  

  if (variant === 'list') {
    return (
      <div className={className}>
        <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-gray-500">Skills</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
          {resume.skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  return null;
};



export const LanguagesSection = ({ resume, variant = 'simple', className = "" }) => {
  if (!resume.languages || resume.languages.length === 0) return null;
  
  if (variant === 'simple') {
    return (
      <div className={className}>
        <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-gray-500">Languages</h3>
        <div className="space-y-2">
          {resume.languages.map((lang, i) => (
            <div key={i} className="flex justify-between text-sm">
              <span className="font-medium">{lang.name}</span>
              <span className="text-gray-500">{lang.proficiency}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  if (variant === 'tags') {
    return (
      <div className={className}>
        <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-gray-500">Languages</h3>
        <div className="flex flex-wrap gap-2">
          {resume.languages.map((lang, i) => (
            <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              {lang.name} ({lang.proficiency})
            </span>
          ))}
        </div>
      </div>
    );
  }
  
  return null;
};


export const CertificationsSection = ({ resume, variant = 'detailed', className = "" }) => {
  if (!resume.certifications || resume.certifications.length === 0) return null;
  
  if (variant === 'detailed') {
    return (
      <div className={className}>
        <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-gray-500">Certifications</h3>
        <div className="space-y-3">
          {resume.certifications.map((cert, i) => (
            <div key={i}>
              <div className="font-semibold text-gray-800">{cert.name}</div>
              <div className="text-sm text-gray-600">{cert.issuer}</div>
              <div className="text-xs text-gray-500">{cert.date}</div>
              {cert.credentialId && (
                <div className="text-xs text-gray-400">ID: {cert.credentialId}</div>
              )}
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-purple-600 text-xs hover:underline">
                  Verify Certificate →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  if (variant === 'simple') {
    return (
      <div className={className}>
        <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-gray-500">Certifications</h3>
        <div className="space-y-1">
          {resume.certifications.map((cert, i) => (
            <div key={i} className="text-sm text-gray-700">
              • {cert.name} ({cert.issuer})
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  return null;
};



export const SummarySection = ({ resume, className = "" }) => {
  if (!resume.bio) return null;
  
  return (
    <div className={className}>
      <h3 className="text-md font-bold uppercase tracking-wider mb-3 text-gray-700 border-b pb-2">
        Professional Summary
      </h3>
      <p className="text-gray-700 leading-relaxed text-sm">{resume.bio}</p>
    </div>
  );
};


export const ExperienceSection = ({ resume, variant = 'detailed', className = "" }) => {
  if (!resume.experience || resume.experience.length === 0) return null;
  
  if (variant === 'detailed') {
    return (
      <div className={className}>
        <h3 className="text-md font-bold uppercase tracking-wider mb-4 text-gray-700 border-b pb-2">
          Work Experience
        </h3>
        {resume.experience.map((exp, i) => (
          <div key={i} className="mb-5">
            <div className="flex justify-between items-start flex-wrap mb-1">
              <div>
                <h4 className="font-bold text-gray-800 text-lg">{exp.role}</h4>
                <p className="text-purple-600 font-semibold text-sm">{exp.company}</p>
              </div>
              <p className="text-gray-500 text-sm">{exp.duration}</p>
            </div>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    );
  }
  
  if (variant === 'compact') {
    return (
      <div className={className}>
        <h3 className="text-md font-bold uppercase tracking-wider mb-4 text-gray-700 border-b pb-2">
          Experience
        </h3>
        {resume.experience.map((exp, i) => (
          <div key={i} className="mb-4">
            <div className="flex justify-between items-start">
              <h4 className="font-bold text-gray-800">{exp.role} at {exp.company}</h4>
              <p className="text-gray-500 text-xs">{exp.duration}</p>
            </div>
            <p className="text-gray-600 text-sm mt-1">{exp.description}</p>
          </div>
        ))}
      </div>
    );
  }
  
  return null;
};



export const EducationSection = ({ resume, variant = 'detailed', className = "" }) => {
  if (!resume.education || resume.education.length === 0) return null;
  
  if (variant === 'detailed') {
    return (
      <div className={className}>
        <h3 className="text-md font-bold uppercase tracking-wider mb-4 text-gray-700 border-b pb-2">
          Education
        </h3>
        {resume.education.map((edu, i) => (
          <div key={i} className="mb-4">
            <h4 className="font-bold text-gray-800">{edu.degree}</h4>
            <p className="text-gray-600 text-sm">{edu.institution}</p>
            <p className="text-gray-500 text-xs">{edu.year}</p>
            {edu.grade && <p className="text-gray-500 text-xs mt-1">Grade: {edu.grade}</p>}
          </div>
        ))}
      </div>
    );
  }
  
  if (variant === 'compact') {
    return (
      <div className={className}>
        <h3 className="text-md font-bold uppercase tracking-wider mb-3 text-gray-700 border-b pb-2">
          Education
        </h3>
        {resume.education.map((edu, i) => (
          <div key={i} className="mb-2">
            <span className="font-semibold text-gray-800">{edu.degree}</span>
            <span className="text-gray-500 text-sm"> - {edu.institution}</span>
            <span className="text-gray-400 text-xs ml-2">({edu.year})</span>
          </div>
        ))}
      </div>
    );
  }
  
  return null;
};


export const ProjectsSection = ({ resume, variant = 'detailed', className = "" }) => {
  if (!resume.projects || resume.projects.length === 0) return null;
  
  if (variant === 'detailed') {
    return (
      <div className={className}>
        <h3 className="text-md font-bold uppercase tracking-wider mb-4 text-gray-700 border-b pb-2">
          Projects
        </h3>
        {resume.projects.map((project, i) => (
          <div key={i} className="mb-4">
            <h4 className="font-bold text-gray-800">{project.title}</h4>
            <p className="text-gray-600 text-sm mt-1">{project.description}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-purple-600 text-sm mt-1 inline-block hover:underline">
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    );
  }
  
  if (variant === 'cards') {
    return (
      <div className={className}>
        <h3 className="text-md font-bold uppercase tracking-wider mb-4 text-gray-700 border-b pb-2">
          Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-3">
          {resume.projects.map((project, i) => (
            <div key={i} className="bg-gray-50 p-3 rounded-lg">
              <h4 className="font-bold text-gray-800 text-sm">{project.title}</h4>
              <p className="text-gray-600 text-xs mt-1">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  return null;
};



export const AwardsSection = ({ resume, variant = 'detailed', className = "" }) => {
  if (!resume.awards || resume.awards.length === 0) return null;
  
  if (variant === 'detailed') {
    return (
      <div className={className}>
        <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-gray-500">Awards</h3>
        <div className="space-y-3">
          {resume.awards.map((award, i) => (
            <div key={i}>
              <div className="font-semibold text-gray-800">{award.title}</div>
              <div className="text-sm text-gray-600">{award.issuer}</div>
              <div className="text-xs text-gray-500">{award.date}</div>
              {award.description && (
                <p className="text-sm text-gray-600 mt-1">{award.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  if (variant === 'simple') {
    return (
      <div className={className}>
        <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-gray-500">Awards</h3>
        <div className="space-y-1">
          {resume.awards.map((award, i) => (
            <div key={i} className="text-sm text-gray-700">
              • {award.title} - {award.issuer} ({award.date})
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  return null;
};



export const VolunteerSection = ({ resume, className = "" }) => {
  if (!resume.volunteer || resume.volunteer.length === 0) return null;
  
  return (
    <div className={className}>
      <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-gray-500">Volunteer Experience</h3>
      {resume.volunteer.map((vol, i) => (
        <div key={i} className="mb-3">
          <div className="font-semibold text-gray-800">{vol.role}</div>
          <div className="text-sm text-gray-600">{vol.organization}</div>
          <div className="text-xs text-gray-500">{vol.duration}</div>
          <p className="text-sm text-gray-600 mt-1">{vol.description}</p>
        </div>
      ))}
    </div>
  );
};



export const InterestsSection = ({ resume, variant = 'tags', className = "" }) => {
  if (!resume.interests || resume.interests.length === 0) return null;
  
  if (variant === 'tags') {
    return (
      <div className={className}>
        <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-gray-500">Interests</h3>
        <div className="flex flex-wrap gap-2">
          {resume.interests.map((interest, i) => (
            <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              {interest}
            </span>
          ))}
        </div>
      </div>
    );
  }
  
  if (variant === 'list') {
    return (
      <div className={className}>
        <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-gray-500">Interests</h3>
        <div className="flex flex-wrap gap-3 text-sm text-gray-700">
          {resume.interests.map((interest, i) => (
            <span key={i}>❤️ {interest}</span>
          ))}
        </div>
      </div>
    );
  }
  
  return null;
};



export const PublicationsSection = ({ resume, variant = 'detailed', className = "" }) => {
  if (!resume.publications || resume.publications.length === 0) return null;
  
  if (variant === 'detailed') {
    return (
      <div className={className}>
        <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-gray-500">Publications</h3>
        <div className="space-y-3">
          {resume.publications.map((pub, i) => (
            <div key={i}>
              <div className="font-semibold text-gray-800">{pub.title}</div>
              <div className="text-sm text-gray-600">{pub.publisher}</div>
              <div className="text-xs text-gray-500">{pub.date}</div>
              {pub.link && (
                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-purple-600 text-xs hover:underline">
                  Read Publication →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  return null;
};



export const ReferencesSection = ({ resume, className = "" }) => {
  if (!resume.references) return null;
  
  if (resume.references.available === false) return null;
  
  if (resume.references.details) {
    return (
      <div className={className}>
        <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-gray-500">References</h3>
        <p className="text-sm text-gray-600">{resume.references.details}</p>
      </div>
    );
  }
  
  return (
    <div className={className}>
      <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-gray-500">References</h3>
      <p className="text-sm text-gray-600 italic">Available upon request</p>
    </div>
  );
};



export const CustomSection = ({ title, items, className = "" }) => {
  if (!items || items.length === 0) return null;
  
  return (
    <div className={className}>
      <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-gray-500">{title}</h3>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="text-sm text-gray-700">
            • {item}
          </div>
        ))}
      </div>
    </div>
  );
};



export default {
  HeaderSection,
  ContactSection,
  AddressSection,
  SocialLinksSection,
  SkillsSection,
  LanguagesSection,
  CertificationsSection,
  SummarySection,
  ExperienceSection,
  EducationSection,
  ProjectsSection,
  AwardsSection,
  VolunteerSection,
  InterestsSection,
  PublicationsSection,
  ReferencesSection,
  CustomSection
};