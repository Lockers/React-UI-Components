import React from 'react';
import './Card.css';
import './CardContent'
import './CardBanner'
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer() {
    return (
        <a href='https://www.reactjs.org'>
            <div class='card-container'>
                <CardBanner />
                <CardContent />
            </div>
        </a>    
    )
}
export default CardContainer