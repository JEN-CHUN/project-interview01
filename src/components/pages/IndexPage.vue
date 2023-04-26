<template>
  <div class="container">
    <h1 class="greeting">
      你好，我還不認識你呢。可以到輸出頁面自我介紹一下喔!
    </h1>
    <p class="finger text-center">&#128071;</p>
    <radius-button class="greeting button" @click="routerToInput"
      >自我介紹處</radius-button
    >
  </div>
</template>

<script setup>
import router from "@/router";

// 自我介紹處Button，按下去會轉跳到輸出頁面
const routerToInput = function () {
  router.push("/input");
};
</script>

<style lang="scss" scoped>
.greeting {
  text-align: center;
  font-size: 4rem;
}

.finger {
  font-size: 5rem;
  margin-top: 10rem;
}

.button {
  margin: auto;
  margin-top: 10rem;
}

@media (max-width: 1280px) {
  .container {
    width: 900px;
  }

  .greeting {
    font-size: 3rem;
  }
}

@media (max-width: 950px) {
  .container {
    width: 600px;
  }

  .greeting {
    font-size: 3rem;
  }
}

@media (max-width: 650px) {
  .container {
    width: 400px;
  }

  .greeting {
    font-size: 3rem;
  }
}

@media (max-width: 450px) {
  .container {
    width: 320px;
  }

  .greeting {
    font-size: 3rem;
  }
}
</style>
