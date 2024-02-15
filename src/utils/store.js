import { configureStore } from "@reduxjs/toolkit";
import appslice from './appslice';
import searchSlice from "./searchSlice";
import searchSelectedSlice from "./searchSelectedSlice";
const store=configureStore({
 reducer:{
    app:appslice,
    search:searchSlice,
    searchSelected:searchSelectedSlice
 },
});

export default store;