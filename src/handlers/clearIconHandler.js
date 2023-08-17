import dom from '../dom.js';
import data from '../data.js';
import loadHandler from './loadHandler.js';

const clearInputHandler = () => {
  // clear the value of input and create UI from initial data
  dom.searchInput.value = '';
  dom.itemsList.innerHTML = '';
  loadHandler(data.items);
}

export default clearInputHandler;