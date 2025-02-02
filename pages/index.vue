<template>
    <section id="hero">
        <div class="image"></div>
        <div class="caption">
            <h1>QueerCrew</h1>
            <span>Deine queere Jugendgruppe in&nbsp;Braunschweig</span>
        </div>
    </section>

    <section id="cta" class="relative z-10">
        <HeLimiter size="text">
            <NextMeetup />
        </HeLimiter>
    </section>

    <section id="content" class="py-16">
        <HeLimiter size="text">
            <h2>Über den QC</h2>
            <p>
                Die QueerCrew ist eine Gruppe für junge queere Menschen bis 27.
                Bei uns findest du eine diverse Community, die dich mit offenen Armen empfängt.
            </p>
            <p>
                Wir bieten dir eine entspannte Gruppe mit verschiedenen Events wie Movie Nights,
                Koch- und Backabende, Gamematches oder einfach lockeren Gesprächen.
                Oder beteilige dich aktiv bei der Planung unserer Special Events.
                Bei uns bist du immer herzlich willkommen.
            </p>
            <h3 class="pt-4">Wann kann man uns treffen?</h3>
            <p>
                An jedem <b>2. und 4. Dienstag im Monat</b> treffen wir uns zwischen <b>18 und 22 Uhr</b> im
                <a href="https://maps.app.goo.gl/HmucHLjP1mQ2LpFX7" target="_blank" rel="noreferrer noopener">Onkel&nbsp;Emma</a>. 
                Gerne laden wir dich ein, uns dort zu besuchen – ganz ungezwungen, wann immer es dir passt und ohne Anmeldung.
            </p>
            <h3 class="pt-4">Vorher einmal reinschnuppern</h3>
            <p>
                Du bist dir noch unsicher, ob die QueerCrew das Richtige für dich ist?
                Tritt einfach unserem <a href="https://discord.gg/queercrew" target="_blank">Discord-Server</a> bei und lerne uns schon vorher kennen.
            </p>
            
            <p>
                Wir freuen uns auf dich!
            </p>
        </HeLimiter>
    </section>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Startseite',
        description: 'Deine queere Jugendgruppe in Braunschweig',
    })
</script>

<style lang="sass" scoped>
    #hero
        position: relative
        width: 100%
        height: max(450px, 30vh)
        display: flex
        align-items: center
        padding-block: 0 2rem
        margin-block: 0 -3rem

        &::before
            content: ''
            position: absolute
            z-index: 0
            left: 0
            right: 0
            top: calc(100% - 1rem)
            height: 13rem
            background: var(--color-background)
            background-image: url('/images/paper_black.jpg')
            background-size: cover
            background-blend-mode: screen
            mask: linear-gradient(to bottom, rgb(0,0,0,1), rgb(0,0,0,0))
            pointer-events: none

        .image
            position: absolute
            z-index: 1
            inset: 0
            background-image: linear-gradient(rgb(0,0,0,0.5), rgb(0,0,0,0.5)), url(/images/hero_bw.jpg)
            background-position: center
            background-size: cover
            clip-path: polygon(0% 0%, 0% calc(100% - 1rem), 100% 100%, 100% 0%)

        .caption
            position: relative
            z-index: 2
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center
            gap: .5rem
            width: 100%
            padding: 1rem 1rem 1.5rem
            text-align: center

            h1
                margin: 0
                font-size: clamp(2rem, 10vw, 4.5rem)
                color: var(--color-text)
                font-weight: 500
                line-height: 1

            span
                margin: 0
                font-size: clamp(1.25rem, 3vw, 1.5rem)
</style>
