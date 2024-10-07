import { createSlice } from '@reduxjs/toolkit';

const characterSlice = createSlice({
    name: 'characters',
    initialState: {
        selectedEpisodes: [],
        selectedOrigin: {},
    },
    reducers: {
        setEpisodes: (state, action) => {
            state.selectedEpisodes = action.payload;
        },
        setOrigin: (state, action) => {
            state.selectedOrigin = action.payload;
        },
    },
});

export const { setEpisodes, setOrigin } = characterSlice.actions;
export default characterSlice.reducer;
