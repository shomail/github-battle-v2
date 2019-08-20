import React from 'react';
import { FaUserFriends, FaFighterJet, FaTrophy } from 'react-icons/fa';
import ThemeContext from '../contexts/theme';

export default function Instructions() {
  const theme = React.useContext(ThemeContext);
  return (
    <div className="instructions-container">
      <h1 className="center-text header-sm">Instructions</h1>
      <ol className="container-sm grid center-text battle-instructions">
        <li>
          <h3 className="header-sm">Enter two Github Users</h3>
          <FaUserFriends
            className={`bg-${theme}`}
            color="rgb(255,191,116)"
            size={140}
          />
        </li>
        <li>
          <h3 className="header-sm">Battle</h3>
          <FaFighterJet className={`bg-${theme}`} color="#727272" size={140} />
        </li>
        <li>
          <h3 className="header-sm">See the Winners</h3>
          <FaTrophy
            className={`bg-${theme}`}
            color="rgb(255,215,0)"
            size={140}
          />
        </li>
      </ol>
    </div>
  );
}
