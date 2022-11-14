import React,{Component} from "react";
import './people-page.css'
import PersonDetails from "../person-details";
import ItemList from "../item-list";


class PeoplePage extends Component {
    state = {
        currentItem: null
    }
    render() {
        return (
            <div className={'row mb2'}>
                <div  className="col-md-6">
                   <ItemList selectedItem={(id)=>this.setState({
                                 currentItem: id
                             })}
                   />
                </div>
                <div className="col-md-6">
                    <PersonDetails selecteditem={this.state.currentItem}/>
                </div>

            </div>
        );
    }
}

export default PeoplePage;
