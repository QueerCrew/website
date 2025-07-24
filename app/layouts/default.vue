<template>
    <AppHeader />
    <main>
        <slot />
    </main>
    <AppFooter />
</template>

<script lang="ts" setup>
    const i18nHead = useLocaleHead()
    
    useHead({
        titleTemplate: (title) => title ? `${title} – QueerCrew` : 'QueerCrew',
        bodyAttrs: {
            class: 'small-scrollbar bg-background'
        },
        htmlAttrs: {
            lang: i18nHead.value.htmlAttrs.lang
        },
        link: [...(i18nHead.value.link || [])],
        meta: [...(i18nHead.value.meta || [])]
    })
</script>

<style lang="sass" scoped>
    main
        word-break: break-word
</style>