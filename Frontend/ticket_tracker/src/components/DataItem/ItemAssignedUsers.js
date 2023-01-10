//This component will display a list of all users assigned to a ticket or project in the detailed view of a single ticket or project.



export default function ItemAssignedUsers({assignedUsers}){

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
        </div>
    );
};