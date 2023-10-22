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
import Pagination from '../components/Pagination';

const KEYS_NEED_PRESSED_TO_CONTINUE = ['Enter'];
const MINIMUM_LENGTH_TO_SUBMIT = 0;
const DEFAULT_PAGE = 0;
const OFFSET_PAGE = 1;

function App() {
  const [search, setSearch] = useState('');
  const [marvelState, dispatch] = useReducer(marvelReducer, marvelDefaultState);


  const loadCharacters = (page) => {
    dispatch(setMarvelLoading());
    searchCharacters(search, page).then(({ characters, pagination }) => dispatch(setMarvelCharacters(characters, pagination)))
      .catch((error) => dispatch(setMarvelError(error.message)));
  };

  const handleChange = (event) => {
    if (!KEYS_NEED_PRESSED_TO_CONTINUE.includes(event.key) || search.length <= MINIMUM_LENGTH_TO_SUBMIT) return;

    loadCharacters(DEFAULT_PAGE);
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
					<Pagination currentPage={marvelState.pagination.currentPage + OFFSET_PAGE} totalPages={marvelState.pagination.pagesCount} onChangePage={(page) => loadCharacters(page - OFFSET_PAGE)} />
				</Route>
			</Switch>
		</Router>

	</>
  );
}

export default App;
