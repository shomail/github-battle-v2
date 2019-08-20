import React from 'react';
import PropTypes from 'prop-types';
import { FaTimesCircle } from 'react-icons/fa';
import ThemeContext from '../contexts/theme';

export default function PlayerPreview({ username, onReset, label }) {
  const theme = React.useContext(ThemeContext);
  return (
    <div className="column player">
      <h3 className="player-label">{label}</h3>
      <div className={`row bg-${theme}`}>
        <div className="player-info">
          <img
            className="avatar-small"
            src={`http://github.com/${username}.png?size=200`}
            alt={`Avatar for ${username}`}
          />
          <a href={`http://github.com/${username}`} className="link">
            {username}
          </a>
        </div>
        <button
          type="button"
          className="btn-clear flex-center"
          onClick={onReset}
        >
          <FaTimesCircle color="rgb(194, 57, 42)" size={26} />
        </button>
      </div>
    </div>
  );
}
PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
