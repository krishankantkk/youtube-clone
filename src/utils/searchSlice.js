import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState:{},
    reducers:{
        cachesResult:(state,action )=>{
          return {...state, ...action.payload}
        },
    },
});

export const {cachesResult}=searchSlice.actions;
export default searchSlice.reducer;

