import loadHandler from '../handlers/loadHandler.js';
import data from '../data.js'

const loadListener = () => {
    window.addEventListener('load', loadHandler(data.items));
};

export default loadListener;
