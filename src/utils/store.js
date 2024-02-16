import { configureStore } from "@reduxjs/toolkit";
import appslice from './appslice';
import searchSlice from "./searchSlice";
import searchSelectedSlice from "./searchSelectedSlice";
import chatSlice from "./chatSlice";
const store=configureStore({
 reducer:{
    app:appslice,
    search:searchSlice,
    searchSelected:searchSelectedSlice,
    chat:chatSlice
 },
});

export default store;