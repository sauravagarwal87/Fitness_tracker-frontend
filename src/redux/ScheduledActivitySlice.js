import { createSlice } from "@reduxjs/toolkit";
import ScheduledActivity from "../models/ScheduledActivity";

const ScheduledActivitySlice = createSlice({

    name: 'sact',
    initialState:{
        sactData : new ScheduledActivity(),
        actlist : [] 
    },

    reducers:{
        viewScheduledActivity:(state,action)=>{
            console.log(state);
            console.log(action.payload);
            state.actlist = action.payload;
        }
    }


})

export const {viewScheduledActivity}= ScheduledActivitySlice.actions;

export default ScheduledActivitySlice.reducer;