import React from 'react';
import '../../App.css';
import './character.css'


function MoreCharacterInfoComponent(props) {
  
  return (
    <>
      {props.detailsOpen ?       
        <div className='more-div more-character'>
            <p>Species: {props.oneCharacter ? props.oneCharacter.species : ""}</p>
            <p>Status: {props.oneCharacter ? props.oneCharacter.status : ""}</p>
        </div>
      : ""}
    </>
  );
    
    
}

export default MoreCharacterInfoComponent;
