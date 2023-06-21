<script>
import { store } from '../store.js';
    export default {
        name: 'AppMain',
        data() {
            return {
                store
            }
        },
        methods: {
            
        },
    }
</script>

<template>
    <main>
        <div class="movieInfo" v-for="movie in store.movieRes">
            <p>{{movie.original_title}}</p>
            <p>{{movie.title}}</p>
            <p>{{movie.original_language}}</p>
            <p>{{movie.vote_average}}</p>
        </div>
    </main>
</template>

<style lang="scss">
    @use '../styles/partials/mixing.scss' as *;
    @use '../styles/partials/variables.scss' as *;

</style>
