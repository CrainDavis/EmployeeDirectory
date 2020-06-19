import React from "react";
import "./style.css";

import SearchControls from "../SearchControls";

// ===============================================================================

function MainResultSection(props) {
  return (
    <div className="main-result-section">
      <SearchControls data={props.data}/>
    </div>
  );
}

export default MainResultSection;
