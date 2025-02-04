<template>
    <header>
        <HeLimiter>
            <NuxtLink to="/">
                <img class="block h-8" src="/images/logo_white.svg" alt="QueerCrew Logo" height="40" />
            </NuxtLink>
            <HeSpacer />
            <HeMenu :menu="menu" />
            <div class="social-media-wrapper">
                <IodIconButton class="social-media-button" icon="" variant="contained" :is="NuxtLink" target="_blank" aria-label="Instagram" href="https://www.instagram.com/queercrew.de/" />
                <IodIconButton class="social-media-button" icon="" variant="contained" :is="NuxtLink" target="_blank" aria-label="Discord" href="https://discord.gg/XENtaUHyVa" />
            </div>
        </HeLimiter>
        <div class="gay-glow">
            <div class="gay-glow-inner">
                <div class="glow-item"></div>
                <div class="glow-item"></div>
                <div class="glow-item"></div>
                <div class="glow-item"></div>
                <div class="glow-item"></div>
                <div class="glow-item"></div>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
    const NuxtLink = defineNuxtLink({})

    const menu = ref([
        { id: 'startseite', label: 'Startseite', href: '/', children: [] },
        { id: 'events', label: 'Unsere Events', href: '/events', children: [] },
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

        .he-limiter
            height: 100%
            display: flex !important
            align-items: center
            gap: .5rem

        .social-media-wrapper
            display: flex
            align-items: center
            gap: .5rem

            .social-media-button
                --local-color-background: var(--color-text-soft)
                --local-font: var(--font-brand)

        .gay-glow
            position: absolute
            top: 100%
            left: 0
            right: 0
            display: flex
            align-items: stretch
            height: 3rem
            overflow: hidden
            pointer-events: none

            .gay-glow-inner
                flex: 1
                filter: blur(20px)
                display: flex
                align-items: stretch
                transform: translateY(-100%) scaleX(1.1)

            .glow-item
                flex: 1

                &:nth-child(1)
                    background: var(--color-pride-red)

                &:nth-child(2)
                    background: var(--color-pride-orange)

                &:nth-child(3)
                    background: var(--color-pride-yellow)

                &:nth-child(4)
                    background: var(--color-pride-green)

                &:nth-child(5)
                    background: var(--color-pride-blue)

                &:nth-child(6)
                    background: var(--color-pride-purple)
    
    @media only screen and (max-width: 1023px)
        header
            .he-menu
                order: 2

            .social-media-wrapper
                order: 1
</style>