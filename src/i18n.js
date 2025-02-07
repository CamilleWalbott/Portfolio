import { createI18n } from "vue-i18n";

const messages = {
    en: {
        welcome: "Welcome to my portfolio",
    },
    fr: {
        welcome: "Bienvenue sur mon portfolio",
    },
};

const i18n = createI18n({
    locale: "fr", // Langue par défaut
    fallbackLocale: "en",
    messages,
});

export default i18n;
