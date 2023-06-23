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
            handleWheel(event) {
                event.preventDefault();

                const container = this.$refs.container;
                container.scrollLeft += event.deltaY < 0 ? -30 : 30;
            },
            handleWheel2(event) {
                event.preventDefault();

                const container = this.$refs.container2;
                container.scrollLeft += event.deltaY < 0 ? -30 : 30;
            },
        },
    }
</script>

<template>
    <main class="pt-3">
        <img v-if="!store.movieRes.length > 0" src="../assets/img/noresult.png" alt="no result screen" class="noresult">
        <h1 v-if="store.movieRes.length > 0">Film trovati</h1>
        <div v-if="store.movieRes.length > 0" class="movieInfo" ref="container" @wheel="handleWheel">
            <MovieCard v-for="movie in store.movieRes" :title="movie" :titleOG="movie.original_title" :titleTitle="movie.title"/>
        </div>
        <h1 v-if="store.seriesRes.length > 0" class="mt-3">Serie trovate</h1>
        <div v-if="store.movieRes.length > 0" class="seriesInfo" ref="container2" @wheel="handleWheel2">
            <MovieCard v-for="series in store.seriesRes" :title="series" :titleOG="series.original_name" :titleTitle="series.name"/>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/mixing.scss' as *;
    @use '../styles/partials/variables.scss' as *;

    main{
        background-color: #141414;
        h1{
            color: #dc1a28;
            font-weight: bold;
            background-color: rgba(0, 0, 0, 0.267);
            width: fit-content;
            margin: auto;
            padding: 1rem 2rem;

        }
        .noresult{
            width: calc(100vw - 40px);
            height: calc(100vh - 100px);
            margin: 0 20px;
        }
    }

    .movieInfo, .seriesInfo {
        display: flex;
        overflow-x: hidden;
        max-width: 100vw;
        margin: 0 auto;
        padding: 1rem 0;
    }

</style>
