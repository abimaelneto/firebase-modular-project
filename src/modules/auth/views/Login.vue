<script setup>
import { useStore } from "@/composables/useStore";
import AuthForm from "../components/AuthForm.vue";
const { content } = useStore();
</script>

<template>
  <main>
    <div>
      <button @click="auth.signIn('teste@mail.com', '12345678*')">asd</button>
    </div>
    <AuthForm />
    {{ auth?.user }}
  </main>
</template>
