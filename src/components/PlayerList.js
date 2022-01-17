import React from 'react';
import Player from './Player';

function PlayerList() {
  return (
    <section className="PlayerList">
      <hi>
        Current participating players
      </hi>
      <Player />
    </section>
  );
};

export default PlayerList;