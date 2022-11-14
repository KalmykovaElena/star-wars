import React,{Component} from "react";
import './people-page.css'
import PersonDetails from "../person-details";
import ItemList from "../item-list";


class PeoplePage extends Component {
    render() {
        return (
            <div className={'row mb2'}>
                <div onClick={(e)=>console.log(e.target)} className="col-md-6">
                   <ItemList/>
                </div>
                <div className="col-md-6">
                    <PersonDetails/>
                </div>

            </div>
        );
    }
}

export default PeoplePage;
