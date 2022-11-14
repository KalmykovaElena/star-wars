import React from 'react';
import Header from "../header/Header";
import RandomPlanetBlock from "../random-planet-block";
import Spinner from "../spinner/spinner";
import CharactersBlock from "../characters-block";
import ItemList from "../item-list";
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