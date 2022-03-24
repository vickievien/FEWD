import React from 'react';
import '../../App.css';
import './episode.css'

function EpisodeButtonComponent(props) {
  return (
    <a className='button episode-button' onClick={props.addEpisode} >Get Episodes</a>
  );
}

export default EpisodeButtonComponent;
