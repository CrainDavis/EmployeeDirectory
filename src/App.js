import React, { Component } from "react";
import "./App.css";

import API from "./utils/API";

import Header from "./components/Header";
import SectionSpacing from "./components/SectionSpacing";
import Footer from "./components/Footer";
import MainResultSection from "./components/MainResultSection";

// ===============================================================================

class App extends Component {
  state = {
    employees: [],
  };

  // get employee data upon opening browser
  componentDidMount() {
    API.getEmployees().then(({ data: { results } }) => {
      let employees = results.map((employee) => {
        return {
          id: employee.id.value || "N/A",
          img: employee.picture.large,
          gender: employee.gender,
          firstName: employee.name.first,
          lastName: employee.name.last,
          fullName: `${employee.name.first} ${employee.name.last}`,
          username: employee.login.username,
          dob: employee.dob.date.slice(0, 10),
          age: employee.dob.age,
          email: employee.email,
          homePhone: employee.phone,
          cellPhone: employee.cell,
          location: `${employee.location.city}, ${employee.location.state}`,
        };
      });
      this.setState({ employees });
    });
  }
  // ================================================

  render() {
    return (
      <div>
        <Header />
        <MainResultSection data={this.state.employees}/>
        <SectionSpacing />
        <Footer />
      </div>
    );
  }
}

export default App;
