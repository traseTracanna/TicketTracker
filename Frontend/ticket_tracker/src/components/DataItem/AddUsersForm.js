//this component will appear when the 'add users' button is clicked on a ticket or project
//this component will be a form that shows the list of all users with a checkbox next to their name
//on submit of this form, the state of the ticket/project will be updated to reflect the users whose boxes are checked.

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllUsers } from '../../features/usersPage/allUsersSlice';
import  DataTable  from '../DataTable/DataTable';

export default function AddUsersForm({assignedUsers, display}){

    const allUsers = useSelector(selectAllUsers);
    const unAssigned = allUsers.filter((user) =>{
        let returner = true;
        let i = 0;
        while(returner && i < assignedUsers.length){
            for(let currentUser of assignedUsers){
                 returner = user.id === currentUser.id ? false : true;
                i++;
                if(!returner) break;
            }
        }
        return returner;
    });



    if(display){
    return(
        <div className="add-users-form">
            <DataTable content={unAssigned} type={'addUsers'}/>
        </div>
        
    )
    } 
    return undefined;


}