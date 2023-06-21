<script>
import SearchBar from './SearchBar.vue';
import axios from 'axios';
    export default {
        name: 'AppHeader',
        components: {
            SearchBar,
        },
        data() {
            return {
                apiKey: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWVmNTA0ZDMyZjUxMDBhMzM2YTQwOGNlNDNhZTY1YiIsInN1YiI6IjY0OTJjODU5NzA2ZTU2MDBhZDFhMmVmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5O5CHPkuc11G8l5WEOUiRp32ubkmdocptlVSPLLbliU',
                accessToken: '01ef504d32f5100a336a408ce43ae65b',
                movieRes: [],
            }
        },
        methods: {
            getMovies(search){
                axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.accessToken}&query=${search}`)
                .then((response)=>{
                    // console.log(response.data.results);
                    this.movieRes = response.data.results;
                    // console.log(this.movieRes[0].original_title);
                    // console.log(this.movieRes[0].title);
                    // console.log(this.movieRes[0].original_language);
                    // console.log(this.movieRes[0].vote_average);
                })
            }
        },
        created(){
        },
    }
</script>

<template>
    <header>
        <SearchBar @seachMovie="getMovies"/>
        <div v-for="movie in movieRes">
            <p>{{movie.original_title}}</p>
            <p>{{movie.title}}</p>
            <p>{{movie.original_language}}</p>
            <p>{{movie.vote_average}}</p>
        </div>
    </header>
</template>

<style lang="scss">
    @use '../styles/partials/mixing.scss' as *;
    @use '../styles/partials/variables.scss' as *;

</style>
