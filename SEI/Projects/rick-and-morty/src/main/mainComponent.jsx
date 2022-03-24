import React from 'react';
import '../App.css';
import CharacterContainerComponent from './character/characterContainerComponent';
import EpisodeContainerComponent from './episodes/episodeContainerComponent';

function MainComponent() {
  return (
    <main className='main-container'>
      <h1 className='main-title'>Rick and Morty</h1>
      <CharacterContainerComponent/>
      <EpisodeContainerComponent/>
    </main>

  );
}

export default MainComponent;
