<template>
  <div>
    <h1>Список</h1>
    <ul>
      <li v-for="item in listStore.items" :key="item.url">
        <h2>{{ item.title }}</h2>
        <p>{{ item.desc }}</p>
        <a :href="item.url">{{ item.url }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useListStore } from '@/stores/list.js';

const listStore = useListStore();
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
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