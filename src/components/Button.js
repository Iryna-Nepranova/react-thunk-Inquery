import React from "react";

export const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
);
