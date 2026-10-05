import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { portfolioService } from '../services/portfolioService';
import TemplatePreview from '../components/TemplatePreview';

const templates = [
  { id: 'modern', name: 'Modern', description: 'Clean gradient design with modern layout' },
  { id: 'classic', name: 'Classic', description: 'Traditional professional layout with elegant borders' },
  { id: 'minimal', name: 'Minimal', description: 'Simple, clean, and elegant design' },
  { id: 'creative', name: 'Creative', description: 'Bold colors and unique layout for creative professionals' },
  { id: 'tech', name: 'Tech', description: 'Developer-focused with code-style elements' },
  { id: 'executive', name: 'Executive', description: 'Premium design for senior professionals' },
  { id: 'sidebar', name: 'Sidebar', description: 'Colored sidebar with main content area' },
  { id: 'twocolumn', name: 'Two Column', description: 'Balanced two-column layout' },
  { id: 'card', name: 'Card Style', description: 'Modern card-based design' },
  { id: 'timeline', name: 'Timeline', description: 'Chronological timeline layout' },
  { id: 'berlin', name: 'Berlin', description: 'Clean left sidebar layout with dark theme' },
  { id: 'specialist', name: 'Specialist', description: 'Traditional two column with table layout' },
  { id: 'santiago', name: 'Santiago', description: 'Professional address header style' },
  { id: 'london', name: 'London', description: 'Contact heavy header design' },
  { id: 'modernminimal', name: 'Modern Minimal', description: 'Clean spacing minimalist design' },
  { id: 'corporate', name: 'Corporate', description: 'Bold header executive style' },
  { id: 'elegant', name: 'Elegant', description: 'Classic serif font style' },
  { id: 'split', name: 'Split Screen', description: 'Color + white split layout' },
  { id: 'compact', name: 'Compact', description: 'Space efficient design' },
  { id: 'borderaccent', name: 'Border Accent', description: 'Colorful side accent bar' }
];

const SelectTemplate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSelectTemplate = (templateId) => {
    setSelectedTemplate(templateId);
  };

  const handlePreview = async () => {
    if (!selectedTemplate) {
      alert('Please select a template');
      return;
    }

    setLoading(true);
    try {
      await portfolioService.updateTemplate(id, selectedTemplate);
      navigate(`/preview/${id}`);
    } catch (error) {
      console.error('Error updating template:', error);
      alert('Failed to update template. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Choose Your Resume Template</h1>
      <p className="text-gray-600 mb-8">Select from 20 professionally designed templates</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
              selectedTemplate === template.id
                ? 'border-purple-600 ring-2 ring-purple-600 transform scale-105 shadow-lg'
                : 'border-gray-200 hover:border-purple-300 hover:shadow-md'
            }`}
            onClick={() => handleSelectTemplate(template.id)}
          >
           
            <div className="relative h-48 bg-gray-100 overflow-hidden">
              <TemplatePreview templateId={template.id} templateName={template.name} />
              
              
              {selectedTemplate === template.id && (
                <div className="absolute top-2 right-2 bg-purple-600 text-white rounded-full p-1 shadow-lg">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            
           
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-lg mb-1">{template.name}</h3>
              <p className="text-sm text-gray-600">{template.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <button onClick={() => navigate('/create-resume')} className="btn-secondary">
          ← Back to Edit
        </button>
        <button 
          onClick={handlePreview} 
          disabled={loading || !selectedTemplate} 
          className="btn-primary"
        >
          {loading ? 'Processing...' : 'Preview Resume →'}
        </button>
      </div>
    </div>
  );
};

export default SelectTemplate;