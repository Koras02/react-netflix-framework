import { createSlice } from "@reduxjs/toolkit";


export const searchVideosSlice = createSlice({
    name: 'search',
    initialState: {
        loading: false,
        videos: '',
        error: '',
    },
    reducers: {
        searchVideosRequest: (state) => {
            state.loading = true;
        },
        searchVideosSuccess: (state,action) => {
            state.loading = false;
            state.videos = action.payload;
        },
        searchVideosFail: (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { searchVideosRequest, searchVideosSuccess, searchVideosFail } = 
searchVideosSlice.actions;

export default searchVideosSlice.reducer;