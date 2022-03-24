import React, {useState, useEffect} from 'react';
import '../../App.css';
import './episode.css'
import EpisodeButtonComponent from './episodeButtonComponent';
import EpisodeGridComponent from './EpisodeGridComponent';
import MoreEpisodeInfoComponent from './moreEpisodeInfoComponent';

function EpisodeContainerComponent() {
   const [episodes, setEpisodes] = useState([]);
    const [episodeCounter, setEpisodeCounter] = useState(4);


    const getEpisodes = async() => {
        // const random = Math.floor(Math.random()* 51) +1
        const episodeUrl = `https://rickandmortyapi.com/api/episode/1,2,3`;
        const episodeResponse = await fetch(episodeUrl);
        const episodeData = await episodeResponse.json();
        // console.log(episodeData)
        setEpisodes(episodeData);
   }

    const addEpisode = async() => {
        setEpisodeCounter(episodeCounter+1);
        const addEpisodeUrl = `https://rickandmortyapi.com/api/episode/${episodeCounter}`;
        const addEpisodeResponse = await fetch(addEpisodeUrl);
        const addEpisodeData = await addEpisodeResponse.json();
        // console.log(episodeData);
        setEpisodes([...episodes, addEpisodeData]);
    }

   const [oneEpisode, setOneEpisode] = useState({});
    const getOneEpisode = async(e) => {
        const oneEpisodeUrl = `https://rickandmortyapi.com/api/episode/${e.target.name}`
        const oneEpisodeResponse = await fetch(oneEpisodeUrl);
        const oneEpisodeData = await oneEpisodeResponse.json();
        console.log(e.target.name);
        setOneEpisode(oneEpisodeData);
    }

    useEffect(getEpisodes, []);
    return (
        <section className='section-container'>
            <EpisodeButtonComponent addEpisode={addEpisode}/>
            <EpisodeGridComponent getOneEpisode={getOneEpisode} episodes={episodes}/>
            <MoreEpisodeInfoComponent episodes={episodes} oneEpisode={oneEpisode}/>
        </section>
    );
}

export default EpisodeContainerComponent;
