<script>
import SearchBar from './SearchBar.vue';
import axios from 'axios';
import { store } from '../store';
    export default {
        name: 'AppHeader',
        components: {
            SearchBar,
        },
        data() {
            return {
                store,
                accessToken: '&api_key=01ef504d32f5100a336a408ce43ae65b',
            }
        },
        methods: {
            getPopular(){
                axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc${this.accessToken}`)
                .then((response)=>{
                    // console.log(response.data.results);
                    this.store.popularMovies = response.data.results;
                })
                axios.get(`https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc${this.accessToken}`)
                .then((response)=>{
                    // console.log(response.data.results);
                    this.store.popularSeries = response.data.results;
                })
            },
            getTranding(){
                axios.get(`https://api.themoviedb.org/3/trending/movie/day?${this.accessToken}`)
                .then((response)=>{
                    // console.log(response.data.results);
                    this.store.trandingMovies = response.data.results;
                })
                axios.get(`https://api.themoviedb.org/3/trending/tv/day?${this.accessToken}`)
                .then((response)=>{
                    // console.log(response.data.results);
                    this.store.trandingSeries = response.data.results;
                })
            },
        },
        created(){
            this.getPopular()
            this.getTranding()
        },
    }
</script>

<template>
    <header>
        <nav class="navbar navbar-dark">
            <div class="container-fluid">
                <div class="navbar-brand m-0 p-0">
                    <a href=""><img src="../assets/img/logo.png" alt="Logo" class="d-inline-block align-text-top logo"></a>
                    <a href="#" @click="store.userSelection = 'home', this.store.trailerUrl=''" :class="store.userSelection === 'home' ? 'fw-bold' : ''">Home</a>
                    <a href="#" @click="store.userSelection = 'series', this.store.trailerUrl=''" :class="store.userSelection === 'series' ? 'fw-bold' : ''">TV Shows</a>
                    <a href="#" @click="store.userSelection = 'movies',  this.store.trailerUrl=''" :class="store.userSelection === 'movies' ? 'fw-bold' : ''">Movie</a>
                </div>
                <SearchBar/>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/mixing.scss' as *;
    @use '../styles/partials/variables.scss' as *;

    header{
        height: 57px;
    }
    .navbar-brand{
        width: 400px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        a{
        text-decoration: none;
        color: white;
        font-size: 1rem;
        &:hover{
            color: lightgray;
        }
        }
    }

    .logo{
        width: 150px;
    }
    .navbar{
        background-color: #141414;
        padding: 13px 7px;
        z-index: 1;
        position: fixed;
        width: 100vw;
    }

</style>
