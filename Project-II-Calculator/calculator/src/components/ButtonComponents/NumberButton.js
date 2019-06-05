import React from 'react';
import './Button.css'
import {buttonData} from './ButtonData'

const NumberButton = () => {
    return (
        <div>
            {
                buttonData.map(button => <button key={button.id} className={button.buttonStyle}>{button.name}</button>)
            }
        </div>
        )
    }
    
NumberButton.defaultProps = {
    buttonStyles: 'teal',
};
export default NumberButton