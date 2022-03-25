import React, {useState, useEffect} from 'react';
import '../../App.css';
import './character.css'
import CharacterButtonComponent from './characterButtonComponent';
import CharacterGridComponent from './characterGridComponent';
import MoreCharacterInfoComponent from './moreCharacterInfoComponent';

function CharacterContainerComponent() {
    const [characters, setCharacters] = useState([]);    
    const [characterArray, setCharacterArray] = useState([])
    const [detailsOpen, setDetailsOpen] = useState(false)

    const characterMe = async() => {

        let threeArray = [];
        while (threeArray.length <3) {
            let r=Math.floor(Math.random()*826)+1;
            if(threeArray.indexOf(r)===-1) 
                threeArray.push(r);
        }
        // console.log(`threeArray: ${threeArray}`);


        const characterUrl = `https://rickandmortyapi.com/api/character/${threeArray}`;
        const characterResponse = await fetch(characterUrl);
        const characterData = await characterResponse.json();
        // console.log(characterData);
        setCharacters(characterData);
        setCharacterArray(threeArray);

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

        setDetailsOpen(!detailsOpen);
    }


    // console.log(characters);
    // console.log(characterArray);    

    useEffect(characterMe, []);
    console.log(`base: characters: ${JSON.stringify(characters)}`);
    console.log(`base: char array: ${characterArray}`);

    return (
        <section className='section-container'>
            <CharacterButtonComponent addCharacter={addCharacter}/>
            <CharacterGridComponent getMeCharacter={getMeCharacter} detailsOpen={detailsOpen} characters={characters}/>
            <MoreCharacterInfoComponent characters={characters} detailsOpen={detailsOpen} oneCharacter={oneCharacter}/>
        </section>

    );
}

export default CharacterContainerComponent;
