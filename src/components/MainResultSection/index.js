import React from "react";
import "./style.css";

import SearchControls from "../SearchControls";
import ResultTable from "../ResultTable";
import SectionBreak from "../SectionBreak";

// ===============================================================================

function MainResultSection(props) {
  return (
    <div className="main-result-section">
      <SearchControls />
      <SectionBreak />
      <ResultTable data={props.data}/>
    </div>
  );
}

export default MainResultSection;
