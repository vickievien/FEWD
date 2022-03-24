import React from 'react';
import '../../App.css';
import './episode.css'


function MoreEpisodeInfoComponent(props) {
  
  return (
  
    <div className='more-div more-episode'>
      <p>Airdate: {props.oneEpisode ? props.oneEpisode.air_date : ""}</p>
    </div>

    );
  }

export default MoreEpisodeInfoComponent;
