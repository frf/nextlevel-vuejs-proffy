/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
==========================================================================================*/

import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    { path: '/', component: () => import("./pages/Landing/index.vue") },
    { path: '/study', component: () => import("./pages/TeacherList/index.vue")  },
    { path: '/give-classes', component: () => import("./pages/TeacherForm/index.vue")  },
  ]
});

export default router;