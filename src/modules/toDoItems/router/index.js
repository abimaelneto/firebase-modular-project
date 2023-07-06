export const routes = [
  {
    path: "/items",
    name: "itemsList",
    component: () => import("../views/List.vue"),
  },
  {
    path: "/items/:id",
    name: "itemDetail",
    component: () => import("../views/Detail.vue"),
  },
  {
    path: "/items/:id/edit",
    name: "itemEdit",
    component: () => import("../views/Edit.vue"),
  },
];
