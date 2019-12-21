<template>
<div
    class="header"
    :class="{
        'colored': $route.name === 'home',
        'bordered': $route.name !== 'home',
        'padded': $route.name === 'home',
    }"
>
    <!--<img-->
        <!--class="logo"-->
        <!--alt="Logo"-->
        <!--src="../assets/logo.png"-->
    <!--&gt;-->
    <div
        class="header-container"
        :class="{ 'container': $route.name !== 'home' }"
    >
        <ul class="nav">
            <li class="nav-item">
                <router-link
                    class="nav-link"
                    to="/"
                >
                    Главная
                </router-link>
            </li>
            <li class="nav-item">
                <router-link
                    class="nav-link"
                    to="/recipes"
                >
                    Рецепты
                </router-link>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped lang="scss">
.header {
    width: 100%;
    height: 54px;
    background-color: #fff;
    box-sizing: border-box;

    &.colored {
        background-color: honeydew;
    }

    &.bordered {
        border-bottom: 1px solid #eaecef;
    }

    &.padded {
        padding: 0 30px;
    }

    .header-container {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 100%;
    }

    .logo {
        height: 100%;
    }

    .nav {
        display: flex;
        list-style: none;

        &-item {
            margin-left: 20px;
        }

        &-link {
            color: #42b983;
            text-decoration: none;
        }
    }

    .router-link-exact-active {
        user-select: none;
        cursor: default;
        font-weight: bold;
    }
}
</style>
