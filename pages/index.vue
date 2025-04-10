<template>
    <QcHero id="hero" class="mb-[-3rem] pb-[2rem]" :title="$t('home.hero.title')" :subtitle="$t('home.hero.subtitle')"/>

    <section id="cta" class="relative z-10">
        <HeLimiter size="text">
            <div class="flex flex-col gap-4">
                <QcEventHighlight :title="$t('home.event.upcoming')" :event="nextQCEvent" />
                <IodButton :is="NuxtLink" to="/events" :label="$t('home.event.all-label')" normal-case variant="filled" color-preset="primary" icon-right="chevron_right" />
            </div>
        </HeLimiter>
    </section>

    <section id="content" class="py-16">
        <HeLimiter size="text">
            <h2 class="mt-0">{{ $t('home.about-the-qc') }}</h2>
            <p>{{ $t('home.about-the-qc-text-1') }}</p>
            <p>{{ $t('home.about-the-qc-text-2') }}</p>

            <h3 class="pt-4">{{ $t('home.when-qc') }}</h3>
            <i18n-t keypath="home.when-qc-text" tag="p">
                <template #day>
                    <b>{{ $t('home.when-qc-text-day') }}</b>
                </template>
                <template #time>
                    <b>{{ $t('home.when-qc-text-time') }}</b>
                </template>
                <template #place>
                    <a class="whitespace-nowrap" href="https://maps.app.goo.gl/HmucHLjP1mQ2LpFX7" target="_blank" rel="noreferrer noopener">{{ $t('home.when-qc-text-place') }}</a>
                </template>
            </i18n-t>

            <h3 class="pt-4">{{ $t('home.visit-qc') }}</h3>
            <i18n-t keypath="home.visit-qc-text-1" tag="p">
                <template #link>
                    <a href="https://discord.gg/queercrew" target="_blank">{{ $t('home.visit-qc-text-1-link') }}</a>
                </template>
            </i18n-t>
            <p>{{ $t('home.visit-qc-text-2') }}</p>
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
