<template>
    <QcHero id="hero" class="mb-[-3rem] pb-[2rem]" :title="$t('page-events.hero.title')"/>

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

    const { t } = useI18n()

    const NuxtLink = defineNuxtLink({})

    useSeoMeta({
        title: t('page-events.seo.title'),
        description: t('page-events.seo.description'),
    })
</script>

<style lang="sass" scoped>
</style>
