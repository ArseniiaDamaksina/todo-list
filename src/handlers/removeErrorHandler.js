import dom from '../dom.js';

const removeErrorHandler = () => {
    dom.error.innerText = '';
    dom.error.classList.remove('error1');
};

export default removeErrorHandler;
