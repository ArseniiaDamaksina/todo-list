import dom from '../dom.js';
import data from '../data.js';
import loadHandler from './loadHandler.js';

const searchInputHandler = () => {
  // define the value of input
  const filterValue = dom.searchInput.value.toLowerCase();

  // filter the data depending on the input's value
  const filteredData = data.items.filter((item) =>
      item.text.toLowerCase().includes(filterValue));

  // update the UI
  dom.itemsList.innerHTML = '';
  loadHandler(filteredData);
}

export default searchInputHandler;