import React, {Component} from "react";
import './people-page.css'
import ItemDetails from "../item-details";
import ItemList from "../item-list";
import ServicesApi from "../../services-api";
import Record from "../common/record";
import ErrorBoundary from "../error-boundary";


class PeoplePage extends Component {
    services = new ServicesApi()
    state = {
        personId: null
    }
    getPersonId = (id) => {
        this.setState({
            personId: id
        })
    }

    render() {
        const {getAllPeople, getPeople, getPersonImage} = this.services
const itemList =(
    <ItemList getPersonId={this.getPersonId}
              getData={getAllPeople}
              renderList={(item) => `${item.name}`}
    >
        {
            (item) => <span> {item.name}</span>
        }
    </ItemList>
)
const itemDetails=(
    <ItemDetails selectedItem={this.state.personId}
                 getData={getPeople}
                 getData={getPersonImage}
    >
        <Record label='Eye color:' value='eyeColor'/>
        <Record label='BY:' value='birthYear'/>
        <Record label='Gender:' value='gender'/>
    </ItemDetails>
)
        return (<ErrorBoundary>
           <Row left={itemlist} right={itemDetails}/>
            </ErrorBoundary>
        );
    }
}


export default PeoplePage;
