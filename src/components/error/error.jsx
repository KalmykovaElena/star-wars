import React from 'react';
import icon from './Cz-Error.png'
import './error.css'
const Error = () => {
    return (
        <div className={'container'}>
            <img className={'icon'} src={icon} alt="error"/>
            <p>что-то пошло не так</p>
           <p>наша группа уже работает над проблемой</p>
        </div>
    );
};

export default Error;