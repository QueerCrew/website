<template>
    <footer>
        <HeLimiter class="top-row !flex gap-8">
            <div class="flex-1 flex flex-col gap-2">
                <h3>QueerCrew</h3>
                <hr>
                <ul>
                    <li>
                        <span>Deine queere Jugendgruppe in Braunschweig</span>
                    </li>
                </ul>
            </div>
            <div class="flex-1 flex flex-col gap-2">
                <h3>QC auf Social Media</h3>
                <hr>
                <ul>
                    <li>
                        <a href="https://discord.gg/XENtaUHyVa" target="_blank" rel="noopener noreferrer">Discord</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/queercrew.de/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </li>
                </ul>
            </div>
            <div class="flex-1 flex flex-col gap-2">
                <h3>Rechtliches</h3>
                <hr>
                <ul>
                    <li>
                        <NuxtLink to="/impressum">Impressum</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/datenschutz">Datenschutz</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/lizenzen">Lizenzen & Bildnachweise</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/pgp">PGP Key</NuxtLink>
                    </li>
                </ul>
            </div>
        </HeLimiter>
        <hr>
        <HeLimiter class="copyright-row">
            <small>© {{ new Date().getFullYear() }} Alyx Freuwört</small>
            <small class="hide">•</small>
            <small>Designed by <a href="https://freuwoert.com" target="_blank">Alyx Freuwört</a></small>
            <small class="hide">•</small>
            <small>Die QueerCrew ist eine Jugendgruppe unter dem <a href="https://vsebs.de" target="_blank">VSE e.V.</a></small>
        </HeLimiter>
    </footer>
</template>

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