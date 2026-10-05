const templates = [
  { id: 'modern', name: 'Modern', description: 'Clean and contemporary design', preview: '🎨' },
  { id: 'classic', name: 'Classic', description: 'Traditional professional layout', preview: '📄' },
  { id: 'creative', name: 'Creative', description: 'Stand out with unique design', preview: '✨' },
  { id: 'minimal', name: 'Minimal', description: 'Simple and elegant', preview: '⬜' },
  { id: 'tech', name: 'Tech', description: 'Perfect for developers', preview: '💻' },
  { id: 'executive', name: 'Executive', description: 'For senior professionals', preview: '👔' }
];

const TemplateSelector = ({ selectedTemplate, onSelectTemplate, onBack, onContinue, loading }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Choose Your Resume Template</h2>
      <p className="text-gray-600 mb-8">Select a template that best represents your professional style</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
              selectedTemplate === template.id
                ? 'border-purple-600 ring-2 ring-purple-600 transform scale-105'
                : 'border-gray-200 hover:border-purple-300'
            }`}
            onClick={() => onSelectTemplate(template.id)}
          >
            <div className="bg-gray-100 h-48 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">{template.preview}</div>
                <div className="text-gray-500">Template Preview</div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{template.name}</h3>
              <p className="text-sm text-gray-600">{template.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <button onClick={onBack} className="btn-secondary">
          ← Back to Edit
        </button>
        <button onClick={onContinue} disabled={loading || !selectedTemplate} className="btn-primary">
          {loading ? 'Processing...' : 'Generate Resume →'}
        </button>
      </div>
    </div>
  );
};

export default TemplateSelector;