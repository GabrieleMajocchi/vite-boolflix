<script>
import { store } from '../store.js';
import MovieCard from './MovieCard.vue'
    export default {
        name: 'AppMain',
        components: {
            MovieCard,
        },
        data() {
            return {
                store,
            }
        },
        methods: {
            
        },
    }
</script>

<template>
    <main>
        <h1 v-if="store.movieRes.length > 0">Film trovati</h1>
        <div class="movieInfo" v-for="movie in store.movieRes">
            <MovieCard :title="movie" :titleOG="movie.original_title" :titleTitle="movie.title"/>
        </div>
        <h1 v-if="store.seriesRes.length > 0">Serie trovate</h1>
        <div class="seriesInfo" v-for="series in store.seriesRes">
            <MovieCard :title="series" :titleOG="series.original_name" :titleTitle="series.name"/>
        </div>
    </main>
</template>

<style lang="scss">
    @use '../styles/partials/mixing.scss' as *;
    @use '../styles/partials/variables.scss' as *;

    .poster{
        width: 200px;
    }

    .vote{
        width: 120px;
    }
</style>
