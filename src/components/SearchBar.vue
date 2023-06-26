<script>
import axios from 'axios';
import { store } from '../store.js';
    export default {
        data() {
            return {
                searchText: '',
                apiUrl: 'https://api.themoviedb.org/3/',
                apiKey: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWVmNTA0ZDMyZjUxMDBhMzM2YTQwOGNlNDNhZTY1YiIsInN1YiI6IjY0OTJjODU5NzA2ZTU2MDBhZDFhMmVmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5O5CHPkuc11G8l5WEOUiRp32ubkmdocptlVSPLLbliU',
                accessToken: 'api_key=01ef504d32f5100a336a408ce43ae65b',
                store,
            }
        },
        methods: {
            getMovies(search){
                axios.get(`${this.apiUrl}search/movie?${this.accessToken}&query=${search}`)
                .then((response)=>{
                    // console.log(response.data.results);
                    this.store.movieRes = response.data.results;
                })
                axios.get(`${this.apiUrl}search/tv?${this.accessToken}&query=${search}`)
                .then((response)=>{
                    // console.log(response.data.results);
                    this.store.seriesRes = response.data.results;
                })
            },
            getGenres(){
                axios.get(`${this.apiUrl}genre/movie/list?language=en%27&${this.accessToken}`)
                .then((response)=>{
                    // console.log(response.data.genres);
                    this.store.movieGen = response.data.genres;
                })
                axios.get(`${this.apiUrl}genre/tv/list?language=en%27&${this.accessToken}`)
                .then((response)=>{
                    // console.log(response.data.genres);
                    this.store.seriesTv = response.data.genres;
                })
            }
        },
        created(){
            this.getGenres()
        }
    }
</script>

<template>
    <div class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Movie or Series Title" aria-label="Search" v-model="searchText" @keyup.enter="getMovies(searchText), store.userSelection = 'search',  this.store.trailerUrl=''">
        <button class="btn btn-outline-danger" type="button" @click="getMovies(searchText), searchText='', store.userSelection = 'search',  this.store.trailerUrl=''" >Search</button>
    </div>
</template>

<style lang="scss" scoped>

</style>