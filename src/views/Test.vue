<script setup>
import { useStore } from "@/composables/useStore";
import { useStoreModule } from "@/composables/useStoreModule";

const { content } = useStore();
const { user } = useStoreModule("auth");
const { auth } = content;
</script>

<template>
  <main>
    <div>
      <button @click="auth.signIn('teste@mail.com', '12345678*')">asd</button>
    </div>
    {{ auth?.user }}
  </main>
</template>
