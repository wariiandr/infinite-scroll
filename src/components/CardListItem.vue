<template>
    <div class="mb-4 p-2 d-flex flex-row border border-2 rounded">
        <img :src="card.picture.medium" class="rounded-circle" alt="avatar" />

        <div class="ms-2">
            <p class="fs-5 fw-semibold mb-0"> {{ card.name.first }} {{ card.name.last }}</p>

            <p> {{ card.location.country }}, {{ card.location.city }} </p>
        </div>
    </div>
</template>
  
<script setup>

const props = defineProps({
    card: Object
})

</script>