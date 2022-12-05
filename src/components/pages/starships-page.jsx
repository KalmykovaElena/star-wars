import React from "react";
import Row from "../common/row";
import {StarshipDetails, StarshipList} from "../sw-components";

const StarshipsPage =({match,history})=> {
    const {id} = match.params
        return (
            <Row left={<StarshipList onItemSelected={(id)=>history.push(id)}/>}
                 right={<StarshipDetails selectedItem={id}/>}/>
        );

}

export default StarshipsPage