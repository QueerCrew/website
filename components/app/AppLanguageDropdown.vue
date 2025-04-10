<template>
    <VDropdown placement="bottom-end">
        <button type="button" class="selection-wrapper" v-tooltip="localeProperties.name">
            <img :src="`/images/flags/${localeProperties.iso}.png`"/>
            <IodIcon icon="expand_more" />
        </button>

        <template #popper>
            <div class="dropdown-wrapper">
                <button type="button" class="dropdown-item" v-for="locale in locales" :key="locale.code" @click="setLocale(locale.code)">
                    <img :src="`/images/flags/${locale.iso}.png`"/>
                    <span class="locale-name">{{ locale.name }}</span>
                </button>
            </div>
        </template>
    </VDropdown>
</template>

<script lang="ts" setup>
    const { locales, setLocale, localeProperties } = useI18n()
</script>

<style lang="sass" scoped>
    .selection-wrapper
        display: flex
        align-items: center
        height: 2.5rem
        gap: .5rem
        padding-inline: .5rem
        background: var(--color-background-soft)
        color: var(--color-text-soft)
        border: 1px solid var(--color-border-focused)
        border-radius: .5rem

        > img
            height: 1.5rem

        > .iod-icon
            font-size: 1.25rem
            transition: all 100ms

        &:focus,
        &:hover
            color: var(--color-text)

            > .iod-icon
                transform: translateY(3px)

        &:focus
            outline: 3px solid var(--color-info)

    .dropdown-wrapper
        display: flex
        flex-direction: column
        padding: .5rem .25rem

        .dropdown-item
            display: flex
            align-items: center
            gap: 1rem
            padding: .25rem 1rem
            min-height: 3rem
            color: var(--color-text-soft)
            font-size: .9rem
            border-radius: .5rem

            > img
                height: 1.75rem

            &:focus,
            &:hover
                background: var(--color-background-soft)
                color: var(--color-text)

            &:focus
                outline: 3px solid var(--color-info)
                outline-offset: -3px
</style>