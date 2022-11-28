import React, {Component} from 'react';
import ServicesApi from "../../services-api";

class ItemDetails extends Component {

    services = new ServicesApi()
    state = {
        item: null,
        image: null
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.selectedItem !== prevProps.selectedItem) {
            this.updateItem()
        }
    }

    updateItem() {
        const {selectedItem, getData, getImageUrl} = this.props
        if (!selectedItem) return
        getData(selectedItem)
            .then(item => {
                this.setState({
                    item,
                    image: this.services.getPersonImage(item)
                })

            })
    }

    render() {
        const {item, image} = this.state

        if (!item) {
            return <span> выберите элемент</span>
        }

        const {name, gender, birthYear, eyeColor} = this.state.item
        const list = this.props.fields.map((config) => {
            return <li className="list-group-item">
                <span className="term">{config.label}</span>
                <span>{item[config.value]}</span>
            </li>
        })

        return (

            <div>
                <img className={'img-thumbnail planet-image float-start'}
                     src={this.props.getImageUrl(item)} alt=""/>
                <h4>{item.name}</h4>
                <ul className={'list-group list-group-flush detail'}>
                    {
                        React.Children.map(this.props.children, (child, index) => {
                            return React.cloneElement(child,{item})
                        })
                    }
                </ul>

            </div>
        );
    }
}

export default ItemDetails;