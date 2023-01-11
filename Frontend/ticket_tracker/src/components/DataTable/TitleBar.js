//The title bar for a list of data -- defines the name of each column

import React from 'react';

export default function TitleBar({dataType}){

    let columnHeadings = [];

    switch(dataType){
        case 'project':
            columnHeadings = ['Project Name: ', 'Description: ', 'Date Created: ', 'No. of Tickets: ', 'Project Manager(s): ', 'Created By: '];
            break;
        case 'ticket':
            columnHeadings = ['Ticket Name: ', 'Description: ', 'Type: ', 'Priority: ', 'Date Created: ', 'Project: ', 'Created By: ']
            break;
        case 'projectTickets':
            columnHeadings = ['Ticket Name: ', 'Priority: ', 'Date Created: ', 'Assigned by: ']
            break;
        default:
            columnHeadings = ['error'];
    };

    return (
            <tr className="title-bar">
                {columnHeadings.map((heading, i) => <th key={i}>{heading}</th>)}
            </tr>
    )
};