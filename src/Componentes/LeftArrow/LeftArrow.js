import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import "./LeftArrow.scss";

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <div
      className={`arrow ${isFirstItemVisible ? "disabled" : ""}`}
      onClick={() => scrollPrev()}
    >
      Left
    </div>
  );
}

export default LeftArrow;
