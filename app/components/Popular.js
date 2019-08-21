import React from 'react';
import { fetchPopularRepos } from '../utils/api';
import Loading from './Loading';
import LanguagesNav from './LanguagesNav';
import ReposGrid from './ReposGrid';
import { popularReducer } from '../reducers/popularReducer';

export default function Popular() {
  const [selectedLanguage, setSelectedLanguage] = React.useState('All');

  const [state, dispatch] = React.useReducer(popularReducer, { error: null });

  const fetchedLanguages = React.useRef([]);

  React.useEffect(() => {
    if (fetchedLanguages.current.includes(selectedLanguage) == false) {
      fetchedLanguages.current.push(selectedLanguage);

      fetchPopularRepos(selectedLanguage)
        .then(repos => dispatch({ type: 'success', selectedLanguage, repos }))
        .catch(error => dispatch({ type: 'error', error }));
    }
  }, [fetchedLanguages, selectedLanguage]);

  const isLoading = () => !state[selectedLanguage] && state.error === null;

  return (
    <>
      <LanguagesNav
        selected={selectedLanguage}
        onUpdateLanguage={setSelectedLanguage}
      />
      {isLoading() && <Loading text="Fetching Repos" />}

      {state.error && <p className="center-text error">{state.error}</p>}

      {state[selectedLanguage] && <ReposGrid repos={state[selectedLanguage]} />}
    </>
  );
}
