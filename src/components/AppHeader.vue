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
        <SearchBar/>
    </header>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/mixing.scss' as *;
    @use '../styles/partials/variables.scss' as *;

</style>
