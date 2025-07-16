<template>
    <header>
        <HeLimiter class="layout">
            <NuxtLink class="logo" :to="localePath('/')" :aria-label="$t('header.menu.home')"/>
            <HeMenu class="menu" :menu="menu" />
            <QcSocials class="socials"/>
            <AppLanguageDropdown class="language"/>
        </HeLimiter>
        <QcGayGlow />
    </header>
</template>

<script lang="ts" setup>
    const { t } = useI18n()
    const localePath = useLocalePath()
    const NuxtLink = defineNuxtLink({})

    const menu = computed(() => [
        { id: 'startseite', label: t('header.menu.home'), href: localePath('/'), children: [] },
        { id: 'csd', label: t('header.menu.csd'), href: localePath('/csd'), children: [], notification: 'NEU!' },
        { id: 'events', label: t('header.menu.events'), href: localePath('/events'), children: [] },
    ])
</script>

<style lang="sass" scoped>
    header
        background-image: linear-gradient(to bottom, rgb(#2d2d2d, 1), rgb(#2d2d2d, .7))
        border-bottom: 1px solid rgb(#2d2d2d, .7)
        color: var(--color-text)
        height: 4rem
        width: 100%
        position: sticky
        top: 0
        left: 0
        right: 0
        z-index: 1000
        backdrop-filter: blur(10px) saturate(0%)

        .qc-gay-glow
            position: absolute
            top: 100%
            left: 0
            right: 0
            height: 3rem

        .layout
            height: 100%
            display: grid !important
            align-items: center
            gap: .5rem
            grid-template-columns: auto 1fr auto auto auto
            grid-template-areas: "logo spacer menu socials language"

            .logo
                grid-area: logo
                display: flex
                height: 3rem
                width: 3rem
                background-image: url('/images/logo_white.svg')
                background-size: contain
                background-position: center
                background-repeat: no-repeat
                border-radius: var(--radius-m)

            .menu
                grid-area: menu

            .socials
                grid-area: socials

            .language
                grid-area: language
    
    @media only screen and (max-width: 1023px)
        header .layout
            grid-template-areas: "logo spacer socials language menu"
</style>