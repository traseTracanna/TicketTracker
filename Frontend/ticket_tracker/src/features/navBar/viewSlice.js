/* viewSlice 
the state of this data determines the page layout that is displayed beneath the nav bar as either: homepage, list, user, project, or ticket 
This slice is updated when a user clicks an item on the navbar, or on an individual project or ticket link from somewhere
*/ 

import { createSlice } from '@reduxjs/toolkit'; 

export const viewSlice = createSlice({
    name: "view",
    initialState: { view: "homepage", currentProject: [], currentTicket: []},
    reducers: {
        changeView: (state, action) =>{
            state.view = action.payload; 
        },
        setProject: (state, action) =>{
            state.currentProject = action.payload;
        },
        setTicket: (state, action) =>{
            state.currentTicket = action.payload;
        }
    },
});

export const selectView = (state) => state.view; 

export const selectCurrentProject = (state) => state.view.currentProject;
export const selectCurrentTicket = (state) => state.view.currentTicket;

export const { changeView, setProject, setTicket } = viewSlice.actions;

export default viewSlice.reducer;