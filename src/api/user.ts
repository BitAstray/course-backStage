/*
 * @Author: BitCreate
 * @Date: 2024-04-04 19:08:37
 */
import request, { BASE_URL } from "@/utils/request";

// 登录接口
export function adminLogin(data: { phone: string; password: string }) {
  return request("/login", {
    method: "POST",
    data,
    baseURL: BASE_URL + "/api/user/v1",
  });
}

// 用户数据接口
export function checkAdminRole() {
  return request("/detail", {
    baseURL: BASE_URL + "/api/user/v1",
  });
}
