import React from 'react';
import './characters-item.css'

const CharactersItem = (props) => {
    return (
        <div className={'characters-item'}>
            {props.name}
        </div>
    );
};

export default CharactersItem;