import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = () => {
    const data = {
        columns: [
            {
                label: 'First Name',
                field: 'first',
                width: 150
            },
            {
                label: 'Last Name',
                field: 'last',
                width: 150
            },
            {
                label: 'Email',
                field: 'email',
                width: 200
            },
            {
                label: 'Phone Number',
                field: 'phone',
                width: 150
            },
            {
                label: 'City',
                field: 'city',
                width: 100
            },
            {
                label: 'Age',
                field: 'age',
                width: 100
            }
        ],
        rows: this.state.employeeInfo
    };

    return (
        <MDBDataTable
            striped
            bordered
            small
            data={data}
        />
    );
}


export default DatatablePage;