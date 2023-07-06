<script setup>
import { useUser } from "@/users/hooks/useUser";
import MyComponent from "@/components/MyComponent.vue";
const { user, usesDarkTheme, toggleTheme } = useUser();
const { email, uid } = user;
</script>

<template>
  <div>
    {{ email }}
    {{ uid }}

    <h3>
      {{ usesDarkTheme }}
    </h3>
    <button @click="toggleTheme">Toggle Theme</button>
    <MyComponent />
  </div>
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
