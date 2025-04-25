export default defineNuxtConfig({
    css: [
        '~/assets/css/app.sass',
    ],
    
    modules: [
        'dayjs-nuxt',
        'floating-vue/nuxt',
        '@nuxtjs/i18n',
        '@nuxtjs/tailwindcss',
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

    tailwindcss: {
        config: {
            theme: {
                extend: {
                    fontFamily: {
                        'heading': 'var(--font-heading)',
                        'text': 'var(--font-text)',
                        'mono': 'var(--font-mono)',
                        'icon': 'var(--font-icon)',
                        'brand': 'var(--font-brand)',
                    },
                    colors: {
                        'primary': 'var(--color-primary)',
                        'on-primary': 'var(--color-on-primary)',
                        'secondary': 'var(--color-secondary)',
                        'on-secondary': 'var(--color-on-secondary)',
                        'tertiary': 'var(--color-tertiary)',
                        'on-tertiary': 'var(--color-on-tertiary)',

                        'text': 'var(--color-text)',
                        'text-soft': 'var(--color-text-soft)',
                        'text-soft-disabled': 'var(--color-text-soft-disabled)',

                        'background': 'var(--color-background)',
                        'background-soft': 'var(--color-background-soft)',
                        'background-disabled': 'var(--color-background-soft-disabled)',

                        'border': 'var(--color-border)',
                        'border-focused': 'var(--color-border-focused)',
                        'border-disabled': 'var(--color-border-disabled)',

                        'info': 'var(--color-info)',
                        'on-info': 'var(--color-on-info)',
                        'success': 'var(--color-success)',
                        'on-success': 'var(--color-on-success)',
                        'warning': 'var(--color-warning)',
                        'on-warning': 'var(--color-on-warning)',
                        'error': 'var(--color-error)',
                        'on-error': 'var(--color-on-error)',
                    },
                },
            },
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