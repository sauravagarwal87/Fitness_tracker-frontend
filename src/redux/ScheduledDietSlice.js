import { createSlice } from "@reduxjs/toolkit";
import ScheduledDiet from "../models/ScheduledDiet";

const ScheduledDietSlice = createSlice({

    name: 'sact',
    initialState:{
        sactData : new ScheduledDiet(),
        dietlist : [] 
    },

    reducers:{
        viewScheduledDiet:(state,action)=>{
            console.log(state);
            console.log(action.payload);
            state.dietlist = action.payload;
        }
    }


})

export const {viewScheduledDiet}= ScheduledDietSlice.actions;

export default ScheduledDietSlice.reducer;