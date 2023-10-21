/* eslint-disable react/no-unescaped-entities */
import React, { useReducer, useState } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../components/Header';
import CharacterBanner from '../components/CharacterBanner';
import { searchCharacters } from '../services';
import {
  marvelReducer, marvelDefaultState,
} from '../reducers';
import {
  setMarvelLoading, setMarvelError, setMarvelCharacters,
} from '../actions';

const KEYS_NEED_PRESSED_TO_CONTINUE = ['Enter'];
const MINIMUM_LENGTH_TO_SUBMIT = 0;

function App() {
  const [search, setSearch] = useState('');
  const [marvelState, dispatch] = useReducer(marvelReducer, marvelDefaultState);

  const handleChange = (event) => {
    if (!KEYS_NEED_PRESSED_TO_CONTINUE.includes(event.key) || search.length <= MINIMUM_LENGTH_TO_SUBMIT) return;

    dispatch(setMarvelLoading());
    searchCharacters(search).then(({ characters, pagination }) => dispatch(setMarvelCharacters(characters, pagination)))
      .catch((error) => dispatch(setMarvelError(error.message)));
  };

  return (
	<>
		<Router>
			<Header onChange={(value) => setSearch(value)} onKeyPress={handleChange} />
			<Switch>
				<Route
					exact
					path="/"
				>
					<section className="lumx-spacing-padding-horizontal-huge characters-list">
						{marvelState.characters.map((character) => <CharacterBanner key={character.name} character={character} />)}
					</section>
				</Route>
			</Switch>
		</Router>

	</>
  );
}

export default App;
