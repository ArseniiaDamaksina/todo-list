import dom from '../dom.js';
import searchInputHandler from '../handlers/searchInputHandler.js';

const searchInputListener = () => {
  dom.searchInput.addEventListener('input', searchInputHandler);
};

export default searchInputListener;