/* 
Navigation bar
    * Depending on the selected button, those components will be displayed beneath the nav bar -- So the dataListSlice state is toggled by these button presses?
    * Or maybe there is a viewSlice that changes whether looking at projectList, ticketList, a ticket, or a project?
    * Also needs logout button  
    

    ***

    This component will be the main thing rendered by our App, i think. And then within this component, it will render pages underneath depending on the state of the view slice. 
    Essentially, we'll just have jsx for the nav and logout buttons themselves, and below that have logic that will display different things depending on the state of the view. 
    Not entirely sure if this is the best way to go about this, but i'm kinda here for it. 

*/

import React from 'react';

import DataList from '../dataList/DataList';
import ProjectPage from '../projectPage/ProjectPage';
import TicketPage from '../ticketPage/TicketPage';
import DataLoader from './DataLoader';

import {selectView, changeView } from './viewSlice';
import {useSelector, useDispatch} from 'react-redux';

import { changeListType } from '../dataList/dataListSlice';

export default function NavBar(){

    const dispatch = useDispatch();

    const dataListToTickets = () =>{
        dispatch(changeListType('ticket'))

    }

    const dataListToProjects = () =>{
        dispatch(changeListType('project'));
    }

    

    return(
        <div className='entire-page'>
            <div className='nav-bar'>
                <ul className='nav-bar-item-list'>
                    <li onClick={dataListToTickets}>Tickets</li>
                    <li onClick={dataListToProjects}>Projects</li>
                    <li>Overview</li>
                    <li>Users</li>
                </ul>

            </div>
            <div className='content'>
                <DataLoader />
                {/*<DataList />*/}
                {/*<ProjectPage />*/}
                <TicketPage />
            </div>
        </div>
    )
};

