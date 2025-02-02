<template>
    <AppHeader />
    <main>
        <slot />
    </main>
    <AppFooter />
</template>

<script lang="ts" setup>
    useHead({
        titleTemplate: (title) => title ? `${title} – QueerCrew` : 'QueerCrew',
        bodyAttrs: {
            class: 'small-scrollbar bg-background'
        }
    })
</script>

<style lang="sass" scoped>
    main
        word-break: break-word
</style>