import React from 'react';
import './Button.css';

function NumberButton(props) {
    return (
        <div>
            <input class='number-button'
                type="button"
                value={props.value} />
        </div>
    )
}

export default NumberButton