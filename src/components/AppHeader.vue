<script>
import SearchBar from './SearchBar.vue';
    export default {
        name: 'AppHeader',
        components: {
            SearchBar,
        },
        data() {
            return {
            }
        },
    }
</script>

<template>
    <header>
        <nav class="navbar navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand m-0 p-0" href="">
                    <img src="../assets/img/logo.png" alt="Logo" class="d-inline-block align-text-top w-100">
                </a>
                <SearchBar/>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/mixing.scss' as *;
    @use '../styles/partials/variables.scss' as *;

    .navbar-brand{
        width: 150px;
    }

    .navbar{
        background-color: #141414;
        margin: 0 7px;
    }

</style>
