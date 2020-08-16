import React from "react";
import Jumbotron from "./Jumbotron";
import Data from "./Data";
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
    return (
      <div>
        <Jumbotron />
        <section className="table">
          <Data/>
        </section>
      </div>

    );
  }
}

export default TableContainer;