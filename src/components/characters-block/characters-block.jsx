import React from 'react';
import './characters-block.css'
import CharactersList from "./characters-list";
import CharactersCard from "./characters-card";

const CharactersBlock = () => {
    return (
        <div className={'characters-block'}>
            <CharactersList/>
            <CharactersCard/>
        </div>
    );
};

export default CharactersBlock;