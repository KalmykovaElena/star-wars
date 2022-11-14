import React from 'react';
import Header from "../header/Header";
import RandomPlanetBlock from "../random-planet-block";

import PeoplePage from "../people-page";

const App = () => {
    return (
        <div>
            <Header/>
            <RandomPlanetBlock/>
            {/*<CharactersBlock/>*/}
            <PeoplePage/>
        </div>
    );
};

export default App;