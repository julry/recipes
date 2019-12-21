<template>
<div class="app">
    <Header />
    <router-view/>
</div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
    components: {
        Header
    }
}
</script>

<style lang="scss">
body, html {
    padding: 0;
    margin: 0;
}

.app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 16px;
}

.container {
    margin-right: auto;
    margin-left: auto;
}

@media (min-width: 768px) {
    .container {
        width: 750px;
    }
}

@media (min-width: 992px) {
    .container {
        width: 970px;
    }
}

@media (min-width: 1200px) {
    .container {
        width: 1170px;
    }
}
</style>
