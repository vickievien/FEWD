import React from 'react';
import '../../App.css';
import './character.css'
import CharacterCardComponent from './characterCardComponent';

function CharacterGridComponent(props) {
  return (
    <section className='grid character-grid'>
        <CharacterCardComponent getMeCharacter={props.getMeCharacter} characters={props.characters}/>
    </section>

    );
}

export default CharacterGridComponent;
