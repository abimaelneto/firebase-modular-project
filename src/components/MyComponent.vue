<script>
export default {
  setup() {},
};
</script>

<template>
  <button :class="usesDarkTheme == true ? 'dark' : 'light'">TEXTÃO</button>
</template>

<style scoped>
.dark {
  background: green;
}

.light {
  background: lightgreen;
}
</style>
