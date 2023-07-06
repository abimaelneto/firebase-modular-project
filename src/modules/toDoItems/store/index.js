import { reactive } from "vue";
import { create, list, detail } from "../api";

export const itemsStore = reactive({
  items: [],
  selectedItem: {},
  async getItems() {
    const res = await list();
    this.items = res;
  },
  async getItem(id) {
    const res = await detail(id);
    this.selectedItem = res;
  },
  async addItem(payload) {
    const res = await create(payload);
    this.items.push(res);
    return res;
  },
});
