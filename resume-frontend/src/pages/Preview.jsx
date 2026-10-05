import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { portfolioService } from '../services/portfolioService';
import { Download, Edit } from 'lucide-react';
import html2pdf from 'html2pdf.js';


import ModernTemplate from '../components/templates/ModernTemplate';
import ClassicTemplate from '../components/templates/ClassicTemplate';
import MinimalTemplate from '../components/templates/MinimalTemplate';
import BerlinTemplate from '../components/templates/BerlinTemplate';
import BorderAccentTemplate from '../components/templates/BorderAccentTemplate';
import CardTemplate from '../components/templates/CardTemplate';
import CompactTemplate from '../components/templates/CompactTemplate';
import CorporateTemplate from '../components/templates/CorporateTemplate';
import CreativeTemplate from '../components/templates/CreativeTemplate';
import ElegantTemplate from '../components/templates/ElegantTemplate';
import ExecutiveTemplate from '../components/templates/ExecutiveTemplate';
import LondonTemplate from '../components/templates/LondonTemplate';
import ModernMinimalTemplate from '../components/templates/ModernMinimalTemplate';
import SantiagoTemplate from '../components/templates/SantiagoTemplate';
import SidebarTemplate from '../components/templates/SidebarTemplate';
import SpecialistTemplate from '../components/templates/SpecialistTemplate';
import SplitTemplate from '../components/templates/SplitTemplate';
import TechTemplate from '../components/templates/TechTemplate';
import TimelineTemplate from '../components/templates/TimelineTemplate';
import TwoColumnTemplate from '../components/templates/TwoColumnTemplate';

