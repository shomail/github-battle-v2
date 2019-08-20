import React from 'react';
import { Link } from 'react-router-dom';
import Instructions from './BattleInstructions';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';

export default function Battle() {
  const [playerOne, setPlayerOne] = React.useState(null);
  const [playerTwo, setPlayerTwo] = React.useState(null);

  const handleSubmit = (id, player) =>
    id === 'playerOne' ? setPlayerOne(player) : setPlayerTwo(player);

  const handleReset = id =>
    id === 'playerOne' ? setPlayerOne(null) : setPlayerTwo(null);

  return (
    <React.Fragment>
      <Instructions />
      <div className="player-container">
        <h2 className="center-text header-lg">Players</h2>
        <div className="row space-around">
          {playerOne === null ? (
            <PlayerInput
              label="Player One"
              onSubmit={player => handleSubmit('playerOne', player)}
            />
          ) : (
            <PlayerPreview
              username={playerOne}
              onReset={() => handleReset('playerOne')}
              label="Player One"
            />
          )}

          {playerTwo === null ? (
            <PlayerInput
              label="Player Two"
              onSubmit={player => handleSubmit('playerTwo', player)}
            />
          ) : (
            <PlayerPreview
              username={playerTwo}
              onReset={() => handleReset('playerTwo')}
              label="Player Two"
            />
          )}
        </div>
        {playerOne && playerTwo && (
          <Link
            className="btn dark-btn btn-space"
            to={{
              pathname: '/battle/results',
              search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`,
            }}
          >
            Battle
          </Link>
        )}
      </div>
    </React.Fragment>
  );
}
