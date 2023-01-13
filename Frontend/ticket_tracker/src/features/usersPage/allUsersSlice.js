//This slice of state will store every user object from the database in an array

import { createSlice } from '@reduxjs/toolkit'; 

export const allUsersSlice = createSlice({
    name: "allUsers",
    initialState: [],
    reducers:{
        loadUsersData: (state, action) =>{
            action.payload.map((user) => state.push(user));
        },
        updateAdmin: (state, action) =>{
            const userId = action.payload; 
            const userIndex = state.findIndex((user) => user.id === userId);
            if(userIndex !== -1){
                state[userIndex].isAdmin = !(state[userIndex].isAdmin);
                /*server call to reflect change in admin*/ 
            }
        },
    },
});

export const selectAllUsers = (state) => state.allUsers;

export const {
    loadUsersData,
    updateAdmin,
} = allUsersSlice.actions;

export default allUsersSlice.reducer;

