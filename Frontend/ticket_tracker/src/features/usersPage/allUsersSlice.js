//This slice of state will store every user object from the database in an array

import { createSlice } from '@reduxjs/toolkit'; 

export const allUsersSlice = createSlice({
    name: "allUsers",
    initialState: [],
    reducers:{
        loadUsersData: (state, action) =>{
            state.push(action.payload);
        },
    },
});

export const selectAllUsers = (state) => state.allUsers;

export const {
    loadUsersData,
} = allUsersSlice.actions;

export default allUsersSlice.reducer;

