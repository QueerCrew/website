<template>
    <section class="qc-hero qc-container">
        <div class="image"></div>
        <div class="caption">
            <h1 v-if="title">{{ title }}</h1>
            <span v-if="subtitle" v-html="subtitle"></span>
        </div>
    </section>
</template>

<script lang="ts" setup>
    defineProps({
        title: {
            type: String,
        },
        subtitle: {
            type: String,
        },
    })
</script>

<style lang="sass" scoped>
    .qc-hero.qc-container
        position: relative
        width: 100%
        height: max(300px, 25vh)
        display: flex
        align-items: center
        padding-block: 0 2rem
        margin-block: 0 -3rem

        &::before
            content: ''
            position: absolute
            z-index: 0
            left: 0
            right: 0
            top: calc(100% - 1rem)
            height: 13rem
            background: var(--color-background)
            background-image: url('/images/paper_black.jpg')
            background-size: cover
            background-blend-mode: screen
            mask: linear-gradient(to bottom, rgb(0,0,0,1), rgb(0,0,0,0))
            pointer-events: none

        .image
            position: absolute
            z-index: 1
            inset: 0
            background-image: linear-gradient(rgb(0,0,0,0.5), rgb(0,0,0,0.5)), url(/images/hero_bw.jpg)
            background-position: center
            background-size: cover
            clip-path: polygon(0% 0%, 0% calc(100% - 1rem), 100% 100%, 100% 0%)

        .caption
            position: relative
            z-index: 2
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center
            gap: .5rem
            width: 100%
            padding: 1rem 1rem 1.5rem
            text-align: center

            h1
                margin: 0
                font-size: clamp(2rem, 10vw, 4.5rem)
                color: var(--color-text)
                font-weight: 500
                line-height: 1

            span
                margin: 0
                font-size: 1rem
</style>