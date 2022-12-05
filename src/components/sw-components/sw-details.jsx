import ItemDetails from "../common/item-details";
import {WithItemDetailsDataHoc, WithServicesHoc} from "../hoc";

const renderPersonDetails = () => ([
    {label: 'Gender:', value: 'gender'},
    {label: 'Birth Year:', value: 'birthYear'},
    {label: 'Eye Color:', value: 'eyeColor'}
])

const renderPlanetDetails = () => ([
    {label: 'Population:', value: 'population'},
    {label: 'Rotation Period:', value: 'rotationPeriod'},
    {label: 'Diameter:', value: 'diameter'}
])

const renderStarshipsDetails = () => ([
    {label: 'Model:', value: 'model'},
    {label: 'Length:', value: 'length'},
    {label: 'Cost:', value: 'costInCredits'}
])

const mapPersonMethodToProps = (service) => ({
    getData: service.getPerson,
    getImageUrl: service.getPersonImage
})

const mapPlanetMethodToProps = (service) => ({
    getData: service.getPlanet,
    getImageUrl: service.getPlanetImage
})

const mapStarshipMethodToProps = (service) => ({
    getData: service.getStarShip,
    getImageUrl: service.getStarshipImage
})

export const PersonDetails = WithServicesHoc(mapPersonMethodToProps)(
    WithItemDetailsDataHoc(renderPersonDetails)
    (ItemDetails))

export const PlanetDetails = WithServicesHoc(mapPlanetMethodToProps)(
    WithItemDetailsDataHoc(renderPlanetDetails)
    (ItemDetails))

export const StarshipDetails = WithServicesHoc(mapStarshipMethodToProps)(
    WithItemDetailsDataHoc(renderStarshipsDetails)
    (ItemDetails))

