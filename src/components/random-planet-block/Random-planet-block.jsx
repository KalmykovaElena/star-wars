import React from 'react';
import './random-planet-block.css'
import servicesApi from "../../services-api";
import Spinner from "../spinner/spinner";
import Error from "../error";

class RandomPlanetBlock extends React.Component {
    services = new servicesApi()
    state = {
        planet: {},
        isLoading:true,
        hasError:false
    }

    constructor(props) {
        super(props);
        this.fetchPlanet()
        // setInterval(this.fetchPlanet, 5000)
    }


    setPlanet = (planet) => {
        this.setState({
            planet,
            isLoading:false,
            hasError:false
        })
    }
    setError=(error)=>{
        this.setState({
            hasError:true,
            isLoading:false
        })
    }
    fetchPlanet = () => {

        const id = Math.floor(Math.random() * 17) + 2
        this.services.getPlanet(id)
            .then(this.setPlanet)
            .catch(this.setError)
    }

    render() {
        const {planet,isLoading,hasError} = this.state
        const spinner = isLoading &&<Spinner/>
        const error = hasError && <Error/>
        const content =!(isLoading || hasError) && <RandomPlanet planet={planet}/>
        return (
            <div className={`container`}>
                 {spinner}
                {error}
                {content}
    </div>
        );
    }
};
const RandomPlanet=({planet}) =>{
    const {name, population, diameter, rotation_period, id} = planet

    return(
        <div className={`random-planet-block`}>

            <div className={'picture-container'}>
                <img className={'img-thumbnail planet-image float-start'}
                     src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                     alt=""/>
            </div>
            <h4>{name}</h4>
            <ul className={'list-group list-group-flush detail'}>
                <li className={'list-group-item'}>
                    <span className={'tern'}>Population</span>
                    <span>{population}</span>
                </li>
                <li className={'list-group-item'}>
                    <span className={'tern'}>Rotation Period:</span>
                    <span>{rotation_period}</span>
                </li>
                <li className={'list-group-item'}>
                    <span className={'tern'}>Diameter</span>
                    <span>{diameter}</span>
                </li>
            </ul>
        </div>
    )
}
export default RandomPlanetBlock;
