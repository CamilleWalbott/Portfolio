<script setup>
import Intro from './components/Intro.vue'
import NavBar from './components/NavBar.vue'
import { useI18n } from "vue-i18n";
import { ref } from "vue";

const { t } = useI18n();

</script>

<template>
  <div class="intro">
    <NavBar />
    <div>
      <Intro :msg="t('welcome')"/>
    </div>
  </div>

</template>
