<script>
import { store } from "@/store";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {},
  mixins: [],
  //   setup() {
  //     const { content } = useStore();
  //     return {
  //         content
  //     };
  //   },
};
</script>

<template>
  {{ store }}
  {{ content.toDoItems.items }}
</template>
