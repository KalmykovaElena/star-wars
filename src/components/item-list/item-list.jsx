import React, {Component} from 'react';
import servicesApi from "../../services-api";
import Spinner from "../spinner";
import Error from "../error";

class ItemList extends Component {
    services = new servicesApi()
    state = {
        peopleList: null,
        itemList: null,
        hasError: false
    }

    componentDidMount() {

                const {getData} = this.props


                getData()
                    .then(itemList => {
                        this.setState({

                            itemList
                        })
                    })
            }

    renderItems(itemList) {
        return itemList.map((item) => {
            const label = this.props.renderList(item)
            return (<li onClick={()=>{
                this.props.getPersonId(item.id)
            }} className='list-group-item' key={item.id}>
                {label}
            </li>)})
    }
    static getDerivedStateFromError(error){
        return {hasError: true}
    }
    componentDidCatch(error, errorInfo) {
    }

    render() {
        const {itemList, hasError} = this.state
        if (!itemList) {
            return <Spinner/>
        }
        if(hasError){
return<Error/>
        }
        const items = this.renderItems(itemList)
        return (
            <div>
                <ul className='list-group'>
                    {items}
                </ul>
            </div>
        );
    }
}

export default ItemList;