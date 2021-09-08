const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }]
  },
  {
    path: "/admin",
    component: () => import("layouts/adminLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "baker", component: () => import("pages/baker.vue") },
      { path: "cashier", component: () => import("pages/cashier.vue") }
    ]
  },
  {
    path: '/meny',
    component: () => import('layouts/MenyLayout.vue'),
    children: [
      { path: 'Meny', component: () => import('pages/Meny.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
