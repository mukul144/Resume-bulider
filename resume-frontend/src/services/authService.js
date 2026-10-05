import api from './api';

export const authService = {
  async signupRequest(email) {
    const response = await api.post('/auth/signup-request', { email });
    return response.data;
  },

  async verifyOtp(userData) {
    const response = await api.post('/auth/verify-otp', userData);
    if (response.data.user) {
      localStorage.setItem('user', JSON.stringify(response.data.user));
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
    }
    return response.data;
  },

  async login(email, password) {
    const response = await api.post('/auth/login', { email, password });
    if (response.data.user) {
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
    }
    return response.data;
  },

  async signout() {
    try {
      const response = await api.post('/auth/signout');
      return response.data;
    } finally {
      
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  },

  getCurrentUser() {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch (e) {
        return null;
      }
    }
    return null;
  },

  isAuthenticated() {
    const user = this.getCurrentUser();
    return !!user;
  },

  
  async verifyToken() {
    try {
      const response = await api.get('/auth/verify');
      return response.data.valid;
    } catch (error) {
      return false;
    }
  }
};