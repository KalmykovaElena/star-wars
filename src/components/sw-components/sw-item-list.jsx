import React from "react";
import ItemList from "../common/item-list";
import {WithChildFunctionHoc, WithDataHoc} from "../hoc";
import ServicesApi from "../../services-api";

const services = new ServicesApi()
const {
    getAllPeople,
    getAllPlanets,
    getAllStarShip
} = services
const renderName = (item) => <span> {item.name}</span>

// созд хок, кот возвр комп-т кот принимает и в кач чилдренов возвр переданную ф-ю

const PersonList = WithDataHoc(
    WithChildFunctionHoc(ItemList, renderName),
    getAllPeople)

const PlanetList = WithDataHoc(
    WithChildFunctionHoc(ItemList, renderName),
    getAllPlanets)

const StarshipList = () => {
}


export {
    PersonList,
    PlanetList,
    StarshipList
}