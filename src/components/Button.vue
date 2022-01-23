<script setup lang="ts">

    type PropType = {
        text : string
    };

    defineProps<PropType>();
</script>

<template>
    <button class="button m-5">{{text}}</button>
</template>