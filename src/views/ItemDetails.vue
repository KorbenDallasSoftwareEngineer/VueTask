<template>
  <div v-if="item">
    <h1>{{ item.title }}</h1>
    <p>{{ item.desc }}</p>
  </div>
  <div v-else>
    <p>Элемент не найден.</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useListStore } from '../stores/list.js';

const route = useRoute();

const listStore = useListStore();

const item = computed(() => {
  return listStore.items.find(i => i.url === route.params.url);
});
</script>