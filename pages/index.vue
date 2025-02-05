<template>
    <QcHero id="hero" class="mb-[-3rem] pb-[2rem]" title="QueerCrew" subtitle="Deine queere Jugendgruppe in&nbsp;Braunschweig"/>

    <section id="cta" class="relative z-10">
        <HeLimiter size="text">
            <div class="flex flex-col gap-4">
                <QcEventHighlight title="Unser nächstes Event" :event="nextQCEvent" />
                <IodButton :is="NuxtLink" to="/events" label="Alle Events" normal-case variant="filled" color-preset="primary" icon-right="chevron_right" />
            </div>
        </HeLimiter>
    </section>

    <section id="content" class="py-16">
        <HeLimiter size="text">
            <h2 class="mt-0">Über den QC</h2>
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
    import dayjs from 'dayjs'
    import type { Event } from '~/types/event'

    const NuxtLink = defineNuxtLink({})

    useSeoMeta({
        title: 'Startseite',
        description: 'Deine queere Jugendgruppe in Braunschweig',
    })

    const nextQCEvent = computed<Event>(() => useCalanderEvents().find(event => event.start > dayjs() && event.category === 'qc_irl') as Event)
</script>

<style lang="sass" scoped>
</style>
