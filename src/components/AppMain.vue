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
    <main class="pt-3">
        <img v-if="!store.movieRes.length > 0" src="../assets/img/noresult.png" alt="no result screen" class="noresult">
        <h1 v-if="store.movieRes.length > 0">Film trovati</h1>
        <div class="movieInfo">
            <MovieCard v-for="movie in store.movieRes" :title="movie" :titleOG="movie.original_title" :titleTitle="movie.title"/>
        </div>
        <h1 v-if="store.seriesRes.length > 0" class="mt-3">Serie trovate</h1>
        <div class="seriesInfo">
            <MovieCard v-for="series in store.seriesRes" :title="series" :titleOG="series.original_name" :titleTitle="series.name"/>
        </div>
    </main>
</template>

<style lang="scss">
    @use '../styles/partials/mixing.scss' as *;
    @use '../styles/partials/variables.scss' as *;

    main{
        background-color: #434343;
        h1{
            color: #dc1a28;
            font-weight: bold;
            background-color: rgba(0, 0, 0, 0.267);
            width: fit-content;
            margin: auto;
            padding: 1rem 2rem;

        }
        .noresult{
            width: 98vw;
            height: calc(100vh - 145px);
            margin: 0 1vw;
        }
    }

    .movieInfo, .seriesInfo{
        display: flex;
        flex-wrap: wrap;
        // width: 90vw;
        // height: 50vh;
        // overflow-y: scroll;
        // transform: rotate(-90deg);
    }
</style>
