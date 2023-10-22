import {
  MARVEL_SET_CHARACTERS_ACTION,
  MARVEL_LOADING_ACTION,
  MARVEL_ERROR_ACTION,
} from '../reducers';

export const setMarvelLoading = () => ({
  type: MARVEL_LOADING_ACTION,
  payload: null,
});

export const setMarvelError = (errorMessage) => ({
  type: MARVEL_ERROR_ACTION,
  payload: { error: errorMessage },
});


export const setMarvelCharacters = (characters, pagination, search) => ({
  type: MARVEL_SET_CHARACTERS_ACTION,
  payload: { characters, pagination, search },
});
