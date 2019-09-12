import axios from 'axios';

export const Stand = 'http://localhost:8000';

export const http = axios.create({
    baseURL: Stand,
    timeout: 200000,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});