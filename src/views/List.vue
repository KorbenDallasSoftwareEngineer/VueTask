<template>
    <div>
        <h2>Популярные товары</h2>
        <p v-html="productsContent"></p>
    </div>
</template>

<script setup> 
import { ref } from 'vue';

const productsContent = ref(`
  <p>Ознакомьтесь с нашим ассортиментом:</p>
  <ol>
    <li>
      <h3>Смартфон "Galaxy Pro"</h3>
      <p><em>Мощный процессор и камера высокого разрешения.</em></p>
    </li>
    <li>
      <h3>Ноутбук "UltraBook"</h3>
      <p><em>Тонкий, лёгкий и производительный. Идеален для работы.</em></p>
    </li>
    <li>
      <h3>Наушники "Audio Pro X"</h3>
      <p><em>Чистый звук и удобная посадка.</em></p>
    </li>
  </ol>
`);
</script>