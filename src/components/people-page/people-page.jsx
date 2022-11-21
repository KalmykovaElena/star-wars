import React,{Component} from "react";
import './people-page.css'
import PersonDetails from "../person-details";
import ItemList from "../item-list";
import ServicesApi from "../../services-api";


class PeoplePage extends Component {
    services = new ServicesApi()
    state = {
        personId : null
    }
    getPersonId =(id)=>{
        this.setState({
            personId: id
        })
    }
    render() {
        return (
            <div className={'row mb2'}>
                <div  className="col-md-6">
                   <ItemList getPersonId={this.getPersonId}
                             getData={this.services.getAllPeople}
                             renderList={(item)=> `${item.name}` }
                   />
                </div>
                <div className="col-md-6">
                    <PersonDetails selectedItem={this.state.personId}/>
                </div>

            </div>
        );
    }
}

export default PeoplePage;
