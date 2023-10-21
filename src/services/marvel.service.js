import { get } from '../api';
import { GET_CHARACTERS_ROUTE } from '../api/marvel.routes';
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

const removeReplacementCharacter = (text) => text.replace(/ï¿½/g, "'");

const transformCharacters = (rawCharacters) => rawCharacters.map(({
  name, description, thumbnail, comics, series, stories,
}) => new MarvelCharacter({
  name, description: removeReplacementCharacter(description), thumbnail: `${thumbnail.path}.${thumbnail.extension}`, comicsCount: comics.available, seriesCount: series.available, storiesCount: stories.available,
}));

export const searchCharacters = (search, page = DEFAULT_PAGE, itemsPerPage = DEFAULT_ITEMS_PER_PAGE) => get(GET_CHARACTERS_ROUTE, { nameStartsWith: search, limit: itemsPerPage, offset: page })
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
