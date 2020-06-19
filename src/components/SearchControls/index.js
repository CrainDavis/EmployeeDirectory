import React from "react";
import "./style.css";

import ResultTable from "../ResultTable";
import SectionBreak from "../SectionBreak";

function SearchControls(props) {
    return (
        <div>
            <div className="control-panel d-flex justify-content-center">
                <div className="button-section">
                    <h4>sort employees by:</h4>
                    <div className="btn-group sort-btns" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-outline-light btn-secondary btn-lg">first name</button>
                        <button type="button" className="btn btn-outline-light btn-secondary btn-lg">last name</button>
                        <button type="button" className="btn btn-outline-light btn-secondary btn-lg">date of birth</button>
                        <button type="button" className="btn btn-outline-light btn-secondary btn-lg">username</button>
                        <button type="button" className="btn btn-outline-light btn-secondary btn-lg">location (state)</button>
                    </div>
                </div>
                <div className="button-section">
                    <h4>filter employees by:</h4>
                    <div className="input-group input-group-lg">
                        <input type="text" className="form-control" placeholder="full name"></input>
                        <input type="text" className="form-control" placeholder="location (state)"></input>
                        <input type="text" className="form-control" placeholder="username"></input>
                    </div>
                </div>
            </div>
            <SectionBreak />
            <ResultTable data={props.data}/>
        </div>
    );
};

export default SearchControls;