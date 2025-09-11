import { createRouter, createWebHistory } from "vue-router";
import { requireAdmin, redirectIfAuthenticated } from './guards'

import HomeView from "@/views/HomeView.vue";
import ContactView from "@/views/ContactView.vue";
import AdminLogin from "@/views/AdminLogin.vue";
import AdminDashboard from "@/views/AdminDashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("@/views/BlogView.vue"),
    },
    {
      path: "/blog/:slug",
      name: "blog-post",
      component: () => import("@/views/BlogPostView.vue"),
    },
    {
      path: "/admin/login",
      name: "AdminLogin",
      component: AdminLogin,
      beforeEnter: redirectIfAuthenticated,
    },
    {
      path: "/admin",
      name: "AdminDashboard",
      component: AdminDashboard,
      beforeEnter: requireAdmin,
    },
    {
      path: "/legal",
      name: "legal",
      component: () => import("@/views/LegalView.vue"),
    },
    {
      path: "/privacy",
      name: "privacy",
      component: () => import("@/views/PrivacyView.vue"),
    },
    {
      path: "/cookies-policy",
      name: "cookies",
      component: () => import("@/views/PoliticCookies.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return { top: 0 };
    }
  },
});

export default router;
