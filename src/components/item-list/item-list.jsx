import React, {Component} from 'react';
import servicesApi from "../../services-api";
import {WithDataHoc} from '../hoc'
import Error from "../error";

class ItemList extends Component {
    services = new servicesApi()


    renderItems(itemList) {
        return itemList.map((item) => {
            // const label = this.props.children(item)
            return (<li onClick={()=>{
                this.props.getPersonId(item.id)
            }} className='list-group-item' key={item.id}>
                label
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

export default WithDataHoc (ItemList);