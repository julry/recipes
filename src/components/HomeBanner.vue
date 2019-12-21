<template>
<div class="home-banner">
    <div class="content-wrapper">
        <div class="content-title">
            <h3 class="content-text">
                Самые
                <br>
                вкусные
                <br>
                рецепты!
            </h3>
        </div>
        <div class="content-actions">
            <Button
                class="content-action"
                @click="showPopular"
            >
                Смотреть популярные
            </Button>
            <Button
                class="content-action"
                @click="showAll"
            >
                Смотреть все рецепты
            </Button>
        </div>
    </div>
    <div class="image-wrapper">
        <img
            class="image"
            src="https://i.ytimg.com/vi/CQ8myOSHxUE/maxresdefault.jpg"
            alt=""
        >
    </div>
</div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
    name: "HomeBanner",

    components: {
        Button,
    },

    methods: {
        showAll() {
            this.$router.push({ name: 'recipes' });
        },

        showPopular() {
            this.$emit('show-popular');
        },
    },
}
</script>

<style scoped lang="scss">
.home-banner {
    position: relative;
    display: flex;
    height: calc(100vh - 54px);
    background-color: honeydew;

    .content-wrapper {
        display: flex;
        flex-direction: column;
        width: 38.2%;
        padding: 30px 60px;
        box-sizing: border-box;
        z-index: 2;
        overflow: hidden;
    }

    .content-title {
        height: 61.8%;
    }

    .content-text {
        font-size: 64px;
        margin: 0;
        text-transform: capitalize;
    }

    .content-actions {
        flex-grow: 1;
        max-width: 380px;
    }

    .content-action {
        padding: 16px 32px;
    }

    .content-action:not(:first-child) {
        margin-top: 14px;
    }

    .image-wrapper {
        width: 61.8%;
        height: calc(100% + 10px);
        z-index: 1;
    }

    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(0.7);
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }
}
</style>
