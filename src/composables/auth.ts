/*
 * @Author: BitCreate
 * @Date: 2024-04-05 12:40:03
 */
import { checkAdminRole, adminLogin } from "@/api/user";
import { message } from "ant-design-vue";

export function useAuth() {
  // 响应式设置本地存储
  const token = useLocalStorage("token", "");
  const isLogin = computed(() => !!token.value);
  // 登录的方法
  async function login(phone: string, password: string) {
    // 调用登录接口
    const { code, data } = await adminLogin({ phone, password });

    if (code === 0) {
      token.value = data;
      // 检查是否是管理员
      const { data: details, code: c_code } = await checkAdminRole();
      if (c_code === 0) {
        if (details.role === "ADMIN") {
          message.success("登录成功");
        } else {
          clearLoginState();
          message.error("您不是管理员, 无法登录!");
        }
      }
    }
  }
  // 清楚token
  function clearLoginState() {
    token.value = "";
  }

  return {
    token,
    isLogin,
    login,
    clearLoginState,
  };
}
