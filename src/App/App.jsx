/* eslint-disable react/no-unescaped-entities */
import React, { useReducer } from 'react';
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

function App() {
  const search = 'spider';
  const [marvelState, dispatch] = useReducer(marvelReducer, marvelDefaultState);

  const onSearch = () => {
    dispatch(setMarvelLoading());
    searchCharacters(search).then(({ characters, pagination }) => dispatch(setMarvelCharacters(characters, pagination)))
      .catch((error) => dispatch(setMarvelError(error.message)));
  };

  return (
	<>
		<Router>
			<Header />
			<p>{marvelState.characters.length}</p>
			<button onClick={onSearch}>Button</button>
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
