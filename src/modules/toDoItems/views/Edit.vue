<script setup>
import { useStore } from "@/composables/useStore";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { content } = useStore();

onMounted(() => {
  if (content.toDoItems.selectedItem.id) return;
  content.toDoItems.getItem(route.params.id);
});
</script>

<template>
  <h1>
    EDITAR
    {{ content.toDoItems.selectedItem.title }}
  </h1>
  <h3>
    {{ content.toDoItems.selectedItem.listId }}
  </h3>
</template>
