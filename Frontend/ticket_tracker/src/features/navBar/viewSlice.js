/* viewSlice 
the state of this data determines the page layout that is displayed beneath the nav bar as either: homepage, list, user, project, or ticket 
This slice is updated when a user clicks an item on the navbar, or on an individual project or ticket link from somewhere
*/ 

import { createSlice } from '@reduxjs/toolkit'; 

export const viewSlice = createSlice({
    name: "view",
    initialState: "homepage",
    reducers: {
        changeView: (state, action) =>{
            state = action.payload; 
        },
    },
});

export const selectView = (state) => state.view; 

export const { changeView } = viewSlice.actions;

export default viewSlice.reducer;