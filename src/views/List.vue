<template>
    <h1>Список</h1>
    <ul>
      <li v-for="item in listStore.items" :key="item.url">
        <router-link :to="`/list/${item.url}`">
        {{ item.title }}
      </router-link>
      </li>
    </ul>
</template>

<script setup>
import { useListStore } from '@/stores/list.js';

const listStore = useListStore();
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  padding-right: 90%;
}
li {
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 15px;
}
h2 {
  margin-top: 0;
}
</style>