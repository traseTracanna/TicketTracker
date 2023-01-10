/*
The purpose of this file is to load all of the data from the dev_data.js file.
The reason i'm putting it here is to ensure all data is loaded and set properly in order to test individual pages.
I'm not sure if it would be wise to keep this page for this same purpose once i implement a db, but for the sake of developing the front end it should be fine.
*/

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { projects, tickets, users } from '../../frontend_dev_data'; 

import { loadTicketData } from '../ticketPage/allTicketsSlice';
import { loadProjectData } from '../projectPage/allProjectsSlice'; 
import { loadUsersData } from '../usersPage/allUsersSlice';

import { setCurrentUser } from '../usersPage/thisUserSlice';




export default function DataLoader(){

const dispatch = useDispatch();

const onInitialLoad = () => {
    dispatch(loadProjectData(projects));
    dispatch(loadTicketData(tickets));
    dispatch(loadUsersData(users));
    dispatch(setCurrentUser(users[0]));
};
useEffect(onInitialLoad, []);

return (
    <p>data loaded</p>
);

}