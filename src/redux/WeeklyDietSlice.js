import { createSlice } from "@reduxjs/toolkit";
import WeeklyDiet  from "../models/WeeklyDiet";

const WeeklyDietSlice = createSlice({

    name: 'wDiet',
    initialState:{
        wDietData: new WeeklyDiet(),
        wDietList :[],
        wDietList2 :[],
        
    },

    reducers:{
        getWDietsByCat:(state,action)=>{
            console.log(state);
            console.log(action.payload);
            state.wDietList = action.payload;
        },
        getWDiets:(state,action)=>{
            console.log(state);
            console.log(action.payload);
            state.wDietList2 = action.payload;
        }
    }


});

export const {getWDietsByCat,getWDiets}= WeeklyDietSlice.actions;

export default WeeklyDietSlice.reducer;
