import React, {Component} from 'react';
import {WithDataHoc} from '../hoc'


class ItemList extends Component {



    renderItems(itemList) {
        return itemList.map((item) => {
            const label = this.props.children(item)
            return (<li className='list-group-item' onClick={()=>{
                this.props.getPersonId(item.id)
            }}  key={item.id}>
                {label}
            </li>)})
    }


    render() {


        const items = this.renderItems(this.props.data)
        return (
            <div>
                <ul className='list-group'>
                    {items}
                </ul>
            </div>
        );
    }
}

export default WithDataHoc(ItemList);