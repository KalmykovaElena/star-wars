import React, {Component} from 'react';
import './random-planet-block.css'
import servicesApi from "../../services-api";
import Spinner from "../spinner";
import Error from "../error";

class RandomPlanetBlock extends Component {
    services = new servicesApi()

    state = {
        planet: {},
        isLoading: true,
        hasError: false,
    }

    componentDidMount() {
        this.fetchPlanet()
        this.intervalId = setInterval(this.fetchPlanet, 150000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    setPlanet = (planet) => {
        this.setState({
            planet,
            isLoading: false,
            hasError: false,
        })
    }

    setError = (error) => {
        this.setState({
            hasError: true,
            isLoading: false
        })
    }

    fetchPlanet = () => {
        const id = Math.floor(Math.random() * 17) + 2
        this.services.getPlanet(id)
            .then(this.setPlanet)
            .catch(this.setError)
    }

    render() {
        const {planet, isLoading, hasError} = this.state

        const spinner = isLoading && <Spinner/>
        const error = hasError && <Error/>
        const content = !(isLoading || hasError) && <RandomPlanet planet={planet}/>

        return (
            <div className='container'>
                {spinner}
                {content}
                {error}
            </div>
        );
    }


};

const RandomPlanet = ({planet}) => {
    const {name, population, diameter, rotationPeriod, id} = planet

    return (
        <div className=' random-planet-block'>
            <img className='rounded float-start planet'
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                 alt=""/>
            <h4>{name}</h4>
            <ul className='list-group list-group-flush detail'>
                <li className='list-group-item'>
                    <span className='term'>Population:</span>
                    <span>{population}</span>
                </li>
                <li className='list-group-item'>
                    <span className='term'>Rotation Period:</span>
                    <span>{rotationPeriod}</span>
                </li>
                <li className='list-group-item'>
                    <span className='term'>Diameter:</span>
                    <span>{diameter}</span>
                </li>
            </ul>
        </div>
    )
}


export default RandomPlanetBlock;