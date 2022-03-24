import React, {useState, useEffect} from 'react';
import '../../App.css';
import './character.css'
import CharacterButtonComponent from './characterButtonComponent';
import CharacterGridComponent from './characterGridComponent';
import MoreCharacterInfoComponent from './moreCharacterInfoComponent';

function CharacterContainerComponent() {
    const [characters, setCharacters] = useState([1,2,3]);    
    const [characterArray, setCharacterArray] = useState([])


    const characterMe = async() => {
        const characterUrl = `https://rickandmortyapi.com/api/character/${characters}`;
        const characterResponse = await fetch(characterUrl);
        const characterData = await characterResponse.json();
        // console.log(characterData);
        setCharacters(characterData);
        setCharacterArray(characters);
    }

    const addCharacter = async() => {       
        let randomNum = Math.floor(Math.random() *523) +4;
        
        const addCharacterUrl = `https://rickandmortyapi.com/api/character/${randomNum}`;
        const addCharacterResponse = await fetch(addCharacterUrl);
        const addCharacterData = await addCharacterResponse.json();
        setCharacterArray([...characterArray, randomNum])
        setCharacters([...characters, addCharacterData]);
    }


    const [oneCharacter, setOneCharacter] = useState({});
    const getMeCharacter = async (e) => {
        const oneCharacterUrl = `https://rickandmortyapi.com/api/character/${e.target.name}`;
        const oneCharacterResponse = await fetch(oneCharacterUrl);
        const oneCharacterData = await oneCharacterResponse.json();
        setOneCharacter(oneCharacterData);
    }

    console.log(characters);
    console.log(characterArray);    

    useEffect(characterMe, []);

    return (
        <section className='section-container'>
            <CharacterButtonComponent addCharacter={addCharacter}/>
            <CharacterGridComponent getMeCharacter={getMeCharacter} characters={characters}/>
            <MoreCharacterInfoComponent characters={characters} oneCharacter={oneCharacter}/>
        </section>

    );
}

export default CharacterContainerComponent;
