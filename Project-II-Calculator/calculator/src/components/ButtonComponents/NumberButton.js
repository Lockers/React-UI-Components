import React from 'react';
import './Button.css'
const NumberButton = props => <button className={`basicButtonStyles ${props.buttonStyle}`}>{props.text}</button>;

NumberButton.defaultProps = {
    buttonStyles: 'teal',
};
export default NumberButton