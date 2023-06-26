import { reactive } from 'vue';

export const store = reactive({
    movieRes: [],
    seriesRes: [],
    movieGen: [],
    seriesTv: [],
    userSelection: '',
    popularMovies: [],
    popularSeries: [],
    trandingMovies: [],
    trandingSeries: [],
    trailerUrl: '',
});