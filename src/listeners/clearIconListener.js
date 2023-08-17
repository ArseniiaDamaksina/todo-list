import dom from '../dom.js';
import clearIconHandler from '../handlers/clearIconHandler.js';

const clearIconListener = () => {
  dom.clearIcon.addEventListener('click', clearIconHandler);
};

export default clearIconListener;