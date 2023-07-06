<script setup>
import { useStore } from "@/composables/useStore";
import { onMounted, ref, useModel } from "vue";
const { content } = useStore();

const newTitle = ref("");

async function handleCreateItem() {
  const res = await content.toDoItems.addItem({
    title: newTitle.value,
    listId: "8nwoVwpigxEXDuuHzRiZ",
  });
  if (res) {
    alert("criado com sucesso");
    content.toDoItems.getItems();
  }
}

onMounted(async () => {
  content.toDoItems.getItems();
});
</script>

<template>
  <main>
    <label for="">
      New Title
      <input type="text" v-model="newTitle" />
    </label>
    <button @click="handleCreateItem">Create</button>
    <div v-for="item in content.toDoItems.items">
      <router-link :to="`/items/${item.id}`">
        <h3>{{ item.title }}</h3>
      </router-link>
    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
