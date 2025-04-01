<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "vue";

const { locale } = useI18n();
const switchLang = (langue) => {
  locale.value = langue;
};

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <nav class="text-primary">
    <div class="flex flex-wrap justify-between mx-auto p-5">
      <span class="self-center text-3xl pl-3 font-semibold whitespace-nowrap">CAMILLE WALBOTT</span>
      <button @click="toggleMenu" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>

      <!-- Version desktop - inchangée -->
      <div class="hidden md:block md:w-auto mr-5">
        <ul class="font-bold flex flex-col p-4 md:p-0 mt-4 md:flex-row justify-between w-full gap-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
          <li>
            <a href="#" class="inline-flex items-center justify-center px-4 py-2 text-sm cursor-pointer text-text-light">{{ $t('Navbar.Home') }}</a>
          </li>
          <li>
            <a href="#" class="inline-flex items-center justify-center px-4 py-2 text-sm cursor-pointer text-text-light">{{ $t('Navbar.About') }}</a>
          </li>
          <li>
            <a href="#" class="inline-flex items-center justify-center px-4 py-2 text-sm cursor-pointer text-text-light">{{ $t('Navbar.Projects') }}</a>
          </li>
          <li>
            <a href="#" class="inline-flex items-center justify-center px-4 py-2 text-sm cursor-pointer text-text-light">{{ $t('Navbar.Contact') }}</a>
          </li>
          <li>

            <button @click="switchLang(locale === 'fr' ? 'en' : 'fr')" type="button" class="inline-flex rounded-3xl items-center gap-x-4 justify-center px-4 bg-white py-2 text-sm text-primary-dark cursor-pointer">
              {{ locale === "fr" ? "Français" : "English" }}
              <!-- icone english -->
              <svg v-if="locale ==='en'" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#071b65"></rect><path d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z" fill="#fff"></path><path d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z" fill="#b92932"></path><path d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z" fill="#b92932"></path><path d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z" fill="#fff"></path><rect x="13" y="4" width="6" height="24" fill="#fff"></rect><rect x="1" y="13" width="30" height="6" fill="#fff"></rect><rect x="14" y="4" width="4" height="24" fill="#b92932"></rect><rect x="14" y="1" width="4" height="30" transform="translate(32) rotate(90)" fill="#b92932"></rect><path d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z" fill="#b92932"></path><path d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z" fill="#b92932"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>
              <!-- icone français -->
              <svg v-if="locale ==='fr'" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 32 32"><path fill="#fff" d="M10 4H22V28H10z"></path><path d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" fill="#092050"></path><path d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" transform="rotate(180 26 16)" fill="#be2a2c"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>
            </button>
          </li>
        </ul>
      </div>
    </div>

    <!-- Menu mobile en plein écran -->
    <div :class="['fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out md:hidden', isMenuOpen ? 'translate-x-0' : 'translate-x-full']">
      <div class="p-5">
        <div class="flex justify-between items-center mb-8">
          <span class="self-center text-3xl pl-3 font-semibold whitespace-nowrap">CAMILLE WALBOTT</span>
          <button @click="toggleMenu" class="text-primary">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul class="font-bold flex flex-col space-y-6 text-center mt-16">
          <li>
            <a href="#" class="block py-3 text-lg cursor-pointer text-text-darker">{{ $t('Navbar.Home') }}</a>
          </li>
          <hr>
          <li>
            <a href="#" class="block py-3 text-lg cursor-pointer text-text-darker">{{ $t('Navbar.About') }}</a>
          </li>
          <hr>
          <li>
            <a href="#" class="block py-3 text-lg cursor-pointer text-text-darker">{{ $t('Navbar.Projects') }}</a>
          </li>
          <hr>
          <li>
            <a href="#" class="block py-3 text-lg cursor-pointer text-text-darker">{{ $t('Navbar.Contact') }}</a>
          </li>
            <hr>
          <button @click="switchLang(locale === 'fr' ? 'en' : 'fr')" type="button" class="inline-flex items-center justify-center gap-x-2 px-6 py-3 text-lg text-text-darker cursor-pointer mx-auto">
            <span>{{ locale === "fr" ? "Français" : "English" }}</span>
            <!-- icone english -->
            <svg v-if="locale ==='en'" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#071b65"></rect><path d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z" fill="#fff"></path><path d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z" fill="#b92932"></path><path d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z" fill="#b92932"></path><path d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z" fill="#fff"></path><rect x="13" y="4" width="6" height="24" fill="#fff"></rect><rect x="1" y="13" width="30" height="6" fill="#fff"></rect><rect x="14" y="4" width="4" height="24" fill="#b92932"></rect><rect x="14" y="1" width="4" height="30" transform="translate(32) rotate(90)" fill="#b92932"></rect><path d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z" fill="#b92932"></path><path d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z" fill="#b92932"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>
            <!-- icone français -->
            <svg v-if="locale ==='fr'" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 32 32"><path fill="#fff" d="M10 4H22V28H10z"></path><path d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" fill="#092050"></path><path d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" transform="rotate(180 26 16)" fill="#be2a2c"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>
          </button>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Vous pouvez ajouter des styles supplémentaires ici si nécessaire */
</style>
