import React from 'react';
import '../../App.css';
import './character.css'

function CharacterButtonComponent(props) {
  return (
    <a className='button character-button' onClick={props.addCharacter}>Get Characters</a>
  );
}

export default CharacterButtonComponent;
