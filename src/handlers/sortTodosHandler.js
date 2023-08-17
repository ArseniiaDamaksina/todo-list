import data from '../data.js';
import dom from '../dom.js';
import sortFunction from '../utils/sortFunction.js';
import loadHandler from './loadHandler.js';

const sortTodosHandler = () => {
  // make a copy of the initial array
  const dataInit = [...data.items]; 
  dom.itemsList.innerHTML = "";

  // if a button 'Sort By Date' is clicked - the todos will be sorted by date
  if (dom.sortBtn.innerText === 'Sort By Date') {
    const sortedByDate = dataInit.sort(sortFunction);
    loadHandler(sortedByDate);
    dom.sortBtn.innerText = 'Return To List';
  }
  // todo list returns to an initial state
  else if (dom.sortBtn.innerText === 'Return To List') {
    loadHandler(data.items);
    dom.sortBtn.innerText = 'Sort By Date';
  }
}

export default sortTodosHandler;