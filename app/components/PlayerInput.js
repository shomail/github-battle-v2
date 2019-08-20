import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../contexts/theme';

export default function PlayerInput({ onSubmit, label }) {
  const [username, setusername] = React.useState('');
  const theme = React.useContext(ThemeContext);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(username);
  };

  const handleChange = e => setusername(e.target.value);

  return (
    <form className="column player" onSubmit={handleSubmit}>
      {/* eslint-disable-next-line jsx-a11y/label-has-for */}
      <label htmlFor="username" className="player-label">
        {label}
      </label>
      <div className="row player-inputs">
        <input
          type="text"
          id="username"
          className={`input-${theme}`}
          placeholder="Github Username"
          autoComplete="off"
          value={username}
          onChange={handleChange}
        />
        <button
          type="submit"
          className={`btn ${theme === 'dark' ? 'light' : 'dark'}-btn`}
          disabled={!username}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

PlayerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
