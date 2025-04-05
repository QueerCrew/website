<template>
    <IodPopup ref="popup" max-width="500px" placement="right" blur="none" should-close-on-backdrop-click>
        <div class="flex flex-col rounded-[inherit] overflow-hidden">
            <img class="image" v-if="event.image" :src="event.image" :alt="event.title">
            <div class="flex flex-col p-4">
                <span class="title">{{ event.title }}</span>
                <small>
                    <span v-if="event.start">{{ event.start.format('dddd, DD. MMMM YYYY') }}</span>
                    <span v-if="event.start">&ensp;–&ensp;{{ event.start.format('HH:mm') }}</span>
                    <span v-if="event.end"> bis {{ event.end.format('HH:mm') }}</span>
                </small>
                <small>{{ event.location }}</small>
            </div>
            <div class="p-4 border-t" v-if="event.description" v-html="event.description"></div>
            <div class="flex flex-col p-4 border-t" v-if="event.icsFile">
                <IodButton :is="NuxtLink" to="/downloads/qc-irl-events.ics" target="_blank" color-preset="primary" icon-right="event">In Kalendar eintragen</IodButton>
            </div>
        </div>
    </IodPopup>
</template>

<script lang="ts" setup>
    import dayjs from 'dayjs'
    import type { Event } from '~/types/event'

    const NuxtLink = defineNuxtLink({})

    const popup = ref()

    const props = defineProps({
        event: {
            type: Object as PropType<Event>,
            required: true,
        },
        showImage: {
            type: Boolean,
            default: true,
        },
    })

    function open() {
        popup.value.open()
    }

    function close() {
        popup.value.close()
    }

    defineExpose({
        open,
        close,
    })
</script>

<style lang="sass" scoped>
    .image
        display: block
        width: 100%
        aspect-ratio: 2.5
        object-fit: cover

    .title
        font-size: 1.25rem
        font-weight: 800
        color: var(--color-text)
</style>