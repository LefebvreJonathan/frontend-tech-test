
import {
  MARVEL_SET_CHARACTERS_ACTION,
  MARVEL_LOADING_ACTION,
  MARVEL_ERROR_ACTION,
} from './constants';

export const marvelReducer = (state, action) => {
  switch (action.type) {
    case MARVEL_SET_CHARACTERS_ACTION:
      return {
        ...state,
        characters: action.payload.characters,
        pagination: action.payload.pagination,
        loading: false,
      };
    case MARVEL_LOADING_ACTION:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case MARVEL_ERROR_ACTION:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export const marvelDefaultState = {
  characters: [],
  pagination: {},
  loading: false,
  error: null,
};
