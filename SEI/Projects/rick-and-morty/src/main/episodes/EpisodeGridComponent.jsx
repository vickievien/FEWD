import React from 'react';
import '../../App.css';
import './episode.css'
import EpisodeButtonComponent from './episodeButtonComponent';
import EpisodeCardComponent from './episodeCardComponent';


function EpisodeGridComponent(props) {
  return (
    <section className='grid episode-grid'>      
      <EpisodeCardComponent getOneEpisode={props.getOneEpisode} episodes={props.episodes}/>
    </section>

    );
}

export default EpisodeGridComponent;
