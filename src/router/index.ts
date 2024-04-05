/*
 * @Author: BitCreate
 * @Date: 2024-04-01 21:58:14
 */
import IndexPage from "@/views/index.vue";
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import { useAuth } from "@/composables/auth";

export const modules = [
  {
    path: "user",
    name: "用户模块",
    component: () => import("@/views/manager/user.vue"),
  },
  {
    path: "video",
    name: "视频模块",
    component: () => import("@/views/manager/video.vue"),
  },
  {
    path: "order",
    name: "订单模块",
    component: () => import("@/views/manager/order.vue"),
  },
  {
    path: "product",
    name: "课程模块",
    children: [
      {
        path: "list",
        name: "课程管理",
        component: () => import("@/views/manager/product/list.vue"),
      },
      {
        path: "add",
        name: "添加课程",
        component: () => import("@/views/manager/product/add.vue"),
      },
    ],
  },
];

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "首页",
    component: IndexPage,
  },
  {
    path: "/login",
    name: "登录页面",
    component: () => import("@/views/login.vue"),
  },
  {
    path: "/manager",
    name: "后台管理",
    component: () => import("@/views/manager.vue"),
    children: modules,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const { isLogin } = useAuth();
  if (!to.path.includes("login")) {
    if (!isLogin.value) next("/login");
    else {
      next();
    }
  } else {
    if (isLogin.value) next("/");
    else next();
  }
});

export default router;
