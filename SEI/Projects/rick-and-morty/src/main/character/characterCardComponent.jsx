import React, {useState} from 'react';
import '../../App.css';
import './character.css'
import MoreCharacterInfoComponent from './moreCharacterInfoComponent';

function CharacterCardComponent(props) {


    const characters = props.characters;
    const characterCards = characters.map((n) => {
        return (
            <article className='card character-card' key={n ? n.id : ""}>
                <img className="card-img" src={n ? n.image : ""} alt={n ? n.name : ""} />
                <h2 className='card-title'>{n ? n.name : ""}</h2>
                <a className='button more' onClick={props.getMeCharacter} detailsOpen={props.detailsOpen} name={n.id}>More Character Info</a>
            </article>
        )
    })
    
    return (
        <>
            {characterCards}
            {/* <MoreCharacterInfoComponent characters={props.characters} oneCharacter={oneCharacter}/> */}
        </>


        // characters.map((n) => {
        //     return (
        //         <article className='card character-card'>
        //             <img className="card-img" src={n ? n.image : ""} alt={n ? n.name : ""} />
        //             <h2 className='card-title'>{n ? n.name : ""}</h2>
        //         </article>
        //     )
        // })

    );
}

export default CharacterCardComponent;
