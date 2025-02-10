<script setup>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import { useI18n } from "vue-i18n";
import { ref } from "vue";

const { t } = useI18n();

</script>

<template>
  <NavBar />
    <div>
    </div>
    <div>
      <HelloWorld :msg="t('welcome')"/>
    </div>
</template>
