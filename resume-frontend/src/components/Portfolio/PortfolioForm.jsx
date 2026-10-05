import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

const PortfolioForm = ({ formData, setFormData, onNext }) => {
  const [newSkill, setNewSkill] = useState('');
  const [newProject, setNewProject] = useState({ title: '', description: '', link: '' });
  const [newEducation, setNewEducation] = useState({ institution: '', degree: '', year: '' });
  const [newExperience, setNewExperience] = useState({ company: '', role: '', duration: '', description: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      setFormData({ ...formData, skills: [...formData.skills, newSkill.trim()] });
      setNewSkill('');
    }
  };

  const removeSkill = (index) => {
    setFormData({ ...formData, skills: formData.skills.filter((_, i) => i !== index) });
  };

  const addProject = () => {
    if (newProject.title) {
      setFormData({ ...formData, projects: [...formData.projects, newProject] });
      setNewProject({ title: '', description: '', link: '' });
    }
  };

  const removeProject = (index) => {
    setFormData({ ...formData, projects: formData.projects.filter((_, i) => i !== index) });
  };

  const addEducation = () => {
    if (newEducation.institution) {
      setFormData({ ...formData, education: [...formData.education, newEducation] });
      setNewEducation({ institution: '', degree: '', year: '' });
    }
  };

  const removeEducation = (index) => {
    setFormData({ ...formData, education: formData.education.filter((_, i) => i !== index) });
  };

  const addExperience = () => {
    if (newExperience.company) {
      setFormData({ ...formData, experience: [...formData.experience, newExperience] });
      setNewExperience({ company: '', role: '', duration: '', description: '' });
    }
  };

  const removeExperience = (index) => {
    setFormData({ ...formData, experience: formData.experience.filter((_, i) => i !== index) });
  };

  return (
    <form onSubmit={onNext} className="space-y-8">
      {/* Basic Information */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Profession</label>
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-purple-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Bio / Summary</label>
            <textarea
              name="bio"
              rows="3"
              value={formData.bio}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-purple-500"
            />
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add a skill"
            className="flex-1 px-3 py-2 border rounded-md"
          />
          <button type="button" onClick={addSkill} className="btn-secondary">
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData.skills.map((skill, index) => (
            <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full flex items-center gap-2">
              {skill}
              <button type="button" onClick={() => removeSkill(index)} className="hover:text-red-600">
                <Trash2 className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <div className="space-y-4 mb-4">
          <div className="grid md:grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Project Title"
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
              className="px-3 py-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Project Link"
              value={newProject.link}
              onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
              className="px-3 py-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Description"
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              className="md:col-span-2 px-3 py-2 border rounded-md"
            />
          </div>
          <button type="button" onClick={addProject} className="btn-secondary w-full">
            <Plus className="h-4 w-4" /> Add Project
          </button>
        </div>
        {formData.projects.map((project, index) => (
          <div key={index} className="border-t pt-3 mt-3">
            <div className="flex justify-between">
              <div>
                <h4 className="font-semibold">{project.title}</h4>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
              <button type="button" onClick={() => removeProject(index)} className="text-red-600">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        <div className="space-y-4 mb-4">
          <div className="grid md:grid-cols-3 gap-2">
            <input
              type="text"
              placeholder="Institution"
              value={newEducation.institution}
              onChange={(e) => setNewEducation({ ...newEducation, institution: e.target.value })}
              className="px-3 py-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Degree"
              value={newEducation.degree}
              onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
              className="px-3 py-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Year"
              value={newEducation.year}
              onChange={(e) => setNewEducation({ ...newEducation, year: e.target.value })}
              className="px-3 py-2 border rounded-md"
            />
          </div>
          <button type="button" onClick={addEducation} className="btn-secondary w-full">
            <Plus className="h-4 w-4" /> Add Education
          </button>
        </div>
        {formData.education.map((edu, index) => (
          <div key={index} className="border-t pt-3 mt-3 flex justify-between">
            <div>
              <h4 className="font-semibold">{edu.degree}</h4>
              <p className="text-sm text-gray-600">{edu.institution} - {edu.year}</p>
            </div>
            <button type="button" onClick={() => removeEducation(index)} className="text-red-600">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
        <div className="space-y-4 mb-4">
          <div className="grid md:grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Company"
              value={newExperience.company}
              onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
              className="px-3 py-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Role"
              value={newExperience.role}
              onChange={(e) => setNewExperience({ ...newExperience, role: e.target.value })}
              className="px-3 py-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Duration"
              value={newExperience.duration}
              onChange={(e) => setNewExperience({ ...newExperience, duration: e.target.value })}
              className="px-3 py-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Description"
              value={newExperience.description}
              onChange={(e) => setNewExperience({ ...newExperience, description: e.target.value })}
              className="md:col-span-2 px-3 py-2 border rounded-md"
            />
          </div>
          <button type="button" onClick={addExperience} className="btn-secondary w-full">
            <Plus className="h-4 w-4" /> Add Experience
          </button>
        </div>
        {formData.experience.map((exp, index) => (
          <div key={index} className="border-t pt-3 mt-3 flex justify-between">
            <div>
              <h4 className="font-semibold">{exp.role} at {exp.company}</h4>
              <p className="text-sm text-gray-600">{exp.duration}</p>
              <p className="text-sm text-gray-700">{exp.description}</p>
            </div>
            <button type="button" onClick={() => removeExperience(index)} className="text-red-600">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <button type="submit" className="btn-primary">
          Next: Choose Template →
        </button>
      </div>
    </form>
  );
};

export default PortfolioForm;