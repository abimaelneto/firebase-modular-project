import { useStore } from "./useStore";

export function useStoreModule(module) {
  const store = useStore();
  return store.content[module];
}
