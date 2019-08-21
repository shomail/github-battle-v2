import React from 'react';
import PropTypes from 'prop-types';

export default function LanguagesNav({ selected, onUpdateLanguage }) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className="flex-center">
      {languages.map(lang => (
        <li key={lang}>
          <button
            type="button"
            className="btn-clear nav-link"
            style={lang === selected ? { color: 'lightcoral' } : null}
            onClick={() => onUpdateLanguage(lang)}
          >
            {lang}
          </button>
        </li>
      ))}
    </ul>
  );
}

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired,
};
