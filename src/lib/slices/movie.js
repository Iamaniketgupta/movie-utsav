 
import { createSlice } from '@reduxjs/toolkit';
 
 const initialState = {
  latest: [],
  popular: [],
  genres: [],
  toprated: [],
  upcoming: [],
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setMoviesData: (state, action) => {
      state[action.payload.type] = action.payload.data;
    },
  },
});

export const { setLoading, setError, setMoviesData } = moviesSlice.actions;

export const selectMovies = (state) => state.movies;

 
export default moviesSlice.reducer;
