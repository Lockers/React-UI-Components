import React from 'react';
import './Header.css';

var moment = require('moment');
let date = moment().format("MMMM Do");

function HeaderTitle() {
    return (
        <div>
            <div class='title'>
                <h1>Lambda School</h1><p>@LambdaSchool</p><p>{date}</p>
            </div>
            <div class='header-content'>
                <p>Let's Learn React by building simple interfaces with components
                Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable
                using components, you are well on your way to mastering react!
                </p>
            </div >
        </div>
    )
}

export default HeaderTitle