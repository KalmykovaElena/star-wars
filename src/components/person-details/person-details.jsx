import React, {Component} from 'react';
import ServicesApi from "../../services-api";

class PersonDetails extends Component {

services = new ServicesApi()
    state ={
        item: null,
        image: null
    }

    componentDidMount() {

    }
componentDidUpdate(prevProps, prevState, snapshot) {
if(this.props.selectedItem!==prevProps.selectedItem){
    this.updateItem()
}
}

    updateItem(){
    const {selectedItem}=this.props
        if(!selectedItem)return
        this.services.getPeople(selectedItem)
            .then(item=>{
                this.setState({
                    item,
                    image: this.services.getPersonImage(item)})

            })
    }

    render() {
        const {item, image} = this.state

        if(!item){
            return <span> выберите элемент</span>
        }

        const {name, gender, birthYear, eyeColor} = this.state.item


        return (

            <div>
                <img className={'img-thumbnail planet-image float-start'}
                     src={image} alt=""/>
                <h4>{name}</h4>
                <ul className={'list-group list-group-flush detail'}>
                    <li className={'list-group-item'}>
                        <span className={'tern'}>Gender:</span>
                        <span>{gender}</span>
                    </li>
                    <li className={'list-group-item'}>
                        <span className={'tern'}>By:</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className={'list-group-item'}>
                        <span className={'tern'}>Eye color:</span>
                        <span>{eyeColor}</span>
                    </li>
                </ul>

            </div>
        );
    }
}

export default PersonDetails;