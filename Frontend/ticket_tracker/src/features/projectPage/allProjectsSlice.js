/* 
* allProjectsSlice
    contains data for all projects. This would be accessed by a selector to display based on the active user.       
* allTicketsSlice
    contains data for all tickets. This would be accessed by a selector to display based on the active user.

*** So allProjectsSlice and allTicketsSlice only reducers would be to load the initial data. 
    They would then have selectors that would:
        return filtered lists of that data based on the user who is logged in or
        return filtered data based on an individual project/ticket to load into a single project/ticket page 
    ...

     I was wrong. 
    It seems these may also need reducers for
     updating information about tickets and projects as new comments and tickets are created, 
     and names/descriptions are updated

     So basically, on initial load a list of data is taken from the db and assigned to the state of that slice to be accessed by a selector later.
     Meaning, the state of allTicketsSlice would look something like:
        allTicketsReducer.state = [ { * ticket info from db * }, { * ticket info from db *} ]
        So you would need a reducer that accepts a payload with the ticket/project to update, search through the state array for the matching ticket/project id, and then update its 
        changed fields with the new info.
    
        for instance, if the action is to add a new comment the reducer's action creator would be called 'addComment' and it would: 
            Parse the array list of projects/tickets in the state to find the matching one
            update the matching project/ticket's array of comments by pushing the new one on 
    ***





*/

import { createSlice } from '@reduxjs/toolkit'; 
import { selectCurrentUser } from '../usersPage/thisUserSlice';

export const allProjectsSlice = createSlice({
    name: 'allProjects', 
    initialState: [],
    reducers: {
        loadProjectData: (state, action) =>{
            (action.payload).map((project) => state.push(project));
        },
        addProject: (state, action) =>{
            state.push(action.payload); 
        },
        addProjectComment: (state, action) =>{
            const projectIndex = state.findIndex((stateElement) => stateElement.id === action.payload.id);
            if(projectIndex !== -1){
                state[projectIndex].comments.push(action.payload.data);
            };

        },
        addTicket: (state,action) =>{
            const projectIndex = state.findIndex((stateElement) => stateElement.id === action.payload.id);
            if(projectIndex !== -1){
                state[projectIndex].listOfTickets.push(action.payload.data);
            };

        },
        removeTicket: (state,action) =>{
            const projectIndex = state.findIndex((stateElement) => stateElement.id === action.payload.id);
            if(projectIndex !== -1){
                state[projectIndex].listOfTickets.filter(ticket => ticket.id !== action.payload.data.id);
            };

        },
        assignProjectUser: (state,action) =>{
            const projectIndex = state.findIndex((stateElement) => stateElement.id === action.payload.id);
            if(projectIndex !== -1){
                state[projectIndex].assignedUsers.push(action.payload.data);
            };

        },
        removeUser: (state,action)=>{
            const projectIndex = state.findIndex((stateElement) => stateElement.id === action.payload.id);
            if(projectIndex !== -1){
                state[projectIndex].assignedUsers.filter(user => user.id !== action.payload.data.id);
            };

        },
        updateDesc: (state,action) =>{
            const projectIndex = state.findIndex((stateElement) => stateElement.id === action.payload.id);
            if(projectIndex !== -1){
                state[projectIndex].description = action.payload.data;
            };

        },
        addProjectManager: (state,action)=>{
            const projectIndex = state.findIndex((stateElement) => stateElement.id === action.payload.id);
            if(projectIndex !== -1){
                state[projectIndex].projectManagers.push(action.payload.data);
            };

        },

    },
});


//selectors

export const selectAllProjects = (state) => state.allProjects;

//This will need to use the state information of the currently logged-in user to filter
export const selectFilteredProjects = (state) =>{
    const allProjects = selectAllProjects(state);
    const thisUser = selectCurrentUser(state);
    let thisUserId = 0;
        if(thisUser[0] !== undefined){
         thisUserId = thisUser[0].id;

        }
    //console.log(allProjects.filter((project) => project.assignedUsers.findIndex((assignedUser) => assignedUser.id === thisUserId)));

    //so this needs to parse allProjects, an array of project objects, whose .assignedUsers property array contains thisUserId

    return allProjects.filter((project) => project.assignedUsers.findIndex((assignedUser) => assignedUser.id === thisUserId) !== -1);

};


export const selectProjectById = id => state =>{
    const allProjects = selectAllProjects(state);

    return (allProjects.filter((project) => project.id === id))[0]
}

//TODO
//May also need a selector that can grab projects based on a given user's id instead of the current one logged in
//This selector would be used to present a single user's info to an admin viewer

//Exports
export const {
    loadProjectData,
    addProject,
    addProjectComment,
    addTicket,
    removeTicket,
    assignProjectUser,
    removeUser,
    updateDesc,
    addProjectManager

} = allProjectsSlice.actions;

export default allProjectsSlice.reducer; 




