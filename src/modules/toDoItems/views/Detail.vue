<script setup>
import { useStore } from "@/composables/useStore";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const { content } = useStore();

onMounted(() => {
  //chama action
  content.toDoItems.getItem(route.params.id);
});
</script>

<template>
  <h1>
    {{ content.toDoItems.selectedItem.title }}
  </h1>
  <h3>
    {{ content.toDoItems.selectedItem.listId }}
  </h3>

  <router-link :to="`/items/${route.params.id}/edit`"> Editar </router-link>

  {{ content.toDoItems.items }}
</template>
