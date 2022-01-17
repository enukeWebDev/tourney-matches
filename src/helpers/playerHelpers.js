import React from 'react';

/*
To make this function work, preparePlayerData 
will need the playerData object as an input 
and will output an array of players.
*/

export const preparePlayerData = (playerData) => {
  return Object.values(playerData);
};

/*
To make this function work, addWinsToPlayers will 
need the prepared playerData array and the matchData 
as an input and will output an array of players with 
an extra win key for each player.
*/

export const addWinsToPlayers = (playerDataArray, matchData) => {
  return playerDataArray.map(player => {
    // Calculating the number of wins in the matchData
    const currentWins = matchData.reduce((acc, match) => {
      // Adds a win if the gamerTag matches
      if (match.winner === player.gamerTag) {
        return acc += 1;
      } else {
        return acc;
      }
    }, 0);

    // Assigns the value to the wins key
    player.wins = currentWins;

    return player
  });
}
// output: [{player}, {player}] (each player having a win key and a numerical value)
