import ItemDetails from "../item-details";
import Record from "../common/record";
import React from "react";
import {ServiceConsumer} from "../context";
const PersonDetails =(personId)=>{
    return (
        <ServiceConsumer>
            {
                ({getPeople,getPersonImage})=>{
                    return(
                        <ItemDetails selectedItem={personId}
                                     getData={getPeople}
                                     getImageUrl={getPersonImage}
                        >
                            <Record label='Eye color:' value='eyeColor'/>
                            <Record label='BY:' value='birthYear'/>
                            <Record label='Gender:' value='gender'/>
                        </ItemDetails>
                    )
                }
            }
        </ServiceConsumer>
    )


}
// const PlanetDetails =(persond)=>{
//     return (
//         <ServiceConsumer>
//             {
//                 ({getPeople,getPersonImage})=>{
//                     return(
//                         <ItemDetails selectedItem={personId}
//                                      getData={getPeople}
//                                      getImageUrl={getPersonImage}
//                         >
//                             <Record label='Eye color:' value='eyeColor'/>
//                             <Record label='BY:' value='birthYear'/>
//                             <Record label='Gender:' value='gender'/>
//                         </ItemDetails>
//                     )
//                 }
//             }
//         </ServiceConsumer>
//     )
//
//
// }

export {PersonDetails}