//This slice of state will store the info object for the currently logged in user
//I still don't think this isthe best way to go about things, but here we are. 

import { createSlice } from '@reduxjs/toolkit'; 

const thisUserSlice = createSlice({
    name: "thisUser",
    initialState: [],
    reducers: {
        setCurrentUser: (state,action) =>{
            state.push(action.payload);
        },
    },
});

export const selectCurrentUser = (state) => state.thisUser;

export const {
    setCurrentUser,
} = thisUserSlice.actions;

export default thisUserSlice.reducer;