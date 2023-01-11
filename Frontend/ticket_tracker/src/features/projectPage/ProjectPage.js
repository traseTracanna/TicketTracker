/* Project Page
            * The first component contains the project name and description
            * Next, a component that will contain a list of all users assigned to the project and a button to add new users 
            * Next, The list of tickets used by this project
            * Lastly, a component that will display comments about this project, and have a form where users can type and submit new comments 

            *** The way this page is generated to be rendered could be like ***
                1) A selector is used from allProjectsSlice to grab all the info from the db about this specific project, which would be stored in a variable
                2) That variable would be accessed to fill in the Project name, project description, list of users assigned to the project, and comments pannel  
                3) The allTicketsSlice selector could take the id of the project and return all tickets info and store it in a variable here,
                    then display only those relevant to the current user/all tickets if admin
                        So i think this could be done by using the same Rows component as the dataList page 

            ***

    The components used to generate this page are found in ../components/DataItem
    Assigned users to the project, comments relating to the project, and description info about the project are all generated by their respective components.
    The reason i think it should be organized this way is because those components can be recycled when generating ticket item pages as well. 

    The components to generate the actual list of tickets a user would see on this project's page are found in ../components/DataTable
    A data table component will consist of a TitleBar component, several DataRow components, and a DataTableNavBar component. 
    The reason i think it should be organized this way is because those components can be recycled when generating the dataList view page for projects and tickets.
*/
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  ItemAssignedUsers from '../../components/DataItem/ItemAssignedUsers';
import  ItemComments from '../../components/DataItem/ItemComments';
import  ItemDescription from '../../components/DataItem/ItemDescription';
import  DataTable  from '../../components/DataTable/DataTable';

//Use this to call loadData in the slice on initial render
import { selectProjectById } from './allProjectsSlice';
import { selectCurrentProject } from '../navBar/viewSlice';

export default function ProjectPage(){


const dispatch = useDispatch();


//let currentProject = useSelector(selectProjectById('fp0001'));
let currentProject = useSelector(selectCurrentProject);
console.log(currentProject);

//Without this, the page breaks on initial load, as it is trying to read an undefined value from currentProject while the data loads. QQ make it make sense
//Maybe i need to set my initial states to things other than [] in my reducers to make like a "loading..." thing for when i'm actually waiting on data from a server call
//if(currentProject === undefined){
 // currentProject = { assignedUsers: undefined, listOfTickets: [{name: 'test'}]};
//}

//Without this, the page breaks on initial load, as it is trying to read an undefined value from currentProject while the data loads. QQ make it make sense
//Maybe i need to set my initial states to things other than [] in my reducers to make like a "loading..." thing for when i'm actually waiting on data from a server call
if(currentProject !== undefined){
return(
    <div className="project-page">
        <div className="project-header">
            <ItemDescription dataObject={currentProject} dataType={'project'}/>

        </div>
        <div className="assigned-users-list">
            <ItemAssignedUsers assignedUsers={currentProject.assignedUsers}/>
        </div>
        {<div className="project-tickets-list">
            <DataTable content={currentProject.listOfTickets} type={'projectTickets'}/>
        </div>}
        <div className="comment-box">
            <ItemComments commentsArray={currentProject.comments}/>
        </div>
        
    </div>

);
}
return undefined;

};