
import api from './api';

export const portfolioService = {
  async createPortfolio(portfolioData) {
    const response = await api.post('/createResume/create', portfolioData);
    return response.data;
  },

  async updateTemplate(id, template) {
    const response = await api.put(`/createResume/${id}/template`, { template });
    return response.data;
  },

  async getResume(id) {
    const response = await api.get(`/createResume/${id}/resume`);
    return response.data;
  },

  async deleteResume(id) {
    const response = await api.delete(`/createResume/${id}/resume`);
    return response.data;
  }
};
