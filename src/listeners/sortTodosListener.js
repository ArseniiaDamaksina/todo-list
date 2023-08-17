import dom from '../dom.js'
import sortTodosHandler from '../handlers/sortTodosHandler.js';

const sortTodosListener = () => {
  dom.sortBtn.addEventListener('click', sortTodosHandler);
};

export default sortTodosListener;