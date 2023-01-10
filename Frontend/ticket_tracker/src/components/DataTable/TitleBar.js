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
        default:
            columnHeadings = ['error'];
    };

    return (
        <div className="title-bar">
            <div className="column-title-list">
                <ul className="title-bar">
                    {columnHeadings.map((heading) => <li>{heading}</li>)}
                </ul>
            </div>
        </div>
    )
};