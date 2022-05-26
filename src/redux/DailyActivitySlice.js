import { createSlice } from "@reduxjs/toolkit";
import DailyActivity  from "../models/DailyActivity";

const DailyActivitySlice = createSlice({

    name: 'act',
    initialState:{
        actData: new DailyActivity(),
        actList :[],
        actListByDate :[],
        dailyActList :[],
        dActList:[]
    },

    reducers:{
        getAllActs:(state,action)=>{
            console.log(state);
            console.log(action.payload);
            state.actList = action.payload;
        },
        getDailyActs:(state,action)=>{
            console.log(state);
            console.log(action.payload);
            state.dailyActList = action.payload;
        },
        getActsByDate:(state,action)=>{
            console.log(state);
            console.log(action.payload);
            state.actListByDate = action.payload;
        },
        getDAct:(state,action)=>{
            console.log(state);
            console.log(action.payload);
            state.dActList = action.payload;
        }

    }


});

export const {getAllActs,getDailyActs,getActsByDate,getDAct}= DailyActivitySlice.actions;

export default DailyActivitySlice.reducer;