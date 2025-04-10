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
        baseUrl: 'https://queercrew.de',
        locales: [
            { code: 'de-de', language: 'de-DE', icon: 'de', name: 'Deutsch (DE)', file: 'de-DE.js', isCatchallLocale: true, },
            { code: 'en-us', language: 'en-US', icon: 'us', name: 'English (US)', file: 'en-US.js', },
        ],
        defaultLocale: 'de-de',
        lazy: true,
        langDir: './',
        strategy: 'prefix_except_default',
        detectBrowserLanguage: {
            useCookie: true,
            cookieCrossOrigin: true,
            cookieSecure: true,
            cookieKey: 'i18n_redirected',
            alwaysRedirect: true,
            fallbackLocale: 'de-de',
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