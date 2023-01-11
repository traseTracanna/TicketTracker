/* Ticket Page
            * This will be very similar to the project page in the way it will have assigned users, details, and comments which can be pulled from the allTicketsSlice 
            * This page can recycle components that deal with generating a list of assigned users and comments 
            * The only unique things it needs are 
                1) The ability to update priority
                2) The ability to delete/resolve a ticket for archival
                3) A layout for it's description
    ****

    The components used to generate this page are found in ../components/DataItem
    The ItemAssignedUsers, ItemComments, and ItemDescription components can all be used to generate those relevant items, similar to how a project's page is generated. 
    The only issue this may cause is when trying to generate the ItemDescription, different information is required, but i'm sure there's some way to write logic for that
    in the actual component for if it's generating a ticket page or a project page.

    This page, as noted above, will also need added functionality of resolving/deleting/archiving tickets as well as updating their priority, but i don't think i will need
    separate components for those concerns, and instead can just handle all of that logic and rendering in this file. We will see when we get there. 


*/ 
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import  ItemAssignedUsers from '../../components/DataItem/ItemAssignedUsers';
import  ItemComments from '../../components/DataItem/ItemComments';
import  ItemDescription from '../../components/DataItem/ItemDescription';

import { selectTicketById } from './allTicketsSlice';
import { selectCurrentTicket } from '../navBar/viewSlice';

export default function TicketPage(){


const dispatch = useDispatch();

//let currentTicket = useSelector(selectTicketById('ft0001'));
let currentTicket = useSelector(selectCurrentTicket);
console.log(currentTicket);


if(currentTicket !== undefined){
return(
    <div className="ticket-page">
        <div className="ticket-header">
            <ItemDescription dataObject={currentTicket} dataType={'ticket'}/>
        </div>
        <div className="assigned-users-list">
            <ItemAssignedUsers assignedUsers={currentTicket.assignedUsers} />
        </div>
        <div className="comment-box">
            <ItemComments commentsArray={currentTicket.comments}/>
        </div>
        
    </div>



)
}
return undefined;

}