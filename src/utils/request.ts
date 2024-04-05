/*
 * @Author: BitCreate
 * @Date: 2024-04-02 18:14:57
 */
import axios, { type AxiosRequestConfig } from "axios";
export const BASE_URL = "http://localhost:8081";
const request = axios.create({ baseURL: `${BASE_URL}/api/admin/v1` });
import { message } from "ant-design-vue";
import router from "@/router";

// 请求拦截器
request.interceptors.request.use((config) => {
  const { token } = useAuth();
  if (token) {
    config.headers.Authorization = token.value;
  }
  return config;
});

// 响应拦截器
request.interceptors.response.use((response) => {
  const { clearLoginState } = useAuth();
  const data = response.data;
  if (data.code !== 0) {
    message.error(data.msg);
    clearLoginState();
    router.push("/login");
  }
  return response;
});

export default async function (url: string, options?: AxiosRequestConfig) {
  return (
    await request({
      url,
      ...options,
    })
  ).data;
}
