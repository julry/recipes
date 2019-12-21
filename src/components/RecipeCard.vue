<template>
<div class="recipe">
    <div class="image-wrapper">
        <img
            class="image"
            :src="recipe.imageUrl"
            alt=""
        >
    </div>
    <div class="info-wrapper">
        <div class="info-content">
            <p class="title text">
                {{ recipe.title }}
            </p>
            <p class="category text">
                <router-link
                    class="link"
                    :to="`/recipes?categoryId=${recipe.category.id}`"
                >
                    {{ recipe.category.title }}
                </router-link>
            </p>
            <p class="description text">
                {{ recipe.description }}
            </p>
        </div>
        <div class="actions">
            <Button @click="goToRecipe">
                Подробнее
            </Button>
        </div>
    </div>
</div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
    name: "RecipeCard",

    components: {
        Button,
    },

    props: ['recipe'],

    methods: {
        goToRecipe() {
            this.$router.push(`/recipes/${this.recipe.id}`);
        },
    },
}
</script>

<style scoped lang="scss">
.recipe {
    display: flex;
    max-height: 360px;
    overflow: hidden;

    .image-wrapper {
        width: 61.8%;
    }

    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }

    .info-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 38.2%;
        padding: 20px 30px;
        box-sizing: border-box;
    }

    .text {
        margin: 0;
    }

    .link {
        color: currentColor;
        text-decoration: none;
    }

    .title {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font-size: 36px;
    }

    .category {
        font-size: 22px;
        margin-top: 10px;
        opacity: 0.4;
    }

    .description {
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font-size: 14px;
        margin-top: 16px;
    }

    .actions {
        margin-top: 10px;
    }
}
</style>
