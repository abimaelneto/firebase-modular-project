import { ref } from "vue";
import { store } from "../../auth/store";

const usesDarkTheme = ref(false);
const toggleTheme = () => {
  usesDarkTheme.value = !usesDarkTheme.value;
};

export function useUser() {
  return { user: store.user, usesDarkTheme, toggleTheme };
}
