import { createSlice } from "@reduxjs/toolkit";
import WeeklyActivity  from "../models/WeeklyActivity";

const WeeklyActivitySlice = createSlice({

    name: 'wAct',
    initialState:{
        wActData: new WeeklyActivity(),
        wActList :[],
        wActList2 :[],
        
    },

    reducers:{
        getWActsByCat:(state,action)=>{
            console.log(state);
            console.log(action.payload);
            state.wActList = action.payload;
        },
        getWActs:(state,action)=>{
            console.log(state);
            console.log(action.payload);
            state.wActList2 = action.payload;
        }
    }


});

export const {getWActsByCat,getWActs}= WeeklyActivitySlice.actions;

export default WeeklyActivitySlice.reducer;
