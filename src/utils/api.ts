import axios, { type AxiosRequestConfig, type AxiosInstance, type Method } from 'axios';

// 기본 API URL
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";

// axios 인스턴스 생성
const apiClient: AxiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,  // 쿠키를 포함한 요청
    headers: {
        'Content-Type': 'application/json',
    },
    family: 4,
});

// 요청 함수
interface ApiConfig extends AxiosRequestConfig {
    baseURL?: string;
    method?: Method;
}

export async function axiosRequest<T>(endpoint: string, config: ApiConfig = {}): Promise<T> {
    const { baseURL, method = 'GET', ...axiosConfig } = config;
    const url = `${baseURL ?? API_URL}${endpoint}`;

    try {
        let response;
        switch (method.toUpperCase() as Method) {
            case 'GET':
                response = await apiClient.get(url, axiosConfig);
                break;
            case 'POST':
                response = await apiClient.post(url, axiosConfig.data, axiosConfig);
                break;
            case 'PUT':
                response = await apiClient.put(url, axiosConfig.data, axiosConfig);
                break;
            case 'DELETE':
                response = await apiClient.delete(url, axiosConfig);
                break;
            default:
                throw new Error(`Unsupported method: ${method}`);
        }

        return response.data;
    } catch (error: any) {
        console.error('axiosRequest Error:', error);  // 추가된 콘솔 로그
        const errorMessage = error.response?.data?.message || 'Failed to fetch data';
        throw new Error(errorMessage);
    }
}
