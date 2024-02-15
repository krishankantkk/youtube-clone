import { createSlice } from "@reduxjs/toolkit";

const searchKeySlice = createSlice({
    name: "searchSelected",
    initialState: {
        searchKey: ""
    },
    reducers: {
        setSearchKey: (state, action) => {
            state.searchKey = action.payload; // This is mutating the state directly
        }
    }
});

export const { setSearchKey } = searchKeySlice.actions;
export default searchKeySlice.reducer;
