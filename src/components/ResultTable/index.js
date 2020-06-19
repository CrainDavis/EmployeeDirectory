import React from "react";
import "./style.css";

import Row from "../Row";
import Col from "../Col";

function ResultTable(props) {
    return (
        <div>
            <ul className="employee-list">
                {props.data.map((employee) => (
                    <li key={employee.id} className="employee-card">
                    <Row>
                        <Col size="2">
                            <img className="employee-img" src={employee.img} alt=""></img>
                        </Col>
                        <Col size="10">
                            <Row>
                                <Col size="5"><p className="employee-fullName"><span className="name-tag">{employee.fullName}</span></p></Col>
                                <Col size="3"><p className="employee-username">{employee.username}</p></Col>
                                <Col size="4"><p className="employee-dob">{employee.dob}</p></Col>
                            </Row>
                            <hr></hr>
                            <Row>
                                <Col size="5"><p className="employee-phoneNumber"><span className="data-label">HOME</span> {employee.homePhone} | <span className="data-label">CELL</span> {employee.cellPhone}</p></Col>
                                <Col size="3"><p className="employee-email">{employee.email}</p></Col>
                                <Col size="4"><p className="employee-address">{employee.location}</p></Col>
                            </Row>
                        </Col>
                    </Row>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default ResultTable;