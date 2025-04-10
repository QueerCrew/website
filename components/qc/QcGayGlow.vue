<template>
    <div class="qc-gay-glow">
        <div class="gay-glow-inner">
            <div class="glow-item"></div>
            <div class="glow-item"></div>
            <div class="glow-item"></div>
            <div class="glow-item"></div>
            <div class="glow-item"></div>
            <div class="glow-item"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="sass" scoped>
    .qc-gay-glow
        display: flex
        align-items: stretch
        overflow: hidden
        pointer-events: none

        .gay-glow-inner
            flex: 1
            filter: blur(20px)
            display: flex
            align-items: stretch
            transform: translateY(-100%) scaleX(1.1)

        .glow-item
            flex: 1

            &:nth-child(1)
                background: var(--color-pride-red)

            &:nth-child(2)
                background: var(--color-pride-orange)

            &:nth-child(3)
                background: var(--color-pride-yellow)

            &:nth-child(4)
                background: var(--color-pride-green)

            &:nth-child(5)
                background: var(--color-pride-blue)

            &:nth-child(6)
                background: var(--color-pride-purple)
</style>