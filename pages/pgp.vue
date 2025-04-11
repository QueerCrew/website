<template>
    <QcHero id="hero" :title="$t('page-pgp.hero.title')"/>

    <section id="content" class="relative z-10 py-16">
        <HeLimiter size="text">
            <p>
                {{ $t('page-pgp.description') }} <a href="mailto:info@queercrew.de">info@queercrew.de</a>.<br><br>
            </p>
            <p>
                <code :title="$t('page-pgp.copy-hint')" id="pgp" @click="copyKey">
                    -----BEGIN PGP PUBLIC KEY BLOCK-----<br><br>
                    xjMEZtSKUxYJKwYBBAHaRw8BAQdA7taSgnE9VovTjQnkUKELfDRGHxpj+m6t<br>
                    0V9XRxBM5DPNJWluZm9AcXVlZXJjcmV3LmRlIDxpbmZvQHF1ZWVyY3Jldy5k<br>
                    ZT7CjAQQFgoAPgWCZtSKUwQLCQcICZDoPRdeKbnZNwMVCAoEFgACAQIZAQKb<br>
                    AwIeARYhBBhSi/lOaevhqc/hVeg9F14pudk3AAANoQD/YjBR8E/BcyPyy/Yp<br>
                    HSY+4oQbiFOckIOKsQWk7tP+RZMA/2ZoaWRzmLEXyqtYrUqt4npmcCMPaTYO<br>
                    58477u+cNtYGzjgEZtSKUxIKKwYBBAGXVQEFAQEHQGX8oq8IPsxnQnMq/3kW<br>
                    r3Cq7q7msMnBnpMDuyOTqR1kAwEIB8J4BBgWCgAqBYJm1IpTCZDoPRdeKbnZ<br>
                    NwKbDBYhBBhSi/lOaevhqc/hVeg9F14pudk3AADsqQD/XHyjZPlHk/BedtUZ<br>
                    Ap+9Kemy2RLOVuNluGZ7U8DikaABALhwdXo6Qv/bsSn3WcaSFumqo1+KCJHG<br>
                    g16aXSKlAYYB<br>
                    =gBub<br><br>
                    -----END PGP PUBLIC KEY BLOCK-----
                </code>
            </p>

            <small class="py-2">{{ $t('page-pgp.or') }}</small>

            <p>
                <IodButton :is="NuxtLink" to="/downloads/queercrew-pgp.asc" target="_blank" color-preset="primary" icon-left="key" download>{{ $t('page-pgp.download') }}</IodButton>
            </p>
        </HeLimiter>
    </section>
</template>

<script lang="ts" setup>
    const NuxtLink = defineNuxtLink({})
    const { t } = useI18n()
    
    useSeoMeta({
        title: t('page-pgp.seo.title'),
        description: t('page-pgp.seo.description'),
    })

    function copyKey()
    {
        // Get the key and replace the <br> with \n
        let key = document?.getElementById('pgp')?.innerText?.replace(/<br>/g, '\n')

        // Copy the key to the clipboard
        navigator.clipboard.writeText(key ?? '')

        // Alert the user
        alert(t('page-pgp.copy-alert'))
    }
</script>

<style lang="sass" scoped>
    .he-limiter
        display: flex !important
        flex-direction: column
        align-items: center
    code
        cursor: pointer
        user-select: all
        font-size: 1rem
        padding: 1rem
        font-weight: 800
        color: var(--color-on-primary)
        background: var(--color-primary)
        background-image: url('/images/paper_white.jpg')
        background-size: cover
        background-blend-mode: multiply
        border-radius: var(--radius-l)
        display: inline-block
        font-family: monospace
        transition: all 0.3s ease
        box-shadow: var(--shadow-elevation-low)

        &:hover
            box-shadow: var(--shadow-elevation-high)
</style>
