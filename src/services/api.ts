import axios from 'axios';
import Cookies from 'js-cookie';
import Router from 'next/router';

export const api = axios.create({
    baseURL: 'http://18.228.152.139:80',
});

api.interceptors.request.use((request: any) => {
    const token = Cookies.get('token');
    if (token) {
        request.headers['Authorization'] = `Bearer ${token}`;
    } else {
        Router.push('login');
    }
    return request;
});
