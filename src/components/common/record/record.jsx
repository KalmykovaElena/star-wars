import React from 'react';

const Record = ({item, label, value}) => {
    return (
        <li className='list-group-item'>
            <span className='term'>{label}</span>
            <span>{item[value]}</span>
        </li>
    );
};

export default Record;