const Preview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const resumeRef = useRef(null);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const data = await portfolioService.getResume(id);
        console.log('Resume data:', data);
        console.log('Selected template:', data?.template);
        setResume(data);
      } catch (err) {
        setError('Failed to load resume. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchResume();
  }, [id]);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    try {
      const element = resumeRef.current;
      
      const opt = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: `${resume?.name || 'Resume'}_Resume.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      };
      
      await html2pdf().set(opt).from(element).save();
      
      await portfolioService.deleteResume(id);
      alert('✅ Resume downloaded successfully!\n\nYour data has been removed from our servers.');
      navigate('/');
      
    } catch (error) {
      console.error('Download error:', error);
      alert('Failed to download resume. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleEdit = () => {
    navigate(`/select-template/${id}`);
  };

  
  const renderAddress = () => {
    const { street, city, state, zipCode, country } = resume?.address || {};
    const parts = [];
    if (street) parts.push(street);
    if (city) parts.push(city);
    if (state) parts.push(state);
    if (zipCode) parts.push(zipCode);
    if (country) parts.push(country);
    return parts.length > 0 ? parts.join(', ') : null;
  };

  
  const renderCommonContent = () => (
    <>
      
      {(resume?.socialLinks?.linkedin || resume?.socialLinks?.portfolio || resume?.socialLinks?.twitter) && (
        <div className="mb-6 text-center">
          <div className="flex justify-center gap-4 flex-wrap">
            {resume.socialLinks?.linkedin && (
              <a href={resume.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                🔗 LinkedIn
              </a>
            )}
            {resume.socialLinks?.portfolio && (
              <a href={resume.socialLinks.portfolio} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline text-sm">
                🌐 Portfolio
              </a>
            )}
            {resume.socialLinks?.twitter && (
              <a href={resume.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">
                🐦 Twitter
              </a>
            )}
          </div>
        </div>
      )}

      
      {resume?.bio && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-purple-600 pb-2">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">{resume.bio}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
       
        <div>
          {resume?.skills?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {resume.skills.map((skill, index) => (
                  <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          
          {resume?.certifications?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">Certifications</h2>
              {resume.certifications.map((cert, index) => (
                <div key={index} className="mb-3">
                  <h3 className="font-semibold text-gray-800">{cert.name}</h3>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                  <p className="text-xs text-gray-500">{cert.date}</p>
                </div>
              ))}
            </div>
          )}

          
          {resume?.languages?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">Languages</h2>
              {resume.languages.map((lang, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-gray-700">{lang.name}</span>
                  <span className="text-gray-500 text-sm">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          )}

          
          {resume?.awards?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">Awards</h2>
              {resume.awards.map((award, index) => (
                <div key={index} className="mb-3">
                  <h3 className="font-semibold text-gray-800">{award.title}</h3>
                  <p className="text-sm text-gray-600">{award.issuer}</p>
                  <p className="text-xs text-gray-500">{award.date}</p>
                </div>
              ))}
            </div>
          )}

         
          {resume?.interests?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">Interests</h2>
              <div className="flex flex-wrap gap-2">
                {resume.interests.map((interest, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        
        <div>
          {resume?.experience?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">Work Experience</h2>
              {resume.experience.map((exp, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-start flex-wrap">
                    <h3 className="font-bold text-gray-800">{exp.role}</h3>
                    <p className="text-gray-500 text-sm">{exp.duration}</p>
                  </div>
                  <p className="text-purple-600 font-semibold text-sm">{exp.company}</p>
                  <p className="text-gray-600 text-sm mt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          )}

         
          {resume?.education?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">Education</h2>
              {resume.education.map((edu, index) => (
                <div key={index} className="mb-3">
                  <h3 className="font-bold text-gray-800">{edu.degree}</h3>
                  <p className="text-gray-600 text-sm">{edu.institution}</p>
                  <p className="text-gray-500 text-xs">{edu.year}</p>
                  {edu.grade && <p className="text-gray-500 text-xs">Grade: {edu.grade}</p>}
                </div>
              ))}
            </div>
          )}

          
          {resume?.projects?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">Projects</h2>
              {resume.projects.map((project, index) => (
                <div key={index} className="mb-3">
                  <h3 className="font-semibold text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-purple-600 text-sm hover:underline">
                      View Project →
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}

          
          {resume?.volunteer?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">Volunteer</h2>
              {resume.volunteer.map((vol, index) => (
                <div key={index} className="mb-3">
                  <h3 className="font-semibold text-gray-800">{vol.role}</h3>
                  <p className="text-gray-600 text-sm">{vol.organization}</p>
                  <p className="text-gray-500 text-xs">{vol.duration}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

     
      {resume?.references && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <h2 className="text-lg font-bold text-gray-800 mb-2">References</h2>
          {resume.references.details ? (
            <p className="text-gray-600 text-sm">{resume.references.details}</p>
          ) : (
            <p className="text-gray-500 italic text-sm">Available upon request</p>
          )}
        </div>
      )}
    </>
  );


  const CompactTemplateWithContent = () => (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl p-6">
      {/* Header */}
      <div className="border-b-2 border-gray-800 pb-4 mb-4">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{resume?.name || 'Your Name'}</h1>
            <p className="text-gray-600">{resume?.profession || 'Professional Title'}</p>
          </div>
          <div className="text-right text-sm text-gray-500">
            {resume?.email && <div>{resume.email}</div>}
            {resume?.phone && <div>{resume.phone}</div>}
          </div>
        </div>
      </div>

      
      {renderAddress() && (
        <div className="mb-4 text-sm text-gray-500">
          📍 {renderAddress()}
        </div>
      )}

      
      {renderCommonContent()}
    </div>
  );

  
  const templateMap = {
    modern: ModernTemplate,
    classic: ClassicTemplate,
    minimal: MinimalTemplate,
    berlin: BerlinTemplate,
    borderaccent: BorderAccentTemplate,
    card: CardTemplate,
    compact: CompactTemplateWithContent,
    corporate: CorporateTemplate,
    creative: CreativeTemplate,
    elegant: ElegantTemplate,
    executive: ExecutiveTemplate,
    london: LondonTemplate,
    modernminimal: ModernMinimalTemplate,
    santiago: SantiagoTemplate,
    sidebar: SidebarTemplate,
    specialist: SpecialistTemplate,
    split: SplitTemplate,
    tech: TechTemplate,
    timeline: TimelineTemplate,
    twocolumn: TwoColumnTemplate,
  };

  const renderTemplate = () => {
    const selectedTemplate = resume?.template || 'modern';
    const TemplateComponent = templateMap[selectedTemplate] || ModernTemplate;
    console.log('Rendering template:', selectedTemplate);
    return <TemplateComponent resume={resume} />;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>
        <button onClick={() => navigate('/create-resume')} className="px-6 py-3 bg-purple-600 text-white rounded-lg">
          Create New Resume
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-center no-print">
        <p className="text-green-700">
          👁️ Previewing: <strong className="font-bold">{resume?.template?.toUpperCase() || 'MODERN'}</strong> template
        </p>
      </div>

      <div ref={resumeRef}>
        {renderTemplate()}
      </div>

      <div className="mt-8 flex justify-center gap-4 no-print">
        <button 
          onClick={handleDownload} 
          disabled={isDownloading}
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
        >
          <Download className="h-5 w-5" />
          {isDownloading ? 'Downloading...' : 'Download PDF'}
        </button>
        <button onClick={handleEdit} className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
          <Edit className="h-5 w-5" />
          Change Template
        </button>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500 no-print">
        ⚠️ <strong>Note:</strong> After downloading, your data will be permanently deleted from our servers.
      </div>
    </div> 
  );
};

export default Preview;