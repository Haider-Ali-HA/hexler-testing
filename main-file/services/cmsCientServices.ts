// /services/cmsClientsServices.ts
import axios from 'axios';

export interface CMSClient {
    _id?: string;
    name: string;
    image: string;
    display: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export const cmsClientsServices = {
    // Get only active clients
    async getActiveClients() {
        try {
            const response = await axios.get('/api/cms/clients/active-clients', {
                headers: {
                    'Cache-Control': 'no-store',
                    'Pragma': 'no-cache',
                    'Expires': '0'
                }
            });

            if (response.data?.clients) {
                return { success: true, data: response.data.clients };
            }
            throw new Error(response.data?.message || 'Unexpected response from server');
        } catch (error: any) {
            const errorMessage = error?.response?.data?.message || error.message || 'An error occurred during the request';
            return { success: false, message: errorMessage };
        }
    },
}