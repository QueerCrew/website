<template>
    <section id="content" class="py-16">
        <HeLimiter size="text">
            <h1>Impressum</h1>
            <p>
                Diese Seite wird privat betrieben von Alyx Freuwört – Teil der QueerCrew Gruppenleitung. 
            </p>
            <h2>Anbieter:</h2>
            <p>
                Alyx Freuwört<br>
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
