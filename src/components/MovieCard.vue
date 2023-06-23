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
                let posterLink = 'https://image.tmdb.org/t/p/w500'
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
    <div class="moviecard">
        <div class="front">
            <img :src="getPoster(title.poster_path)" alt="Poster" class="poster">
        </div>
        <div class="back">
            <img :src="getPoster(title.backdrop_path)" alt="Backdrop Poster" class="backdropPoster">
            <div class="shader"></div>
            <p><span class="fw-bold">Titolo: </span> {{titleTitle}}</p>
            <p><span class="fw-bold">Titolo originale: </span>{{titleOG}}</p>
            <p><span class="fw-bold">Lingua originale: </span>{{getFlagEmoji(title.original_language)}}</p>
            <span class="fw-bold">Voto: <img :src="getStars(title.vote_average)" :alt="title.vote_average" class="vote w-25 align-baseline"></span>
            <p v-if="title.overview === ''"><span class="fw-bold">Overview: </span>Non presente</p>
            <p v-else><span class="fw-bold">Overview: </span>{{title.overview}}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/mixing.scss' as *;
    @use '../styles/partials/variables.scss' as *;

    .moviecard{
        border-radius: 10px;
        transition: all 0.5s;
        transform: scale(1);
        font-family: sans-serif;
        position: relative;
        background: #181818;
        margin: 2rem 1rem;
        width: calc(100vw / 6);
        height: calc(80vh - 300px);
        .front{
            border-radius: 10px;
            opacity: 1;
            transition: all 0.5s ease;
        }
        &:hover .front{
        opacity: 0;
        }
        &:hover{
        transform: scale(1.1);
        box-shadow: 0 0 10px black;
        }
        img{
            border-radius: 10px;
        width: calc(100vw / 6);
        height: calc(80vh - 300px);
        }
        .back{
            padding: 10px;
            border-radius: 10px;
            transition: all 0.5s ease;
            top: 0;
            opacity: 0;
            position: absolute;
            width: 100%;
            height: 100%;
            color: white;
            overflow: auto;
            &:hover{
                opacity: 1;
            }
            .vote{
                height: 20px;
            }
            .backdropPoster{
            margin-left: -10px;
            margin-top: -10px;
            margin-bottom: 1rem;
            border-radius: 10px 10px 0 0;
            width: calc(100vw / 6);
            height: calc((80vh - 300px)/5*2);
            }
            .shader{
                background: rgb(24,24,24);
                background: linear-gradient(0deg, rgba(24,24,24,1) 5%, rgba(0,0,0,0) 100%);
                height: 70px;
                width: calc(100vw / 6);
                margin-left: -10px;
                position: absolute;
                margin-top: -85px;
            }
        }
        
    }
    // .moviecard{
    //     width: calc(100vw / 5 - 12px);
    //     aspect-ratio: 0.67;
    //     position: relative;
    //     background-color: black;
    //     margin-right: 12px;
    //     margin-top: 12px;
    //     border: 1px solid white;
    //     .front{
    //         height: 100%;
    //         position: absolute;
    //         opacity: 1;
    //         transition: all 1s ease;
    //     }
    //     .back{
    //         position: absolute;
    //         opacity: 0;
    //         transition: all 1s ease;
    //         color: white;
    //     }
    //     &:hover .front{
    //         opacity: 0;
    //     }
    //     &:hover .back{
    //         opacity: 1;
    //     }
        
    // }
    // .poster{
    //     height: 100%;
    //     width: 100%;
    //     object-fit: cover;
    //     object-position: center;
    // }
    
    // .vote{
    //     width: 100%;
    // }
</style>
