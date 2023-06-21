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
            getFlagEmoji(countryCode) {
                if(countryCode === 'en'){
                    countryCode = 'gb'
                }else if(countryCode === 'ja'){
                    countryCode = 'jp'
                }else if(countryCode === 'zh'){
                    countryCode = 'cn'
                }else if(countryCode === 'ko'){
                    countryCode = 'kr'
                }
                const codePoints = countryCode.toUpperCase().split('').map(char =>  127397 + char.charCodeAt());
                return String.fromCodePoint(...codePoints);
                }

        },
    }
</script>

<template>
    <main>
        <div class="movieInfo" v-for="movie in store.movieRes">
            <p>{{movie.original_title}}</p>
            <p>{{movie.title}}</p>
            <p>{{getFlagEmoji(movie.original_language)}}</p>
            <p>{{movie.vote_average}}</p>
        </div>
    </main>
</template>

<style lang="scss">
    @use '../styles/partials/mixing.scss' as *;
    @use '../styles/partials/variables.scss' as *;

</style>
