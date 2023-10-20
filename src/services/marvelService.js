import { get } from '../api';
import marvelRoute from '../api/marvelRoutes';
import MarvelCharacter from '../models/marvel/marvelCharacter';

const DEFAULT_PAGE = 0;
const DEFAULT_ITEMS_PER_PAGE = 4;

const initPagination = (total, currentPage, itemsPerPage) => {
  const remainder = total % itemsPerPage;

  const pageCount = (total - remainder) / itemsPerPage + (total % itemsPerPage > 0 ? 1 : 0);

  return {
    totalItems: total,
    itemsPerPage,
    currentPage,
    pagesCount: total !== 0 ? pageCount : 0,
  };
};

const transformCharacters = (rawCharacters) => rawCharacters.map(({ name, description, thumbnail }) => new MarvelCharacter({ name, description, thumbnail: `${thumbnail.path}.${thumbnail.extension}` }));

export const searchCharacters = (search, page = DEFAULT_PAGE, itemsPerPage = DEFAULT_ITEMS_PER_PAGE) => get(marvelRoute.GET_CHARACTERS_ROUTE, { nameStartsWith: search, limit: itemsPerPage, offset: page })
  .then((response) => {
    const { data: { data } } = response;

    return {
      characters: transformCharacters(data.results),
      pagination: initPagination(data.total, data.offset, data.limit),
    };
  });

export default {
  searchCharacters,
};
