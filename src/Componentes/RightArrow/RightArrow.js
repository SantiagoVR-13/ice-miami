import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import "./RightArrow.scss";

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <div
      className={`arrow ${isLastItemVisible ? "disabled" : ""}`}
      onClick={() => scrollNext()}
    >
      Right
    </div>
  );
}

export default RightArrow;
