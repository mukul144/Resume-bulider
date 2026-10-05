import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { portfolioService } from '../services/portfolioService';
import { 
  Plus, Trash2, User, Mail, Phone, MapPin, 
  Briefcase, Code, Award, Globe, Heart, 
  Link as LinkIcon, GraduationCap, FileText, Star, X
} from 'lucide-react';

const CreateResume = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [activeSection, setActiveSection] = useState('basic');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profession: '',
    bio: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    },
    socialLinks: {
      linkedin: '',
      portfolio: '',
      twitter: ''
    },
    skills: [],
    certifications: [],
    languages: [],
    projects: [],
    education: [],
    experience: [],
    awards: [],
    volunteer: [],
    interests: [],
    references: {
      available: true,
      details: ''
    }
  });

  
  const [newSkill, setNewSkill] = useState('');
  const [newInterest, setNewInterest] = useState('');
  const [newCertification, setNewCertification] = useState({ name: '', issuer: '', date: '', credentialId: '', link: '' });
  const [newLanguage, setNewLanguage] = useState({ name: '', proficiency: 'Fluent' });
  const [newProject, setNewProject] = useState({ title: '', description: '', link: '' });
  const [newEducation, setNewEducation] = useState({ institution: '', degree: '', year: '', grade: '' });
  const [newExperience, setNewExperience] = useState({ company: '', role: '', duration: '', description: '' });
  const [newAward, setNewAward] = useState({ title: '', issuer: '', date: '', description: '' });
  const [newVolunteer, setNewVolunteer] = useState({ organization: '', role: '', duration: '', description: '' });

  
  const sectionOrder = [
    'basic', 'address', 'social', 'skills', 'experience', 
    'education', 'certifications', 'languages', 'projects', 
    'awards', 'volunteer', 'interests'
  ];

  const currentIndex = sectionOrder.indexOf(activeSection);
  const isLastSection = currentIndex === sectionOrder.length - 1;
  const isFirstSection = currentIndex === 0;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: { ...formData[parent], [child]: value }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSocialChange = (platform, value) => {
    setFormData({
      ...formData,
      socialLinks: { ...formData.socialLinks, [platform]: value }
    });
  };

  
  const handleNextSection = () => {
    if (currentIndex < sectionOrder.length - 1) {
      setActiveSection(sectionOrder[currentIndex + 1]);
    }
  };

  const handlePreviousSection = () => {
    if (currentIndex > 0) {
      setActiveSection(sectionOrder[currentIndex - 1]);
    }
  };

  
  const handleSubmit = async () => {
    setLoading(true);
    try {
      console.log('Saving all data:', formData);
      const response = await portfolioService.createPortfolio(formData);
      console.log('Portfolio created:', response);
      navigate(`/select-template/${response.portfolio._id}`);
    } catch (error) {
      console.error('Error saving portfolio:', error);
      alert('Failed to save portfolio. Please try again.');
    } finally {
      setLoading(false);
    }
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

  const addInterest = () => {
    if (newInterest.trim()) {
      setFormData({ ...formData, interests: [...formData.interests, newInterest.trim()] });
      setNewInterest('');
    }
  };

  const removeInterest = (index) => {
    setFormData({ ...formData, interests: formData.interests.filter((_, i) => i !== index) });
  };

  const addCertification = () => {
    if (newCertification.name) {
      setFormData({ ...formData, certifications: [...formData.certifications, newCertification] });
      setNewCertification({ name: '', issuer: '', date: '', credentialId: '', link: '' });
    }
  };

  const removeCertification = (index) => {
    setFormData({ ...formData, certifications: formData.certifications.filter((_, i) => i !== index) });
  };

  const addLanguage = () => {
    if (newLanguage.name) {
      setFormData({ ...formData, languages: [...formData.languages, newLanguage] });
      setNewLanguage({ name: '', proficiency: 'Fluent' });
    }
  };

  const removeLanguage = (index) => {
    setFormData({ ...formData, languages: formData.languages.filter((_, i) => i !== index) });
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
      setNewEducation({ institution: '', degree: '', year: '', grade: '' });
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

  const addAward = () => {
    if (newAward.title) {
      setFormData({ ...formData, awards: [...formData.awards, newAward] });
      setNewAward({ title: '', issuer: '', date: '', description: '' });
    }
  };

  const removeAward = (index) => {
    setFormData({ ...formData, awards: formData.awards.filter((_, i) => i !== index) });
  };

  const addVolunteer = () => {
    if (newVolunteer.organization) {
      setFormData({ ...formData, volunteer: [...formData.volunteer, newVolunteer] });
      setNewVolunteer({ organization: '', role: '', duration: '', description: '' });
    }
  };

  const removeVolunteer = (index) => {
    setFormData({ ...formData, volunteer: formData.volunteer.filter((_, i) => i !== index) });
  };

  const sections = [
    { id: 'basic', name: 'Basic Info', icon: User },
    { id: 'address', name: 'Address', icon: MapPin },
    { id: 'social', name: 'Social Links', icon: LinkIcon },
    { id: 'skills', name: 'Skills', icon: Code },
    { id: 'experience', name: 'Experience', icon: Briefcase },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'certifications', name: 'Certifications', icon: Award },
    { id: 'languages', name: 'Languages', icon: Globe },
    { id: 'projects', name: 'Projects', icon: FileText },
    { id: 'awards', name: 'Awards', icon: Star },
    { id: 'volunteer', name: 'Volunteer', icon: Heart },
    { id: 'interests', name: 'Interests', icon: Heart }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Create Your Professional Resume</h1>
      
      {/* Progress Indicator */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            Section {currentIndex + 1} of {sectionOrder.length}
          </span>
          <span className="text-sm text-purple-600 font-medium">
            {Math.round(((currentIndex + 1) / sectionOrder.length) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div 
            className="bg-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / sectionOrder.length) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <div className="flex gap-6">
        {/* Sidebar Navigation */}
        <div className="w-64 shrink-0">
          <div className="sticky top-8 bg-white rounded-lg shadow p-4">
            {sections.map((section, idx) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full text-left px-4 py-2 rounded-lg mb-1 flex items-center gap-3 transition ${
                  activeSection === section.id
                    ? 'bg-purple-600 text-white'
                    : idx < currentIndex 
                      ? 'text-green-600 hover:bg-gray-100' 
                      : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                {idx < currentIndex ? (
                  <span className="h-4 w-4">✓</span>
                ) : (
                  <section.icon className="h-4 w-4" />
                )}
                <span className="text-sm">{section.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Form */}
        <div className="flex-1 space-y-6">
          
          {/* Basic Information */}
          {activeSection === 'basic' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <User className="h-5 w-5 text-purple-600" />
                Basic Information
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Profession *</label>
                  <input
                    type="text"
                    name="profession"
                    required
                    value={formData.profession}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Software Engineer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 px-3 py-2 border rounded-md"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 px-3 py-2 border rounded-md"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Professional Summary</label>
                  <textarea
                    name="bio"
                    rows="4"
                    value={formData.bio}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Write a brief summary of your professional background..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Address */}
          {activeSection === 'address' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-purple-600" />
                Address
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                  <input
                    type="text"
                    name="address.street"
                    value={formData.address.street}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="123 Main Street"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input
                    type="text"
                    name="address.city"
                    value={formData.address.city}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="New York"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  <input
                    type="text"
                    name="address.state"
                    value={formData.address.state}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="NY"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                  <input
                    type="text"
                    name="address.zipCode"
                    value={formData.address.zipCode}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="10001"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  <input
                    type="text"
                    name="address.country"
                    value={formData.address.country}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="United States"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Social Links */}
          {activeSection === 'social' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <LinkIcon className="h-5 w-5 text-purple-600" />
                Social & Professional Links
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-blue-700 text-xl">🔗</span>
                  <input
                    type="url"
                    placeholder="LinkedIn URL"
                    value={formData.socialLinks.linkedin}
                    onChange={(e) => handleSocialChange('linkedin', e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-md"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-600 text-xl">🌐</span>
                  <input
                    type="url"
                    placeholder="Portfolio Website"
                    value={formData.socialLinks.portfolio}
                    onChange={(e) => handleSocialChange('portfolio', e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-md"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400 text-xl">🐦</span>
                  <input
                    type="url"
                    placeholder="Twitter URL"
                    value={formData.socialLinks.twitter}
                    onChange={(e) => handleSocialChange('twitter', e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-md"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Skills */}
          {activeSection === 'skills' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Code className="h-5 w-5 text-purple-600" />
                Skills
              </h2>
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Add a skill (e.g., JavaScript, Python, React)"
                  className="flex-1 px-3 py-2 border rounded-md"
                />
                <button type="button" onClick={addSkill} className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 flex items-center gap-1">
                  <Plus className="h-4 w-4" /> Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.skills.map((skill, index) => (
                  <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full flex items-center gap-2">
                    {skill}
                    <button type="button" onClick={() => removeSkill(index)} className="hover:text-red-600">
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Work Experience */}
          {activeSection === 'experience' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-purple-600" />
                Work Experience
              </h2>
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
                    placeholder="Role / Position"
                    value={newExperience.role}
                    onChange={(e) => setNewExperience({ ...newExperience, role: e.target.value })}
                    className="px-3 py-2 border rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Duration (e.g., 2020-2023)"
                    value={newExperience.duration}
                    onChange={(e) => setNewExperience({ ...newExperience, duration: e.target.value })}
                    className="px-3 py-2 border rounded-md"
                  />
                  <textarea
                    placeholder="Job Description"
                    value={newExperience.description}
                    onChange={(e) => setNewExperience({ ...newExperience, description: e.target.value })}
                    className="md:col-span-2 px-3 py-2 border rounded-md"
                    rows="2"
                  />
                </div>
                <button type="button" onClick={addExperience} className="w-full px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 flex items-center justify-center gap-1">
                  <Plus className="h-4 w-4" /> Add Experience
                </button>
              </div>
              {formData.experience.map((exp, index) => (
                <div key={index} className="border-t pt-3 mt-3">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-semibold">{exp.role} at {exp.company}</h4>
                      <p className="text-sm text-gray-600">{exp.duration}</p>
                      <p className="text-sm text-gray-700 mt-1">{exp.description}</p>
                    </div>
                    <button type="button" onClick={() => removeExperience(index)} className="text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {activeSection === 'education' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-purple-600" />
                Education
              </h2>
              <div className="space-y-4 mb-4">
                <div className="grid md:grid-cols-2 gap-2">
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
                  <input
                    type="text"
                    placeholder="Grade/GPA (Optional)"
                    value={newEducation.grade}
                    onChange={(e) => setNewEducation({ ...newEducation, grade: e.target.value })}
                    className="px-3 py-2 border rounded-md"
                  />
                </div>
                <button type="button" onClick={addEducation} className="w-full px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 flex items-center justify-center gap-1">
                  <Plus className="h-4 w-4" /> Add Education
                </button>
              </div>
              {formData.education.map((edu, index) => (
                <div key={index} className="border-t pt-3 mt-3 flex justify-between">
                  <div>
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <p className="text-sm text-gray-600">{edu.institution} • {edu.year}</p>
                    {edu.grade && <p className="text-xs text-gray-500">Grade: {edu.grade}</p>}
                  </div>
                  <button type="button" onClick={() => removeEducation(index)} className="text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Certifications */}
          {activeSection === 'certifications' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-600" />
                Certifications
              </h2>
              <div className="space-y-4 mb-4">
                <div className="grid md:grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Certification Name"
                    value={newCertification.name}
                    onChange={(e) => setNewCertification({ ...newCertification, name: e.target.value })}
                    className="px-3 py-2 border rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Issuing Organization"
                    value={newCertification.issuer}
                    onChange={(e) => setNewCertification({ ...newCertification, issuer: e.target.value })}
                    className="px-3 py-2 border rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Date"
                    value={newCertification.date}
                    onChange={(e) => setNewCertification({ ...newCertification, date: e.target.value })}
                    className="px-3 py-2 border rounded-md"
                  />
                </div>
                <button type="button" onClick={addCertification} className="w-full px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 flex items-center justify-center gap-1">
                  <Plus className="h-4 w-4" /> Add Certification
                </button>
              </div>
              {formData.certifications.map((cert, index) => (
                <div key={index} className="border-t pt-3 mt-3 flex justify-between">
                  <div>
                    <h4 className="font-semibold">{cert.name}</h4>
                    <p className="text-sm text-gray-600">{cert.issuer} • {cert.date}</p>
                  </div>
                  <button type="button" onClick={() => removeCertification(index)} className="text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Languages */}
          {activeSection === 'languages' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Globe className="h-5 w-5 text-purple-600" />
                Languages
              </h2>
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Language"
                  value={newLanguage.name}
                  onChange={(e) => setNewLanguage({ ...newLanguage, name: e.target.value })}
                  className="flex-1 px-3 py-2 border rounded-md"
                />
                <select
                  value={newLanguage.proficiency}
                  onChange={(e) => setNewLanguage({ ...newLanguage, proficiency: e.target.value })}
                  className="px-3 py-2 border rounded-md"
                >
                  <option value="Native">Native</option>
                  <option value="Fluent">Fluent</option>
                  <option value="Professional">Professional</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Basic">Basic</option>
                </select>
                <button type="button" onClick={addLanguage} className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              {formData.languages.map((lang, index) => (
                <div key={index} className="border-t pt-3 mt-3 flex justify-between">
                  <div>
                    <span className="font-semibold">{lang.name}</span>
                    <span className="text-gray-600 text-sm ml-2">({lang.proficiency})</span>
                  </div>
                  <button type="button" onClick={() => removeLanguage(index)} className="text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {activeSection === 'projects' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-600" />
                Projects
              </h2>
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
                    type="url"
                    placeholder="Project Link (Optional)"
                    value={newProject.link}
                    onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
                    className="px-3 py-2 border rounded-md"
                  />
                  <textarea
                    placeholder="Project Description"
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    className="md:col-span-2 px-3 py-2 border rounded-md"
                    rows="2"
                  />
                </div>
                <button type="button" onClick={addProject} className="w-full px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 flex items-center justify-center gap-1">
                  <Plus className="h-4 w-4" /> Add Project
                </button>
              </div>
              {formData.projects.map((project, index) => (
                <div key={index} className="border-t pt-3 mt-3">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-semibold">{project.title}</h4>
                      <p className="text-sm text-gray-600">{project.description}</p>
                      {project.link && <a href={project.link} className="text-xs text-purple-600">View Project →</a>}
                    </div>
                    <button type="button" onClick={() => removeProject(index)} className="text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Awards Section */}
          {activeSection === 'awards' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 text-purple-600" />
                Awards & Achievements
              </h2>
              <div className="space-y-4 mb-4">
                <div className="grid md:grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Award Title"
                    value={newAward.title}
                    onChange={(e) => setNewAward({ ...newAward, title: e.target.value })}
                    className="px-3 py-2 border rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Issuing Organization"
                    value={newAward.issuer}
                    onChange={(e) => setNewAward({ ...newAward, issuer: e.target.value })}
                    className="px-3 py-2 border rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Date"
                    value={newAward.date}
                    onChange={(e) => setNewAward({ ...newAward, date: e.target.value })}
                    className="px-3 py-2 border rounded-md"
                  />
                  <textarea
                    placeholder="Description (Optional)"
                    value={newAward.description}
                    onChange={(e) => setNewAward({ ...newAward, description: e.target.value })}
                    className="md:col-span-2 px-3 py-2 border rounded-md"
                    rows="2"
                  />
                </div>
                <button type="button" onClick={addAward} className="w-full px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 flex items-center justify-center gap-1">
                  <Plus className="h-4 w-4" /> Add Award
                </button>
              </div>
              {formData.awards.map((award, index) => (
                <div key={index} className="border-t pt-3 mt-3">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-semibold">{award.title}</h4>
                      <p className="text-sm text-gray-600">{award.issuer} • {award.date}</p>
                      {award.description && <p className="text-sm text-gray-700 mt-1">{award.description}</p>}
                    </div>
                    <button type="button" onClick={() => removeAward(index)} className="text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Volunteer Section */}
          {activeSection === 'volunteer' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-purple-600" />
                Volunteer Experience
              </h2>
              <div className="space-y-4 mb-4">
                <div className="grid md:grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Organization"
                    value={newVolunteer.organization}
                    onChange={(e) => setNewVolunteer({ ...newVolunteer, organization: e.target.value })}
                    className="px-3 py-2 border rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Role"
                    value={newVolunteer.role}
                    onChange={(e) => setNewVolunteer({ ...newVolunteer, role: e.target.value })}
                    className="px-3 py-2 border rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Duration (e.g., 2022-Present)"
                    value={newVolunteer.duration}
                    onChange={(e) => setNewVolunteer({ ...newVolunteer, duration: e.target.value })}
                    className="px-3 py-2 border rounded-md"
                  />
                  <textarea
                    placeholder="Description"
                    value={newVolunteer.description}
                    onChange={(e) => setNewVolunteer({ ...newVolunteer, description: e.target.value })}
                    className="md:col-span-2 px-3 py-2 border rounded-md"
                    rows="2"
                  />
                </div>
                <button type="button" onClick={addVolunteer} className="w-full px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 flex items-center justify-center gap-1">
                  <Plus className="h-4 w-4" /> Add Volunteer Experience
                </button>
              </div>
              {formData.volunteer.map((vol, index) => (
                <div key={index} className="border-t pt-3 mt-3">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-semibold">{vol.role} at {vol.organization}</h4>
                      <p className="text-sm text-gray-600">{vol.duration}</p>
                      <p className="text-sm text-gray-700 mt-1">{vol.description}</p>
                    </div>
                    <button type="button" onClick={() => removeVolunteer(index)} className="text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Interests Section */}
          {activeSection === 'interests' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-purple-600" />
                Interests & Hobbies
              </h2>
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={newInterest}
                  onChange={(e) => setNewInterest(e.target.value)}
                  placeholder="Add an interest (e.g., Photography, Reading, Travel)"
                  className="flex-1 px-3 py-2 border rounded-md"
                />
                <button type="button" onClick={addInterest} className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 flex items-center gap-1">
                  <Plus className="h-4 w-4" /> Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.interests.map((interest, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full flex items-center gap-2">
                    {interest}
                    <button type="button" onClick={() => removeInterest(index)} className="hover:text-red-600">
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-4">
            <button 
              type="button"
              onClick={handlePreviousSection}
              disabled={isFirstSection}
              className={`inline-flex items-center gap-2 px-6 py-3 font-medium rounded-lg transition-colors ${
                isFirstSection 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              ← Previous
            </button>
            
            {!isLastSection ? (
              <button 
                type="button"
                onClick={handleNextSection}
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
              >
                Next Section →
              </button>
            ) : (
              <button 
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors"
              >
                {loading ? 'Saving...' : 'Choose Template →'}
              </button>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CreateResume;