//A data row component is every column corresponding to one row of data

import React from 'react';

export default function DataRow({dataItem, dataType}){

    //dataItem = an object of data, either ticket or project

    switch(dataType){
        case 'project':
            return (
                <div className="data-row">
                    <ul className="data-row">
                        <li>{dataItem.name}</li>
                        <li>{dataItem.description}</li>
                        <li>{dataItem.dateCreated}</li>
                        <li>{dataItem.listOfTickets.length}</li>
                        <li>{dataItem.projectManagers[0].name}</li>
                        <li>{dataItem.createdBy.name}</li>
                    </ul>
        
                </div>
            )
        case 'ticket':
            return (
                <div className="data-row">
                    <ul className="data-row">
                        <li>{dataItem.name}</li>
                        <li>{dataItem.description}</li>
                        <li>{dataItem.type}</li>
                        <li>{dataItem.priority}</li>
                        <li>{dataItem.dateCreated}</li>
                        <li>{dataItem.associatedProject}</li>
                        <li>{dataItem.createdBy.name}</li>
                    </ul>
        
                </div>
            )
        case 'projectTickets':
            return(
                <div className="data-row">
                    <ul className="data-row">
                        <li>{dataItem.name}</li>
                        <li>{dataItem.priority}</li>
                        <li>{dataItem.dateCreated}</li>
                        <li>{dataItem.createdBy.name}</li>
                    </ul>
                </div>
            )


    }

    //default case for testing purposes
    return (
        <div className="data-row">
            <ul>
                <li>{dataItem.name}</li>
                <li>{dataItem.description}</li>
            </ul>

        </div>
    )
}