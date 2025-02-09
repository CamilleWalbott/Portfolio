<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import NavBar from "./components/NavBar.vue";

const { t, locale } = useI18n();
const switchLang = () => {
  locale.value = locale.value === "fr" ? "en" : "fr";
};

</script>

<template>
  <div class="min-h-screen w-full">
    <!-- Header -->
    <header class="bg-gray-800 text-white p-4">
      <NavBar />
    </header>

    <!-- Main Content -->
    <main class="flex-1 flex items-center justify-center">
      <div class="text-center">
        <button @click="switchLang" class="px-4 py-2 bg-blue-500 text-white rounded">
          🌍 {{ locale === "fr" ? "EN" : "FR" }}
        </button>
        <div class="mt-4">
          <HelloWorld :msg="t('welcome')" />
        </div>
      </div>
    </main>
  </div>
</template>



