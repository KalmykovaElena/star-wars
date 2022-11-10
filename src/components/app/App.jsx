import React from 'react';
import Header from "../header/Header";
import RandomPlanetBlock from "../random-planet-block";
import Spinner from "../spinner/spinner";

const App = () => {
    return (
        <div>
            <Header/>
            <RandomPlanetBlock/>
        </div>
    );
};

export default App;