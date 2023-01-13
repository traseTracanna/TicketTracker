//A data row component is every column corresponding to one row of data

import React from 'react';
import { setProject, setTicket, changeView } from '../../features/navBar/viewSlice';
import { updateAdmin } from '../../features/usersPage/allUsersSlice';
import { useDispatch } from 'react-redux';

export default function DataRow({dataItem, dataType}){

    //dataItem = an object of data, either ticket or project

    //This feels weird to have in here, but i'm sending it
    const dispatch = useDispatch();
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