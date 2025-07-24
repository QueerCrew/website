<template>
    <QcHero id="hero" :title="$t('page-licenses.hero.title')"/>

    <section id="content" class="relative z-10 py-16">
        <HeLimiter size="text">
            <h2 class="mt-0">{{ $t('page-licenses.font-licenses') }}</h2>
            <p>
                Poppins: <a href="https://openfontlicense.org/" target="_blank" rel="noopener noreferrer">Open Font License</a><br>
                Inter: <a href="https://openfontlicense.org/" target="_blank" rel="noopener noreferrer">Open Font License</a><br>
                JetBrains Mono: <a href="https://openfontlicense.org/" target="_blank" rel="noopener noreferrer">Open Font License</a><br>
                Material Symbols Rounded: <a href="https://www.apache.org/licenses/LICENSE-2.0.html" target="_blank" rel="noopener noreferrer">Apache License 2.0</a><br>
                Font Awesome Brand Icons: <a href="https://fontawesome.com/license/free" target="_blank" rel="noopener noreferrer">Font Awesome Free License</a><br>
                <br>
            </p>
            <h2>{{ $t('page-licenses.image-licenses') }}</h2>
            <p>
                {{ $t('header.menu.home')}}:<br>
                <a href="https://unsplash.com/@raphi_rawr" target="_blank" rel="noopener noreferrer">Raphael Renter - Unsplash</a>
            </p>
        </HeLimiter>
    </section>
</template>

<script lang="ts" setup>
    const { t } = useI18n()

    useSeoMeta({
        title: t('page-licenses.seo.title'),
        description: t('page-licenses.seo.description'),
    })
</script>

<style scoped></style>
