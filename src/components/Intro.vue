<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const switchLang = (langue) => {
  locale.value = langue;
};
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <section>
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
      <h1 class="text-primary-lighter mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">{{ $t('Intro.Title') }}</h1>
      <p class="mb-8 text-lg font-normal text-primary lg:text-xl sm:px-16 lg:px-48">{{ $t('Intro.Subtitle')}}</p>
      <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <a href="#" class="inline-flex justify-center items-center py-3 px-8 text-base font-bold text-center text-primary-darker rounded-3xl bg-white hover:bg-primary-darker focus:ring-4 focus:ring-primary-darker dark:focus:ring-primary-darker hover:text-white">
          {{ $t('Intro.Button')}}
          <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>


