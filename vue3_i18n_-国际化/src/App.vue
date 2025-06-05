<script setup lang="ts">
import { ref, reactive } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const { locale } = useI18n({ useScope: "global" });
const language = reactive([
  {
    lang: "简体中文",
    code: "zh",
  },
  {
    lang: "English",
    code: "en",
  },
]);
const selLang = ref("zh");
const changeLang = () => {
  locale.value = selLang.value;
  console.log(selLang.value);
};

const open = () => {
  alert(t("home.text"));
};
</script>

<template>
  <div class="sel">
    <select name="" id="" @change="changeLang()" v-model="selLang">
      <option :value="l.code" v-for="l in language">{{ l.lang }}</option>
    </select>
    <button @click="open()">弹窗</button>
  </div>

  <div class="container">
    {{ $t("home.text") }}
  </div>
</template>

<style>
.sel {
  width: 100%;
  text-align: center;
}
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
}

* {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>