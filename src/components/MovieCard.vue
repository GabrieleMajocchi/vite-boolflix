<script>
import axios from 'axios'
import { store } from '../store'

    export default {
        name: 'AppMain',
        props: {
            title: Object,
            titleOG: String,
            titleTitle: String,
            titleType: String,
        },
        data() {
            return {
                store,
                totalGen: '',
                links: [],
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
            },

            transformGenres(genres){
                if(genres.length === 0){
                    this.totalGen = 'No genres'
                    return this.totalGen
                }else{
                    genres.forEach(element => {
                        if(this.titleType === 'movie'){
                            for (let i = 0; i < this.store.movieGen.length; i++) {
                                if (this.store.movieGen[i].id === element) {
                                this.totalGen += this.store.movieGen[i].name;
                                console.log(this.totalGen)
                                }
                            }
                        }else{
                            for (let i = 0; i < this.store.seriesTv.length; i++) {
                                if (this.store.seriesTv[i].id === element) {
                                this.totalGen += this.store.seriesTv[i].name;
                                console.log(this.totalGen)
                                }
                            }
                        }
                        return this.totalGen
                    });
                }
            },

            showTrailer(id){
                axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=it-IT&api_key=01ef504d32f5100a336a408ce43ae65b`)
                .then((response)=>{
                    // console.log(response.data.results)
                    this.links = response.data.results
                    for (let i = (this.links.length-1); i > 0; i--) {
                            if (this.links[i].type === 'Trailer'){
                            this.store.trailerUrl = "https://www.youtube.com/embed/"+this.links[i].key+"?autoplay=1"
                            console.log(this.store.trailerUrl)
                            i=0
                            }
                        }
                })
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
            <div class="playbutton" @click="showTrailer(title.id)"><i class="fa-solid fa-play" style="color: #ffffff;"></i></div>
            <div class="shader"></div>
            <p class="fw-bold m-0">About {{titleTitle}}</p>
            <!-- <p><span class="fw-bold">Titolo originale: </span>{{titleOG}}</p> -->
            <p v-if="title.overview === ''">No description</p>
            <p v-else>{{title.overview}}</p>
            <!-- <span>Genres: {{transformGenres(title.genre_ids)}}</span><br> -->
            <span class="me-3">Lang: {{getFlagEmoji(title.original_language)}}</span>
            <span>Rating: <img :src="getStars(title.vote_average)" :alt="title.vote_average" class="vote w-25 align-baseline"></span>
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
        .poster{
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
            .playbutton{
                border: 2px solid white;
                border-radius: 50%;
                width: 40px;
                aspect-ratio: 1;
                cursor: pointer;
                z-index: 1;
                position: absolute;
                margin-top: -65px;
                text-align: center;
                padding-top: 6px;
                padding-left: 3px;
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
            span{
                color: #777;
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
