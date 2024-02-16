import { createSlice } from "@reduxjs/toolkit";

const appslice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        isTheme:true

    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        },
        setTheme:(state)=>{
            state.isTheme=!state.isTheme;
        }
    },

});
export const {toggleMenu, closeMenu, setTheme}=appslice.actions;
export default appslice.reducer
