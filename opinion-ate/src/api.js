import axios from 'axios';
const client = axios.create({
    baseURL: 'https://api.outsidein.dev/bpde9qya5QJqRwbmeIwysK4UVdv6f2wf',
});

const api = {
    async loadRestaurants() {
        const response = await client.get('/restaurants');
        return response.data;
    },
};
export default api;