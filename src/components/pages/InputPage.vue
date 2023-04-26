<template>
  <div class="container">
    <h1 class="title text-center">介紹一下自己，讓我跟你聊聊天!</h1>
    <div class="selection">
      <radius-button class="selection__button" @click="changeType('gender')"
        >性別</radius-button
      >
      <radius-button class="selection__button" @click="changeType('name')"
        >姓名</radius-button
      >
      <radius-button class="selection__button" @click="changeType('language')"
        >喜歡我的作品嗎</radius-button
      >
    </div>
    <input-form
      :input-type="inputType"
      v-model:last-name="lastName"
      v-model:firstName="firstName"
      v-model:gender="gender"
      v-model:projectLike="projectLike"
    ></input-form>
    <p class="result">{{ computedGender }}</p>
    <p class="result">{{ computedFullName }}</p>
    <p class="result">{{ computedProjectLike }}</p>
    <a
      v-if="projectLike !== ''"
      target="_blank"
      href="https://www.linkedin.com/in/%E4%BA%A6%E4%BF%8A-%E4%BB%BB-476829230/"
    >
      <radius-button class="margin-auto link">
        我的LinkedIn連結
      </radius-button></a
    >
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import InputForm from "./InputPage/InputForm.vue";
import RadiusButton from "../UI/RadiusButton.vue";

const inputType = ref("default");
const firstName = ref("");
const lastName = ref("");
const gender = ref("");
const projectLike = ref("");

const computedFullName = computed(() => {
  if (lastName.value === "" && firstName.value === "") {
    return "期待知道你的名字!";
  }

  if (lastName.value === "" || firstName.value === "") {
    return "還沒輸入完畢，但是我能感覺的出來你的名字很好聽!";
  }
  return `原來你叫做${lastName.value} ${firstName.value}，真是個好名字!`;
});

const computedGender = computed(() => {
  if (gender.value === "male") {
    return "先生你好，歡迎來到我的Vue小作品網站";
  }
  if (gender.value === "female") {
    return "小姐你好，歡迎來到我的Vue小作品網站";
  }
  if (gender.value === "unknown") {
    return "訪客你好，歡迎來到我的Vue小作品網站";
  }
  return "請讓我知道該如何稱呼你";
});

const computedProjectLike = computed(() => {
  if (projectLike.value === "yes") {
    return "謝謝你，歡迎點擊下方連結查看我LinkedIn與我聯繫!";
  }

  if (projectLike.value === "no") {
    return "很遺憾我的技能不夠好，或許你願意給予我指教與建議。";
  }

  return "歡迎評分指教!";
});

function changeType(typeString) {
  inputType.value = typeString;
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 5rem;
}

.selection {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 100px;
  margin: 5rem;

  &__button {
    font-size: 2.8rem;
  }
}

.result {
  font-size: 2.5rem;
  text-align: center;
  margin-top: 30px;
}

.link {
  font-size: 2.5rem;
  margin-top: 3rem;
}

@media (max-width: 1280px) {
  .container {
    width: 900px;
  }

  .selection {
    flex-direction: column;
    gap: 50px;
    margin: 5rem;

    &__button {
      width: 350px;
      margin: auto;
    }
  }
}

@media (max-width: 950px) {
  .container {
    width: 500px;
  }
}

@media (max-width: 550px) {
  .container {
    width: 400px;
  }

  .selection {
    flex-direction: column;
    gap: 50px;
    margin: 5rem;

    &__button {
      width: 200px;
      margin: auto;
    }
  }
}

@media (max-width: 455px) {
  .container {
    width: 320px;
  }

  .selection {
    flex-direction: column;
    gap: 50px;
    margin: 5rem 0;

    &__button {
      width: 200px;
      margin: auto;
    }
  }
}
</style>
