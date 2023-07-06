import { reactive } from "vue";
import { signIn, signUp } from "../api";

export const authStore = reactive({
  user: {},
  async signIn(email, password) {
    this.user = await signIn(email, password);
  },
  signUp: signUp,
});
