<script setup>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import { useI18n } from "vue-i18n";
import { ref } from "vue";

const { t, locale } = useI18n();
const switchLang = () => {
  locale.value = locale.value === "fr" ? "en" : "fr";
};

</script>

<template>
  <NavBar />
    <div>
      <button @click="switchLang">🌍 {{ locale === "fr" ? "EN" : "FR" }}</button>
    </div>
    <div>
      <HelloWorld :msg="t('welcome')"/>
    </div>
</template>
