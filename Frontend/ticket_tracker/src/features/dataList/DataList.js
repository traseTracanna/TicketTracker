/*
    *Projects/Tickets List
            *Both of these pages will look pretty much the same, the only difference is the data displayed
                *** So the way the data is generated to be displayed would be something like: ***
                    1) A call is made to the db to grab all project and ticket data on the initial load, and this data is stored in the tickets and projects slices of state 
                    2) When a list page is selected, either project or ticket, a selector grabs only the data associated with the user id that is signed in to be displayed
                    3) The data table title bar is toggled to display either projects or tickets view
                        The title bar doesn't need to be dynamically generated and thus can be hard coded cause it will always be 1 of 2 displays
                        This means that each column title will just be a <li></li> and the ones that can be used to sort the table will have that clickable functionality written in 
                            Since I need a title bar for the way tickets are listed on a project page, and users on the user page maybe it wouldn't be a bad idea for it 
                            to be it's own generative component. This way it will stop me from having to write repetitive code to create list elements and make the columns sortable? 
                    4) Row components are generated based on the data that is grabbed and added to the table
                    5) If a dataList exceeds a certain number of rows, an N number of pages will be generated and navigable by the listPagesNav on the bottom of the table

                The first component would be the data table, containing the title bar, the rows of data, and a navigation section at the bottom to go to different pages
                The second component would be the 'title bar' which has the titles of every column
                    the title bar is then made up of column names, which will be hard coded to be clickable or not
                        *** The thing to figure out here is how will clicking on a title re-sort the way the data is displayed? ***
                                Maybe via selectors that would re-sort the data on the page once a title is clicked?
                                Maybe via actions within the reducer that re-order how the selected data is stored and will re-render it afterwards 
                The next component would be a row of data, which would maybe be a horizontally displayed list of items generated by info recieved from the db
                    Some list items will be clickable like project name directing you to the project's page, or ticket name directing you to the ticket's page 
                The last component would be the list pages navigation section that allows users with more than N results that fit on a page to go to the next page of results
                    This could be a linked list where each node is a page of rows to be displayed

    *****

    This component will be the page that displays the rows of projects/tickets for a single user, or for all users if in an admin view. 
    The individual components that will help to build this page are found in ../components/DataTable
    with the DataTable.js component being the main component that will assemble what is seen on this page, while this page will I think just pass the appropriate props to
    the DataTable.js component so it can build the correct page it needs to build for us to display.
    The logic in here will basically call the selectors to get the relevant data, and view to get the relevant page display type, and the currentUser piece of hte state as well
    and pass all that shit down to the DataTable.js component so it can call it's components to generate what it needs to generate? This may be an errant use of prop drilling
    but i suppose my aim should be to make it work, and then try to determine if i can make it better.

    Essentially, the structure I think should look something like: 

    <App />{
        <NavBar />{
            <DataList />{
                <DataTable />{
                    <TitleBar />
                    <DataRow />
                    <DataTableNavBar /> 
                }
            }
        }
    }


*/

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DataTable from '../../components/DataTable/DataTable';
import ProjectPage from '../projectPage/ProjectPage';
import UserPage from '../usersPage/UserPage';

import { selectAllTickets, selectFilteredTickets, loadTicketData, selectTicketById } from '../ticketPage/allTicketsSlice';
import { selectAllProjects, selectFilteredProjects, loadProjectData, selectProjectById } from '../projectPage/allProjectsSlice'; 
import { selectDataListState } from './dataListSlice';
import { selectCurrentUser } from '../usersPage/thisUserSlice';

import { projects, tickets, arr1 } from '../../frontend_dev_data'; 

//Saving all select data to local variables to be sorted
//Not sure if this is the best way to go about this



//Projects are sortable by: no of tickets, date created, created by
//Tickets are sortable by: type, priority, date created, project, created by
//I'm not sure if this is the best place to sort the data. I wonder if it would be better to sort in the corresponding slice as a selector

export default function DataList(){

    const allTickets = useSelector(selectAllTickets);
    const allProjects = useSelector(selectAllProjects);
    const currentTickets = useSelector(selectFilteredTickets);
    const currentProjects = useSelector(selectFilteredProjects);

    const isAdmin = useSelector(selectCurrentUser).isAdmin;

    const listType = useSelector(selectDataListState).listType;
    const listSort = useSelector(selectDataListState).listSort;

    const dispatch = useDispatch();


    //Examples of selecting a single project/ticket by id for hte sake of rendering a single project/ticket page
    //I guess this code doesn't really belong in here, but at least it exists for me to find eventually
    //console.log(useSelector(selectTicketById('ft0001')));
    //console.log(useSelector(selectProjectById('fp0001')));





    let sortedList = [];

    if(listType === 'project'){
        sortedList = currentProjects;
    } else{
        sortedList = currentTickets;
    };


    return(
        <div className="data-list-page">
            <DataTable content={sortedList} type={listType} />
        </div>
    )
}