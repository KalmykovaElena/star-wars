import React from 'react';
import Header from "../header/Header";
import RandomPlanetBlock from "../random-planet-block";

import PeoplePage from "../people-page";
import ServicesApi from "../../services-api";
import ItemList from "../item-list";
import ErrorBoundary from "../error-boundary";

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
                <Header/>
                <RandomPlanetBlock/>
                {/*<HeroesBlock/>*/}
                <PeoplePage/>
            </ErrorBoundary>

        )
    }
};

export default App;