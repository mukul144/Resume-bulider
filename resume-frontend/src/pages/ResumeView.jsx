import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { portfolioService } from '../services/portfolioService';
import { Download, Printer, Home, ArrowLeft } from 'lucide-react';

const ResumeView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const data = await portfolioService.generateResume(id);
        setResume(data);
      } catch (err) {
        setError('Failed to load resume. It may have been deleted or expired.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchResume();
  }, [id]);

  const handlePrint = () => {
    window.print();
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
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
        <button onClick={() => navigate('/create-resume')} className="btn-primary">
          Create New Resume
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Resume Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8">
          <h1 className="text-4xl font-bold mb-2">{resume.name}</h1>
          <p className="text-xl opacity-90">{resume.profession}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            {resume.email && <div>📧 {resume.email}</div>}
            {resume.phone && <div>📱 {resume.phone}</div>}
          </div>
        </div>

        <div className="p-8">
          {/* Bio */}
          {resume.bio && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-3 border-b-2 border-gray-200 pb-2">Professional Summary</h2>
              <p className="text-gray-700">{resume.bio}</p>
            </div>
          )}

          {/* Skills */}
          {resume.skills && resume.skills.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-3 border-b-2 border-gray-200 pb-2">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {resume.skills.map((skill, index) => (
                  <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Experience */}
          {resume.experience && resume.experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-3 border-b-2 border-gray-200 pb-2">Work Experience</h2>
              {resume.experience.map((exp, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-gray-600 font-medium">{exp.company} | {exp.duration}</p>
                  <p className="text-gray-700 mt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {resume.projects && resume.projects.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-3 border-b-2 border-gray-200 pb-2">Projects</h2>
              {resume.projects.map((project, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-700 mt-1">{project.description}</p>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-purple-600 text-sm">
                      View Project →
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {resume.education && resume.education.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-3 border-b-2 border-gray-200 pb-2">Education</h2>
              {resume.education.map((edu, index) => (
                <div key={index} className="mb-3">
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.institution} | {edu.year}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex justify-center gap-4 print:hidden">
        <button onClick={handlePrint} className="btn-primary">
          <Printer className="h-4 w-4" />
          Print / Save as PDF
        </button>
        <button onClick={() => navigate('/')} className="btn-secondary">
          <Home className="h-4 w-4" />
          Home
        </button>
      </div>
    </div>
  );
};

export default ResumeView;