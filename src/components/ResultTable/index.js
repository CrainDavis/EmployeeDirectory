import React, { useContext } from "react";
import "./style.css";

import EmployeeContext from "../../utils/EmployeeContext";

import Row from "../Row";
import Col from "../Col";

function ResultTable() {
    const context = useContext(EmployeeContext);

    function formatDate(date) {
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate = [month, day, year].join("-");
        return formattedDate;
    }

    return (
        <div>
            <ul className="employee-list">
                {context.employeeState.filteredEmployees[0] !== undefined &&
                context.employeeState.filteredEmployees[0].name !== undefined ? (
                    context.employeeState.filteredEmployees.map(({ login, name, picture, phone, cell, email, dob, location }) => {
                        return (
                            <li key={login.uuid} className="employee-card">
                                <Row>
                                    <Col size="2">
                                        <img className="employee-img" src={picture.large} alt={name.first + "-" + name.last + "-img"}></img>
                                    </Col>
                                    <Col size="10">
                                        <Row>
                                            <Col size="5"><p className="employee-fullName"><span className="name-tag">{name.first + " " + name.last}</span></p></Col>
                                            <Col size="3"><p className="employee-username"><i className="data-label fas fa-user"></i> {login.username}</p></Col>
                                            <Col size="4"><p className="employee-dob"><i className="data-label fas fa-birthday-cake"></i> {formatDate(dob.date)} ({dob.age}yo)</p></Col>
                                        </Row>
                                        <hr></hr>
                                        <Row>
                                            <Col size="5"><p className="employee-phoneNumber"><span><i className="data-label fas fa-phone"></i></span> {phone} <span><i className="data-label fas fa-mobile-alt"></i></span> {cell}</p></Col>
                                            <Col size="3"><p className="employee-email"><i className="data-label fas fa-envelope"></i> {email}</p></Col>
                                            <Col size="4"><p className="employee-location"><i className="data-label fas fa-globe"></i> {location.city}, {location.state}</p></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </li>
                        );
                    }
                    )
                ) : (
                    <></>
                )
            }
            </ul>
        </div>
    );
};

export default ResultTable;