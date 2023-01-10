//Item description component for a detail view of a single project or ticket


export default function ItemDescription({ dataObject, dataType}){

    if(dataType === 'project'){
        return(
            <ul className='project-description'>
                <li>Project Name: {dataObject.name}</li>
                <li>Project Description: {dataObject.description}</li>
            </ul>
        )
    };

    return(
        <div>
            <h1>Ticket Details:</h1>
            <ul className='ticket-description'>
                <li>Ticket Name: {dataObject.name}</li>
                <li>Ticket Description: {dataObject.description}</li>
                <li>Ticket Type: {dataObject.type}</li>
                <li>Priority: {dataObject.priority}</li>
                <li>Date Created: {dataObject.dateCreated}</li>
                <li>Created By: {dataObject.createdBy.name}</li>
                <li>Associated Project: {dataObject.associatedProject}</li>
            </ul>
            </div>
        )
    
}