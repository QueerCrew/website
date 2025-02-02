<template>
    <div class="next-meetup shadow-medium">
        <div class="info-card">
            <span class="title">Unser nächstes QR_IRL Treffen</span>
            <span class="description">{{ getNextEventDate().format('dddd, DD. MMMM YYYY [um] HH:mm') }}</span>
        </div>

        <div class="counter">
            <div class="counter-part">
                <div class="number">
                    <span class="leading" v-show="timeToNextEvent.days <= 9">0</span>
                    <span class="count">{{ timeToNextEvent.days }}</span>
                </div>
                <span class="label">Tage</span>
            </div>
    
            <div class="counter-part">
                <div class="number">
                    <span class="leading" v-show="timeToNextEvent.hours <= 9">0</span>
                    <span class="count">{{ timeToNextEvent.hours }}</span>
                </div>
                <span class="label">Stunden</span>
            </div>
    
            <div class="counter-part">
                <div class="number">
                    <span class="leading" v-show="timeToNextEvent.minutes <= 9">0</span>
                    <span class="count">{{ timeToNextEvent.minutes }}</span>
                </div>
                <span class="label">Minuten</span>
            </div>
    
            <div class="counter-part">
                <div class="number">
                    <span class="leading" v-show="timeToNextEvent.seconds <= 9">0</span>
                    <span class="count">{{ timeToNextEvent.seconds }}</span>
                </div>
                <span class="label">Sekunden</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    // @ts-ignore
    import dayjsRecur from 'dayjs-recur'
    import dayjs from 'dayjs'

    dayjs.extend(dayjsRecur)

    const eventDay = ref('Tuesday')
    const eventWeeks = ref([1, 3])
    const exceptions = ref([])
    const startTime = ref([18, 0])

    const nextEvent = computed(() => getNextEventDate())
    const timeToNextEvent = ref({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    function getNextEventDate() {
        // @ts-ignore
        let nextEvent = dayjs().recur().every(eventDay.value).daysOfWeek().every(eventWeeks.value).weeksOfMonthByDay()
        
        for (const exception of exceptions.value) {
            nextEvent = nextEvent.except(exception)
        }
        
        return nextEvent.next(1)[0].hour(startTime.value[0]).minute(startTime.value[1])
    }

    function updateCountdown() {
        const diff = nextEvent.value.diff(dayjs(), 'second')

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
    .next-meetup
        display: flex
        flex-direction: column
        gap: .25rem
        padding: .25rem
        background: var(--color-primary)
        background-image: url('/images/paper_white.jpg')
        background-size: cover
        background-blend-mode: multiply
        font-family: var(--font-mono)
        border-radius: .75rem

        .info-card
            display: flex
            flex-direction: column
            padding: .75rem
            background: var(--color-background)
            background-image: url('/images/paper_black.jpg')
            background-size: cover
            background-blend-mode: screen
            border-radius: .5rem

            .title
                font-size: 1rem
                font-weight: 800
                color: var(--color-text)

            .description
                font-size: .75rem
                color: var(--color-text-soft)

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
                color: var(--color-on-primary)
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
                color: #2d2d2d
</style>