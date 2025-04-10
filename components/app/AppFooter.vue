<template>
    <footer>
        <HeLimiter class="top-row !flex gap-8">
            <div class="flex-1 flex flex-col gap-2">
                <h3>{{ $t('footer.section-qc-title') }}</h3>
                <hr>
                <ul>
                    <li>
                        <span>{{ $t('footer.section-qc-item-1') }}</span>
                    </li>
                </ul>
            </div>
            <div class="flex-1 flex flex-col gap-2">
                <h3>{{ $t('footer.section-socials-title') }}</h3>
                <hr>
                <ul>
                    <li>
                        <a href="https://discord.gg/XENtaUHyVa" target="_blank" rel="noopener noreferrer">{{ $t('footer.section-socials-item-2') }}</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/queercrew.de/" target="_blank" rel="noopener noreferrer">{{ $t('footer.section-socials-item-1') }}</a>
                    </li>
                </ul>
            </div>
            <div class="flex-1 flex flex-col gap-2">
                <h3>{{ $t('footer.section-legal-title') }}</h3>
                <hr>
                <ul>
                    <li>
                        <NuxtLink to="/impressum">{{ $t('footer.section-legal-item-1') }}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/datenschutz">{{ $t('footer.section-legal-item-2') }}</NuxtLink>
                    </li>
                    <li>
                        <a href="#" @click.prevent="cookieBanner.open()">{{ $t('footer.section-legal-item-3') }}</a>
                    </li>
                    <li>
                        <NuxtLink to="/lizenzen">{{ $t('footer.section-legal-item-4') }}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/pgp">{{ $t('footer.section-legal-item-5') }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </HeLimiter>
        <hr>
        <HeLimiter class="copyright-row">
            <small>© {{ new Date().getFullYear() }} <a href="https://freuwoert.com" target="_blank">Alyx Freuwört</a></small>
            <small class="hide">•</small>
            <i18n-t keypath="footer.disclaimer" tag="small">
                <template #link>
                    <a href="https://vsebs.de" target="_blank">{{ $t('footer.disclaimer-link') }}</a>
                </template>
            </i18n-t>
            <HeSpacer class="spacer"/>
            <div class="mr-auto">
                <AppLanguageDropdown />
            </div>
        </HeLimiter>
    </footer>
    
    <AppCookieBanner ref="cookieBanner" />
</template>

<script lang="ts" setup>
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