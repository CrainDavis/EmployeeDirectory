import React, { useContext } from "react";
import "../../App.css";

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
    };

    function formatPhoneNumber(phoneNumber) {
        const phoneArray = phoneNumber.split("-");
        const areaCode = phoneArray[0];
        const threeDigits = phoneArray[1];
        const fourDigits = phoneArray[2];
        const formattedPhone = areaCode + " " + threeDigits + "-" + fourDigits;
        return formattedPhone;
    };

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
                                            <Col size="4"><p className="employee-dob"><i className="data-label fas fa-birthday-cake"></i> {formatDate(dob.date)} (age {dob.age})</p></Col>
                                        </Row>
                                        <hr></hr>
                                        <Row>
                                            <Col size="5"><p className="employee-phoneNumber"><i className="data-label fas fa-phone"></i>{" "}{formatPhoneNumber(phone)}{" "}<i className="data-label fas fa-mobile-alt"></i>{" "}{formatPhoneNumber(cell)}</p></Col>
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
                    <div></div>
                )
            }
            </ul>
        </div>
    );
};

export default ResultTable;