<template>
    <div>{{ asd }}</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "Svg"
})
</script>
<script lang="ts" setup>
import { ref } from 'vue'
const asd = ref(123)
</script>
<style>
</style>
  