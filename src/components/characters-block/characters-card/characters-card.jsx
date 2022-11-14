import React from 'react';
import './characters-card.css'


const CharactersCard = () => {
    return (
        <div className={'characters-card'}>
            <img src="https://starwars-visualguide.com/assets/img/characters/2.jpg" alt=""/>
            <ul className="characters-card-info">
                <li>"C-3PO"</li>
                <li>Gender:'n/a'</li>
                <li>Birth Year: 112BBY</li>
                <li>Eye Color: 'yellow'</li>
            </ul>
        </div>
    );
};

export default CharactersCard;