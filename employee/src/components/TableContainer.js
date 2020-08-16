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
    getInfo()
      .then(response => response.data.results)
      .then(data => { this.setState({ employees: data }) })
      .then(async () => { this.setState({ employeeInfo: this.buildData(), isLoading: false }) })
      .catch((err) => { console.log(err); })
  ];

  buildData = () => {
    let employees = this.state.employees.map((employee) => {
      return (
        {
          employeePicture: <img
            src={employee.picture.medium}
            alt='employee'
          />,
          first: employee.name.first,
          last: employee.name.last,
          email: employee.email,
          phone: employee.phone,
          city: employee.location.city
        }
      )
    });
    return employees;
  }

  render() {
    const data = {
      columns: [
        {
          label: 'Employee Picture',
          field: 'employeePicture',
          width: 200
        },
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
        }
      ],
      rows: this.state.employeeInfo
    };

    return (
      <div>
        <Jumbotron />
        <section className="container">
          <MDBDataTable
            entries={20}
            hover
            data={data}
          />
        </section>
      </div>
    );
  }
}

export default TableContainer;