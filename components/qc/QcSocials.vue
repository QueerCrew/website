<template>
    <div class="qc-socials">
        <a
            v-for="(social, index) in socials"
            :key="index"
            :href="social.link"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.name"
            v-tooltip="social.name"
        >
            <img :src="social.icon" :alt="social.name" />
        </a>
    </div>
</template>

<script lang="ts" setup>
    const { t } = useI18n()

    const socials = ref([
        {
            icon: '/images/icons/discord.png',
            name: t('general.discord'),
            link: 'https://discord.gg/queercrew',
        },
        {
            icon: '/images/icons/instagram.png',
            name: t('general.instagram'),
            link: 'https://www.instagram.com/queercrew.de/',
        },
    ])
</script>

<style lang="sass" scoped>
    .qc-socials
        display: flex
        align-items: stretch
        height: 2.5rem
        background: var(--color-background-soft)
        color: var(--color-text-soft)
        border: 1px solid var(--color-border-focused)
        border-radius: var(--radius-m)
        overflow: hidden

        a
            display: flex
            align-items: center
            justify-content: center
            width: 2.5rem
            border-radius: var(--radius-s)
            transition: all

            &:focus,
            &:hover
                background: var(--color-background)

                img
                    opacity: 1

            &:focus
                outline: 3px solid var(--color-info)
                outline-offset: -3px

            img
                width: 1.25rem
                opacity: 0.8
</style>