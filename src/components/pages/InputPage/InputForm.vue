<template>
  <form class="input">
    <p class="label text-center" v-show="inputType === 'default'">
      請選擇資料輸入
    </p>
    <div class="input__radio" v-show="inputType === 'gender'">
      <input
        class="input__radio__radio"
        type="radio"
        name="gender"
        id="man"
        value="male"
        @input="$emit('update:gender', $event.target.value)"
      />
      <label class="label" for="man">男</label>
      <input
        class="input__radio__radio"
        type="radio"
        name="gender"
        id="woman"
        value="female"
        @input="$emit('update:gender', $event.target.value)"
      />
      <label class="label" for="woman">女</label>
      <input
        class="input__radio__radio"
        type="radio"
        name="gender"
        id="unknown"
        value="unknown"
        @input="$emit('update:gender', $event.target.value)"
      />
      <label class="label" for="unknown">不公開</label>
    </div>
    <div class="input__text" v-show="inputType === 'name'">
      <div class="input__text__group">
        <label class="label" for="lastName">請輸入你的姓氏</label>
        <input
          class="input__text-input"
          :value="lastName"
          @input="$emit('update:lastName', $event.target.value)"
          type="text"
          name=""
          id="lastName"
        />
      </div>
      <div class="input__text__group">
        <label class="label" for="firstName">請輸入你的名字</label>
        <input
          class="input__text-input"
          :value="firstName"
          @input="$emit('update:firstName', $event.target.value)"
          type="text"
          name=""
          id="firstName"
        />
      </div>
    </div>
    <select
      class="input__select"
      v-show="inputType === 'language'"
      @input="$emit('update:projectLike', $event.target.value)"
    >
      <option class="input__option" value="">喜歡我的作品嗎</option>
      <option class="input__option" value="yes">是</option>
      <option class="input__option" value="no">否</option>
    </select>
  </form>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  inputType: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: false,
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  projectLike: {
    type: String,
    required: false,
  },
});

defineEmits([
  "update:gender",
  "update:firstName",
  "update:lastName",
  "update:projectLike",
]);
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  justify-content: center;
  flex-direction: column;

  &__text {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  &__text__group {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__text-input {
    width: 500px;
    height: 50px;
    font-size: 3rem;
  }

  &__radio {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  &__radio__radio {
    width: 3rem;
    height: 3rem;
  }

  &__select {
    width: 500px;
    height: 50px;
    overflow-y: visible;

    margin: auto;
    font-size: 3rem;
  }

  &__option {
    font-size: 2rem;
  }
}

.label {
  font-size: 3rem;
}

@media (max-width: 1280px) {
  .input {
    &__text {
      flex-wrap: wrap;
    }
    &__select {
      width: 500px;
    }
  }
}

@media (max-width: 950px) {
  .input {
    &__text-input {
      width: 300px;
    }
    &__select {
      width: 300px;
    }
  }
}

@media (max-width: 550px) {
  .input {
    &__radio {
      flex-direction: column;
    }
  }
}
</style>
