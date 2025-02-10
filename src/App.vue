<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { useI18n } from "vue-i18n";
import { ref } from "vue";

const { t, locale } = useI18n();
const switchLang = () => {
  locale.value = locale.value === "fr" ? "en" : "fr";
};

</script>

<template>
  <header>
    <div>
      <button @click="switchLang">🌍 {{ locale === "fr" ? "EN" : "FR" }}</button>
    </div>
    <div>
      <HelloWorld :msg="t('welcome')"/>
    </div>
  </header>

  <main>
  </main>
</template>
