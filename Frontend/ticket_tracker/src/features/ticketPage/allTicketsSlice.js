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



export const allTicketsSlice = createSlice({
    name: "allTickets",
    initialState: [],
    reducers: {
        loadTicketData: (state, action) =>{
            action.payload.map((ticket) => {state.push(ticket)});

        },
        addTicket: (state, action) =>{
            state.push(action.payload);

        },
        removeTicket: (state, action) =>{
            state.filter((ticket) => ticket.id !== action.payload.id);

        },
        assignUser: (state,action) =>{
            const ticketIndex = state.findIndex((stateElement) => stateElement.id === action.payload.id);
            if(ticketIndex !== -1){
                state[ticketIndex].assignedUsers.push(action.payload.data);
            };

        },
        removeUser: (state, action) =>{
            const ticketIndex = state.findIndex((stateElement) => stateElement.id === action.payload.id);
            if(ticketIndex !== -1){
                state[ticketIndex].assignedUsers.filter(user => user.id !== action.payload.data.id);
            };

        },
        updateDesc: (state, action) =>{
            const ticketIndex = state.findIndex((stateElement) => stateElement.id === action.payload.id);
            if(ticketIndex !== -1){
                state[ticketIndex].description = action.payload.data;
            };

        },
        updatePriority: (state,action) =>{
            const ticketIndex = state.findIndex((stateElement) => stateElement.id === action.payload.id);
            if(ticketIndex !== -1){
                state[ticketIndex].priority = action.payload.data;
            };

        },
        addTicketComment: (state,action) =>{
            const ticketIndex = state.findIndex((stateElement) => stateElement.id === action.payload.id);
            if(ticketIndex !== -1){
                //const newComments = state[ticketIndex].comments
                //newComments.push(action.payload.data);
                //state[ticketIndex].comments = newComments;
                state[ticketIndex].comments.push(action.payload.data);

            };

        },

    },
});

//Selectors



export const selectAllTickets = (state) => state.allTickets;


export const selectFilteredTickets = (state) =>{
    const allTickets = selectAllTickets(state);
    const thisUser = selectCurrentUser(state);
    let thisUserId = 0;
    if(thisUser[0] !== undefined){
        thisUserId = thisUser[0].id;

    }

    //so this needs to parse allTickets, an array of project objects, whose .assignedUsers property array contains thisUserId

    return allTickets.filter((ticket) => ticket.assignedUsers.findIndex((assignedUser) => assignedUser.id === thisUserId) !== -1
    );

};

export const selectTicketById = id => state =>{
    const allTickets = selectAllTickets(state);

    return (allTickets.filter((ticket) => ticket.id === id))[0];
}

//Exports: 

export const {
    loadTicketData,
    addTicketComment,
    addTicket,
    removeTicket,
    assignUser,
    removeUser,
    updateDesc,
    updatePriority,

} = allTicketsSlice.actions;

export default allTicketsSlice.reducer; 