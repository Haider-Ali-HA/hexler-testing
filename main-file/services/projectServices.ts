import axios from 'axios';

export const projectServices = {
  async getProjects() {
    try {
      const response = await axios.get('/api/projects',{
         headers: {
          'Cache-Control': 'no-store',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      }
        );
      if (response.data?.projects) {
        return { success: true, data: response.data.projects };
      }
      throw new Error(response.data?.message || 'Unexpected response from server');
    }
    catch (error: any) {
      const errorMessage = error?.response?.data?.message || error.message || 'An error occurred during the request';
      return { success: false, message: errorMessage };
    }
  },

  // Fetch a single project by its ID
  async getSingleProject(projectId: string) {
    try {
      const response = await axios.get(`/api/projects/${projectId}`,{
         headers: {
          'Cache-Control': 'no-store',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      }
);

      if (response.data?.project) {
        return { success: true, data: response.data.project };
      }
      throw new Error(response.data?.message || 'Unexpected response from server');
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || error.message || 'An error occurred during the request';
      return { success: false, message: errorMessage };
    }
  },  
};
