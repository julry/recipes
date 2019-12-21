<template>
    <div class="recipe">
        <div class="title container">
            <h1 class="title-text">
                {{ recipe.title }}
            </h1>
        </div>

        <div class="image-wrapper">
            <img
                class="image"
                :src="recipe.imageUrl"
                alt=""
            >
        </div>

        <div class="description container">
            <h3 class="description-title">
                Описание
            </h3>
            <p class="description-value">
                {{ recipe.description }}
            </p>
        </div>

        <div class="ingredients container">
            <h3 class="ingredients-title">
                Ингредиенты
            </h3>
            <ul class="ingredients-list">
                <li
                    v-for="ingredient in recipe.ingredients"
                    class="ingredients-item"
                >
                    {{ ingredient }}
                </li>
            </ul>
        </div>

        <div class="steps container">
            <h3 class="steps-title">
                Шаги приготовления
            </h3>
            <ol class="steps-list">
                <li
                    v-for="(step, index) in recipe.steps"
                    class="steps-item"
                >
                    <div class="step-index">
                        {{ index + 1}}
                    </div>
                    <div class="step-value">
                        {{ step }}
                    </div>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    name: 'home',

    data() {
        return {
            viewType: 'categories',
        };
    },

    computed: {
        ...mapGetters(['getRecipeById']),

        recipe() {
            return this.getRecipeById(+this.$route.params.id);
        }
    },
}
</script>

<style scoped lang="scss">
.recipe {
    margin-bottom: 78px;

    .title {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }

    .title-text {
        font-size: 36px;
        font-weight: bold;
        margin: 48px 0 0 0;
    }

    .image-wrapper {
        margin-top: 30px;
    }

    .image {
        width: 100%;
        max-height: 600px;
        object-fit: cover;
        filter: brightness(0.8);
    }

    .description {
        &-title {
            margin: 30px 0 0 0;
            font-size: 22px;
        }

        &-value {
            margin: 18px 0 0 0;
        }
    }

    .ingredients {
        &-title {
            margin: 30px 0 0 0;
            font-size: 22px;
        }

        &-list {
            margin: 18px 0 0 0;
        }

        &-item {
            line-height: 1.64;
        }
    }

    .steps {
        &-title {
            margin: 30px 0 0 0;
            font-size: 22px;
        }

        &-list {
            list-style: none;
            margin: 18px 0 0 0;
            padding: 0;
        }

        &-item {
            display: flex;
            align-items: flex-start;
            line-height: 1.64;
            background-color: honeydew;
            padding: 20px;
            border-radius: 14px;
        }

        &-item:not(:first-child) {
            margin-top: 12px;
        }
    }

    .step-index {
        color: #42b983;
        font-weight: bold;
        font-size: 36px;
        line-height: 1;
    }

    .step-value {
        margin-left: 20px;
        align-self: center;
    }
}
</style>
