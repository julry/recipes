<template>
    <div class="recipes container">
        <div class="title">
            <h1 class="title-text">
                Рецепты
                {{ category ? `/ ${category.title}` : '' }}
            </h1>
            <SwitchButton
                v-if="!category"
                class="toggler"
                @change="changeViewType"
            >
                <span slot="first-option">По категориям</span>
                <span slot="second-option">Списком</span>
            </SwitchButton>
        </div>

        <template v-if="category">
            <RecipeCard
                v-for="recipe in getRecipesByCategory(category.id)"
                :recipe="recipe"
                class="list-item"
            />
        </template>

        <template v-else>
            <div
                v-if="viewType === 'categories'"
                class="groups"
            >
                <div
                    v-for="category in categories"
                    class="category-group-wrapper"
                >
                    <div class="category-title">
                        <h3 class="category-title-text">
                            {{ category.title }}
                        </h3>
                        <router-link
                            v-if="getRecipesByCategory(category.id).length"
                            class="category-title-link"
                            :to="`/recipes?categoryId=${category.id}`"
                        >
                            Смотреть все
                        </router-link>
                    </div>
                    <GroupedList
                        class="category-group"
                        :list="getRecipesByCategory(category.id)"
                    />
                </div>
            </div>

            <div
                v-if="viewType === 'list'"
                class="list"
            >
                <RecipeCard
                    v-for="recipe in recipes"
                    :recipe="recipe"
                    class="list-item"
                />
            </div>
        </template>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import RecipeCard from '@/components/RecipeCard.vue'
import SwitchButton from '@/components/SwitchButton.vue'
import GroupedList from '@/components/GroupedList.vue'

export default {
    name: 'home',

    components: {
        RecipeCard,
        SwitchButton,
        GroupedList,
    },

    data() {
        return {
            viewType: 'categories',
        };
    },

    computed: {
        ...mapState(['recipes', 'categories']),
        ...mapGetters(['getRecipesByCategory']),

        category() {
            return this.categories.find(category => category.id === +this.$route.query.categoryId);
        },
    },

    methods: {
        changeViewType(option) {
            const type = option === 'first' ? 'categories' : 'list';
            this.viewType = type;
        }
    },
}
</script>

<style scoped lang="scss">
.recipes {
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

    .list {
        margin-top: 30px;

        &-item:not(:first-child) {
            margin-top: 18px;
        }
    }

    .toggler {
        width: 350px;
    }

    .category-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 30px 0 0 0;
    }

    .category-title-text {
        margin: 0;
        font-size: 22px;
    }

    .category-title-link {
        color: #42b983;
        text-decoration: none;
    }

    .category-group {
        margin-top: 18px;
    }
}
</style>
