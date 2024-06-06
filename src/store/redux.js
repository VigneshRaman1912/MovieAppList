import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    movieData:[],
    movieFilterData:[],
    searchText:'',
    selectedGenre:null
}

const AppReducer = createSlice({
    name:"appStore",
    initialState,
    reducers:{
        getMovieList(state){
            state.movieData
        },
        updateMovieList(state,payload){
            state.movieData = payload
        },
        updatedMovieFilterList(state,payload){
            state.movieFilterData = payload
        },
        searchMovieText(state,payload){
            state.searchText = payload
        },
        selectedGenre(state,payload){
            state.selectedGenre = payload
        }

    }
})

const store  = configureStore({
    reducer:{appStore:AppReducer.reducer}
})

export const AppActions = AppReducer.actions;

export default store;