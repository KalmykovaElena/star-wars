import React from 'react';
import Header from "../header/Header";
import RandomPlanetBlock from "../random-planet-block";

import PeoplePage from "../people-page";
import ServicesApi from "../../services-api";
import ItemList from "../common/item-list";
import ErrorBoundary from "../error-boundary";
import {PersonDetails, PersonList, PlanetList} from "../sw-components";
import {ServiceProvider} from "../context";
import Row from "../common/row";

class App extends React.Component {
    services = new ServicesApi()

    state = {
        personId: null
    }

    getPersonId = (id) => {
        this.setState({
            personId: id
        })
    }

    render() {
        return (<ErrorBoundary>
                <ServiceProvider value={this.services}>
                <Header/>
                <RandomPlanetBlock/>
                {/*<HeroesBlock/>*/}
                {/*<PeoplePage/>*/}
                    <Row left={<PersonList getPersonId={this.getPersonId}/>}
                    right = {<PersonDetails personId={this.state.personId}/>}
                    />


                </ServiceProvider>
            </ErrorBoundary>

        )
    }
};

export default App;