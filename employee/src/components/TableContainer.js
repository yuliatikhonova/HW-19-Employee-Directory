import React from "react";
import { MDBDataTable } from 'mdbreact';
import Jumbotron from "./Jumbotron";
import getInfo from "../utils/API";

class TableContainer extends React.Component {
  state = {
    employees: [],
    employeeInfo: []
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => [

  ]

  render() {
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
      <div>
        <Jumbotron />
        <section className="table">
          <MDBDataTable
            striped
            bordered
            small
            data={data}
          />
        </section>
      </div>
    );
  }
}

export default TableContainer;