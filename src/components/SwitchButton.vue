<template>
<button
    class="switch-button"
    @click="$emit('click')"
>
    <div
        class="active-option"
        :style="{ 'left': selectedSpan }"
    ></div>
    <div
        class="button"
        :class="{ 'active': active === 'first' }"
        @click="select('first')"
    >
        <slot name="first-option" />
    </div>
    <div
        class="button"
        :class="{ 'active': active === 'second' }"
        @click="select('second')"
    >
        <slot name="second-option" />
    </div>
</button>
</template>

<script>
export default {
    name: "SwitchButton",

    data() {
        return {
            active: 'first',
        }
    },

    computed: {
        selectedSpan() {
            return (this.active === 'first' ? '0' : '50%');
        },
    },

    methods: {
        select(option) {
            this.active = option;
            this.$emit('change', option);
        }
    }
}
</script>

<style scoped lang="scss">
.switch-button {
    position: relative;
    display: flex;
    border: 1px solid #42b983;
    background-color: #fff;
    outline: none;
    border-radius: 20px;
    padding: 0;
    z-index: 1;

    .active-option {
        position: absolute;
        top: 0;
        left: 0;
        background: #42b983;
        width: 50%;
        height: 100%;
        border-radius: 20px;
        padding: 10px 20px;
        transition: all 0.3s ease-out;
        box-sizing: border-box;
        z-index: -1;
        will-change: transform;
    }

    .button {
        width: 50%;
        border: 0;
        outline: none;
        border-radius: 20px;
        padding: 10px 20px;
        font-size: 14px;
        letter-spacing: 0.1em;
        background-color: transparent;
        cursor: pointer;
        transition: all 0.3s ease-out;

        &.active {
            color: #ffffff;
        }
    }
}
</style>
