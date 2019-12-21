<template>
<div class="grouped-list">
    <div class="group">
        <router-link
            class="group-link"
            :to="`/recipes/${list[0].id}`"
        >
            <img
                class="image"
                :src="list[0].imageUrl"
                alt=""
            >
        </router-link>
    </div>

    <div class="group group-small group-vertical">
        <div class="group">
            <router-link
                class="group-link"
                :to="`/recipes/${list[1].id}`"
            >
                <img
                    class="image"
                    :src="list[1].imageUrl"
                    alt=""
                >
            </router-link>
        </div>

        <div class="group group-small">
            <div class="group group-small">
                <router-link
                    class="group-link"
                    :to="`/recipes/${list[3].id}`"
                >
                    <img
                        class="image"
                        :src="list[3].imageUrl"
                        alt=""
                    >
                </router-link>
            </div>

            <div class="group">
                <router-link
                    class="group-link"
                    :to="`/recipes/${list[2].id}`"
                >
                    <img
                        class="image"
                        :src="list[2].imageUrl"
                        alt=""
                    >
                </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "GroupedList",

    props: ['list'],
}
</script>

<style scoped lang="scss">
.grouped-list {
    display: flex;
    justify-content: space-between;

    .group {
        position: relative;
        display: flex;
        justify-content: space-between;
        width: calc(61.8% - 2px);
        overflow: hidden;
        border-radius: 10px;
        cursor: pointer;

        &-small {
            width: calc(38.2% - 2px);
        }

        &-link {
            width: 100%;
            height: 100%;
        }

        &-vertical {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            & > .group {
                height: calc(61.8% - 2px);
                width: 100%;
            }

            & > .group-small {
                height: calc(38.2% - 2px);
                width: 100%;
            }
        }
    }

    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
