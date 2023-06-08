import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path: "/",
    redirect: "/menu"
  },
  {
    path: "/menu",
    name: "Menu",
    component: () => import("@/views/Menu.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@/views/Profile.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Err404",
    component: () => import("@/views/Err404.vue")
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory(import.meta.env.BASE_URL)
})

export default router
