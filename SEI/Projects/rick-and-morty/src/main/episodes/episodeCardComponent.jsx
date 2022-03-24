import React, {useState} from 'react';
import '../../App.css';
import './episode.css'
import MoreEpisodeInfoComponent from './moreEpisodeInfoComponent';

function EpisodeCardComponent(props) {
    
    const episodes = props.episodes;
    const episodeCards = episodes.map((n) => {
        return (
            <article className='card episode-card' key={n ? n.id : ""}>
                <h2 className='card-title'>{n ? n.name : ""}</h2>
                <h3 className='card-title'>Episode: {n ? n.episode : ""}</h3>
                <a className='button more' onClick={props.getOneEpisode} name={n.id}>More Episode Info</a>
            </article>
        )
    })


    return (
        <>
        {episodeCards}
        </>



    );
}

export default EpisodeCardComponent;
