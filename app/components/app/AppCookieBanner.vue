<template>
    <Transition name="slide">
        <div ref="cookieBanner" id="cookie-banner" class="small-scrollbar" v-show="isOpen">
            <div class="page" v-if="page === 'overview'">
                <h4 class="px-2 m-0 text-lg">{{ $t('cookie-banner.overview-title') }}</h4>
                <span class="px-2">{{ $t('cookie-banner.overview-description') }}</span>
                <div class="flex flex-col gap-4 my-2">
                    <IodButton type="button" corner="l" size="m" color-preset="primary" variant="contained" :label="$t('cookie-banner.deny-all')" @click="denyAll"/>
                    <IodButton type="button" corner="l" size="l" color-preset="primary" variant="filled" :label="$t('cookie-banner.accept-all')" @click="acceptAll"/>
                </div>
                <small class="flex flex-wrap items-center gap-2 px-2">
                    <a href="#" @click.prevent="setPage('settings')">{{ $t('cookie-banner.to-settings') }}</a>
                    <span>·</span>
                    <NuxtLink :to="localePath('/legal-notice')">{{ $t('cookie-banner.legal-notice') }}</NuxtLink>
                    <span>·</span>
                    <NuxtLink :to="localePath('/privacy-policy')">{{ $t('cookie-banner.privacy-policy') }}</NuxtLink>
                </small>
            </div>

            <div class="page" v-if="page === 'settings'">
                <h4 class="px-2 m-0 text-lg">{{ $t('cookie-banner.settings-title') }}</h4>
                <hr>
                <span class="px-2" v-for="service in services">
                    {{ $t('cookie-banner.settings-entry-title', {name: service.name, type: $t('cookie-banner.cookie-type.'+service.type)}) }}<br>
                    <a v-if="service.privacyPolicy" target="_blank" :href="service.privacyPolicy">{{ $t('cookie-banner.privacy-policy-long') }}</a>
                </span>
                <hr>
                <small class="flex flex-wrap items-center gap-2 px-2">
                    <a href="#" @click.prevent="setPage('overview')">{{ $t('cookie-banner.to-overview') }}</a>
                    <span>·</span>
                    <NuxtLink :to="localePath('/legal-notice')">{{ $t('cookie-banner.legal-notice') }}</NuxtLink>
                    <span>·</span>
                    <NuxtLink :to="localePath('/privacy-policy')">{{ $t('cookie-banner.privacy-policy') }}</NuxtLink>
                </small>
            </div>
        </div>
    </Transition>
</template>

<script lang="ts" setup>
    const localePath = useLocalePath()
    const cookieBanner = ref()
    const services = useCookieServices()

    const isOpen = ref(false)
    const page = ref('overview')

    function open() {
        isOpen.value = true
    }

    function close() {
        isOpen.value = false
        localStorage.setItem('has_seen_cookie_banner', 'yes')
    }

    function setPage(p: 'overview' | 'settings') {
        page.value = p
    }

    function acceptAll() {
        for (const service of services.value) {
            service.setConsent('yes')
        }

        close()
    }

    function denyAll() {
        for (const service of services.value) {
            service.setConsent('no')
        }

        close()
    }

    onMounted(() => {
        if (!localStorage.getItem('has_seen_cookie_banner')) {
            open()
        }
    })

    defineExpose({
        open,
        close,
        setPage,
        acceptAll,
        denyAll,
    })
</script>

<style lang="sass" scoped>
    .slide-enter-active,
    .slide-leave-active
        transition: all 300ms ease-in-out !important

    .slide-enter-from,
    .slide-leave-to
        transform: translateY(2rem)
        opacity: 0

    #cookie-banner
        position: fixed
        z-index: 9000
        bottom: .5rem
        left: .5rem
        display: flex
        flex-direction: column
        width: calc(100% - 1rem)
        max-width: 26rem
        max-height: calc(100vh - 1rem)
        border-radius: var(--radius-xl)
        overflow-y: scroll
        background: rgba(34, 34, 34, 0.85)
        backdrop-filter: blur(20px)
        border: 1px solid var(--color-border-focused)
        box-shadow: var(--shadow-s)

        &::after
            content: ''
            position: absolute
            top: -2rem
            left: -2rem
            width: 50%
            aspect-ratio: 1
            background-image: url(/images/cookie.svg)
            background-size: 100%
            background-repeat: no-repeat
            z-index: 0
            opacity: .2
            pointer-events: none

        .page
            position: relative
            z-index: 2
            display: flex
            flex-direction: column
            gap: 1rem
            padding: 1.5rem 1rem
            line-height: 1.5

            hr
                border-color: var(--color-border-focused)
</style>