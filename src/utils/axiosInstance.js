import axios from 'axios';
import axiosRetry from 'axios-retry';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
});

// console.log({
//     url: process.env.NEXT_PUBLIC_API_URL,
//     token: process.env.NEXT_PUBLIC_ACCESS_TOKEN
// });

axiosRetry(axiosInstance, {
    retries: 3,
    retryDelay: (retryCount) => {
        return Math.pow(2, retryCount) * 1000;
    },
    shouldResetTimeout: true,
});

axiosInstance.interceptors.request.use(config => {

    config.headers['Authorization'] = `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;

    return config;
}, error => {
    return Promise.reject(error);
});

export default axiosInstance;