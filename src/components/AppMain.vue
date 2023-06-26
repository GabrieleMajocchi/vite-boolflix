<script>
import { store } from '../store.js'
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
    <main class="pt-3" v-if="this.store.trailerUrl===''">
        <!-- ---Pic to show as landing page--- -->
        <img v-if="store.userSelection === ''" src="../assets/img/noresult.png" alt="no result screen" class="noresult">
        <!-- ---Popular movies and tv shows showed on home section--- -->
        <div class="movies" v-if="store.userSelection === 'home'">
            <h1 class="mt-3">Popular Movies</h1>
            <div class="movieInfo" ref="container" @wheel="handleWheel">
                <MovieCard v-for="movie in store.popularMovies" :title="movie" :titleOG="movie.original_title" :titleTitle="movie.title" :titleType="'movie'"/>
            </div>
            <h1 class="mt-3">Popular TV Show</h1>
            <div class="seriesInfo" ref="container2" @wheel="handleWheel2">
                <MovieCard v-for="series in store.popularSeries" :title="series" :titleOG="series.original_name" :titleTitle="series.name" :titleType="'series'"/>
            </div>
        </div>
        <!-- ---Various movies showed on movie section--- -->
        <div class="movies" v-if="store.userSelection === 'movies'">
            <h1 class="mt-3">Tranding Movies</h1>
            <div class="movieInfo" ref="container" @wheel="handleWheel">
                <MovieCard v-for="movie in store.trandingMovies" :title="movie" :titleOG="movie.original_title" :titleTitle="movie.title" :titleType="'movie'"/>
            </div>
            <h1 class="mt-3">Popular Movies</h1>
            <div class="movieInfo" ref="container" @wheel="handleWheel">
                <MovieCard v-for="movie in store.popularMovies" :title="movie" :titleOG="movie.original_title" :titleTitle="movie.title" :titleType="'movie'"/>
            </div>
        </div>
        <!-- ---Various tv show showed on tv show section--- -->
        <div class="series" v-if="store.userSelection === 'series'">
            <h1 class="mt-3">Tranding TV Show</h1>
            <div class="seriesInfo" ref="container2" @wheel="handleWheel2">
                <MovieCard v-for="series in store.trandingSeries" :title="series" :titleOG="series.original_name" :titleTitle="series.name" :titleType="'series'"/>
            </div>
            <h1 class="mt-3">Popular TV Show</h1>
            <div class="seriesInfo" ref="container2" @wheel="handleWheel2">
                <MovieCard v-for="series in store.popularSeries" :title="series" :titleOG="series.original_name" :titleTitle="series.name" :titleType="'series'"/>
            </div>
        </div>
        <!-- ---Movie and tv show based on user search--- -->
        <div class="movies" v-if="store.userSelection === 'search'">
            <h1 class="mt-3">Searched Movies</h1>
            <div class="movieInfo" ref="container" @wheel="handleWheel">
                <MovieCard v-for="movie in store.movieRes" :title="movie" :titleOG="movie.original_title" :titleTitle="movie.title" :titleType="'movie'"/>
            </div>
            <h1 class="mt-3">Searched TV Show</h1>
            <div class="seriesInfo" ref="container2" @wheel="handleWheel2">
                <MovieCard v-for="series in store.seriesRes" :title="series" :titleOG="series.original_name" :titleTitle="series.name" :titleType="'series'"/>
            </div>
        </div>
    </main>
    <!-- ---Trailer of the series or movie--- -->
    <div v-else class="player">
        <iframe :src="this.store.trailerUrl"></iframe>
        <div class="stopbutton" @click="this.store.trailerUrl=''"><i class="fa-solid fa-xmark" style="color: #ffffff;"></i></div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/mixing.scss' as *;
    @use '../styles/partials/variables.scss' as *;

    main{
        background-color: #141414;
        h1{
            color: white;
            font-weight: bold;
            width: fit-content;
            padding: 1.5rem 1rem 0;
            font-size: 1.5rem;

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
    }

    iframe{
        width: 100vw;
        height: calc(100vh - 100px);
        position: absolute;
        left: 0;
        top: 80px;
    }

    .stopbutton{
        border: 2px solid white;
        border-radius: 50%;
        width: 40px;
        aspect-ratio: 1;
        cursor: pointer;
        z-index: 1;
        position: absolute;
        top: 90px;
        left: calc(50% - 20px);
        text-align: center;
        padding-top: 7px;
    }
</style>
