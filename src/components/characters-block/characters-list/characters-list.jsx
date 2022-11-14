import React from 'react';
import './characters-list.css'
import CharactersItem from "../characters-item";

const CharactersList = () => {
    return (
        <div className={'character-list'}>
<CharactersItem name={'Luke Skywalker'}/>
<CharactersItem name={'C-3PO'}/>
<CharactersItem name={'R2-D2'}/>
<CharactersItem name={'Darth Vader'}/>
<CharactersItem name={'Leia Organa'}/>
<CharactersItem name={'Owen Lars'}/>
<CharactersItem name={'Beru Whitesun lars'}/>
<CharactersItem name={'R5-D4'}/>
<CharactersItem name={'Biggs Darklighter'}/>
<CharactersItem name={'Obi-Wan Kenobi'}/>
        </div>
    );
};

export default CharactersList;