/* eslint-disable react/no-unescaped-entities */
import React, { useReducer, useState } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../components/Header';
import { searchCharacters } from '../services';
import {
  marvelReducer, marvelDefaultState,
} from '../reducers';
import {
  setMarvelLoading, setMarvelError, setMarvelCharacters,
} from '../actions';

const KEYS_NEED_PRESSED_TO_CONTINUE = ['Enter'];

function App() {
  const [search, setSearch] = useState('');
  const [marvelState, dispatch] = useReducer(marvelReducer, marvelDefaultState);

  const handleChange = (event) => {
    if (!KEYS_NEED_PRESSED_TO_CONTINUE.includes(event.key)) return;

    dispatch(setMarvelLoading());
    searchCharacters(search).then(({ characters, pagination }) => dispatch(setMarvelCharacters(characters, pagination)))
      .catch((error) => dispatch(setMarvelError(error.message)));
  };

  return (
	<>
		<Router>
			<Header onChange={(value) => setSearch(value)} onKeyPress={handleChange} />
			<p>{search}</p>
			<p>{marvelState.characters.length}</p>
			<Switch>
				<Route
					exact
					path="/"
				>
					<section className="lumx-spacing-padding-horizontal-huge" />
				</Route>
			</Switch>
		</Router>

	</>
  );
}

export default App;
