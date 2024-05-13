import React from "react";
import "../assets/css/components.scss";
import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({ text }) => {
  return (
    <div className="custom_button">
      <span className="button">{text}</span>
      <FaArrowRightLong />
    </div>
  );
};

export default Button;
