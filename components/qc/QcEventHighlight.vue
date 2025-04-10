<template>
    <div class="qc-event-highlight qc-container">
        <span class="title" v-show="title">{{ title }}</span>

        <QcEvent :event :show-image="false" class="shadow-lg"/>

        <div class="counter">
            <div class="counter-part">
                <div class="number">
                    <span class="leading" v-show="timeToNextEvent.days <= 9">0</span>
                    <span class="count">{{ timeToNextEvent.days }}</span>
                </div>
                <span class="label">{{$t('time.days')}}</span>
            </div>
    
            <div class="counter-part">
                <div class="number">
                    <span class="leading" v-show="timeToNextEvent.hours <= 9">0</span>
                    <span class="count">{{ timeToNextEvent.hours }}</span>
                </div>
                <span class="label">{{$t('time.hours')}}</span>
            </div>
    
            <div class="counter-part">
                <div class="number">
                    <span class="leading" v-show="timeToNextEvent.minutes <= 9">0</span>
                    <span class="count">{{ timeToNextEvent.minutes }}</span>
                </div>
                <span class="label">{{$t('time.minutes')}}</span>
            </div>
    
            <div class="counter-part">
                <div class="number">
                    <span class="leading" v-show="timeToNextEvent.seconds <= 9">0</span>
                    <span class="count">{{ timeToNextEvent.seconds }}</span>
                </div>
                <span class="label">{{$t('time.seconds')}}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import dayjs from 'dayjs'
    import type { Event } from '~/types/event'

    const props = defineProps({
        title: {
            type: String,
        },
        event: {
            type: Object as PropType<Event>,
            required: true,
        },
    })

    const timeToNextEvent = ref({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    function updateCountdown() {
        const diff = props.event.start.diff(dayjs(), 'second')

        if (diff < 0) {
            timeToNextEvent.value = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            }
            return
        }

        timeToNextEvent.value = {
            days: Math.floor(diff / 86400),
            hours: Math.floor(diff / 3600) % 24,
            minutes: Math.floor(diff / 60) % 60,
            seconds: diff % 60,
        }
    }

    onMounted(() => {
        updateCountdown()
        setInterval(updateCountdown, 1000)
    })
</script>

<style lang="sass" scoped>
    .qc-event-highlight.qc-container
        display: flex
        flex-direction: column
        gap: .25rem
        padding: .25rem
        color: var(--color-on-primary)
        background: var(--color-primary)
        background-image: url('/images/paper_white.jpg')
        background-size: cover
        background-blend-mode: multiply
        font-family: var(--font-mono)
        border-radius: .75rem

        > .title
            font-size: 1rem
            font-weight: 800
            text-align: center
            padding-block: .5rem

    .counter
        display: flex
        padding: .75rem

        .counter-part
            flex: 1
            display: flex
            flex-direction: column
            align-items: center

            .number
                display: flex
                font-size: 2rem
                line-height: 1
                font-weight: 800

                .leading
                    color: #2d2d2d90
                    display: inline

                .count
                    display: inline

            .label
                font-size: .75rem
</style>