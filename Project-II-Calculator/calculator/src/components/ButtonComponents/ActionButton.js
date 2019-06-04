import React from 'react';
import './Button.css'
const ActionButton = props => <button className={`basicButtonStyles ${props.buttonStyle}`}>{props.text}</button>;

ActionButton.defaultProps = {
    buttonStyles: 'teal',
};
export default ActionButton