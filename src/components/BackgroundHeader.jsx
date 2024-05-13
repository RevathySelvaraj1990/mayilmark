import React from "react";
import "../assets/css/components.scss";

const BackgroundHeader = ({ heading, background }) => {
  return (
    <div className="bg_header">
      <p className="bg">{background}</p>
      <p className="heading">{heading}</p>
    </div>
  );
};

export default BackgroundHeader;
