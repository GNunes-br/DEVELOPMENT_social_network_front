import axios from 'axios'
import Cookies from 'js-cookie'

export const api = axios.create({
    baseURL: 'http://localhost:3333'
})

api.interceptors.request.use((request: any) => {
    const token = Cookies.get('token')
    if(token) request.headers['Authorization'] = `Bearer ${token}`;
	return request
});
