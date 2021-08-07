<template>
    <div>{{ asd }}</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "Note"
})
</script>
<script lang="ts" setup>
import { ref } from 'vue'
const asd = ref('note')
</script>
<style>
</style>