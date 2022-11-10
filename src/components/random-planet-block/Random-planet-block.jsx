import React, {useLayoutEffect} from 'react';
import './random-planet-block.css'
import servicesApi from "../../services-api";

class RandomPlanetBlock extends React.Component{
    services = new servicesApi()
    state={
       planet:{}
    }
constructor(props) {
    super(props);
    // this.fetchPlanet()
}
fetchPlanet=()=>{
        // this.services.getPlanet(15)
        //     .then(planet=>{
        //        this.setState({
        //            name:planet.name,
        //            population:planet.population,
        //            diameter:planet.diameter,
        //            rotation_period:planet.rotation_period,
        //        })
        //     })
    setPlanet=(planet)=>{
        this.setState({
            planet
        })
    }
    this.services.getPlanet(2)
        .then(this.setPlanet)
}
    render() {
        const {name='',population='',diameter='',rotation_period=''}=this.state
        console.log(this.state)
        return (
            <>
                <div className={'picture-container'}>
                    <img className={'img-thumbnail planet-image float-start'}
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Africa_and_Europe_from_a_Million_Miles_Away.png/800px-Africa_and_Europe_from_a_Million_Miles_Away.png"
                         alt=""/>
                </div>
                <h4>{name}</h4>
                <ul className={'list-group list-group-flush detail'}>
                    <li className={'list-group-item'}>
                        <span className={'tern'}>Population:</span>
                        <span>{population}</span>
                    </li>
                    <li className={'list-group-item'}>
                        <span className={'tern'}>Rotation Period:</span>
                        <span>{rotation_period}</span>
                    </li>
                    <li className={'list-group-item'}>
                        <span className={'tern'}>Diameter:</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </>
        );
    }
};

export default RandomPlanetBlock;
