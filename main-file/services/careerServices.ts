import { AddCareer, Career, CareerApplication } from '@/types/career';
import axios from 'axios';


export const careerServices = {
  // Career position management
  async getCareers() {
    try {
      const response = await axios.get('/api/careers', {
        headers: {
          'Cache-Control': 'no-store',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });

      if (response.data?.careers) {
        return { success: true, data: response.data.careers };
      }
      throw new Error(response.data?.message || 'Unexpected response from server');
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || error.message || 'An error occurred during the request';
      return { success: false, message: errorMessage };
    }
  },

  async addCareer(careerData: AddCareer) {
    try {
      const response = await axios.post('/api/careers', careerData, {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });

      if (response.data?.message === 'Career created successfully') {
        return { success: true, data: response.data.career };
      }
      throw new Error(response.data?.message || 'Unexpected response from server');
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || error.message || 'An error occurred during the request';
      return { success: false, message: errorMessage };
    }
  },

  async updateCareer(careerId: string, updatedData: Partial<Career>) {
    try {
      const response = await axios.put(`/api/careers/${careerId}`, updatedData, {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });

      if (response.data?.career) {
        return { success: true, data: response.data.career };
      }
      throw new Error(response.data?.message || 'Unexpected response from server');
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || error.message || 'An error occurred during the request';
      return { success: false, message: errorMessage };
    }
  },

  async deleteCareer(careerId: string) {
    try {
      const response = await axios.delete(`/api/careers/${careerId}`, {
        headers: {
          'Cache-Control': 'no-store',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });

      if (response.data?.message === 'Career deleted successfully') {
        return { success: true, data: response.data.career };
      }
      throw new Error(response.data?.message || 'Unexpected response from server');
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || error.message || 'An error occurred during the request';
      return { success: false, message: errorMessage };
    }
  },

  // Career applications management
  async getApplications(filters?: {
    status?: 'pending' | 'reviewing' | 'shortlisted' | 'rejected' | 'hired';
    career?: string;
  }) {
    try {
      let url = '/api/career-applications';
      if (filters) {
        const params = new URLSearchParams();
        if (filters.status) params.append('status', filters.status);
        if (filters.career) params.append('career', filters.career);
        url += `?${params.toString()}`;
      }

      const response = await axios.get(url, {
        headers: {
          'Cache-Control': 'no-store',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });

      if (response.data?.applications) {
        return { success: true, data: response.data.applications };
      }
      throw new Error(response.data?.message || 'Unexpected response from server');
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || error.message || 'An error occurred during the request';
      return { success: false, message: errorMessage };
    }
  },

  async submitApplication(applicationData: any) {
    try {
      // Format the data before sending
      const formattedData = {
        ...applicationData,
        DOB: new Date(applicationData.dob).toISOString(), // Convert to proper date format
        phoneNumber: applicationData.phone, // Match the model field name
        linkedinProfile: applicationData.linkedin, // Match the model field name
        githubProfile: applicationData.github, // Match the model field name
      };

      const response = await axios.post('/api/careers/applications', formattedData, {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });

      if (response.data?.message === 'Application submitted successfully') {
        return { success: true, data: response.data.application };
      }
      throw new Error(response.data?.message || 'Unexpected response from server');
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || error.message || 'An error occurred during the request';
      return { success: false, message: errorMessage };
    }
  },

  async updateApplicationStatus(applicationId: string, status: CareerApplication['status']) {
    try {
      const response = await axios.patch(`/api/career-applications/${applicationId}/status`,
        { status },
        {
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store',
            'Pragma': 'no-cache',
            'Expires': '0'
          }
        }
      );

      if (response.data?.application) {
        return { success: true, data: response.data.application };
      }
      throw new Error(response.data?.message || 'Unexpected response from server');
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || error.message || 'An error occurred during the request';
      return { success: false, message: errorMessage };
    }
  },

  async getApplicationDetails(applicationId: string) {
    try {
      const response = await axios.get(`/api/career-applications/${applicationId}`, {
        headers: {
          'Cache-Control': 'no-store',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });

      if (response.data?.application) {
        return { success: true, data: response.data.application };
      }
      throw new Error(response.data?.message || 'Unexpected response from server');
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || error.message || 'An error occurred during the request';
      return { success: false, message: errorMessage };
    }
  },

  async deleteApplication(applicationId: string) {
    try {
      const response = await axios.delete(`/api/career-applications/${applicationId}`, {
        headers: {
          'Cache-Control': 'no-store',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });

      if (response.data?.message === 'Application deleted successfully') {
        return { success: true, data: response.data.application };
      }
      throw new Error(response.data?.message || 'Unexpected response from server');
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || error.message || 'An error occurred during the request';
      return { success: false, message: errorMessage };
    }
  }
};