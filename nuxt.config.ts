export default defineNuxtConfig({
    css: [
        '~/assets/css/app.sass',
    ],
    
    modules: [
        'dayjs-nuxt',
        'floating-vue/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
    ],

    dayjs: {
        locales: ['de', 'en'],
        defaultLocale: 'de',
        defaultTimezone: 'Europe/Berlin',
        plugins: ['relativeTime', 'isSameOrAfter', 'timezone', 'customParseFormat'],
    },

    i18n: {
        locales: [
            { code: 'de', iso: 'de-DE', name: 'Deutsch (DE)', file: 'de-DE.js' },
            { code: 'en', iso: 'en-US', name: 'English (US)', file: 'en-US.js' },
        ],
        compilation: {
            strictMessage: false,
        },
        defaultLocale: 'de',
        lazy: true,
        langDir: './',
        strategy: 'no_prefix',
        detectBrowserLanguage: {
            useCookie: true,
            cookieCrossOrigin: false,
            cookieKey: 'i18n_redirected',
            alwaysRedirect: false,
            fallbackLocale: 'de',
        },
    },

    runtimeConfig: {
        public: {
            posthogPublicKey: 'phc_unPeff0pYKgFvx0XUupfzQoei69fxE7SpgL7fcpfQC1',
            posthogHost: 'https://eu.i.posthog.com'
        }
    },

    compatibilityDate: '2024-11-01',

    devtools: {
        enabled: true
    },
})