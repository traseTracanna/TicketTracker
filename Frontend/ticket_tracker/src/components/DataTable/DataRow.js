//A data row component is every column corresponding to one row of data

import React from 'react';
import { setProject, setTicket, changeView, selectCurrentTicket, selectCurrentProject, selectView } from '../../features/navBar/viewSlice';
import { updateAdmin } from '../../features/usersPage/allUsersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { assignProjectUser } from '../../features/projectPage/allProjectsSlice';
import { assignTicketUser } from '../../features/ticketPage/allTicketsSlice';

export default function DataRow({dataItem, dataType}){

    //dataItem = an object of data, either ticket or project

    //This feels weird to have in here, but i'm sending it
    const dispatch = useDispatch();
    const currentTicket = useSelector(selectCurrentTicket);
    const currentProject = useSelector(selectCurrentProject);
    const currentView = useSelector(selectView);
    const singlePageLoader = (dataTypeSelected) =>{
        if(dataTypeSelected === 'ticket'){
            dispatch(setTicket(dataItem));
            dispatch(changeView('ticketPage'));
            
        } else{
            dispatch(setProject(dataItem));
            dispatch(changeView('projectPage'));
            
            //because my dev_data causes recursion with ticket.associatedProject, clicking on that for now won't do anything
        }

    }

    const updateIsAdmin = (userId) =>{
        dispatch(updateAdmin(userId));
        
    }

    const updateUserList = () =>{
        console.log('test');
        console.log(currentView);

        if(currentView.view === 'ticketPage'){
            dispatch(assignTicketUser({data: dataItem, id: currentTicket.id}));
        } else if (currentView.view === 'projectPage'){
            dispatch(assignProjectUser({data: dataItem, id: currentProject.id}))
        }

    }

    switch(dataType){
        case 'project':
            return (
                    <tr className="data-row">
                        <td onClick={() => singlePageLoader('project')}>{dataItem.name}</td>
                        <td>{dataItem.description}</td>
                        <td>{dataItem.dateCreated}</td>
                        <td>{dataItem.listOfTickets.length}</td>
                        <td>{dataItem.projectManagers[0].name}</td>
                        <td>{dataItem.createdBy.name}</td>
                    </tr> 
            )
        case 'ticket':
            return (
                    <tr className="data-row">
                        <td onClick={() => singlePageLoader('ticket')}>{dataItem.name}</td>
                        <td>{dataItem.description}</td>
                        <td>{dataItem.type}</td>
                        <td>{dataItem.priority}</td>
                        <td>{dataItem.dateCreated}</td>
                        <td>{dataItem.associatedProject}</td>
                        <td>{dataItem.createdBy.name}</td>
                    </tr>
            )
        case 'projectTickets':
            return(
                    <tr className="data-row">
                        <td onClick={() => singlePageLoader('ticket')}>{dataItem.name}</td>
                        <td>{dataItem.priority}</td>
                        <td>{dataItem.dateCreated}</td>
                        <td>{dataItem.createdBy.name}</td>
                    </tr>
            )
        case 'users':
            return(
                <tr className="data-row">
                    <td id="name">{dataItem.name}</td>
                    <td id="id">{dataItem.id}</td>
                    <td id="isAdmin">
                        <input type="checkbox" onChange={() => updateIsAdmin(dataItem.id)} checked={dataItem.isAdmin}>

                        </input>
                    </td>
                </tr>
            )
        case 'addUsers':
            return(
                <tr className="data-row">
                    <td id="name">{dataItem.name}</td>
                    <td id="assigned">
                        <button className="add-user" onClick={updateUserList}>+Add</button>
                    </td>
                </tr>
            )


    }

    //default case for testing purposes
    return (
        <div className="default-test-row">
            <tr>
                <td>{dataItem.name}</td>
                <td>{dataItem.description}</td>
                {dataItem.isAdmin ? "Yes" : "No"}
            </tr>

        </div>
    )
}