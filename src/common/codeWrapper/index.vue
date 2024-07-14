<template>
  <div class="code-container">
    <pre class="code">
      {{ props.codeContent }}
    </pre>
  </div>
</template>

<script setup>
const props = defineProps({
  codeContent: String,
})
</script>

<style scoped>

.code-container {
  padding: 12px;
  margin-top: 12px;
  border: 1px solid tomato;
}

</style>
