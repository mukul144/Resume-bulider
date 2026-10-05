const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String },
    profession: { type: String },
    bio: { type: String },
    
    
    address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zipCode: { type: String },
      country: { type: String }
    },
    
    
    skills: { type: [String], default: [] },
    
    
    certifications: [
      {
        name: { type: String },
        issuer: { type: String },
        date: { type: String },
        credentialId: { type: String },
        link: { type: String }
      }
    ],
    
    
    languages: [
      {
        name: { type: String },
        proficiency: { type: String } 
      }
    ],
    
   
    socialLinks: {
      linkedin: { type: String },
      github: { type: String },
      portfolio: { type: String },
      twitter: { type: String }
    },
    
    
    projects: [
      { title: String, description: String, link: String }
    ],
    
   
    education: [
      { institution: String, degree: String, year: String, grade: String }
    ],
    
   
    experience: [
      { company: String, role: String, duration: String, description: String }
    ],
    
   
    awards: [
      { title: String, issuer: String, date: String, description: String }
    ],
    
    
    volunteer: [
      { organization: String, role: String, duration: String, description: String }
    ],
    
    
    interests: { type: [String], default: [] },
    
    
    references: {
      available: { type: Boolean, default: true },
      details: { type: String }
    },
    
    template: { type: String, default: 'modern' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Portfolio', portfolioSchema);