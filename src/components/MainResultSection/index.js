import React, { useState, useEffect } from "react";
import "../../App.css";

import API from "../../utils/API";

import SearchControls from "../SearchControls";
import ResultTable from "../ResultTable";
import SectionBreak from "../SectionBreak";

import EmployeeContext from "../../utils/EmployeeContext";

// ===============================================================================

function MainResultSection() {
  const [employeeState, setEmployeeState] = useState({
    employees: [],
    order: "desc",
    filteredEmployees: [],
    buttonLabels: [
      { name: "first name", order: "desc" },
      { name: "last name", order: "desc" },
      { name: "username", order: "desc" },
      { name: "dob", order: "desc" },
      { name: "location", order: "desc" },
    ],
  });

  const [inputObject, setInputObject] = useState({
    name: "",
    location: "",
    username: ""
  });

  const handleSort = (label) => {
    let currentOrder = employeeState.buttonLabels
      .filter((element) => element.name === label)
      .map((element) => element.order)
      .toString();

    if (currentOrder === "desc") {
      currentOrder = "asc";
    } else {
      currentOrder = "desc";
    }

    const compareFunction = (a, b) => {
      if (currentOrder === "asc") {
        if (label === "first name") {
          return a.name.first.localeCompare(b.name.first);
        } else if (label === "last name") {
          return a.name.last.localeCompare(b.name.last);
        } else if (label === "dob") {
          return a.dob.date.localeCompare(b.dob.date);
        } else if (label === "location") {
          return a.location.city.localeCompare(b.location.city);
        } else if (label === "username") {
          return a.login.username.localeCompare(b.login.username);
        }
      } else {
        if (label === "first name") {
          return b.name.first.localeCompare(a.name.first);
        } else if (label === "last name") {
          return b.name.last.localeCompare(a.name.last);
        } else if (label === "dob") {
          return b.dob.date.localeCompare(a.dob.date);
        } else if (label === "location") {
          return b.location.city.localeCompare(a.location.city);
        } else if (label === "username") {
          return b.login.username.localeCompare(a.login.username);
        }
      }
    };

    const sortedEmployees = employeeState.filteredEmployees.sort(
      compareFunction
    );

    const updatedLabels = employeeState.buttonLabels.map((element) => {
      element.order = element.name === label ? currentOrder : element.order;
      return element;
    });

    setEmployeeState({
      ...employeeState,
      filteredEmployees: sortedEmployees,
      labels: updatedLabels,
    });
  };

  const handleNameSearchChange = (event) => {
    setInputObject({ ...inputObject, name: event.target.value });
    const filter = event.target.value;
    const filteredList = employeeState.employees.filter((item) => {
      let values =
        item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
      if (values.indexOf(filter.toLowerCase()) !== -1) {
        return item;
      }
    });

    setEmployeeState({ ...employeeState, filteredEmployees: filteredList });
  };

  const handleLocationSearchChange = (event) => {
    setInputObject({ ...inputObject, location: event.target.value });
    const filter = event.target.value;
    const filteredList = employeeState.employees.filter((item) => {
      let values =
        item.location.city.toLowerCase() +
        ", " +
        item.location.state.toLowerCase();
      if (values.indexOf(filter.toLowerCase()) !== -1) {
        return item;
      }
    });

    setEmployeeState({ ...employeeState, filteredEmployees: filteredList });
  };

  const handleUsernameSearchChange = (event) => {
    setInputObject({ ...inputObject, username: event.target.value });
    const filter = event.target.value;
    const filteredList = employeeState.employees.filter((item) => {
      let values = item.login.username.toLowerCase();
      if (values.indexOf(filter.toLowerCase()) !== -1) {
        return item;
      }
    });

    setEmployeeState({ ...employeeState, filteredEmployees: filteredList });
  };

  useEffect(() => {
    API.getEmployees().then((results) => {
      setEmployeeState({
        ...employeeState,
        employees: results.data.results,
        filteredEmployees: results.data.results,
      });
    });
  }, []);

  // ==========================================
  return (
    <EmployeeContext.Provider
      value={{
        employeeState,
        inputObject,
        handleNameSearchChange,
        handleLocationSearchChange,
        handleUsernameSearchChange,
        handleSort,
      }}
    >
      <div className="main-container">
        <SearchControls value={{inputObject}}/>
      </div>
      <SectionBreak />
      <div className="main-container">
        {employeeState.employees.length > 0 ? (
          <ResultTable />
        ) : (
          <div>
            <p className="main-no-results">...loading employee data</p>
          </div>
        )}
      </div>
    </EmployeeContext.Provider>
  );
}

export default MainResultSection;
