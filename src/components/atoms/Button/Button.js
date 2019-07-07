import React from "react";
import "./styles.scss";

const Button = ({ type, onClick, children, extraClass, color }) => (
    <button 
        type={type ? type : 'button'} 
        onClick={onClick ? onClick : ''}
        className={`a-btn -${color} ${extraClass ? extraClass : ''}`}
    >
        {children}
    </button>
)

export default Button
