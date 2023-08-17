import dom from '../dom.js';
import removeErrorHandler from '../handlers/removeErrorHandler.js';

const removeErrorListener = () => {
    dom.input.addEventListener('keypress', removeErrorHandler);
};

export default removeErrorListener;
