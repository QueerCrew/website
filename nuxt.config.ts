export default defineNuxtConfig({
    css: [
        '~/assets/css/app.sass'
    ],
    
    modules: [
        'dayjs-nuxt',
        'floating-vue/nuxt',
        "@nuxtjs/tailwindcss",
    ],

    dayjs: {
        locales: ['de', 'en'],
        defaultLocale: 'de',
        defaultTimezone: 'Europe/Berlin',
        plugins: ['relativeTime', 'isSameOrAfter', 'timezone', 'customParseFormat'],
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
