<template>
    <a href="#" class="qc-event qc-container" @click.prevent="popup.open()" @auxclick.prevent="popup.open()">
        <img class="image" v-if="event.image && showImage" :src="event.image" :alt="event.title">
        <div class="text-card">
            <span class="title">{{ event.title }}</span>
            <span class="description">{{ event.start.format('DD. MMMM YYYY – HH:mm [Uhr]') }}</span>
            <span class="location">{{ event.location }}</span>
        </div>

        <QcEventPopup :event="event" ref="popup"/>
    </a>
</template>

<script lang="ts" setup>
    import type { Event } from '~/types/event'

    const popup = ref()

    defineProps({
        event: {
            type: Object as PropType<Event>,
            required: true,
        },
        showImage: {
            type: Boolean,
            default: true,
        },
    })
</script>

<style lang="sass" scoped>

    .qc-event.qc-container
        display: flex
        flex-direction: column
        background: var(--color-background)
        background-image: url('/images/paper_black.jpg')
        background-size: cover
        background-blend-mode: screen
        border-radius: .5rem
        overflow: hidden

        .image
            display: block
            width: 100%
            aspect-ratio: 2.5
            object-fit: cover

        .text-card
            display: flex
            flex-direction: column
            padding: 1rem

            .title
                font-size: 1rem
                font-weight: 800
                color: var(--color-text)

            .description,
            .location
                font-size: .75rem
                color: var(--color-text-soft)
</style>