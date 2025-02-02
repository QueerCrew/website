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

    compatibilityDate: '2024-11-01',

    devtools: {
        enabled: true
    },
})
