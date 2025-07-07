import axios, { AxiosRequestConfig } from "axios";
// import { getToken, removeToken } from "../store/authStore";

const BASE_URL =
  "https://port-0-bookstore-server-mco9szd70ea8c624.sel5.cloudtype.app";

const DEFAULT_TIMEOUT = 30000;

// 실제로 클라이언트 작성
// config가 뭐야

export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      "Content-Type": "application/json",
    },
    // withCredentials: true,
    ...config,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers["Authorization"] = token;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      //로그인 토큰이 완료되었을 때, 없을 때
      console.log(error);
      // if (error.response.status === 401) {
      //   window.location.href = "/login";
      //   removeToken();
      //   return Promise.reject(error);
      // }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export const httpClient = createClient();
