import { useStore } from "../../composables/useStore";
import { itemsStore } from "./store";
import { router } from "@/router";
import { routes } from "./router";

//registrar a store local
const store = useStore();
store.registerModule("toDoItems", itemsStore);

//registrar as rotas locais
routes.forEach((route) => {
  router.addRoute(route);
});
