//This component will display a list of all users assigned to a ticket or project in the detailed view of a single ticket or project.
import { useState } from 'react';
import  AddUsersForm  from './AddUsersForm';


export default function ItemAssignedUsers({assignedUsers}){

    const [addUsersForm, setAddUsersForm] = useState(false);

    const listCreatorHelper = (userArray) =>{

        if(userArray !== undefined){
        return userArray.map((user) => <li>{user.name}</li>);
        } else{
            return <li>No Users Found</li>;
        }

    };

    
    
    return(
        <div>
            <h1>Assigned users:</h1>
            <ul className="assigned-users">
                {listCreatorHelper(assignedUsers)}
            </ul>

            <button className="add-users" onClick={() => setAddUsersForm(true)}>+Add Users</button>
            <AddUsersForm display={addUsersForm} assignedUsers={assignedUsers}/>


        </div>
    );
};