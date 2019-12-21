<template>
<button
    class="button"
    @click="$emit('click')"
>
    <slot />
</button>
</template>

<script>
export default {
    name: "Button"
}
</script>

<style scoped lang="scss">
.button {
    width: 100%;
    border: 0;
    outline: none;
    border-radius: 20px;
    padding: 14px 32px;
    font-size: 14px;
    letter-spacing: 0.1em;
    background: #42b983;
    color: #ffffff;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover, &:focus {
        background: darken(#42b983, 4);
    }
}
</style>
