import React from 'react';
import Header from "../header/Header";
import RandomPlanetBlock from "../random-planet-block";
import Spinner from "../spinner/spinner";
import CharactersBlock from "../characters-block";

const App = () => {
    return (
        <div>
            <Header/>
            <RandomPlanetBlock/>
            <CharactersBlock/>
        </div>
    );
};

export default App;