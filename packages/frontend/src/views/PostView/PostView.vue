<template>
  <div>detail</div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()

console.log(route.params)
</script>

<style lang="scss" scoped></style>
