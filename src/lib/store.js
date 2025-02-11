import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from "./slices/movie";
 
export const store = () => {
    return configureStore({
        reducer: {
            movies: moviesReducer,

        },

 
    })
}

 
