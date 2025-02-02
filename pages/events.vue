<template>
    <QcHero id="hero" title="Unsere Events"/>

    <section id="content" class="relative z-10 pb-16">
        <HeLimiter size="text">
            <div class="flex flex-col gap-8 lg:gap-16">
                <QcEvent v-for="event in useCalanderEvents()" :event="event" class="border-2" />
            </div>
        </HeLimiter>
    </section>
</template>

<script lang="ts" setup>
    import dayjs from 'dayjs'
    import type { Event } from '~/types/event'

    const NuxtLink = defineNuxtLink({})

    useSeoMeta({
        title: 'Events',
        description: 'Alle Events der QueerCrew in Braunschweig',
    })
</script>

<style lang="sass" scoped>
</style>
