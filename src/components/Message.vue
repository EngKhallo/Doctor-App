<script setup lang="ts">

// Props: properties = takes values from the parent(app.vue) to the child(Message.vue)

defineProps<{message : string}>();


</script>

<template>
    <h3 class="text-purple-600 text-3xl font-bold">{{message}}</h3>

    <button class="button">Login</button>
    <div class="my-5"></div>
    <button class="button">Signup</button>

</template>
