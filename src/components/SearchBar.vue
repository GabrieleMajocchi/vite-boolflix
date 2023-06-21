<script>
import axios from 'axios';
import { store } from '../store.js';
    export default {
        data() {
            return {
                searchText: '',
                apiUrl: 'https://api.themoviedb.org/3/search/',
                apiKey: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWVmNTA0ZDMyZjUxMDBhMzM2YTQwOGNlNDNhZTY1YiIsInN1YiI6IjY0OTJjODU5NzA2ZTU2MDBhZDFhMmVmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5O5CHPkuc11G8l5WEOUiRp32ubkmdocptlVSPLLbliU',
                accessToken: 'api_key=01ef504d32f5100a336a408ce43ae65b',
                store,
            }
        },
        methods: {
            getMovies(search){
                axios.get(`${this.apiUrl}movie?${this.accessToken}&query=${search}`)
                .then((response)=>{
                    // console.log(response.data.results);
                    this.store.movieRes = response.data.results;
                })
                axios.get(`${this.apiUrl}tv?${this.accessToken}&query=${search}`)
                .then((response)=>{
                    // console.log(response.data.results);
                    this.store.seriesRes = response.data.results;
                })
            },
        },
    }
</script>

<template>
    <nav class="navbar bg-light">
        <div class="container-fluid">
                <input class="form-control me-2" type="search" placeholder="Titolo del film" aria-label="Search" v-model="searchText" @keyup.enter="getMovies(searchText)">
                <button class="btn btn-outline-success" type="send" @click="getMovies(searchText), searchText=''" >Cerca</button>
        </div>
    </nav>
</template>

<style lang="scss" scoped>

</style>