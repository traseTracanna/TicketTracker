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
        <table className="data-table">
            <thead>
                <TitleBar dataType={type}/> 
            </thead>
            <tbody>
                {content.map((dataItem) =>
                    <DataRow dataItem={dataItem} dataType={type} />
                )}
            </tbody>
            <tfoot>
                <DataTableNavBar /> 
            </tfoot>
        </table>
    )
}