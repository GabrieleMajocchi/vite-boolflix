<script>
    export default {
        name: 'AppMain',
        props: {
            title: Object,
            titleOG: String,
            titleTitle: String,
        },
        data() {
            return {
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
            },

            getStars(vote){
                let stars = Math.ceil(vote / 2);
                let url = ''
                if(stars === 1){
                    url = '../assets/img/onestar.png'
                }else if(stars === 2){
                    url = '../assets/img/twostar.png'
                }else if(stars === 3){
                    url = '../assets/img/threestar.png'
                }else if(stars === 4){
                    url = '../assets/img/fourstar.png'
                }else if(stars === 5){
                    url = '../assets/img/fivestar.png'
                }else{
                    url = '../assets/img/zerostar.png'
                }
                return new URL(url, import.meta.url).href
            }
        },
    }
</script>

<template>
    <img :src="getPoster(title.poster_path)" alt="Poster" class="poster">
    <p>{{titleOG}}</p>
    <p>{{titleTitle}}</p>
    <p>{{getFlagEmoji(title.original_language)}}</p>
    <img :src="getStars(title.vote_average)" :alt="title.vote_average" class="vote">
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
