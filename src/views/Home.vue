<template>
    <div class="home">
        <HomeBanner
            class="banner"
            @show-popular="scrollToPopular"
        />

        <div
            ref="popular"
            class="popular container"
        >
            <h3 class="title">Популярные рецепты</h3>
            <div class="popular-list">
                <RecipeCard
                    v-for="recipe in recipes.slice(0, 4)"
                    :recipe="recipe"
                    class="popular-list-item"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import HomeBanner from '@/components/HomeBanner.vue'
import RecipeCard from '@/components/RecipeCard.vue'

export default {
    name: 'home',

    components: {
        HomeBanner,
        RecipeCard,
    },

    computed: {
        ...mapState(['recipes']),
    },

    methods: {
        scrollToPopular() {
            const popularCoords = this.$refs.popular.getBoundingClientRect();

            window.scrollBy({
                top: popularCoords.top,
                behavior: "smooth",
            });
        },
    },
}
</script>

<style scoped lang="scss">
.home {
    margin-bottom: 88px;

    .title {
        font-size: 36px;
        font-weight: bold;
        margin: 58px 0 0 0;
    }

    .popular-list {
        margin-top: 30px;

        &-item:not(:first-child) {
            margin-top: 18px;
        }
    }
}
</style>
