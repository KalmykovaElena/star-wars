import React, {Component} from 'react';
import servicesApi from "../../services-api";
import Spinner from "../spinner";
import Error from "../error";

class ItemList extends Component {
    services = new servicesApi()
    state = {
        peopleList: null
    }

    componentDidMount() {
        this.services.getAllPeople()
            .then(peopleList => {
                this.setState({
                    peopleList
                })
            })

    }

    renderItems(peopleList) {
        return peopleList.map(({id, name}) => (
                <li className={'list-group-item'}
                    key={id}

                > {name}</li>
            )
        )

    }
    static getDerivedStateFromError(error){
        return {hasError: true}
    }
    componentDidCatch(error, errorInfo) {
    }

    render() {
        const {peopleList,hasError} = this.state
        if (!peopleList) {
            return <Spinner/>
        }
        if(hasError){
return<Error/>
        }
        const items = this.renderItems(peopleList)
        return (
            <div>
                <ul className='list-group'>
                    <li className="list-group-item" >Item</li>
                    {items}
                </ul>
            </div>
        );
    }
}

export default ItemList;