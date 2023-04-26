<template>
  <div class="container">
    <h1 class="title">The Fake API 贊助者們</h1>

    <div v-if="data">
      <item-card class="list-item" v-for="item in data" :key="item.name">
        <p class="list-item__person">我們的好朋友{{ item.name }}</p>
        <p class="list-item__country">－來自{{ item.city }}</p>
      </item-card>
    </div>
    <div v-else>
      <item-card class="list-item loading">
        <p class="list-item__person">請稍後片刻等待我們的贊助者到來</p>
        <p class="list-item__country">－來自Jen訊息</p>
      </item-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

// 先將資料設為null，在資料未被Fetch並賦值之前會顯示「稍後」訊息
const data = ref(null);

// Fetch的Method(使用axios)
async function fetchData() {
  try {
    const res = await axios.get(
      "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8"
    );
    data.value = res.data;
  } catch (err) {
    console.log(err);
  }
}

fetchData();
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  font-size: 5rem;
}

.list-item {
  margin: auto;
  margin-top: 3rem;
  font-size: 2.5rem;
  &__person {
    font-size: inherit;
  }
  &__country {
    font-size: inherit;
    text-align: right;
    margin-top: 1rem;
  }
}

.loading {
  background-color: rgb(255, 174, 174) !important;
}

@media (max-width: 1280px) {
  .container {
    width: 960px;
  }
}

@media (max-width: 950px) {
  .title {
    font-size: 4rem;
  }
  .container {
    width: 500px;
  }

  .list-item {
    width: 380px !important;
  }
}

@media (max-width: 550px) {
  .title {
    font-size: 3rem;
  }
  .container {
    width: 400px;
  }

  .list-item {
    width: 350px !important;
  }
}

@media (max-width: 450px) {
  .title {
    font-size: 2.5rem;
  }
  .container {
    width: 300px;
  }

  .list-item {
    width: 300px !important;
  }
}
</style>
