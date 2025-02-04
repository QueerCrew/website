<template>
    <QcHero id="hero" title="Impressum"/>

    <section id="content" class="relative z-10 py-16">
        <HeLimiter size="text">
            <h2 class="mt-0">Anbieter:</h2>
            <p>
                Diese Seite wird privat betrieben von <b>Alyx Freuwört</b> – Teil der QueerCrew Gruppenleitung.<br>
                Frankfurter Straße 262<br>
                38122 Braunschweig
            </p>
            <h2>Kontakt:</h2>
            <p>
                Telefon: <a href="tel:+4953125738323" target="_blank">+49 531 2573 8323</a><br>
                Email: <a href="mailto:info@queercrew.de">info@queercrew.de</a><br>
                PGP Key: <NuxtLink to="/pgp">Hier</NuxtLink>
            </p>
        </HeLimiter>
    </section>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'Impressum',
        description: 'Das Impressum der QueerCrew',
    })
</script>
