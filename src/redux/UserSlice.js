import { createSlice } from "@reduxjs/toolkit";
import User  from "../models/User";

const UserSlice = createSlice({

    name: 'usr',
    initialState:{
        usrData: new User(),
        usrList :[]
    },

    reducers:{
        getAllUser:(state,action)=>{
            console.log(state);
            console.log(action.payload);
            state.usrList = action.payload;
        }
    }


});

export const {getAllUser}= UserSlice.actions;

export default UserSlice.reducer;
