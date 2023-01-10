//This component will assemble the data table that needs to be displayed from DataList.js
/* The hierarchy looks something like:
    <App />{
        <NavBar />{
            <DataList />{
                <DataTable />{
                    <TitleBar />
                    <DataRow />
                    <DataTableNavBar /> 
                }
            }
        }
    }
*/ 
import React from 'react';
import DataRow from './DataRow';
import DataTableNavBar from './DataTableNavBar';
import TitleBar from './TitleBar';

export default function DataTable({content, type}) {

    return(
        <div className="data-table">
            <TitleBar dataType={type}/> 
                {content.map((dataItem) =>{
                    <DataRow dataItem={dataItem} dataType={type} />
                })}
            <DataTableNavBar /> 
        </div>
    )
}