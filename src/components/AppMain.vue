<script>
import { store } from '../store.js';
    export default {
        name: 'AppMain',
        data() {
            return {
                store,
            }
        },
        methods: {
            getFlagEmoji(countryCode) {
                if(countryCode === 'en'){
                    countryCode = 'gb'
                }else if(countryCode === 'ja'){
                    countryCode = 'jp'
                }else if(countryCode === 'zh'){
                    countryCode = 'cn'
                }else if(countryCode === 'ko'){
                    countryCode = 'kr'
                }else if(countryCode === 'hi'){
                    countryCode = 'in'
                }else if(countryCode === 'cs'){
                    countryCode = 'cz'
                }else if(countryCode === undefined){
                    countryCode = ''
                }
                const codePoints = countryCode.toUpperCase().split('').map(char =>  127397 + char.charCodeAt());
                return String.fromCodePoint(...codePoints);
                },
            
            getPoster(link){
                let posterLink = 'https://image.tmdb.org/t/p/w500/'
                if(link === null){
                    posterLink = 'https://www.tgv.com.my/assets/images/404/movie-poster.jpg'
                }else{
                    posterLink += link
                }
                return posterLink
            }
        },
    }
</script>

<template>
    <main>
        <h1 v-if="store.movieRes.length > 0">Film trovati</h1>
        <div class="movieInfo" v-for="movie in store.movieRes">
            <img :src="getPoster(movie.poster_path)" alt="">
            <p>{{movie.original_title}}</p>
            <p>{{movie.title}}</p>
            <p>{{getFlagEmoji(movie.original_language)}}</p>
            <p>{{movie.vote_average}}</p>
        </div>
        <h1 v-if="store.seriesRes.length > 0">Serie trovate</h1>
        <div class="seriesInfo" v-for="series in store.seriesRes">
            <img :src="getPoster(movie.poster_path)" alt="">
            <p>{{series.original_name}}</p>
            <p>{{series.name}}</p>
            <p>{{getFlagEmoji(series.original_language)}}</p>
            <p>{{series.vote_average}}</p>
        </div>
    </main>
</template>

<style lang="scss">
    @use '../styles/partials/mixing.scss' as *;
    @use '../styles/partials/variables.scss' as *;

</style>
