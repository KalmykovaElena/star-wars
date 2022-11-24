import React from 'react';
import {WithDataHoc} from '../../hoc'


const ItemList = (props) => {
    const {children: renderLabel, getPersonId, data} = props

    const items = data.map((item) => {
        const {id} = item;
        const label = renderLabel(item)
        return (
            <li className='list-group-item' onClick={() => {
                getPersonId(item.id)
            }} key={id}>
                {label}
            </li>
        )
    })
    return (
        <div>
            <ul className='list-group'>
                {items}
            </ul>
        </div>
    );
};


export default ItemList;































