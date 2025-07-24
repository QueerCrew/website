<template>
    <footer>
        <HeLimiter class="top-row !flex gap-8">
            <div class="flex-1 flex flex-col gap-2">
                <h3>{{ $t('footer.qc-title') }}</h3>
                <hr>
                <ul>
                    <li>
                        <span>{{ $t('footer.qc-subtitle') }}</span>
                    </li>
                </ul>
            </div>
            <div class="flex-1 flex flex-col gap-2">
                <h3>{{ $t('footer.socials-title') }}</h3>
                <hr>
                <ul>
                    <li>
                        <a href="https://discord.gg/queercrew" target="_blank" rel="noopener noreferrer">{{ $t('general.discord') }}</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/queercrew.de/" target="_blank" rel="noopener noreferrer">{{ $t('general.instagram') }}</a>
                    </li>
                </ul>
            </div>
            <div class="flex-1 flex flex-col gap-2">
                <h3>{{ $t('footer.legal-title') }}</h3>
                <hr>
                <ul>
                    <li>
                        <NuxtLink :to="localePath('/legal-notice')">{{ $t('footer.menu.legal-notice') }}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="localePath('/privacy-policy')">{{ $t('footer.menu.privacy-policy') }}</NuxtLink>
                    </li>
                    <li>
                        <a href="#" @click.prevent="cookieBanner.open()">{{ $t('footer.menu.cookie-settings') }}</a>
                    </li>
                    <li>
                        <NuxtLink :to="localePath('/licenses')">{{ $t('footer.menu.licenses') }}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="localePath('/pgp')">{{ $t('footer.menu.pgp-key') }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </HeLimiter>
        <hr>
        <HeLimiter class="copyright-row">
            <small>© {{ new Date().getFullYear() }} <a href="https://freuwoert.com" target="_blank">Alyx Freuwört</a></small>
            <small class="hide">•</small>
            <i18n-t keypath="footer.disclaimer" tag="small" scope="global">
                <template #link>
                    <a href="https://vsebs.de" target="_blank">VSE e.V.</a>
                </template>
            </i18n-t>
            <HeSpacer class="spacer"/>
            <div class="mr-auto">
                <AppLanguageDropdown with-name/>
            </div>
        </HeLimiter>
    </footer>
    
    <AppCookieBanner ref="cookieBanner" />
</template>

<script lang="ts" setup>
    const localePath = useLocalePath()
    const cookieBanner = ref()
</script>

<style lang="sass" scoped>
    footer
        background-color: var(--color-background-soft)
        color: var(--color-text-soft)

        .top-row
            display: flex
            padding-block: 4rem
            gap: 2rem

            a
                text-decoration: none

        .copyright-row
            display: flex !important
            padding-block: 1rem
            gap: 1rem
            align-items: center
            flex-wrap: wrap

        hr
            margin: 0
            border: none
            border-top: 1px solid var(--color-background)

        ul
            list-style: none
            padding: 0
            margin: 0
            display: flex
            flex-direction: column
            gap: .5rem

        li
            margin: 0
            padding: 0

        h3
            margin: 0
            padding: 0
            font-size: 1.125rem
            font-weight: 500
            color: var(--color-text)

        p
            margin: 0
            padding: 0

    
    
    @media (max-width: 800px)
        footer
            .top-row
                padding-block: 2rem
                flex-direction: column
                align-items: stretch
                gap: 2rem

            .copyright-row
                padding-block: 2rem
                flex-direction: column
                align-items: stretch
                gap: .5rem

                .hide, .spacer
                    display: none
</style>