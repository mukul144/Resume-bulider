import api from './api';

export const profileService = {
  async uploadProfilePicture(file) {
    const formData = new FormData();
    formData.append('profilePicture', file);
    const response = await api.post('/profile/upload-profile-picture', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  getProfilePictureUrl() {
    return `${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/profile/profile-picture`;
  },

  async deleteProfilePicture() {
    const response = await api.delete('/profile/profile-picture');
    return response.data;
  }
};