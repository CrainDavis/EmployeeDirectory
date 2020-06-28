import React, { useContext } from "react";
import "../../App.css";

import Row from "../Row";
import Col from "../Col";

import EmployeeContext from "../../utils/EmployeeContext";

const SearchControls = () => {
    const context = useContext(EmployeeContext);

    return (
        <div>
            <Row className="no-gutters">
                <Col size="12">
                    <div className="control-panel d-flex justify-content-center">
                        <div className="control-panel-subsection">
                            <h4 className="control-labels">sort employees by:</h4>
                            <div className="btn-group sort-btns" role="group" aria-label="Basic example">
                                {context.employeeState.buttonLabels.map(({name}) => {
                                    return (
                                    <button type="button" key={name} className="btn btn-outline-light btn-secondary btn-lg" onClick={() => {context.handleSort(name)}}>{name}</button>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="control-panel-subsection">
                            <h4 className="control-labels">filter employees by:</h4>
                            <div className="input-group input-group-lg">
                                <input name="name" disabled={context.inputObject.location !== "" || context.inputObject.username !== ""} id="nameInput" value={context.inputObject.name} type="text" className="form-control" placeholder="full name" onChange={event => context.handleInputChange(event)}></input>
                                <p className="filter-or">or</p>
                                <input name="location" disabled={context.inputObject.name !== "" || context.inputObject.username !== ""} id="locationInput" value={context.inputObject.location} type="text" className="form-control" placeholder="location" onChange={event => context.handleInputChange(event)}></input>
                                <p className="filter-or">or</p>
                                <input name="username" disabled={context.inputObject.name !== "" || context.inputObject.location !== ""} id="usernameInput" value={context.inputObject.username} type="text" className="form-control" placeholder="username" onChange={event => context.handleInputChange(event)}></input>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default SearchControls;