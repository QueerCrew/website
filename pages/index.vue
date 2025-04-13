<template>
    <QcHero id="hero" class="mb-[-3rem] pb-[2rem]" :title="$t('page-home.hero.title')" :subtitle="$t('page-home.hero.subtitle')"/>


    <section id="cta" class="relative z-10">
        <HeLimiter size="text">
            <div class="flex flex-col gap-4">
                <QcEventHighlight :title="$t('page-home.event.upcoming')" :event="nextQCEvent" />
                <IodButton :is="NuxtLink" :to="localePath('/events')" :label="$t('page-home.event.all-label')" normal-case variant="filled" color-preset="primary" icon-right="chevron_right" />
            </div>
        </HeLimiter>
    </section>

    
    <section id="content" class="py-16">
        <HeLimiter size="text">
            <h2 class="mt-0">{{ $t('page-home.about-the-qc') }}</h2>
            <p>{{ $t('page-home.about-the-qc-text-1') }}</p>
            <p>{{ $t('page-home.about-the-qc-text-2') }}</p>

            <h3 class="pt-4">{{ $t('page-home.when-qc') }}</h3>
            <i18n-t keypath="page-home.when-qc-text" tag="p" scope="global">
                <template #day>
                    <b>{{ $t('page-home.when-qc-text-day') }}</b>
                </template>
                <template #time>
                    <b>{{ $t('page-home.when-qc-text-time') }}</b>
                </template>
                <template #place>
                    <b><a class="whitespace-nowrap" href="https://maps.app.goo.gl/HmucHLjP1mQ2LpFX7" target="_blank" rel="noreferrer noopener">{{ $t('page-home.when-qc-text-place') }}</a></b>
                </template>
            </i18n-t>

            <h3 class="pt-4">{{ $t('page-home.visit-qc') }}</h3>
            <i18n-t keypath="page-home.visit-qc-text" tag="p" scope="global">
                <template #link>
                    <b><a href="https://discord.gg/queercrew" target="_blank">{{ $t('page-home.visit-qc-text-link') }}</a></b>
                </template>
            </i18n-t>
        </HeLimiter>
    </section>
</template>

<script lang="ts" setup>
    import dayjs from 'dayjs'
    import type { Event } from '~/types/event'

    const { t } = useI18n()
    const localePath = useLocalePath()
    const NuxtLink = defineNuxtLink({})

    useSeoMeta({
        title: t('page-home.seo.title'),
        description: t('page-home.seo.description'),
    })

    const nextQCEvent = computed<Event>(() => useCalanderEvents().find(event => event.start > dayjs() && event.category === 'qc_irl') as Event)
</script>

<style lang="sass" scoped>
</style>
